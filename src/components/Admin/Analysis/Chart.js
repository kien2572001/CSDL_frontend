import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import adminService from "../../../services/adminService";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Overview",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Chart(props) {
  const [data, setData] = React.useState({
    labels,
    datasets: [
      {
        label: "Propducts",
        data: labels.map(() => Math.random() * 100),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "New Customers",
        data: labels.map(() => Math.random() * 100),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Revenue",
        data: labels.map(() => Math.random() * 100),
        backgroundColor: "rgba(255, 206, 86, 0.5)",
      },
    ],
  });
  useEffect(async () => {
    let year = props.year;
    let data = await adminService.handleGetChartData(1);
    let products = data[0];
    let newCustomers = data[1];
    let orders = data[2];
    products = products.filter(
      (product) => moment(product.createdAt).year() === year
    );
    newCustomers = newCustomers.filter(
      (customer) => moment(customer.createdAt).year() === year
    );
    orders = orders.filter((order) => moment(order.createdAt).year() === year);
    console.log("Check orders", orders);
    let sumProducts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sumNewCustomers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sumOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < products.length; i++) {
      console.log("month", moment(products[i].createdAt).month());
      if (moment(products[i].createdAt).month() == "0") {
        sumProducts[0] = sumProducts[0] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "1") {
        sumProducts[1] = sumProducts[1] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "2") {
        sumProducts[2] = sumProducts[2] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "3") {
        sumProducts[3] = sumProducts[3] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "4") {
        sumProducts[4] = sumProducts[4] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "5") {
        sumProducts[5] = sumProducts[5] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "6") {
        sumProducts[6] = sumProducts[6] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "7") {
        sumProducts[7] = sumProducts[7] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "8") {
        sumProducts[8] = sumProducts[8] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "9") {
        sumProducts[9] = sumProducts[9] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "10") {
        sumProducts[10] = sumProducts[10] + products[i].quantity;
      } else if (moment(products[i].createdAt).month() == "11") {
        sumProducts[11] = sumProducts[11] + products[i].quantity;
      }
    }

    for (let i = 0; i < newCustomers.length; i++) {
      if (moment(newCustomers[i].createdAt).month() == "0") {
        sumNewCustomers[0] = sumNewCustomers[0] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "1") {
        sumNewCustomers[1] = sumNewCustomers[1] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "2") {
        sumNewCustomers[2] = sumNewCustomers[2] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "3") {
        sumNewCustomers[3] = sumNewCustomers[3] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "4") {
        sumNewCustomers[4] = sumNewCustomers[4] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "5") {
        sumNewCustomers[5] = sumNewCustomers[5] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "6") {
        sumNewCustomers[6] = sumNewCustomers[6] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "7") {
        sumNewCustomers[7] = sumNewCustomers[7] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "8") {
        sumNewCustomers[8] = sumNewCustomers[8] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "9") {
        sumNewCustomers[9] = sumNewCustomers[9] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "10") {
        sumNewCustomers[10] = sumNewCustomers[10] + 1;
      } else if (moment(newCustomers[i].createdAt).month() == "11") {
        sumNewCustomers[11] = sumNewCustomers[11] + 1;
      }
    }

    for (let i = 0; i < orders.length; i++) {
      if (moment(orders[i].createdAt).month() == "0") {
        sumOrders[0] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "1") {
        sumOrders[1] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "2") {
        sumOrders[2] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "3") {
        sumOrders[3] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "4") {
        sumOrders[4] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "5") {
        sumOrders[5] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "6") {
        sumOrders[6] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "7") {
        sumOrders[7] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "8") {
        sumOrders[8] = parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "9") {
        sumOrders[9] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "10") {
        sumOrders[10] += parseFloat(orders[i].total);
      } else if (moment(orders[i].createdAt).month() == "11") {
        sumOrders[11] += parseFloat(orders[i].total);
      }
    }
    console.log(sumOrders);
    setData({
      labels,
      datasets: [
        {
          label: "Propducts",
          data: sumProducts,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "New Customers",
          data: sumNewCustomers,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "Revenue",
          data: sumOrders,
          backgroundColor: "rgba(255, 206, 86, 0.5)",
        },
      ],
    });
    console.log(sumProducts);
  }, [props.year]);

  return <Bar options={options} data={data} />;
}

import React from "react";
import 'bootstrap'
import './AdminSidebar.scss'


class AdminSideBar extends React.Component {

    handleChangeMenu = (key) => {
        this.props.changeMenu(key)
    }

    render() {
        return (
            <div className="admin-sidebar-container">
                <div className="sidebar-item" onClick={() => this.handleChangeMenu(1)}>
                    <span>
                        <i class="fas fa-store-alt"></i>
                        Dashbroads
                    </span>
                </div>

                <div className="sidebar-item" onClick={() => this.handleChangeMenu(2)}>
                    <span>
                        <i class="fas fa-cubes"></i>
                        Products
                    </span>
                </div>

                <div className="sidebar-item" onClick={() => this.handleChangeMenu(3)}>
                    <span>
                        <i class="far fa-money-bill-alt"></i>
                        Orders
                    </span>
                </div>

                <div className="sidebar-item" onClick={() => this.handleChangeMenu(4)}>
                    <span>
                        <i class="fas fa-chart-bar"></i>
                        Analysis
                    </span>
                </div>
            </div>
        )
    }
}

export default AdminSideBar
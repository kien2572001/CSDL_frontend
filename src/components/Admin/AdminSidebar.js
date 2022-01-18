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
                <div className="admin-sidebar-container-fixed">

                    <div className="sidebar-item" onClick={() => this.handleChangeMenu(1)}>
                        <span>
                            <i className="fas fa-store-alt"></i>
                            Dashbroad
                        </span>
                    </div>

                    <div className="sidebar-item" onClick={() => this.handleChangeMenu(2)}>
                        <span>
                            <i className="fas fa-cubes"></i>
                            Products
                        </span>
                    </div>

                    <div className="sidebar-item" onClick={() => this.handleChangeMenu(3)}>
                        <span>
                            <i className="far fa-money-bill-alt"></i>
                            Orders
                        </span>
                    </div>

                    <div className="sidebar-item" onClick={() => this.handleChangeMenu(4)}>
                        <span>
                            <i className="fas fa-chart-bar"></i>
                            Analysis
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminSideBar
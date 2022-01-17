import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AdminSideBar from './AdminSidebar'
import { Link } from 'react-router-dom'
import Products from './Products/ProductsContainer'
class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: 1,
    }
  }
  componentDidMount() {
    this.props.changeAppMode('adminMode')
  }

  changeMenu = (key) => {
    this.setState({
      menu: key,
    })
  }

  render() {
    let { menu } = this.state
    return (
      <>
        <div className='.container-fluid'>
          <div className='row'>
            <div className='col-sm-2 sidebar'>
              <AdminSideBar changeMenu={this.changeMenu} />
            </div>
            <div className=' item-container'>
              {menu === 1 ? (
                <div>Dashbroad</div>
              ) : menu === 2 ? (
                <Products />
              ) : menu === 3 ? (
                <div>Orders</div>
              ) : menu === 4 ? (
                <div>Analysis</div>
              ) : (
                <div>Khong biet</div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAppMode: (payload) => dispatch(actions.changeAppMode(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

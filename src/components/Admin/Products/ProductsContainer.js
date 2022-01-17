import React, { Component } from 'react'
import { InputGroup, FormControl, Table, Button } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import './Products.scss'
import { handleGetProductByStoreId } from '../../../services/productService'
import ProductList from './ProductList'
import paginate from './utils'

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      data: [],
      products: [],
    }
  }

  fetchProducts = async (sid) => {
    const response = await handleGetProductByStoreId(sid)
    this.setState({ data: paginate(response.products) })
    this.setState({ products: this.state.data[this.state.page] })
    // console.log(this.state.products)
  }

  componentDidMount() {
    this.fetchProducts(1)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.setState({ products: this.state.data[this.state.page] })
    }
  }

  handlePage = (e) => {
    this.setState({ page: e.selected })
  }

  render() {
    return (
      <section>
        <article className='products-search'>
          <h3>Products</h3>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Type your query and press enter'
              aria-label='search'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
          <Button variant='outline-primary' className='mb-3'>
            <i class='fas fa-search'></i>
          </Button>
        </article>
        <article className='products-table'>
          <Table responsive className='table-list'>
            <thead>
              <tr>
                <th className='th-img'>Image</th>
                <th className='th-name'>Name</th>
                <th>Group</th>
                <th>Shop</th>
                <th>Price/Unit</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.products.map((product) => (
              <ProductList key={product.pid} info={product} />
            ))}
          </Table>
        </article>
        <div className='products-pagination'>
          <ReactPaginate
            nextLabel='>'
            onPageChange={this.handlePage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={this.state.data.length}
            previousLabel='<'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={null}
          />
        </div>
      </section>
    )
  }
}

export default ProductsContainer

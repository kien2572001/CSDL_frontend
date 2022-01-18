import React, { Component } from 'react'
import {
  InputGroup,
  FormControl,
  Table,
  Button,
  Modal,
  Form,
} from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import './Products.scss'
import { handleGetProductByStoreId } from '../../../services/productService'
import ImageUpload from './ImageUpload'
import ProductList from './ProductList'
import paginate from './utils'
import { v4 as uuidv4 } from 'uuid'

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddProduct: false,
      showFilter: false,
      files: [],
      page: 0,
      data: [], // lưu các mảng của các page
      products: [], // lưu sản phẩm của page
      details: {
        createdAt: new Date().getTime().toString(),
        updatedAt: new Date().getTime().toString(),
      },
      filterByGroup: '',
      filterByCategory: '',
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

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach((file) => URL.revokeObjectURL(file.preview))
  }

  addFile = (file) => {
    console.log(file)
    this.setState({
      files: file.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    })
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    })
  }

  handleCloseAddProduct = () => this.setState({ showAddProduct: false })
  handleOpenAddProduct = () => this.setState({ showAddProduct: true })

  handleClickBack = () => {
    this.setState({ details: {} })
    this.handleCloseAddProduct()
  }

  handleClickAddProduct = () => {
    if (this.state.files.length > 0) {
      this.state.details['img'] = this.state.files[0].preview
    }
    this.state.data[this.state.data.length - 1].push(this.state.details)

    this.handleCloseAddProduct()
  }

  handlePage = (e) => {
    this.setState({ page: e.selected })
  }

  render() {
    return (
      <>
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
            <i className='fas fa-search mb-3 search'></i> {/* kính lúp */}
            <Button variant='success' onClick={this.handleOpenAddProduct}>
              <i class='fas fa-plus plus'></i> Add Product
            </Button>
            <div
              className={`filter ${this.state.showFilter && 'filter-active'}`}
              onClick={() =>
                this.setState({ showFilter: !this.state.showFilter })
              }
            >
              <h5>Filter</h5>
              <i class='fas fa-arrow-down'></i>
            </div>
          </article>
          {this.state.showFilter && (
            <article className='products-filter'>
              <div className='filter-group'>
                <h4>Filter By Group</h4>
                <Form.Select
                  aria-label='select group'
                  onChange={(e) =>
                    this.setState({ filterByGroup: e.target.value })
                  }
                >
                  <option>- Open this select menu -</option>
                  <option value='Grocery'>Grocery</option>
                  <option value='Bakery'>Bakery</option>
                  <option value='Makeup'>Makeup</option>
                  <option value='Bags'>Bags</option>
                  <option value='Clothings'>Clothings</option>
                  <option value='Furniture'>Furniture</option>
                  <option value='Daily Needs'>Daily Needs</option>
                </Form.Select>
              </div>
              <div className='filter-category'>
                <h4>Filter By Category</h4>
                <Form.Select
                  aria-label='select category'
                  onChange={(e) =>
                    this.setState({ filterByCategory: e.target.value })
                  }
                >
                  <option>- Open this select menu -</option>
                  <option value='No option'>No option</option>
                </Form.Select>
              </div>
            </article>
          )}

          <article className='products-table'>
            <Table responsive borderless className='table-list'>
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
                <ProductList
                  key={product.pid}
                  info={product}
                  state={this.state}
                />
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
            />{' '}
            {/* thanh pagination chuyển page */}
          </div>
        </section>
        <Modal
          show={this.state.showAddProduct}
          onHide={this.handleCloseAddProduct}
          backdrop='static'
          keyboard={false}
          size='xl'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header>
            <Modal.Title id='contained-modal-title-vcenter'>
              Add Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='featured-img'>
              <div className='header'>
                <h3>Featured Image</h3>
                <p>Upload your product featured image here</p>
              </div>
              <div className='up-img'>
                <ImageUpload
                  key={uuidv4()}
                  addFile={this.addFile}
                  files={this.state.files}
                  // info={this.props.info}
                />{' '}
                {/* upload Ảnh*/}
              </div>
            </div>
            <div className='gr-cate'>
              <div className='header'>
                <h3>Detail</h3>
                <p>
                  Edit your product description and necessary information from
                  here
                </p>
              </div>
              <div className='form-gr'>
                <Form.Group>
                  <Form.Label>Group</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue='Grocery'
                    disabled
                    readOnly
                  />
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={''}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          title: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Unit</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={''}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          unit: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    defaultValue={''}
                    className='description'
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          content: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={''}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          price: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={''}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          discount: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={''}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          quantity: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary btn-back' onClick={this.handleClickBack}>
              Back
            </Button>
            <Button variant='success' onClick={this.handleClickAddProduct}>
              Add Products
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ProductsContainer

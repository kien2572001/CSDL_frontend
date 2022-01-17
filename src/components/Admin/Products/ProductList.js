import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import { v4 as uuidv4 } from 'uuid'

export default class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [], // lưu props của ảnh
      showEdit: false, // hiện ẩn modal edit
      showDelete: false, // hiện ẩn modal edit
      details: { ...this.props.info }, // lưu các props của 1 sản phẩm
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

  handleCloseEdit = () => this.setState({ showEdit: false })
  handleOpenEdit = () => this.setState({ showEdit: true })

  handleCloseDelete = () => this.setState({ showDelete: false })
  handleOpenDelete = () => this.setState({ showDelete: true })

  deleteProducts = (id) => {
    this.handleOpenDelete()
    console.log(id)
  }

  editProducts = (id) => {
    this.handleOpenEdit()
    console.log(id)
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    })
  }

  handleClickBack = () => {
    this.setState({ details: {} })
    this.handleCloseEdit()
  }

  handleClickUpdate = () => {
    this.props.info['title'] = this.state.details['title']
    this.props.info['unit'] = this.state.details['unit']
    this.props.info['content'] = this.state.details['content']
    this.props.info['price'] = this.state.details['price']
    this.props.info['quantity'] = this.state.details['quantity']
    if (this.state.files.length > 0) {
      this.props.info['img'] = this.state.files[0].preview
    }
    this.handleCloseEdit()
  }

  handleClickCancel = () => {
    this.handleCloseDelete()
  }

  handleClickDelete = () => {
    console.log(this.props.info)
    this.handleCloseDelete()
  }

  render() {
    const {
      pid: id,
      img: url,
      title: name,
      price,
      quantity,
      unit,
      content,
      discount,
    } = this.props.info

    return (
      <>
        <tbody>
          <tr>
            <td>
              <img src={url} alt={name} />
            </td>
            <td>{name}</td>
            <td>Grocery</td>
            <td>Grocery Shop</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
              <span>publish</span>
            </td>
            <td>
              <i
                class='far fa-trash-alt'
                onClick={() => this.deleteProducts(id)}
              ></i>{' '}
              {/* icon delete */}
              <i
                class='far fa-edit'
                onClick={() => this.editProducts(id)}
              ></i>{' '}
              {/* icon edit */}
            </td>
          </tr>
        </tbody>

        {/* Modal xử lí phần edit */}
        <Modal
          show={this.state.showEdit}
          onHide={this.handleCloseEdit}
          backdrop='static'
          keyboard={false}
          size='xl'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header>
            <Modal.Title id='contained-modal-title-vcenter'>
              Edit Product
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
                  info={this.props.info}
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
                    defaultValue={name}
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
                    defaultValue={unit}
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
                    defaultValue={content}
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
                    defaultValue={price}
                    onChange={(e) =>
                      this.setState({
                        details: {
                          ...this.state.details,
                          price: e.target.value,
                        },
                      })
                    }
                  />
                  <Form.Label>Sale Price</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={
                      discount !== 0
                        ? ((price * discount) / 100).toFixed(2)
                        : price
                    }
                    readOnly
                  />
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={quantity}
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
            <Button variant='success' onClick={this.handleClickUpdate}>
              Update Products
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal xử lí phần delete */}
        <Modal
          show={this.state.showDelete}
          onHide={this.handleCloseDelete}
          aria-labelledby='contained-modal-title-vcenter'
          centered
          dialogClassName='modal-delete'
        >
          <Modal.Body className='modal-body-delete'>
            <i class='far fa-trash-alt'></i>
            <h3>Delete {this.props.info['title']}</h3>
            <p>Are you sure, you want to delete?</p>
            <div className='modal-btn-delete'>
              <Button variant='success' onClick={this.handleClickCancel}>
                Cancel
              </Button>
              <Button variant='danger' onClick={this.handleClickDelete}>
                Delete
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

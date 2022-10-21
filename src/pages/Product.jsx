import React, { Component } from 'react'
import { Container, InputGroup, Button, Modal, Form } from "react-bootstrap";
import { convertMoney } from '../utils/index'
import bandegPresto from '../assets/bandeng-presto.jpeg'
import gule from '../assets/gule.jpeg'

export default class Product extends Component {

    state = null

    style = {
        textAlign: 'center',
        fontSize: '55px',
        fontWeight: 'bold',
        color: 'brown',
        marginTop: '70px'
    }

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            hasil: "",
            show: false,
            form: {
                name: "",
                price: null,
                image: "",
                description: "",
                time: "Baru Saja"
            },
            productFilter: [],
            listPorduct: [
                {
                    name: "Bandeng Presto",
                    price: 10000,
                    image: bandegPresto,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
                    time: "10 menit"
                },
                {
                    name: "Gule",
                    price: 8000,
                    image: gule,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
                    time: "20 menit"
                }
            ],
        }
    }

    componentDidMount() {
        this.setState((state) => state.productFilter = this.state.listPorduct)
    }

    handleClose() {
        this.setState((state) => state.show = false)
    }
    async handleSubmit() {
        const list = this.state.listPorduct.concat(this.state.form)
        await this.setState({
            ...this.state,
            listPorduct: list,
            productFilter: list,
            show: false,
            search: ""
        })
        this.clearObject()
    }
    onConvertImage(e) {
        let file = e.target.files[0], reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState((state) => state.form.image = reader.result)
        }
    }
    serachProduct(search) {
        const list = this.state.listPorduct.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        this.setState((state) => state.productFilter = list)
    }
    clearObject() {
        this.setState((state) => state.form = {
            name: "",
            price: 0,
            image: "",
            description: "",
            time: "Baru Saja"
        })
    }
    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={() => this.handleClose()} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tambah Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Image </Form.Label>
                                <Form.Control type="file" onChange={(e) => this.onConvertImage(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control type="text" placeholder="Gule" value={this.state.form.name} onChange={(e) => this.setState((state) => state.form.name = e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="number" placeholder="10000" value={this.state.form.price} onChange={(e) => this.setState((state) => state.form.price = Number(e.target.value))} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.form.description} onChange={(e) => this.setState((state) => state.form.description = e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleSubmit()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container>
                    <InputGroup className="mb-3 mt-4">
                        <Form.Control
                            placeholder="Cari nama makanan"
                            aria-label="Cari nama makanan"
                            aria-describedby="basic-addon2"
                            value={this.state.search}
                            onChange={(e) => (this.setState((state) => state.search = e.target.value))}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={() => this.serachProduct(this.state.search)}>
                            Search
                        </Button>
                    </InputGroup>
                    {
                        this.state.productFilter.length > 0 ? (<div className="row">
                            {
                                this.state.productFilter.map((item, idx) => (
                                    <div className="col-md-4 mt-2" key={idx}>
                                        <div className="card shadow-sm">
                                            <img src={item.image} alt="Bandeng presot" className="product-img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted">{convertMoney(item.price)}</small>
                                                    <small className="text-muted">{item.time}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>) : (
                            <div className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0' }}>
                                <h1 className="text-center">Data tidak ditemukan</h1>
                            </div>
                        )
                    }
                    <div className="footer-produc pointer">
                        <Button variant="outline-primary" onClick={() => this.setState((state) => state.show = true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span style={{ marginLeft: '10px' }} >Add Product</span>
                        </Button>

                    </div>
                </Container>
            </>
        )
    }
}

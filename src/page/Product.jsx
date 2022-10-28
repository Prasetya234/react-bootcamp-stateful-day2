import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Button,
  Spinner,
  Form,
  Modal,
} from "react-bootstrap";
import Loading from "../components/Loading";
import noImage from "../assets/no-image.png";
import axios from "axios";

export default class Product extends Component {
  state = null;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isLoading: false,
      hasil: "",
      isModal: false,
      input: {
        name: "",
        price: "",
        image: "",
        description: "",
      },
      loading: false,
      listPorduct: [],
    };
  }

  componentDidMount() {
    this.fetchListProduct();
  }

  handleClose() {
    this.setState((state) => (state.isModal = false));
  }
  async onAdd() {
    if (this.state.isLoading) return;
    this.setState((state) => (state.isLoading = true));
    await axios.post("https://api-resto-bootcamp.herokuapp.com/api/product", {
      ...this.state.input,
    });

    await this.setState({
      ...this.state,
      isModal: false,
      input: {
        name: "",
        price: "",
        image: "",
        description: "",
      },
    });
    await this.fetchListProduct();
    setTimeout(() => {
      this.setState((state) => (state.isLoading = false));
    }, 1000);
  }
  onImage(e) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      this.setState((state) => (state.input.image = fileReader.result));
    };
  }
  async fetchListProduct() {
    this.setState((state) => (state.loading = true));
    const res = await axios.get(
      "https://api-resto-bootcamp.herokuapp.com/api/product"
    );
    this.setState({ ...this.state, loading: false, listPorduct: res.data });

    // axios.post("https://api-resto-bootcamp.herokuapp.com/api/product", {
    //   ...this.state.input
    // })
  }

  onSearch() {
    const keywoard = this.state.name;
    const arr = [];
    this.state.listPorduct.forEach((e) => {
      const valid =
        e.name.toLocaleLowerCase().search(keywoard.toLocaleLowerCase()) > -1;
      if (valid) {
        arr.push(e);
      }
    });
    this.setState((state) => (state = arr));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <Modal show={this.state.isModal} onHide={() => this.handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Tambah Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>nama</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      onChange={(e) =>
                        this.setState(
                          (state) => (state.input.name = e.target.value)
                        )
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>harga</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      onChange={(e) =>
                        this.setState(
                          (state) => (state.input.price = e.target.value)
                        )
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>gambar</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) => this.onImage(e)}
                      />
                    </Form.Group>
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(e) =>
                        this.setState(
                          (state) => (state.input.description = e.target.value)
                        )
                      }
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleClose()}>
                  Close
                </Button>
                {this.state.isLoading ? (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  <Button variant="primary" onClick={() => this.onAdd()}>
                    Save Changes
                  </Button>
                )}
              </Modal.Footer>
            </Modal>

            <Container>
              <InputGroup className="inputGroup">
                <Form.Control
                  placeholder="Cari nama makanan"
                  aria-label="Cari nama makanan"
                  aria-describedby="basic-addon2"
                  onChange={(e) =>
                    this.setState((state) => (state.name = e.target.value))
                  }
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={() => this.onSearch()}
                >
                  Search
                </Button>
              </InputGroup>
              {this.state.listPorduct.length < 1 ? (
                <p className="tampilkan">makanan tidak tersedia</p>
              ) : (
                <div>
                  <div className="row" id="root">
                    {this.state.listPorduct.map((item, idx) => (
                      <div className="col-md-4" key={idx}>
                        <div className="card shadow-sm">
                          <img
                            src={item.image ? item.image : noImage}
                            alt="Sorry! Image not available at this time"
                            className="product-img"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">{item.price}</small>
                              <small className="text-muted">{item.time}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="footer-produc pointer">
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        this.setState((state) => (state.isModal = true))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                      <span style={{ marginLeft: "10px" }}>Add Product</span>
                    </Button>
                  </div>
                </div>
              )}
            </Container>
          </>
        )}
      </>
    );
  }
}

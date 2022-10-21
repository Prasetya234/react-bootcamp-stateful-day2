import React, { Component } from 'react'
import gule from '../assets/gule.jpeg';
import badengPresto from '../assets/bandeng-presto.jpeg';
import rendang from '../assets/rendang.jpg';
import { Container } from "react-bootstrap";

export default class Home extends Component {
    state = null

    constructor(props) {
        super(props)
        this.state = {
            countCarousle: 0,
            carousle: [
                {
                    img: gule,
                    active: false,
                },
                {
                    img: badengPresto,
                    active: true,
                },
                {
                    img: rendang,
                    active: false,
                }
            ]
        }
    }
    carousleButton(back) {
        if (back) {
            if (this.state.countCarousle === 0) {
                this.setState((state) => state.carousle[state.countCarousle].active = false)
                this.setState((state) => state.countCarousle = state.carousle.length - 1)
                this.setState((state) => state.carousle[state.countCarousle].active = true)
                return
            }
            this.setState((state) => state.carousle[state.countCarousle].active = false)
            this.setState((state) => state.countCarousle = state.countCarousle - 1)
            this.setState((state) => state.carousle[state.countCarousle].active = true)
            return
        }
        if (this.state.countCarousle === this.state.carousle.length - 1) {
            this.setState((state) => state.carousle[state.countCarousle].active = false)
            this.setState((state) => state.countCarousle = 0)
            this.setState((state) => state.carousle[state.countCarousle].active = true)
            return
        }
        this.setState((state) => state.carousle[state.countCarousle].active = false)
        this.setState((state) => state.countCarousle = state.countCarousle + 1)
        this.setState((state) => state.carousle[state.countCarousle].active = true)
    }
    render() {
        return (
            <>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        {
                            this.state.carousle.map((item, index) => (
                                <div className={`${item.active ? 'active' : ''} carousel-item`} key={index}>
                                    <img src={item.img} className="d-block w-100" alt="..." />
                                </div>
                            ))
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => this.carousleButton(true)}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => this.carousleButton(false)}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Container>
                    <div className="row featurette" style={{ margin: '40px 0' }}>
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">Badeng Presto</h2>
                            <p className="lead">Makanan khas semarang, yang berasal dari zaman kerajaan majapahit.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={badengPresto} alt="badeng" />
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

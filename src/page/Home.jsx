import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import gudeg from "../assets/gudeg.webp";
import rawon from "../assets/rawon.png";
import rendang from "../assets/rendang.jpg";
import makanan from "../assets/makanan.webp";
import ayam from "../assets/ayam-rica-rica.webp";
import bakso from "../assets/bakso.jpeg";
import bebek from "../assets/bebek-betutu.jpg";
import { Button } from "react-bootstrap";

export default class Home extends Component {
  // componentDidMount() {
  //   //
  //   let bintang = [];
  //   for (let i = 0; i < 6; i++) {
  //     bintang += "*";
  //     for (let j = 0; j < 6; j--) {
  //       console.log(bintang);
  //     }
  //   }
  // }
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={gudeg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rawon} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rendang} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="hm-flex">
          <div>
            <img src={makanan} alt="makanan" />
          </div>
          <div>
            <h2>Selamat Datang di Restoran Sugeng</h2>
            <p>
              Restoran Sugeng telah berdiri sejak tahun 1999 hingga saat ini.
              Kami bergerak dibagian mengelola makanan bintang lima dengan harga
              yang merakyat, dimana alasan untuk mendirikan rumah makan ini
              karena seiring perkembangan jaman kebanyakan orang menginginkan
              makanan mewah dengan harga yang terjangkau
            </p>
          </div>
        </div>
        <h2 style={{ textAlign: "center", margin: "50px" }}>
          Sebagian dari menu kami
        </h2>
        <div className="hm-menu">
          <div>
            <div>
              <img src={gudeg} alt="gudeg" />
            </div>
            <div>
              <p>Gudeg</p>
            </div>
            <div>
              <img src={rawon} alt="rawon" />
            </div>
            <div>
              <p>Rawon</p>
            </div>
          </div>
          <div>
            <div>
              <p>Rendang</p>
            </div>
            <div>
              <img src={rendang} alt="rendang" />
            </div>
            <div>
              <p>Ayam rica-rica</p>
            </div>
            <div>
              <img src={ayam} alt="ayam" />
            </div>
          </div>
          <div>
            <div>
              <img src={bakso} alt="bakso" />
            </div>
            <div>
              <p>Bakso</p>
            </div>
            <div>
              <img src={bebek} alt="bebek" />
            </div>
            <div>
              <p>Bebek betutu</p>
            </div>
          </div>
        </div>
        <div className="hm-bawah">
          <p>Menu</p>
          <ul>
            <li>Rendang</li>
            <li>Gudeg</li>
            <li>Bakso</li>
            <li>Rawon</li>
            <li>Ayam rica-rica</li>
            <li>Bebek betutu</li>
          </ul>
          <Button href="/product">lihat menu lainnya</Button>
        </div>
      </div>
    );
  }
}

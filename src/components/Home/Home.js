import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay'
import './Home.css'
import bg1 from '../../images/bg3.jpg'
import bg2 from '../../images/bg2.jpg'
import bg3 from '../../images/bg1.jpg'


import { useSelector } from 'react-redux';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export const Home = () => {

    const { All_items } = useSelector(state => state)
    let products = All_items.products;
    let images = [products[14], products[13], products[11], products[10], products[9], products[10], products[2]]

    return (<>
        <div id="carouselExampleCaptions" className="carousel carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bg1} className="d-block w-20 img-fluid" alt="pic1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>ELITEMOVE SOCCER SHOES</h2>
                        <p>Made by the best, consumed by the best</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg2} className="d-block w-20 img-fluid" alt="pic2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>ELITEMOVE SOCCER SHOES</h2>
                        <p>Made by the best, consumed by the best</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg3} className="d-block w-20 img-fluid" alt="pic3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>ELITEMOVE SOCCER SHOES</h2>
                        <p>Made by the best, consumed by the best</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Prev</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>

        <h1 className='text-center'>OUR FEATURED SHOES</h1>
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            autoplay={true}
            className="mySwiper"
            breakpoints={{
                450: {
                    width: 450,
                    slidesPerView: 1,
                },
                680: {
                    width: 680,
                    slidesPerView: 2,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                },
            }}
        >
            {
                images.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <img src={item.img} alt={item.name} className='slideimg img-fluid' />
                        <h4>{item.name}</h4>
                        <h3>RS: <strong>{item.price}</strong></h3>
                        <button className='btn btn-info m-2' onClick={() => { console.log(item.price) }}>Add to cart</button>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </>
    )
}

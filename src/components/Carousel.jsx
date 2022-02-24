import React from "react";
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-img" src="portada-docentes.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="portada-halcones.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src="https://scontent.fmlm2-1.fna.fbcdn.net/v/t39.30808-6/274241357_2437003493098203_5815597517356502209_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JdIUN5rzSQIAX-oBNBP&_nc_ht=scontent.fmlm2-1.fna&oh=00_AT_nBpPx4NEtl31OdzuvfX3AvQCGhr3IjsTq3sSFS8wK7Q&oe=62156767" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;
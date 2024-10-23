import React from 'react';
import './Slide.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'; 
<<<<<<< HEAD
import { Pagination } from 'swiper/modules'
import IMGTenis from "../../assets/tenis.png"
import Bolha from '../../assets/Ornament.png'
=======
import { Pagination } from 'swiper/modules';
import IMGTenis from '../../assets/img/Tenis.png'
import IMGBola from '../../assets/img/Ornament.png'
>>>>>>> 7769f09 (atualizando slide)

const Slide = () => {
  return (
    <>
<<<<<<< HEAD
<Swiper
  pagination={ {clickable: true} }
  modules={[Pagination]}
  className="mySwiper"
>
  <SwiperSlide>
    <div className="slide-container">
=======
      <Swiper
        pagination={ { clickable: true }} 
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="slide-container">
>>>>>>> 7769f09 (atualizando slide)
      <div className="slide-content">
        <div className="slide-content-left">
          <div className="slide-content-left-itens">
            <h4 className="highlight-offer">Melhores ofertas personalizadas</h4>
            <div className="slide-content-left-text">
              <h3 className="main-title">Queima de estoque Nike 🔥</h3>
              <p className="description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <button className="offer-button">Ver Ofertas</button>
            </div>
          </div>
        </div>
        <div className="slide-content-right">
<<<<<<< HEAD
        <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
      <div className="slide-content-bolha">
        <img className="bolha" src={Bolha} alt="imagem do tênis da nike" />
        </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slide-container">
=======
          <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
      <div className="content-ornament">
        <img className="ornament" src={IMGBola} alt="" />
      </div>
    </div>
  </SwiperSlide>
        <SwiperSlide>   <div className="slide-container">
>>>>>>> 7769f09 (atualizando slide)
      <div className="slide-content">
        <div className="slide-content-left">
          <div className="slide-content-left-itens">
            <h4 className="highlight-offer">Melhores ofertas personalizadas</h4>
            <div className="slide-content-left-text">
              <h3 className="main-title">Queima de estoque Nike 🔥</h3>
              <p className="description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <button className="offer-button">Ver Ofertas</button>
            </div>
          </div>
        </div>
        <div className="slide-content-right">
<<<<<<< HEAD
        <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
      <div className="slide-content-bolha">
        <img className="bolha" src={Bolha} alt="imagem do tênis da nike" />
        </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slide-container">
=======
          <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
        <div className="content-ornament">
        <img className="ornament" src={IMGBola} alt="" />
      </div>
    </div></SwiperSlide>
        <SwiperSlide>   <div className="slide-container">
>>>>>>> 7769f09 (atualizando slide)
      <div className="slide-content">
        <div className="slide-content-left">
          <div className="slide-content-left-itens">
            <h4 className="highlight-offer">Melhores ofertas personalizadas</h4>
            <div className="slide-content-left-text">
              <h3 className="main-title">Queima de estoque Nike 🔥</h3>
              <p className="description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <button className="offer-button">Ver Ofertas</button>
            </div>
          </div>
        </div>
        <div className="slide-content-right">
<<<<<<< HEAD
        <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
      <div className="slide-content-bolha">
        <img className="bolha" src={Bolha} alt="imagem do tênis da nike" />
        </div>
    </div>
  </SwiperSlide>
</Swiper>
</>
  )
}

export default Slide
=======
          <img className="TenisSlide" src={IMGTenis} alt="imagem do tênis da nike" />
        </div>
      </div>
      <div className="content-ornament">
        <img className="ornament" src={IMGBola} alt="" />
      </div>
    </div>
    </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide;
>>>>>>> 7769f09 (atualizando slide)

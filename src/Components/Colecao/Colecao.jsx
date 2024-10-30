import React from 'react'
import './ColecaoStyle.css'
import Tshirt from '../../assets/tshirt.png'
import Calca  from '../../assets/calca.png'
import Headphone  from '../../assets/headphones.png'
import Tenis  from '../../assets/TenisIcone.png'


const Colecao = () => {
  return (
    <div className="conteiner_colecao">
        <div className="content_colecoes">
            <h2>Coleções em destaque</h2>
            <div className="content_colecoes_itens">
            <div className="colecoes-itens">
              <div className="colecao_img">
              <img  className="img_colecoes" src={Tshirt} alt="" />
              </div>
            <p>Camisetas</p>
            </div>
            <div className="colecoes-itens">
              <div className="colecao_img">
                <img  className="img_colecoes" src={Calca} alt="" />
              </div>
                <p>Calças</p>
            </div>
            <div className="colecoes-itens">
              <div className="colecao_img">
                <img  className="img_colecoes" src={Calca} alt="" />
              </div>
              <p>Bonés</p>
            </div>
            <div className="colecoes-itens">
              <div className="colecao_img">
                <img  className="img_colecoes" src={Headphone} alt="" />

              </div>
            <p>Headphones</p>
            </div>
            <div className="colecoes-itens">
                <div className="colecao_img">
                <img  className="img_colecoes" src={Tenis} alt="" />
                </div>
              <p>Tênis</p>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Colecao
import React from 'react'
import './ColecaoStyle.css'
import Camiseta  from '../../assets/camiseta.png'
import Calca  from '../../assets/calca.png'
import Bone  from '../../assets/Bone.png'
import Headphone  from '../../assets/Headphone.png'
import Tenis  from '../../assets/TenisColecao.png'

const Colecao = () => {
  return (
    <div className="conteiner_colecao">
        <div className="content_colecoes">
            <h2>Coleções em destaque</h2>
            <div className="content_colecoes_itens">
                <img  className="img_colecoes" src={Camiseta} alt="" />
                <img  className="img_colecoes" src={Calca} alt="" />
                <img  className="img_colecoes" src={Bone} alt="" />
                <img  className="img_colecoes" src={Headphone} alt="" />
                <img  className="img_colecoes" src={Tenis} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Colecao
import './SpecialOffer.css'

const SpecialOffter = () => {
    return (
        <>
            <div className='specialOffer'>
                <div className='conteudo'>
                    <div>
                        <div className='conteiner-circulo-imagem'>
                            <div className='circulo'></div>
                            <img className="img-sapato" src="src\assets\sapatosAmarelos.png" alt="Sapatos Air Jodan" />
                        </div>
                    </div>
                    <div className='texto'>
                        <p className='titulo-oferta-especial'>Oferta especial</p>
                        <h3 className='subtitulo'>Air Jordan edição de 
                            colecionador</h3>
                        <p className='texto-oferta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <button className='botao-ver-oferta'>Ver Oferta</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecialOffter;


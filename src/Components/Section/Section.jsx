import './Section.css'

const Section = () => {
    return ( 
        <>
            <div className='titulo-colecoes-em-destatque'>
                <h2 >Coleções em destaque</h2>
            </div>
            
            <div className='container-cards'>

                <div className='container-card primeiro-card'>
                    <div>
                        <p className="desconto">30% OFF</p>
                        <p className='produto'>Novo drop Supreme</p>
                        <button className='botao'>Comprar</button>
                    </div>
                </div>
                <div className='container-card segundo-card'>
                    <div>
                        <p className="desconto">30% OFF</p>
                        <p className='produto'>Coleção Adidas</p>
                        <button className='botao'>Comprar</button>
                    </div>
                </div>
                <div className='container-card terceiro-card'>
                    <div>
                        <p className="desconto">30% OFF</p>
                        <p className='produto'>Novo <br/>Beats Bass</p>
                        <button className='botao'>Comprar</button>
                    </div>
                </div>
                
                
                
                
            </div>
        </> 
    );
}
 
export default Section;

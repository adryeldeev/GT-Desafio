import './Footer.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className='container-info'>
                <div className='sobre'>
                    <img src="src\assets\logo.png" alt="" />
                    <p className='descricao'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officia nulla incidunt delectus, commodi culpa id ipsa. Reprehenderit, aliquid. Voluptas autem sapiente illo, eius dolor repellendus ipsam sed. Ratione, nesciunt.</p>
                    <div className='icones'>
                        <p>X</p>
                        <p>Y</p>
                        <p>Z</p>
                    </div>
                </div>
                <div>
                    <p>Informação</p>
                    <div className='informacoes'>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                </div>
                <div>
                    <p>Categórias</p>
                    <div className='informacoes'>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                </div>
                <div>
                    <p>Contatos</p>
                    <div className='informacoes'>
                        <div className='endereco'>
                            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        </div>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>@2024 Digital Store</p>
        </div>
    );
}

export default Footer;
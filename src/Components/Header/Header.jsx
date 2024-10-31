// import React from "react";
import Logo from "../../assets/img/Logo.png";
import { CiSearch } from "react-icons/ci";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({onSearchChange}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value); 
  };
  return (
    <header className="container-header">
      <div className="content-header">
        <div className="content-header-info">
          <a href="#inicio">
            <img src={Logo} alt="Logo" />
          </a>
          <div className="header-input-info">
            <div className="input_search">
              <input type="text" placeholder="Pesquise produto..."value={searchValue} onChange={handleInputChange} />
              <div className="input_icon">
                <CiSearch className="icon" />
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <button className="button-cadastrese">
              <u>Cadastre-se</u>
            </button>
            <button className="button-entrar">Entrar</button>
          </div>
          <div className="carrinho">
            <img className="imgCarrinho" src="src\assets\carrinho.svg" alt="" />
            <div className="circuloCarrinho">2</div>
          </div>
        </div>
      </div>
      <div className="content-nav">
        <nav className="nav-menu">
          <ul className="lista-itens">
            <li>
              <NavLink to="/" className="link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/produto" className="link" activeClassName="active">
                Produto
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria" className="link" activeClassName="active">
                Categoria
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className="link" activeClassName="active">
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

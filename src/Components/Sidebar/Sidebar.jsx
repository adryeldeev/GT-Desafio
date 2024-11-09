// Sidebar.js
import React from "react";
import "./SidebarStyle.css";

const Sidebar = ({ onFilterChange }) => {

  return (
    <aside className="sidebar">
      <h3 className="titulo-filtro">Filtrar por</h3>
      <hr className="linha" />

      <div className="select-filtro-mark">
        <div className="contener-categoria-filtro">
          <h4 className="titulo-h4-filtro">Marca</h4>
          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="brand"
              value="Adidas"
              onChange={() => onFilterChange("Adidas")}
            />
            <span className="texto-label-filtro">Adidas</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="brand"
              value="Calenciaga"
              onChange={() => onFilterChange("Calenciaga")}
            />
            <span className="texto-label-filtro">Calenciaga</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="brand"
              value="Nike"
              onChange={() => onFilterChange("Nike")}
            />
            <span className="texto-label-filtro">Nike</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="brand"
              value="K-Swiss"
              onChange={() => onFilterChange("K-Swiss")}
            />
            <span className="texto-label-filtro">K-Swiss</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="brand"
              value="Puma"
              onChange={() => onFilterChange("Puma")}
            />
            <span className="texto-label-filtro">Puma</span>
          </label>
        </div>

        <div className="contener-categoria-filtro">
          <h4 className="titulo-h4-filtro">Categoria</h4>
          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="categoria"
              value="Esporte e lazer"
              onChange={() => onFilterChange("Esporte e lazer")}
            />
            <span className="texto-label-filtro">Esporte e lazer</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="categoria"
              value="Casual"
              onChange={() => onFilterChange("Casual")}
            />
            <span className="texto-label-filtro">Casual</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="categoria"
              value="Utilitário"
              onChange={() => onFilterChange("Utilitário")}
            />
            <span className="texto-label-filtro">Utilitário</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="categoria"
              value="Corrida"
              onChange={() => onFilterChange("Corrida")}
            />
            <span className="texto-label-filtro">Corrida</span>
          </label>
        </div>

        <div className="contener-categoria-filtro">
          <h4 className="titulo-h4-filtro">Gênero</h4>
          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="genero"
              value="Masculino"
              onChange={() => onFilterChange("Masculino")}
            />
            <span className="texto-label-filtro">Masculino</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="genero"
              value="Ferminino"
              onChange={() => onFilterChange("Feminino")}
            />
            <span className="texto-label-filtro">Feminino</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="checkbox"
              name="genero"
              value="Unissex"
              onChange={() => onFilterChange("Unissex")}
            />
            <span className="texto-label-filtro">Unissex</span>
          </label>
        </div>

        <div className="contener-categoria-filtro">
          <h4 className="titulo-h4-filtro">Estado</h4>
          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="radio"
              name="estado"
              value="Novo"
              onChange={() => onFilterChange("Novo")}
            />
            <span className="texto-label-filtro">Novo</span>
          </label>

          <label className="label-filtro">
            <input
              className="input-checkbox-filtro"
              type="radio"
              name="estado"
              value="Usado"
              onChange={() => onFilterChange("Usado")}
            />
            <span className="texto-label-filtro">Usado</span>
          </label>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;

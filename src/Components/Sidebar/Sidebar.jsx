// Sidebar.js
import './SidebarStyle.css'
const Sidebar = ({ onFilterChange }) => {
  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      
      <div>
        <div className="select-filtro-mark">
    <span  className="barra"></span>
        <div>
        <label>
          <input
            type="checkbox"
            name="brand"
            value="Adidas"
            onChange={() => onFilterChange("Adidas")}
            />
          Adidas
        </label>
        </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="brand"
            value="Nike"
            onChange={() => onFilterChange("Nike")}
          />
          Nike
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="brand"
            value="K-Swiss"
            onChange={() => onFilterChange("K-Swiss")}
          />
          K-Swiss
        </label>
        </div>
        </div>
        </div>
      {/* Adicione mais filtros conforme necessário */}
    </aside>
  );
};

export default Sidebar;

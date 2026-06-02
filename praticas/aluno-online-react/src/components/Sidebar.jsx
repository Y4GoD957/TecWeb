import learnIcon from "../assets/learn.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2>
          <img src={learnIcon} alt="Capelo" className="sidebar-icon" />
          Aluno Online
        </h2>
      </header>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Notas</a>
          </li>
          <li>
            <a href="#">Faltas</a>
          </li>
          <li>
            <a href="#">Boletos</a>
          </li>
          <li>
            <a href="#">Requerimentos</a>
          </li>
          <li>
            <a href="#">Sair</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

import avatar from "../assets/avatar.svg";
import "./Topbar.css";

function Topbar() {
  return (
    <header className="top-bar">
      <h2>
        <img src={avatar} alt="Foto do perfil" className="avatar" />
        Olá, Aluno!
      </h2>
    </header>
  );
}

export default Topbar;

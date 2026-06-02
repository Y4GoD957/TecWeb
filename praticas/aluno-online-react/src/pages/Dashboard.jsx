import DashboardCard from "../components/DashboardCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import "./Dashboard.css";

const cards = [
  {
    title: "Mural de Avisos",
    items: [
      { text: "Inscrição para o projeto de extensão" },
      { text: "Eleição para representante de turma" },
    ],
  },
  {
    title: "Calendário Acadêmico",
    items: [
      { highlight: "23/02", text: " - Início do período letivo 2026-1" },
      { highlight: "25/04", text: " - Prazo final para aplicação da P1" },
      { highlight: "23/06", text: " - Prazo final para aplicação da P2" },
      { highlight: "04/07", text: " - Fim do período letivo 2026-1" },
    ],
  },
  {
    title: "Minhas Disciplinas",
    items: [
      { text: "Bancos de Dados I (HMDC253)" },
      { text: "Estrutura de Dados (MDC127)" },
      { text: "Tecnologias Web (HMDC251)" },
    ],
  },
];

function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <section className="dashboard-content">
          <h3>Bem-vindo ao portal do aluno</h3>

          {cards.map((card) => (
            <DashboardCard key={card.title} title={card.title} items={card.items} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

import "./DashboardCard.css";

function DashboardCard({ title, items }) {
  return (
    <article className="card">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.text}>
            {item.highlight && <strong>{item.highlight}</strong>}
            {item.text}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default DashboardCard;

function Card({ title, children }) {
  return (
    <section className="rounded-lg bg-white shadow p-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </section>
  );
}

export default function App() {
  return (
    <Card title="Card title">
      <p>Card content goes here</p>
    </Card>
  );
}

import StatCard from "./components/Dashboard/StatCard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        title="Agendamentos"
        value="12"
      />

      <StatCard
        title="Clientes"
        value="248"
      />

      <StatCard
        title="Caixa"
        value="R$ 850"
      />

      <StatCard
        title="Funcionários"
        value="5"
      />
    </div>
  );
}
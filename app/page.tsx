import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import StatCard from "./components/Dashboard/StatCard";

export default function Home() {
  return (
    <main className="flex bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-10">
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
        </div>
      </div>
    </main>
  );
}
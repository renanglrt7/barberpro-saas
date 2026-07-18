import Link from "next/link";

export default function Sidebar() {
  const menu = [
    { id: 1, nome: "Dashboard", rota: "/", ativo: true },
    { id: 2, nome: "Agenda", rota: "/agenda", ativo: false },
    { id: 3, nome: "Clientes", rota: "/clientes", ativo: false },
    { id: 4, nome: "Serviços", rota: "#", ativo: false },
    { id: 5, nome: "Funcionários", rota: "#", ativo: false },
    { id: 6, nome: "Produtos", rota: "#", ativo: false },
    { id: 7, nome: "Financeiro", rota: "#", ativo: false },
    { id: 8, nome: "Relatórios", rota: "#", ativo: false },
    { id: 9, nome: "Configurações", rota: "#", ativo: false },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 flex flex-col">

      <div className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-emerald-500">
          💈 BarberPro
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Sistema de Gestão
        </p>
      </div>

      <nav className="flex-1 p-4">
        {menu.map((item) => (
          <Link
            key={item.id}
            href={item.rota}
            className={`block w-full text-left px-4 py-3 rounded-lg transition mb-2 ${
              item.ativo
                ? "bg-emerald-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {item.nome}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800 text-center text-gray-500 text-sm">
        BarberPro v1.0
      </div>

    </aside>
  );
}
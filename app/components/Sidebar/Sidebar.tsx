export default function Sidebar() {
  const menu = [
    "Dashboard",
    "Agenda",
    "Clientes",
    "Serviços",
    "Funcionários",
    "Produtos",
    "Financeiro",
    "Relatórios",
    "Configurações",
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 flex flex-col">

      <div className="p-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-emerald-500">
          💈 BarberPro
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Gestão Inteligente
        </p>

      </div>

      <nav className="flex-1 p-4">

        {menu.map((item) => (

          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-emerald-600 hover:text-white transition mb-2"
          >
            {item}
          </button>

        ))}

      </nav>

    </aside>
  );
}
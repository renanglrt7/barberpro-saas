export default function ClientesPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Clientes
          </h1>

          <p className="text-gray-400 mt-2">
            Gerencie todos os clientes da sua barbearia.
          </p>
        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-3 rounded-lg text-white font-semibold">
          + Novo Cliente
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">

        <input
          type="text"
          placeholder="Pesquisar cliente..."
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 outline-none focus:border-emerald-500"
        />

        <table className="w-full">

          <thead>

            <tr className="border-b border-gray-700">

              <th className="text-left text-gray-300 py-3">
                Nome
              </th>

              <th className="text-left text-gray-300 py-3">
                Telefone
              </th>

              <th className="text-left text-gray-300 py-3">
                Último Corte
              </th>

              <th className="text-left text-gray-300 py-3">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-gray-700">

              <td className="py-4 text-white">
                João Silva
              </td>

              <td className="text-gray-300">
                (21) 99999-9999
              </td>

              <td className="text-gray-300">
                10/07/2026
              </td>

              <td>

                <button className="text-emerald-500 hover:underline mr-4">
                  Editar
                </button>

                <button className="text-red-500 hover:underline">
                  Excluir
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}
export default function Header() {
  return (
    <header className="h-20 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-400 text-sm">
          Bem-vindo ao BarberPro
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white">
          R
        </div>

        <span className="text-white">
          Renan
        </span>

      </div>

    </header>
  );
}
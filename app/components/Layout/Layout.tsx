import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-10">
          {children}
        </div>
      </div>
    </main>
  );
}
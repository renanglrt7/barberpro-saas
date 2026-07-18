type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl text-white font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}
export default function Card({ title, amount }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold">₹{amount}</p>
    </div>
  );
}
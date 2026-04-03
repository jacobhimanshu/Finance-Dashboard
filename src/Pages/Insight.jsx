import { useContext } from "react";
import { AppContext } from "../context/Appcontex";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const highest = transactions.reduce((prev, curr) =>
    curr.amount > prev.amount ? curr : prev,
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold">Insights</h2>
      <p>
        Highest Transaction: {highest.category} ₹{highest.amount}
      </p>
    </div>
  );
}

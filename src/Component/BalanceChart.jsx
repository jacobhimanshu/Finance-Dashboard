import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/Appcontex";

export default function BalanceChart() {
  const { transactions } = useContext(AppContext);

  // convert transactions → chart data
  let balance = 0;
  const data = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance: balance,
    };
  });

  return (
    <LineChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="balance" stroke="#22c55e" />
    </LineChart>
  );
}
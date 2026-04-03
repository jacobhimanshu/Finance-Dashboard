import { useContext } from "react";
import { AppContext } from "../context/Appcontex";
import Card from "../Component/Card";
import BalanceChart from "../Component/BalanceChart";
import CategoryChart from "../Component/CategoryChart";

export default function Dashboard() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Balance" amount={balance} />
      <Card title="Income" amount={income} />
      <Card title="Expense" amount={expense} />
        <CategoryChart/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceChart />
      </div>
    </div>
  );
}

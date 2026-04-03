import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/Appcontex";

export default function CategoryChart() {
  const { transactions } = useContext(AppContext);

  // group by category
  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const colors = ["#ef4444", "#3b82f6", "#facc15", "#22c55e"];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
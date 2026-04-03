import { useContext, useState } from "react";
import { AppContext } from "../context/Appcontex";

export default function Transactions() {
  const { transactions, search, setSearch, role, setTransactions } =useContext(AppContext);

  const [isAdding, setIsAdding] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newType, setNewType] = useState("expense");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: newDate,
      amount: parseFloat(newAmount),
      category: newCategory,
      type: newType,
    };
    setTransactions([...transactions, newTx]);
    setIsAdding(false);
    setNewDate("");
    setNewAmount("");
    setNewCategory("");
    setNewType("expense");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <input
        placeholder="Search category..."
        className="border p-2 mb-3 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {role === "admin" &&
        (!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-3 py-1 mb-3 rounded"
          >
            Add Transaction
          </button>
        ) : (
          <div className="mb-3">
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              placeholder="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border p-2 mr-2"
            />
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="border p-2 mr-2"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <button
              onClick={handleAddTransaction}
              className="bg-green-500 text-white px-3 py-1 mr-2 rounded"
            >
              Add
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        ))}

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td
                className={
                  t.type === "income" ? "text-green-500" : "text-red-500"
                }
              >
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

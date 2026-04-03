import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const data = localStorage.getItem("transactions");
    return data
      ? JSON.parse(data)
      : [
          { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
          { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
        ];
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider value={{ transactions, setTransactions, role, setRole, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};
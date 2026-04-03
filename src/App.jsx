import Dashboard from "./Pages/Dashboard";
import Transactions from "./Pages/Transaction";
import Insights from "./Pages/Insight";
import RoleSwitcher from "./Component/RoleSwitcher";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <RoleSwitcher />
      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
}
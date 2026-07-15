import { useEffect, useState } from "react";
import api from "../services/api";
import ExpenseTable from "../components/ExpenseTable";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import Analytics from "../components/Analytics";
import ExportButton from "../components/ExportButton";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data.expenses);
    } catch (err) {
      console.log(err);
    }
  };

  const addExpense = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/expenses/${editingId}`, {
          title,
          amount: Number(amount),
          category,
        });

        setEditingId(null);
      } else {
        await api.post("/expenses", {
          title,
          amount: Number(amount),
          category,
        });
      }

      setTitle("");
      setAmount("");
      setCategory("Food");

      fetchExpenses();
      toast.success(
        editingId
          ? "Expense updated successfully!"
          : "Expense added successfully!",
      );
    } catch (err) {
      console.log(err);
      toast.error("Failed to save expense");
    }
  };
  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      toast.success("Expense deleted");
      fetchExpenses();
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete expense");
    }
  };
  const editExpense = (expense) => {
    setEditingId(expense._id);
    setTitle(expense.title);
    setAmount(expense.amount);
    setCategory(expense.category);
  };

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      filterCategory === "All" || expense.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        {/* Add Expense */}

        <ExpenseForm
          title={title}
          setTitle={setTitle}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          addExpense={addExpense}
          editingId={editingId}
        />

        {/* Summary */}

        <SummaryCards expenses={expenses} />
        <Charts expenses={expenses} />
        <Analytics expenses={expenses} />
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search expense..."
              className="border rounded-lg p-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border rounded-lg p-3"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option>All</option>
              <option>Food</option>
              <option>Shopping</option>
              <option>Transport</option>
              <option>Bills</option>
              <option>Health</option>
              <option>Entertainment</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        {/* Expense Table */}
        <ExportButton expenses={filteredExpenses} />
        <ExpenseTable
          expenses={filteredExpenses}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
}

export default Dashboard;

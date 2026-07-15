import { FaTrash, FaEdit } from "react-icons/fa";

function ExpenseTable({ expenses, editExpense, deleteExpense }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const badgeColor = (category) => {
    switch (category) {
      case "Food":
        return "bg-green-100 text-green-700";
      case "Shopping":
        return "bg-pink-100 text-pink-700";
      case "Transport":
        return "bg-blue-100 text-blue-700";
      case "Bills":
        return "bg-red-100 text-red-700";
      case "Health":
        return "bg-purple-100 text-purple-700";
      case "Entertainment":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Expense History</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Title</th>

            <th className="p-4 text-left">Category</th>

            <th className="p-4 text-left">Amount</th>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-10 text-gray-500">
                No expenses found
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr
                key={expense._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{expense.title}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor(
                      expense.category,
                    )}`}
                  >
                    {expense.category}
                  </span>
                </td>

                <td className="p-4 font-bold">
                  {formatCurrency(expense.amount)}
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(expense.createdAt).toLocaleDateString("en-IN")}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => editExpense(expense)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteExpense(expense._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;

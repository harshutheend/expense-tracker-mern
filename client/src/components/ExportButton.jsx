import { saveAs } from "file-saver";

function ExportButton({ expenses }) {
  const exportCSV = () => {
    if (expenses.length === 0) {
      alert("No expenses to export");
      return;
    }

    const headers = ["Title", "Category", "Amount", "Date"];

    const rows = expenses.map((expense) => [
      expense.title,
      expense.category,
      expense.amount,
      new Date(expense.createdAt).toLocaleDateString("en-IN"),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "expenses.csv");
  };

  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={exportCSV}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold"
      >
        Export CSV
      </button>
    </div>
  );
}

export default ExportButton;

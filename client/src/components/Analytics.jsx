function SummaryCards({ expenses }) {
  const today = new Date();

  let todayExpense = 0;
  let weekExpense = 0;
  let monthExpense = 0;
  let totalExpense = 0;

  expenses.forEach((expense) => {
    const date = new Date(expense.createdAt);

    totalExpense += expense.amount;

    if (date.toDateString() === today.toDateString()) {
      todayExpense += expense.amount;
    }

    const diff = (today - date) / (1000 * 60 * 60 * 24);

    if (diff <= 7) {
      weekExpense += expense.amount;
    }

    if (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      monthExpense += expense.amount;
    }
  });

  const cards = [
    {
      title: "Today",
      value: todayExpense,
      color: "from-green-500 to-green-700",
    },
    {
      title: "This Week",
      value: weekExpense,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "This Month",
      value: monthExpense,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Total",
      value: totalExpense,
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 text-white shadow-lg`}
        >
          <p className="opacity-80">{card.title}</p>

          <h2 className="text-3xl font-bold mt-3">
            ₹ {card.value.toLocaleString("en-IN")}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;

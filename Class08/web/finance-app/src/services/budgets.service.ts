export const fetchBudgets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/budgets");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    // TODO: Handle the error for better UX
  }
};

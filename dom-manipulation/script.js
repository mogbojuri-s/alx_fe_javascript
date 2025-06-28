let quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
  { text: "Stay hungry, stay foolish.", category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" }
];

// Populate category dropdown
function updateCategoryDropdown() {
  const select = document.getElementById("categorySelect");
  const categories = [...new Set(quotes.map(q => q.category))];

  // Clear and repopulate
  select.innerHTML = `<option value="">All Categories</option>`;
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

// Show random quote
function showRandomQuote() {
  const category = document.getElementById("categorySelect").value;
  const filtered = category ? quotes.filter(q => q.category === category) : quotes;
  if (filtered.length === 0) {
    document.getElementById("quoteDisplay").textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * filtered.length);
  document.getElementById("quoteDisplay").textContent = filtered[randomIndex].text;
}

// Add a new quote
function addQuote() {
  const text = document.getElementById("newQuoteText").value.trim();
  const category = document.getElementById("newQuoteCategory").value.trim();

  if (!text || !category) {
    alert("Please enter both quote and category.");
    return;
  }

  quotes.push({ text, category });
  updateCategoryDropdown();
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
  alert("Quote added!");
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
updateCategoryDropdown();

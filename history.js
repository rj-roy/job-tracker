// for testing purpose
// Add an item to history

function addToHistory(item) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.unshift(item); // add to start
    if (history.length > 10) history = history.slice(0, 10); // keep last 10
    localStorage.setItem("history", JSON.stringify(history));
}

// Get history
function getHistory() {
    return JSON.parse(localStorage.getItem("history")) || [];
}

// Clear history (optional for testing)
function clearHistory() {
    localStorage.removeItem("history");
}
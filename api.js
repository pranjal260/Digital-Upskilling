// ✅ Simple API connector to backend
const API_BASE = "http://localhost:5000/api/users";

// Test backend connection on page load
async function checkBackendConnection() {
  try {
    const res = await fetch(`${API_BASE}/test`);
    const data = await res.json();
    console.log("✅ Backend Connected:", data);
  } catch (err) {
    console.error("❌ Backend not reachable:", err);
  }
}

// Run automatically when page loads
window.addEventListener("load", checkBackendConnection);

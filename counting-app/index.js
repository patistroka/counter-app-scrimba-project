const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");
const undoBtn = document.getElementById("undo-btn");
const clearBtn = document.getElementById("clear-all");

let count = 0;

function updateClearButtons() {
  undoBtn.style.opacity = count > 0 ? "1" : "0.5";
  undoBtn.style.cursor = count > 0 ? "pointer" : "default";

  const hasSavedData = saveEl.textContent.trim() !== "Your Journey So Far:";
  clearBtn.style.opacity = hasSavedData ? "1" : "0.5";
  clearBtn.style.cursor = hasSavedData ? "pointer" : "default";
}

function increment() {
  count++;
  countEl.textContent = count;
  updateClearButtons();
}

function save() {
  saveEl.textContent += ` ${count} •`;
  count = 0;
  countEl.textContent = count;
  updateClearButtons();
}

function undo() {
  count = 0;
  countEl.textContent = count;
  updateClearButtons();
}

function clearAll() {
  saveEl.textContent = "Your Journey So Far:";
  undo();
}

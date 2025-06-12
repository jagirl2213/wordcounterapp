const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

function updateCounts() {
  const text = textInput.value;
  // Count words (ignore multiple spaces)
  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  // Count characters (excluding whitespace if you want)
  const chars = text.length;
  wordCount.textContent = `Words: ${words}`;
  charCount.textContent = `Characters: ${chars}`;
}

textInput.addEventListener('input', updateCounts);

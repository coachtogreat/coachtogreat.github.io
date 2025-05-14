
function copyCode(button) {
  const codeBlock = button.closest('.code-block').querySelector('code');
  const textArea = document.createElement('textarea');
  textArea.value = codeBlock.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  
  // Change button text temporarily
  const originalText = button.textContent;
  button.textContent = 'Copied!';
  button.style.background = '#e6f7ff';
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
  }, 2000);
}

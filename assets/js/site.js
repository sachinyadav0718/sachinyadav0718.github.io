
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const year = new Date().getFullYear();
  if (footer && !footer.textContent.includes(year)) {
    const updated = document.createElement('p');
    updated.style.fontSize = '0.8em';
    updated.style.marginTop = '0.5em';
    updated.textContent = `Last updated: ${year}`;
    footer.appendChild(updated);
  }
});

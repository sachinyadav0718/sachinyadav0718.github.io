
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const year = new Date().getFullYear();
  if (footer && !footer.textContent.includes(year)) {
    footer.innerHTML += `<p style="font-size: 0.8em; margin-top: 0.5em;">Last updated: ${year}</p>`;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('Sayfa yüklendi!');

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseover', function() {
      card.style.backgroundColor = '#3F72AF'; // Üzerine gelince renk değişimi
    });

    card.addEventListener('mouseout', function() {
      card.style.backgroundColor = '#DBE2EF'; // Kartın normal arka plan rengi
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
  });
});

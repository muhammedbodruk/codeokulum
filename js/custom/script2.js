document.getElementById('theme-toggle').addEventListener('click', function () {
  const body = document.body;
  if (body.style.getPropertyValue('--background-color') === '#F9F7F7') {
    body.style.setProperty('--background-color', '#344C64');
    body.style.setProperty('--text-color', '#F9F7F7');
    body.style.setProperty('--card-bg-color', '#DBE2EF');
    body.style.setProperty('--card-text-color', '#112D4E');
    body.style.setProperty('--card-hover-bg-color', '#F9F7F7');
    body.style.setProperty('--card-hover-text-color', '#112D4E');
  } else {
    body.style.setProperty('--background-color', '#F9F7F7');
    body.style.setProperty('--text-color', '#344C64');
    body.style.setProperty('--card-bg-color', '#344C64');
    body.style.setProperty('--card-text-color', '#F9F7F7');
    body.style.setProperty('--card-hover-bg-color', '#112D4E');
    body.style.setProperty('--card-hover-text-color', '#F9F7F7');
  }
});

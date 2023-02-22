let title = document.getElementById('title');

const input = document.getElementById('inp');

const btn = document.getElementById('btn');

btn.onclick = () => {
  title.textContent = input.value || 'Ты ничего не ввел. Почему?';
  input.value = '';
}
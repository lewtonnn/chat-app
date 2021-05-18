const ws = new WebSocket('ws://localhost:4000');

const status = document.querySelector('#status');
const messages = document.querySelector('#messages');
const form = document.querySelector('#form');
const input = document.querySelector('#input');

const setStatus = val => {
  status.innerHTML = val;
};

const printMessage = msg => {
  const li = document.createElement('li');

  li.innerHTML = msg;
  messages.appendChild(li);
};

form.addEventListener('submit', e => {
  e.preventDefault();
  ws.send(input.value);
  input.value = '';
});

ws.onopen = () => setStatus('online');
ws.onclose = () => setStatus('disconnected');
ws.onmessage = response => printMessage(response.data);
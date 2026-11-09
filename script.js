const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Prevent selecting a travel date in the past.
const dateInput = document.getElementById('travelDate');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;

document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const data = new FormData(this);
  const message = [
    'Hello Ambigai Tourism! I would like to request a cab booking.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Pickup: ${data.get('pickup')}`,
    `Destination: ${data.get('destination')}`,
    `Travel date: ${data.get('date')}`,
    `Trip type: ${data.get('tripType')}`,
    `Preferred vehicle: ${data.get('vehicle')}`,
    '',
    'Please share availability and the best price. Thank you!'
  ].join('\\n');
  window.open(`https://wa.me/919626172090?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

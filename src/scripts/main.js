import AOS from 'aos';
import 'aos/dist/aos.css';

const eventDate = new Date('2027-08-30T00:00:00-03:00');
const fields = ['days', 'hours', 'minutes', 'seconds'].map((id) => document.getElementById(id));
let countdownInterval;

export function getRemainingTime(now = Date.now()) {
  const total = Math.max(0, Math.floor((eventDate.getTime() - now) / 1000));
  return [Math.floor(total / 86400), Math.floor((total % 86400) / 3600), Math.floor((total % 3600) / 60), total % 60];
}

function updateCountdown() {
  getRemainingTime().forEach((value, index) => {
    fields[index].textContent = String(value).padStart(2, '0');
  });
  if (Date.now() >= eventDate.getTime()) {
    document.getElementById('countdown-message').textContent = 'O grande dia chegou. Feliz aniversário, Mateus!';
    clearInterval(countdownInterval);
  }
}

updateCountdown();
if (Date.now() < eventDate.getTime()) countdownInterval = setInterval(updateCountdown, 1000);

AOS.init({
  duration: 650,
  offset: 60,
  once: true,
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

const countDownDate = new Date("Feb 6, 2023 9:30:00").getTime();

// Aggiorna il conto alla rovescia ogni secondo
const x = setInterval(function () {
  // Ottieni la data e l'ora attuale
  const now = new Date().getTime();

  // Calcola la distanza tra la data attuale e la data di scadenza
  const distance = countDownDate - now;

  // Calcola i giorni, le ore, i minuti e i secondi
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra il conto alla rovescia
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Se il conto alla rovescia è finito, scrivi "Completato"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("title").innerHTML = "Completato";
  }
}, 1000);

// ESEMPIO 1: PASTA
// titleEl.innerHTML = "Butta la pasta!";
// let secondsPasta = 5;
// buttaLaPasta();
// const clockPasta = setInterval(buttaLaPasta, 1000);
// function buttaLaPasta() {
// 	secondsPasta--;
// 	secondsEl.innerHTML = (secondsPasta < 10) ? '0' + secondsPasta : secondsPasta;
// 	if (secondsPasta <= 0) {
// 		clearInterval(clockPasta);
// 		confetti({
// 			particleCount: 100,
// 			spread: 160
// 		});
// 	}
// }

// ESEMPIO 2: CRONOMETRO
// titleEl.innerHTML = "Cronometro";
// let totalSeconds = 100000;
// const clockCronometro = setInterval(stampaTempoTrascorso, 1000);
// stampaTempoTrascorso();
// function stampaTempoTrascorso() {
// 	++totalSeconds;

// 	const seconds = totalSeconds % 60;
// 	const minutes = parseInt((totalSeconds / 60) % 60);
// 	const hours = parseInt((totalSeconds / 60 / 60) % 24);
// 	const days = parseInt((totalSeconds / 60 / 60 / 24));

// 	secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
// 	minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
// 	hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
// 	daysEl.innerHTML = (days < 10) ? "0" + days : days;
// }

// ESEMPIO 3: OROLOGIO
// stampaOraAttuale()
// const clockOrologio = setInterval(stampaOraAttuale, 1000);
// titleEl.innerHTML = "Orologio";
// function stampaOraAttuale() {
// 	const now = new Date();

// 	const seconds = now.getSeconds() // Get the second (0-59)
// 	const minutes = now.getMinutes() // Get the minute (0-59)
// 	const hours = now.getHours() //Get the hour (0-23)
// 	const days = now.getDay() // Get the day as number (0-6)

// 	secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
// 	minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
// 	hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
// 	daysEl.innerHTML = (days < 10) ? "0" + days : days;
// }

// ESEMPIO 4: DATES MILLISECONDS
// const now = new Date();
// const tomorrow = new Date("2023-02-04 12:00");

// console.log("today: " + now.getTime());
// console.log("tomorrow: " + tomorrow.getTime());
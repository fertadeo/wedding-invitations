const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const weddingDate = new Date(`April 23 ${currentYear } 18:00:00`);

function updateCountdownTime() {
  const currentTime = new Date();
  const diff = weddingDate - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24 );
  const h = Math.floor(diff / 1000 / 60 / 60 ) % 24; 
  const m = Math.floor(diff / 1000 / 60 ) % 60; 
  const s = Math.floor(diff / 1000 ) % 60; 

  days.innerHTML = d; 
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s; 
}

// updateCountdownTime();
refreshInterval = setInterval(updateCountdownTime, 1000)
clearInterval(refreshInterval)




// Modal

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


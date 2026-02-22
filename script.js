function revealTicket() {
  document.getElementById("ticketBox").classList.remove("hidden");
}

// Fade in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

function startReveal() {
  document.querySelector(".ticket-intro").style.display = "none";
  document.getElementById("revealStage").classList.remove("hidden");

  document.body.classList.add("sunset-mode");

  music.volume = 0;
  music.play();

  fadeMusicIn();
}

function showTicket() {
  document
    .getElementById("ticketImageContainer")
    .classList.remove("hidden");

  document.body.classList.add("ending-mode");

  setTimeout(scrollToTopCinematic, 12000);
}

const music = document.getElementById("bgMusic");

function startReveal() {
  document.querySelector(".ticket-intro").style.display = "none";
  document.getElementById("revealStage").classList.remove("hidden");

  music.volume = 0;
  music.play();

  fadeMusicIn();
}

function showTicket() {
  document
    .getElementById("ticketImageContainer")
    .classList.remove("hidden");
}

// smooth volume fade-in
function fadeMusicIn() {
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.6) {
      volume += 0.02;
      music.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

function scrollToTopCinematic() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
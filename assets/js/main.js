/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

/* ----- DOWNLOAD FUNCTION ----- */
function downloadFile() {
  window.open("assets/documents/Guilherme-Milani-CV.pdf")
}

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText", {
    strings : ["Hello, I'm Guilherme.", "Full Stack Developer.", "Creative Programming.", "Computer Science Student.", "Machine Learning Researcher.", "Culturally Engaged.", "Welcome to my portfolio."],
    loop : true,
    typeSpeed : 55,
    backSpeed : 25,
    backDelay : 900,
  })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })

/* -- HOME -- */
  sr.reveal('.featured-text-card', {})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
  sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay:100})

/* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */
  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');
      
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      } else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

/* ----- ROTATE NAV BAR LOGO ----- */
  gsap.registerPlugin(ScrollTrigger);

  gsap.set('#nav-logo-img', {xPercent:-50});

  var rotate = gsap.timeline({
    scrollTrigger:{
      trigger: "#container",
      pin: true,
      scrub:0.2,
      start: 'top top',
      end:'+=10000',
    }
  })
  .to('#nav-logo-img', {
    rotation:360*5,
    duration:1, ease:'none',
  })


/* ----- COLORED LINES ART CANVAS ----- */
const canvas = document.getElementById('the-art');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let i,
  j,
  step = 20;

let randomness = 60;
let colorSpace = 120;

function drawLines() {
  const lines = [];
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i <= canvasHeight; i += step) {
    const line = [];
    for (j = 0; j <= canvasWidth; j += step) {
      const horizontalRandomness = j > canvasWidth / 2 ? canvasWidth - j : j;
      const rand =
        Math.random() * randomness * horizontalRandomness / canvasWidth;
      line.push({ x: j, y: i + rand });
    }
    lines.push(line);
  }

  for (i = 0; i < lines.length; i++) {
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);
    for (j = 0; j < lines[i].length; j++) {
      context.lineTo(lines[i][j].x, lines[i][j].y);
    }
    context.strokeStyle = `hsl(${step *
      i /
      canvasHeight *
      colorSpace}, 100%, 50%)`;
    context.stroke(); 
  }

  colorSpace += 20;
}

setInterval(drawLines, 200);

/* ----- RADIO FUNCTIONS ----- */

let player = document.getElementById("player");
function play() {
  player.volume = 0.2;
  player.play();
}
function pause() {
  player.pause();
}
function decrease_vol() {
  player.volume -= 0.1;
}
function increase_vol() {
  player.volume += 0.1;
}
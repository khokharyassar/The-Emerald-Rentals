// navbar
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
  });
});

// slider
class Slider {
  constructor(sliderId) {
    this.sliderId = sliderId;
    this.slides = document.querySelectorAll(`#${sliderId} .mySlides`);
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    let i;
    if (n > this.slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.slides.length }
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slides[this.slideIndex - 1].style.display = "block";
  }
}

let slider1 = new Slider('slider1');
let slider2 = new Slider('slider2');

function plusSlides(n, sliderId) {
  if (sliderId === 'slider1') {
    slider1.plusSlides(n);
  } else if (sliderId === 'slider2') {
    slider2.plusSlides(n);
  }
}


// questions
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      accordions.forEach((acc) => {
        if (acc !== this) {
          acc.classList.remove("active");
          acc.nextElementSibling.style.display = "none";
        }
      });
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});

// enquire, form

document.getElementById('form-reveal-btn').addEventListener('click', function () {
  var formHolder = document.getElementById('cta-form-holder');
  formHolder.style.display = (formHolder.style.display === 'none' || formHolder.style.display === '') ? 'block' : 'none';
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  var formHolder = document.getElementById('cta-form-holder');
  var successContainer = document.getElementById('contact-page-success-container');

  // Simulate form submission delay
  setTimeout(function () {
    formHolder.style.display = 'none'; // Hide the form
    successContainer.style.display = 'block'; // Show the thank you message
  }, 500); // Adjust the delay as needed
});


// privacy policy});
document.addEventListener("DOMContentLoaded", () => {
  // Get the modals
  var termsModal = document.getElementById("terms-modal");
  var privacyModal = document.getElementById("privacy-modal");

  // Get the links that open the modals
  var termsLink = document.getElementById("terms-link");
  var privacyLink = document.getElementById("privacy-link");

  // Get the <span> elements that close the modals
  var spans = document.getElementsByClassName("close");

  // When the user clicks the link, open the modal
  termsLink.onclick = function () {
    termsModal.style.display = "block";
  };

  privacyLink.onclick = function () {
    privacyModal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  for (let span of spans) {
    span.onclick = function () {
      this.parentElement.parentElement.style.display = "none";
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == termsModal) {
      termsModal.style.display = "none";
    }
    if (event.target == privacyModal) {
      privacyModal.style.display = "none";
    }
  };
});

// Fade Effect
document.addEventListener
const options = {
  threshold: 0.1,
};

const observor = new
  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      // else{
      //     entry.target.classList.remove('show');
      // }
    });
  }, options);

const para = document.querySelectorAll('div');
const para1 = document.querySelectorAll('a');
const para2 = document.querySelectorAll('h2');
const para4 = document.querySelectorAll('h3');
const para3 = document.querySelectorAll('p');

para.forEach((div) => {
  observor.observe(div);
});

para1.forEach((a) => {
  observor.observe(a);
});

para2.forEach((h2) => {
  observor.observe(h2);
});

para3.forEach((p) => {
  observor.observe(p);
});

para4.forEach((h3) => {
  observor.observe(h3);
});
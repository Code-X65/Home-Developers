const fadeInElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeInElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('[data-animate]');

  const animateOnScroll = () => {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight);

      if (inView) {
        element.classList.add(element.getAttribute('data-animate'));
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on page load
});

// Listen for scroll and resize events
window.addEventListener('scroll', checkFadeIn);     
window.addEventListener('resize', checkFadeIn);


// Check on page load
window.addEventListener('DOMContentLoaded', checkFadeIn);

// typewritter
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('[data-animate]');

  const animateOnScroll = () => {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight);

      if (inView) {
        element.classList.add(element.getAttribute('data-animate'));
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on page load
});
// number counting  
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');

  const animateOnScroll = () => {
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight);

      if (inView && !counter.classList.contains('visible_show')) {
        counter.classList.add('visible_show');
        countUp(counter);
      }
    });
  };

  const countUp = (element) => {
    const target = +element.getAttribute('data-target');
    const duration = 2000;
    const increment = target / (duration / 16);

    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on page load
});
// const contactBtn = document.querySelector('.btn_on-hover');
// const inputMessage =document.querySelector('.input_message')

// function popup(){
//   if(inputMessage=== ''){
//     alert('Kindly input a message')
//   }else{
//     alert('Will get bck to you')
//   }
// }


// contactBtn.addEventListener('click', popup)

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const emailAddress = document.getElementById('emailAddress').value.trim();
  const message = document.getElementById('message').value.trim();

  if (fullName === '' || phoneNumber === '' || emailAddress === '' || message === '') {
      alert('Please fill in all fields.');
      return;
  }else{
    alert("Thank you we will get back to you")
  }

  // Basic validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailAddress)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Send form data to the server
  fetch('/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullName, phoneNumber, emailAddress, message })
  })
  .then(response => response.text())
  .then(data => {
      alert(data);
      // Reset form
      document.getElementById('contactForm').reset();
  })
  .catch(error => {
      alert('Error sending message: ' + error.message);
  });
});
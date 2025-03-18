document.querySelectorAll('.order-now-btn, .pop-order-btn, .button-33, .order-now-btn-fp, .get-ur-bag-btn, .button-33').forEach(button => {
  button.addEventListener('click', () => {
    const orderNowSection = document.getElementById('order-now');

    // Scroll to the "Order Now" section
    orderNowSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Add the glow effect class
    orderNowSection.classList.add('glow-effect');

    // Remove the glow effect after a certain period (e.g., 3 seconds)
    setTimeout(() => {
      orderNowSection.classList.remove('glow-effect');
    }, 3000);
  });
});

/////////////////////////////////
document.querySelector('.header-right p:nth-child(1)').addEventListener('click', () => {
  const productsSection = document.getElementById('our-products');
  productsSection.scrollIntoView({ behavior: 'smooth' });
  productsSection.classList.add('glow-effect');
  setTimeout(() => {
    productsSection.classList.remove('glow-effect');
  }, 3000);
});

document.querySelector('.header-right p:nth-child(2)').addEventListener('click', () => {
  const aboutUsSection = document.getElementById('about-us');
  aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  aboutUsSection.classList.add('glow-effect');
  setTimeout(() => {
    aboutUsSection.classList.remove('glow-effect');
  }, 3000);
});

document.querySelector('.header-right p:nth-child(3)').addEventListener('click', () => {
  const locationSection = document.getElementById('our-location');
  locationSection.scrollIntoView({ behavior: 'smooth' });
  locationSection.classList.add('glow-effect');
  setTimeout(() => {
    locationSection.classList.remove('glow-effect');
  }, 3000);
});

document.querySelectorAll('.order-now-btn, .pop-order-btn, .button-33').forEach(button => {
  button.addEventListener('click', () => {
    const orderNowSection = document.getElementById('order-now');
    orderNowSection.scrollIntoView({ behavior: 'smooth' });
    orderNowSection.classList.add('glow-effect');
    setTimeout(() => {
      orderNowSection.classList.remove('glow-effect');
    }, 3000);
  });
});

'use strict';
let countUp = 1;
document
  .querySelector(`.sec__${countUp}`)
  .classList.add('display__content__child');

let x = setInterval(function () {
  countUp += 1;
  if (countUp === 4) {
    countUp = 1;
  }
  const allContentChild = document.querySelectorAll('.section__content__child');
  allContentChild.forEach((ele) => {
    if (ele.classList.contains('display__content__child')) {
      ele.classList.remove('display__content__child');
    }
  });
  document
    .querySelector(`.sec__${countUp}`)
    .classList.add('display__content__child');
}, 10000);

const linkToContact = document.querySelectorAll('.link__to__contact');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

const counter1 = function () {
  document.querySelector(
    '.satisfy__clients'
  ).innerHTML = `0${count1}<span class="plus">+</span>`;
  count1 += 1;

  if (count1 == 7) {
    clearInterval(countCount1);
  }
};

linkToContact.forEach((ele) =>
  ele.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth',
    });
  })
);

const updates = document.querySelector('.update');

const takeNote = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    const countFunctions = function () {
      let countCount1 = setInterval(function () {
        count1 += 1;
        document.querySelector(
          '.satisfy__clients'
        ).innerHTML = `0${count1}<span class="plus">+</span>`;

        if (count1 === 7) {
          clearInterval(countCount1);
        }
      }, 500);

      let countCount2 = setInterval(function () {
        count2 += 1;
        document.querySelector(
          '.developers'
        ).innerHTML = `0${count2}<span class="plus">+</span>`;

        if (count2 === 2) clearInterval(countCount2);
      }, 500);

      let countCount3 = setInterval(function () {
        count3 += 1;
        document.querySelector(
          '.modern__tools'
        ).innerHTML = `0${count3}<span class="plus">+</span>`;

        if (count3 === 5) clearInterval(countCount3);
      }, 500);

      let countCount4 = setInterval(function () {
        count4 += 1;
        document.querySelector(
          '.active__project'
        ).innerHTML = `0${count4}<span class="plus">+</span>`;
        if (count4 === 9) clearInterval(countCount4);
      }, 500);
    };
    setTimeout(countFunctions, 1000);
    observer.unobserve(updates);
  }
};

const observeUpdate = new IntersectionObserver(takeNote, {
  root: null,
  threshold: 0,
  rootMargin: '150px',
});

observeUpdate.observe(updates);

let width = window.innerWidth;
const testimonial = document.querySelectorAll('.testimonial');
let slideNum = 0;
const slideLength = testimonial.length;

const slideOff = function (slide) {
  testimonial.forEach((ele, i) => {
    ele.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (slideNum === slideLength - 1) {
    slideNum = 0;
  } else {
    slideNum++;
  }

  slideOff(slideNum);

  //   if (width <= 1000) {
  //     slideOff(0);
  //     // console.log('ok');
  //   }
};
window.addEventListener('load', function () {
  if (width <= 1000) {
    slideOff(0);
    setInterval(nextSlide, 10000);
  } else return;
});
// window.addEventListener('resize', function () {
//   console.log('ggg');
//   if (width <= 1000) {
//     slideOff(0);
//     let x = setInterval(nextSlide, 10000);
//   } else {
//     window.clearInterval(x);
//     testimonial.forEach((ele) => {
//       ele.style.transform = `translateX(100%)`;
//     });
//     return;
//   }
// });

document.querySelector('.close__msg').addEventListener('click', function () {
  document.querySelector('.welcome__msg').style.display = 'none';
});

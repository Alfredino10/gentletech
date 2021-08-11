const toggleBtn = document.querySelector('.toggle__btn');
const mainNavItems = document.querySelector('.main__nav__items');
const scrollToTopBtn = document.querySelector('.scroll__to__top__btn');
toggleBtn.addEventListener('click', function () {
  mainNavItems.classList.add('display__main__nav__items');
});

const siteHeader = document.querySelector('.site__header');

mainNavItems.addEventListener('click', function (e) {
  e.target.classList.remove('display__main__nav__items');
});

//scrolling to top
scrollToTopBtn.addEventListener('click', function () {
  document
    .querySelector('#site__header')
    .scrollIntoView({ behavior: 'smooth' });
});

//displaying and hiding scroll to top btn
const showBtn = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    scrollToTopBtn.classList.add('display__scroll__to__top__btn');
  } else {
    scrollToTopBtn.classList.remove('display__scroll__to__top__btn');
  }
};

const headerObserver = new IntersectionObserver(showBtn, {
  root: null,
  threshold: 0,
});
headerObserver.observe(siteHeader);

const navOpacity = function (e) {
  if (e.target.classList.contains('main__link')) {
    const targetEle = e.target;
    const siblings = targetEle
      .closest('.site__header')
      .querySelectorAll('.main__link');

    siblings.forEach((ele) => {
      if (ele !== targetEle) {
        ele.style.opacity = this;
      }
    });
  }
};

siteHeader.addEventListener('mouseover', navOpacity.bind(0.5));
siteHeader.addEventListener('mouseout', navOpacity.bind(1));

const newDate = new Date().getFullYear();

document.querySelector('.copyright__date').textContent = newDate;

import gsap from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

// Init CSSRulePlugin
gsap.registerPlugin(CSSRulePlugin);

// Declarations
const tl = gsap.timeline();
const body = document.querySelector('body');
const main = document.querySelector('.main');
//
const loader = document.querySelector('.preloader');
const loaderMiddle = document.querySelector('.preloader__container-middle');
//
const loaderImg = CSSRulePlugin.getRule(
  '.preloader__container-middle--image:after'
);
const loaderImgTag = document.querySelector(
  '.preloader__container-middle--image img'
);
//
const loaderMTitleW = document.querySelector(
  '.preloader__container-middle--title'
);
const loaderMTitle = CSSRulePlugin.getRule(
  '.preloader__container-middle--title::after'
);
const loaderMTitleH = document.querySelector(
  '.preloader__container-middle--title h1'
);
//
const loaderCounter = document.querySelector('.preloader__container--counter');
const loaderCounterP = document.querySelector(
  '.preloader__container--counter p'
);
//
const loaderCaption = document.querySelector('.preloader__container--caption');
const loaderCaptionP = document.querySelector(
  '.preloader__container--caption p'
);

// Set:
tl.set(loaderImg, { height: '0%' });
tl.set(loaderImgTag, { scale: 1 });
//
tl.set(loaderMTitle, { height: '20%' });
tl.set(loaderMTitleH, { y: 0 });
tl.set(loaderMTitleW, { autoAlpha: 0 });
//
tl.set(loaderMiddle, { autoAlpha: 1 });
//
tl.set(loaderCounter, { autoAlpha: 1 });
//
tl.set(loaderCaption, { autoAlpha: 1 });
tl.set(loaderCaptionP, { y: 0 });

tl.from(loaderMiddle, 0.5, {
  autoAlpha: 0,
  delay: 0.2,
  ease: 'power2.easeInOut',
});
tl.from(loaderImg, 1, {
  height: '100%',
  delay: -0.2,
  ease: 'easeIn',
});
tl.from(loaderImgTag, 1, {
  scale: 1.5,
  ease: 'easeIn',
  delay: -1,
});
//
tl.from(loaderMTitleW, 0.5, {
  autoAlpha: 1,
  delay: -0.5,
  ease: 'power2.easeIn',
});
tl.from(loaderMTitle, 0.5, {
  height: '0%',
  delay: -0.5,
  ease: 'power2.easeIn',
});
tl.from(loaderMTitleH, 0.5, {
  y: -100,
  delay: -0.4,
  ease: 'power2.easeIn',
});
//
tl.from(loaderCaption, 0.5, {
  autoAlpha: 0,
  delay: -0.2,
  ease: 'power2.easeInOut',
});
tl.from(loaderCaptionP, 0.8, {
  y: 200,
  delay: -0.8,
  ease: 'power2.easeIn',
});
//
tl.from(loaderCounter, 0.5, {
  autoAlpha: 0,
  delay: -0.4,
  ease: 'power2.easeInOut',
});
tl.to(loaderCounterP, 4, {
  innerText: 100,
  snap: {
    innerText: 10,
  },
  ease: 'power2.easeIn',
  delay: -0.4,
});
//
tl.to(loaderCounter, 0.5, {
  autoAlpha: 0,
  delay: 0.4,
  ease: 'power2.easeInOut',
});
//
tl.to(loaderCaptionP, 0.8, {
  y: 200,
  delay: -0.4,
  ease: 'power2.easeIn',
  autoAlpha: 0,
});
tl.to(loaderCaption, 0.5, {
  autoAlpha: 0,
  delay: 0.4,
  ease: 'power2.easeInOut',
});
//
tl.to(loaderMTitleH, 0.4, {
  y: -100,
  delay: -1.5,
  autoAlpha: 0,
  ease: 'power2.easeIn',
});
tl.to(loaderMTitle, 0.4, {
  height: '0%',
  delay: -1.4,
  autoAlpha: 0,
  ease: 'power2.easeIn',
});
tl.to(loaderMTitleW, 0.4, {
  autoAlpha: 1,
  delay: -0.4,
  ease: 'power2.easeIn',
});
//
tl.to(loaderImgTag, 1, {
  scale: 1.5,
  ease: 'easeIn',
  delay: -1.5,
});
tl.to(loaderImg, 1, {
  height: '100%',
  delay: -1.4,
  autoAlpha: 0,
  ease: 'easeIn',
});
tl.to(loaderMiddle, 0.4, {
  autoAlpha: 0,
  delay: -0.4,
  ease: 'power2.easeInOut',
  onComplete: () => {
    tl.to(loader, 1, {
      height: '0%',
      ease: 'power4.easeOut',
    });
    tl.to(loader, {
      autoAlpha: 0,
      ease: 'power4.easeOut',
    });
  },
});

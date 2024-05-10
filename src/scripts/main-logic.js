// reg libs
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5, 
    effects: true
  });

  gsap.fromTo('.hero-section', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: '100',
      end: '920',
      scrub: true
    }
  });

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')

  itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: 300 - item,
        end:'bottom center'
      }
    })
  });

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

  itemsRight.forEach(item => {
    gsap.fromTo(item, { x: 100, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: 300 - item,
        end:'bottom center'
      }
    })
  })


};
document.addEventListener("DOMContentLoaded", function () {

   // Custom JS

  'use strict';

  const tabs = () => {
    const btnLamp = document.querySelectorAll('.choose-block__items'),
          rightLamp = document.querySelector('.main__right-lamp'),
          leftLamp = document.querySelector('.img-lamp'),
          blockLeftLamp = document.querySelector('.choose-img');

    let materials = document.querySelector('.material'),
        dimensions = document.querySelector('.dimension'),
        weight = document.querySelector('.weight'),
        electr = document.querySelector('.electr');

    const data = [
      {
        material: 'Copper',
        dimension: 'H 33 x W 15 x D 15',
        weight: '2.5 kg',
        electr: 'LED 10W | G9 | 220-240V | 50 Hz',
        img: 'img/Lamp1.png',
        imgTwo: 'img/Lamp - 1.png',
        style: '42%'
      },
      {
        material: 'Silver',
        dimension: 'H 42 x W 16 x D 18',
        weight: '2.9 kg',
        electr: 'LED 10W | G9 | 220-240V | 50 Hz',
        img: 'img/Lamp2.png',
        imgTwo: 'img/Lamp - 3.png',
        style: '50%'
      },
      {
        material: 'Metal',
        dimension: 'H 45 x W 12 x D 12',
        weight: '2.4 kg',
        electr: 'LED 10W | G9 | 220-240V | 50 Hz',
        img: 'img/Lamp3.png',
        imgTwo: 'img/Lamp - 2.png',
        style: '50%'
      }
    ]

    const deactivate = () => {
      btnLamp.forEach(btn => btn.classList.remove('active-lamp'))
    };

    btnLamp.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (!btn.classList.contains('active-lamp')) {
          deactivate();
          btn.classList.add('active-lamp');
          materials.textContent = data[i].material;
          dimensions.textContent = data[i].dimension;
          weight.textContent = data[i].weight;
          electr.textContent = data[i].electr;
          leftLamp.src = data[i].img;
          blockLeftLamp.style.left = data[i].style;
          rightLamp.src = data[i].imgTwo;
        };
      });
    });

  };

  tabs();

});

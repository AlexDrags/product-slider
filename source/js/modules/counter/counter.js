const panelByu = document.querySelectorAll('.card__byu-info');

for (const panel of panelByu) {
  panel.addEventListener('click', (event)=>{
    let target = event.target;
    let currentTarget = event.currentTarget;
    if (target.textContent === '-' && currentTarget.querySelector('.card__quantity').value > 0) {
      currentTarget.querySelector('.card__quantity').value -= 1;
    }

    if (target.textContent === '+' && currentTarget.querySelector('.card__quantity').value >= 0) {
      currentTarget.querySelector('.card__quantity').value++;
    }
  });
}

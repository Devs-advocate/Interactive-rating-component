const howDidWeDo = document.querySelector('.how-did-we-do');
const thankYou = document.querySelector('.thank-you');
const choices = document.querySelectorAll('.option');
// const choices = document.querySelectorAll('.option');
// const button = document.querySelector('#submit');
const reviewForm = document.querySelector('#review-form');
const rating = document.querySelector('#rating');
let selection = '';

choices.forEach((element) => {
  element.addEventListener('click', handleSelect);
});

reviewForm.addEventListener('submit', handleSubmit);

function handleSelect(e) {
  console.log(e.target);
  if (selection === e.target.value) {
    selection = '';
    e.target.style.backgroundColor = 'hsl(0, 0%, 30%)';
    e.target.style.color = 'hsl(217, 12%, 63%)';
    return;
  } else {
    selection = e.target.value;
    e.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
    e.target.style.color = 'hsl(213, 19%, 18%)';
    choices.forEach((element) => {
      if (element.value !== selection) {
        element.style.backgroundColor = 'hsl(0, 0%, 30%)';
        element.style.color = 'hsl(217, 12%, 63%)';
      }
    });
  }
  console.log(selection);
  return;
}

function handleSubmit(e) {
  e.preventDefault();
  if (selection === '') {
    return;
  }
  changeView();
  rating.innerText = `${selection}`;
  selection = '';
  return;
}

function changeView() {
  howDidWeDo.style.display === 'none'
    ? (howDidWeDo.style.display = 'flex')
    : (howDidWeDo.style.display = 'none');
  thankYou.style.display === 'none'
    ? (thankYou.style.display = 'flex')
    : (thankYou.style.display = 'none');
}

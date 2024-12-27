let counter = 0;
let incrementValue = 1;
let decrementValue = 1;

const counterValue = document.getElementById('counter-value');
const incrementButton = document.querySelector('.increment-btn');
const decrementButton = document.querySelector('.decrement-btn');
const resetButton = document.querySelector('.reset-btn');
const incrementInput = document.getElementById('increment');
const decrementInput = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    if(counter >= 10){
        alert("Counter is already at maximum value");
    }
    else{
        counter += incrementValue;;
        counterValue.innerText = counter;
    }
});

decrementButton.addEventListener('click', () => {
    if(counter<=0){
        alert("counter can't be negative");
    }
    else{
        counter -= decrementValue;;
        counterValue.innerText = counter;
    }
});

incrementInput.addEventListener('change', () => {
    incrementValue = parseInt(incrementInput.value, 10);
});

decrementInput.addEventListener('change', () => {
    decrementValue = parseInt(decrementInput.value, 10);
});

resetButton.addEventListener('click', () => {
    if(confirm("Are yoy want to reset ") == true){
    counter = 0;
    counterValue.innerText = counter;
    return;
    }
});

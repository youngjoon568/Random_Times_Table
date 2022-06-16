const $form = document.querySelector("form");
const $input = document.querySelector(".textInput");
const $problem = document.querySelector(".problem");
const $result = document.querySelector(".result");
let num1 = parseInt(Math.random() * 9 + 1);
let num2 = parseInt(Math.random() * 9 + 1);

num1 = num1 === 1 ? 2 : num1;
num2 = num2 === 1 ? 2 : num2;

const $problemText = document.createElement("p");

$problemText.textContent = `${num1} x ${num2}는?`;
$problem.appendChild($problemText);


$form.addEventListener("submit", e => {
    e.preventDefault();

    if(Number($input.value) === num1 * num2) {
        $result.textContent = "정답!";
    } else {
        $result.textContent = "땡!";
    }
    $input.value = "";
})
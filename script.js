let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// функция, при клике открывает модальное окно

btn.onclick = function() {
    modal.style.display = "block";
}

// функция, при клике закрывает модальное окно

span.onclick = function() {
    modal.style.display = "none";
}

// пользователь кликает вокруг модального окна, не только по кнопке

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
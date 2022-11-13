const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

const dropdown2 = document.querySelector('.dropdown2');

dropdown2.addEventListener('click', () => {
    dropdown2.classList.toggle('active');
});

const dropdown3 = document.querySelector('.dropdown3');

dropdown3.addEventListener('click', () => {
    dropdown3.classList.toggle('active');
});

document.getElementById("open-popup-btn").addEventListener("click", function () {
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
});
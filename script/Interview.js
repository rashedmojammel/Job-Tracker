const buttonElement = document.querySelectorAll(".Interview-btn");

buttonElement.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("Button added");
    });
});

const buttonElement2 = document.querySelectorAll(".Rejected-btn");

buttonElement2.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("Button added 2");
    });
});
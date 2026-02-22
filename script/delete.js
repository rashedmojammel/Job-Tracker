const deleteElement = document.querySelectorAll(".Delete-btn");

deleteElement.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("delete Button added");

    const job1 = document.getElementById("job-list1");
    const job = job1.removeElement()

    

    });
});

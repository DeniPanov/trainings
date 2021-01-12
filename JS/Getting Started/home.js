let btn = document.getElementById("see-review");

btn.addEventListener("click", function() {

    const review = document.getElementById("review");

    if (review.classList.contains("d-none")) {
        review.classList.remove("d-none");
        btn.textContent = "Closed";
    } else {
        review.classList.add("d-none");
        btn.textContent = "See";
    }

});

showMessage(Math.random());
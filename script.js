document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        window.open(e.target.dataset.url, "_blank");
    }
});

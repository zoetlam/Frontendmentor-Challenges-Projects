const radioBtn = document.querySelectorAll(".radio-input");
radioBtn.forEach(box => {
    box.addEventListener("click", () => {
        // Remove 'selected' class from all boxes
        radioBtn.forEach(b => b.classList.remove("selected"));

        // Select the radio button inside this box
        const input = box.querySelector("input");
        input.checked = true;

        // Add 'selected' class to the clicked box
        box.classList.add("selected");
    });
});

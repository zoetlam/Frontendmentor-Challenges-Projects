document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mortgageForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default submit

    const isValid = validateInputs();

    if (isValid) {
      form.submit(); // real submit after form is validated
    }
  });

  function validateInputs() {
    let isValid = true;

    const amount = document.getElementById("amount");
    const term = document.getElementById("term");
    const interest = document.getElementById("interest");


    ["amount-error", "term-error", "interest-error"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });

    // check input field
    if (!amount.value.trim()) {
      setError(amount, "amount-error", "This field is required");
      isValid = false;
    }

    if (!term.value.trim()) {
      setError(term, "term-error", "This field is required");
      isValid = false;
    }

    if (!interest.value.trim()) {
      setError(interest, "interest-error", "This field is required");
      isValid = false;
    }

    return isValid;
  }

  function setError(inputEl, errorId, message) {
    inputEl.classList.add("input-error");
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = message;
    }
  }
});

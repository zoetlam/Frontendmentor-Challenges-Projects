document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mortgageForm");
  if (!form) return; // Ngăn lỗi nếu form không tồn tại

  // Gán lại dữ liệu nếu có (dành cho trang /submit)
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    if (savedData.amount) document.getElementById("amount").value = savedData.amount;
    if (savedData.term) document.getElementById("term").value = savedData.term;
    if (savedData.interest) document.getElementById("interest").value = savedData.interest;

    if (savedData.mortgageType === "repayment") {
      document.getElementById("mtype1").checked = true;
    } else if (savedData.mortgageType === "interest-only") {
      document.getElementById("mtype2").checked = true;
    }
  }

  // Bắt submit form
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      // Lưu dữ liệu
      const formData = {
        amount: document.getElementById("amount").value,
        term: document.getElementById("term").value,
        interest: document.getElementById("interest").value,
        mortgageType: document.querySelector("input[name='mortgageType']:checked").value
      };
      localStorage.setItem("formData", JSON.stringify(formData));

      // Submit thật
      form.submit();
    }
  });

  function validateInputs() {
    let isValid = true;
    const amount = document.getElementById("amount");
    const term = document.getElementById("term");
    const interest = document.getElementById("interest");

    // Reset lỗi
    [amount, term, interest].forEach(input => input.classList.remove("input-error"));
    ["amount-error", "term-error", "interest-error"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });

    // Kiểm tra rỗng
    if (!amount.value.trim()) {
      setError(amount, "amount-error", "Please enter mortgage amount");
      isValid = false;
    }
    if (!term.value.trim()) {
      setError(term, "term-error", "Please enter mortgage term");
      isValid = false;
    }
    if (!interest.value.trim()) {
      setError(interest, "interest-error", "Please enter interest rate");
      isValid = false;
    }

    return isValid;
  }

  function setError(inputEl, errorId, message) {
    inputEl.classList.add("input-error");
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.textContent = message;
  }
});

document.querySelector(".clear-link").addEventListener("click", function () {
  document.getElementById("mortgageForm").reset();      // Xoá dữ liệu input
  localStorage.removeItem("formData");                  // Xoá dữ liệu đã lưu
});

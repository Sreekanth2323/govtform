
document.addEventListener("DOMContentLoaded", function () {
  // Inline Validation
  const fullname = document.getElementById("fullname");
  const fullnameError = document.getElementById("fullnameError");

  fullname.addEventListener("blur", () => {
    if (fullname.value.trim() === "") {
      fullnameError.textContent = "Fullname is required.";
      fullname.style.border = "1px solid red";
    } else {
      fullnameError.textContent = "";
      fullname.style.border = "1px solid green";
    }
  });

  // Gender Toggle
  const gender = document.getElementById("gender");
  const otherGenderField = document.getElementById("otherGenderField");

  gender.addEventListener("change", () => {
    if (gender.value === "other") {
      otherGenderField.style.display = "block";
    } else {
      otherGenderField.style.display = "none";
    }
  });
});
const zipData = {
    "560001": { city: "Bangalore", state: "Karnataka" },
    "524201": { city: "Kavali", state: "Andhrapradesh" },
    "520001": { city: "Vijayawada", state: "Andhrapradesh" },
    "600001": { city: "Chennai", state: "Tamil Nadu" }
  };
  document.getElementById("zipcode").addEventListener("input", function () {
    const zip = this.value;
    if (zipData[zip]) {
      document.getElementById("city").value = zipData[zip].city;
      document.getElementById("state").value = zipData[zip].state;
    } else {
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
    }
  });
  const addressInput = document.getElementById("address");
  const charCountDisplay = document.getElementById("charCount");

  addressInput.addEventListener("input", function () {
    charCountDisplay.textContent = this.value.length;
  });


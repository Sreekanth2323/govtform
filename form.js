document.addEventListener("DOMContentLoaded", function () {
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

      const gender = document.getElementById("gender");
      const otherGenderField = document.getElementById("otherGenderField");

      gender.addEventListener("change", () => {
        otherGenderField.style.display = gender.value === "other" ? "block" : "none";
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

      const steps = document.querySelectorAll(".step");
      const progress = document.getElementById("progress");
      const nextBtn = document.getElementById("nextBtn");
      const prevBtn = document.getElementById("prevBtn");
      const form = document.getElementById("govForm");
      let currentStep = 0;

      const showStep = (index) => {
        steps.forEach((step, i) => step.style.display = i === index ? "block" : "none");
        progress.style.width = ((index + 1) / steps.length) * 100 + "%";
        prevBtn.style.display = index === 0 ? "none" : "inline-block";
        nextBtn.textContent = index === steps.length - 1 ? "Submit" : "Next";
      };

      nextBtn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        } else {
          form.submit();
        }
      });

      prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });

      const saveData = () => {
        const data = new FormData(form);
        const json = {};
        data.forEach((value, key) => json[key] = value);
        localStorage.setItem("govFormData", JSON.stringify(json));
      };

      const loadData = () => {
        const saved = JSON.parse(localStorage.getItem("govFormData"));
        if (!saved) return;
        Object.keys(saved).forEach(key => {
          if (form[key]) form[key].value = saved[key];
        });
      };

      setInterval(saveData, 3000);
      loadData();
      showStep(currentStep);
    });
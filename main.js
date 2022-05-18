
//toggle credit card info
const select = document.querySelector("select");
select.addEventListener("change", ()=>{
  const creditInfo = document.querySelector("[data-credit-card-info]");
  const paypalInfo = document.querySelector("[data-paypal-info]");
  if (select.value == "credit") {
    creditInfo.id = "visible"
    paypalInfo.id = "hidden"
    const inputsToDisable = creditInfo.querySelectorAll("input")
    inputsToDisable.forEach(input => {
      input.removeAttribute("disabled");
    });
  }
  if (select.value == "paypal") {
    creditInfo.id = "hidden"
    paypalInfo.id = "visible"
    const inputsToDisable = creditInfo.querySelectorAll("input")
    console.log(inputsToDisable);
    inputsToDisable.forEach(input => {
      input.setAttribute("disabled", "");
    });
  }
});


//update email match pattern on change
const emailEntry = document.querySelector("[data-email-entry]")
emailEntry.addEventListener('change', ()=> {
    const validation = document.querySelector("[data-email-validate]");
    validation.pattern = emailEntry.value;
  });

//update password match pattern on change
const passwordEntry = document.querySelector("[data-password-entry]")
passwordEntry.addEventListener('change', ()=> {
    const validation = document.querySelector("[data-password-validate]");
    validation.pattern = passwordEntry.value;
  });



(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
          
        }, false)
      })
  })()

  
function getInputValue() {
    const inputValLog = document.getElementById("myLog").value;
    const inputValEmail = document.getElementById("myEmail").value;
    const inputValPass = document.getElementById("myPass").value;
    const inputValRepPass = document.getElementById("repeatpass").value;
    const inputValLang = document.getElementById("Lang").value;
  
    let parLog = document.getElementById("logMyLog");
    parLog.textContent = "Логин: " + inputValLog;
    let parEmail = document.getElementById("logMyEmail");
    parEmail.textContent = "Email: " + inputValEmail;
    let parPass = document.getElementById("logMyPass");
    parPass.textContent = "Пароль: " + inputValPass;
    let parRepPass = document.getElementById("logMyRepPass");
    parRepPass.textContent = "Повтор пароля: " + inputValRepPass;
    let parLang = document.getElementById("logLang");
    parLang.textContent = "Язык: " + inputValLang;
  }
  
  const names = document.getElementById("myLog");
  names.addEventListener("focusout", (event) => {
    const resultNames = event.target.value;
    let res = resultNames.match(/[a-zA-Zа-яА-Я -]/g);
    if (resultNames.length === res.length) {
      document.getElementById("myLog").style.background = "green";
    } else {
      document.getElementById("myLog").style.background = "red";
    }
  });
  
  const EMAIL_REGEXP = /([a-zA-Zа-яА-Я])+\@([a-zA-Zа-яА-Я])+\.([a-zA-Zа-яА-Я]){2}/;
  const input = document.getElementById("myEmail");
  
  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }
  
  function onInput() {
    if (isEmailValid(input.value)) {
      document.getElementById("myEmail").style.background = "green";
    } else {
      document.getElementById("myEmail").style.background = "red";
    }
  }
  
  input.addEventListener("focusout", onInput);
  
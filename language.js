i18next.init(
    {
      lng: "en",
      debug: true,
      resources: {
        en: {
          translation: {
            textLogin: "Enter login:",
            textEmail: "Enter email:",
            textPass: "Enter password:",
            textRepPass: "Repeat pessword:",
            textLang: "Language selection:",
            textBtn: "Enter",
            textlogMyLog: "Login:",
            textlogMyEmail: "Email:",
            textlogMyPass: "Password:",
            textlogMyRepPass: "Repeat Password:",
            textlogLang: "Language:",
            textCheckbox:
              "All entered fields are displayed for viewing<br>(mark after click Enter)"
          }
        },
        ru: {
          translation: {
            textLogin: "Введите логин:",
            textEmail: "Введите почту:",
            textPass: "Введите пароль:",
            textRepPass: "Повторите пароль:",
            textLang: "Выберите язык:",
            textBtn: "Войти",
            textlogMyLog: "Логин:",
            textlogMyEmail: "Почта:",
            textlogMyPass: "Пароль:",
            textlogMyRepPass: "Повтор пароля:",
            textlogLang: "Язык:",
            textCheckbox:
              "все введенные поля выведены для просмотра<br>(поставить галочку после нажатия кнопки Войти)"
          }
        }
      }
    },
    function (err, t) {
      document.getElementById("login").innerHTML = t("textLogin");
      document.getElementById("email").innerHTML = t("textEmail");
      document.getElementById("pass").innerHTML = t("textPass");
      document.getElementById("repPass").innerHTML = t("textRepPass");
      document.getElementById("ChangeLang").innerHTML = t("textLang");
      document.getElementById("btn").innerHTML = t("textBtn");
      document.getElementById("logMyLog").innerHTML = t("textlogMyLog");
      document.getElementById("logMyEmail").innerHTML = t("textlogMyEmail");
      document.getElementById("logMyPass").innerHTML = t("textlogMyPass");
      document.getElementById("logMyRepPass").innerHTML = t("textlogMyRepPass");
      document.getElementById("logLang").innerHTML = t("textlogLang");
      document.getElementById("checkbox").innerHTML = t("textCheckbox");
    }
  );
  const sel = document.getElementById("Lang");
  sel.onchange = () => {
    const lan = i18next.language === "en" ? "ru" : "en";
    i18next.changeLanguage(lan, (err, t) => {
      if (err) {
        return console.log("something went wrong loading", err);
      }
      document.getElementById("login").innerHTML = t("textLogin");
      document.getElementById("email").innerHTML = t("textEmail");
      document.getElementById("pass").innerHTML = t("textPass");
      document.getElementById("repPass").innerHTML = t("textRepPass");
      document.getElementById("ChangeLang").innerHTML = t("textLang");
      document.getElementById("btn").innerHTML = t("textBtn");
      document.getElementById("logMyLog").innerHTML = t("textlogMyLog");
      document.getElementById("logMyEmail").innerHTML = t("textlogMyEmail");
      document.getElementById("logMyPass").innerHTML = t("textlogMyPass");
      document.getElementById("logMyRepPass").innerHTML = t("textlogMyRepPass");
      document.getElementById("logLang").innerHTML = t("textlogLang");
      document.getElementById("checkbox").innerHTML = t("textCheckbox");
    });
  };
  
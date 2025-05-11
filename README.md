# Personal-site
### Ролик Александра по [JavaScript валидации форм](https://www.youtube.com/watch?v=4pEfCpJpPTg) 
### Репозиторий по [github JavaScript валидации форм](https://github.com/aleksanderlamkov/js-course/blob/main/39.%20JavaScript%20%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D0%BE%D1%80%D0%BC%20%E2%80%94%20validity%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE%20%D1%83%20%D0%BF%D0%BE%D0%BB%D0%B5%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B.%20%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%20%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D0%B8%20%D1%84%D0%BE%D1%80%D0%BC/script.js)

## Суть проблемы:
Единственная форма (с атрибутом data-js-contact-form-feedback) на сайте отправляется пустой на сервер и сообщение с сервера на почту приходит с пустыми полями, несмотря на все обязательные required input'ы.

FormsValidation.js - валидация форм. В отдельности от ContactFormFeedback.js работает превосходно. Форма не отправляет данные и требует заполнить все поля, т.к. поля и checkbox - required. Работает, как ожидалось.
ContactFormFeedback.js - отправляет данные формы на сервер. Имеет метод onSubmitFeedback, который, по моему мнению, все и ломает, но я могу ошибаться, ведь я не знаю, что ломает форму :(

## Установка и запуск приложения:
В Windows PowerShell:

    cd "путь к файлу, где будет проект без ковычек"
    cd C:\Progects\Site

Затем там же клонировать репозиторий:

    git clone git@github.com:i-matsnev/Personal-site.git

Установить зависимости, ввести команду в терминале открытого проекта:

    npm install

Запустить компилятор Sass:

    npm run sass-watch

Запустить сайт на [localhost:3000](http://localhost:3000/):

    npm start

В браузере открыть ссылку:

    http://localhost:3000/

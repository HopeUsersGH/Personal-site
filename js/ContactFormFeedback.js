const rootSelector = '[data-js-contact-form]'

//код в комментариях в будущем послужит для модального окна
class ContactFormFeedback {
    selectors = {
        root: rootSelector,
        contactFormFeedback: '[data-js-contact-form-feedback]',
        modalThanks: '[data-js-modal-thanks]',
    }

    /*stateClasses = {
        isActive: 'is-active',
    }*/

    constructor(rootElement) {
        this.rootElement = rootElement
        this.contactFormFeedbackElements = this.rootElement.querySelector(this.selectors.contactFormFeedback)
        //this.modalThanksElements = this.rootElement.querySelector(this.selectors.modalThanks)
        this.bindEvents()
}

    sendFeedback(feedback) {
        fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => response.json())
            .then((data) => {
                console.error("Успешно:", data);
                alert("Успешно отправились данные");
                //this.modalThanksElements.classList.add(this.stateClasses.isActive)
            })
            .catch((error) => {
                console.error("Ошибка:", error);
                alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
            });
    }

    onSubmitFeedback = (e) => {
        this.feedbackFormData = new FormData(e.target);

        this.feedback = Object.fromEntries(this.feedbackFormData);
        console.log('feedback', this.feedback);

        this.sendFeedback(this.feedback);
    }

    bindEvents() {
        this.contactFormFeedbackElements.addEventListener('submit', this.onSubmitFeedback)
    }
}

class ContactFormFeedbackCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((el) => {
            new ContactFormFeedback(el)
        })
    }
}

export default ContactFormFeedbackCollection
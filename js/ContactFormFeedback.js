import FormsValidation from "./FormsValidation.js"
import Modal from "./Modal.js"

const rootSelector = '[data-js-contact-form]'

class ContactFormFeedback{
    selectors = {
        root: rootSelector,
        contactFormFeedback: '[data-js-contact-form-feedback]',
        modalThanks: '[data-js-modal-thanks]',
        modalFail: '[data-js-modal-fail]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.contactFormFeedbackElements = this.rootElement.querySelector(this.selectors.contactFormFeedback)
        this.modalThanksElement = document.querySelector(this.selectors.modalThanks)
        this.modalFailElement = document.querySelector(this.selectors.modalFail)
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
                const modalThanks = new Modal(this.modalThanksElement)
                modalThanks.onShowModal()
                this.contactFormFeedbackElements.reset();
            })
            .catch((error) => {
                console.log('Feedback Failed', error)
                const modalFail = new Modal(this.modalFailElement)
                modalFail.onShowModal()
            });
    }

    onCheckValidated(e) {
        const formsValidation = new FormsValidation()

        const requiredControlElements = [...e.target.elements].filter(({ required }) => required)

        let isFormValid = true

        requiredControlElements.forEach((element) => {
            const isFieldValid = formsValidation.validateField(element)
            if (!isFieldValid) {
                isFormValid = false
            }
        })

        return isFormValid
    }

    onSubmitFeedback = (e) => {
        e.preventDefault()

        if (this.onCheckValidated(e)) {
            this.feedbackFormData = new FormData(e.target)
            this.feedback = Object.fromEntries(this.feedbackFormData)
            this.sendFeedback(this.feedback)
        } else {
            console.log('Форма не валидна')
        }
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
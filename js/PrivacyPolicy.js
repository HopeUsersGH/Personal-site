import Modal from "./Modal.js"

class PrivacyPolicy{
    selectors = {
        link: '[data-js-link-privacy-policy]',
        modalPrivacyPolicy: '[data-js-modal-privacy-policy]',
    }

    constructor() {
        this.linkElement = document.querySelector(this.selectors.link)
        this.modalPrivacyPolicyElement = document.querySelector(this.selectors.modalPrivacyPolicy)
        this.bindEvents()
    }

    onShowPrivacyPolicy = () => {
        const modalPrivacyPolicy = new Modal(this.modalPrivacyPolicyElement)
        modalPrivacyPolicy.onShowModal()
    }

    bindEvents() {
        this.linkElement.addEventListener('click', this.onShowPrivacyPolicy)
    }
}

export default PrivacyPolicy
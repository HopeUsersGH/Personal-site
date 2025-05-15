class Modal {
    selectors = {
        root: '[data-js-modals]',
        modalCloseButton: '[data-js-modal-close]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor(modalElement) {
        this.rootElement = document.querySelector(this.selectors.root)
        this.modalElement = modalElement
        this.modalCloseButtonElement = this.modalElement.querySelector(this.selectors.modalCloseButton)
        this.bindEvents()
    }

    onShowModal() {
        this.rootElement.style.display = 'block'
        this.modalElement.classList.add(this.stateClasses.isActive)
        document.documentElement.classList.add(this.stateClasses.isLock)
    }

    onHideModal = () => {
        this.rootElement.style.display = 'none'
        this.modalElement.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock)
    }

    bindEvents() {
        this.modalCloseButtonElement.addEventListener('click', this.onHideModal)
        this.rootElement.addEventListener('click', (e) => {
            if (e.target === this.rootElement) {
                this.onHideModal()
            }
        })
    }
}

export default Modal
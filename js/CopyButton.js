const rootSelector = '[data-js-send-email]'

class CopyButton {
    selectors = {
        root: rootSelector,
        sendEmailInput: '[data-js-send-email-input]',
        sendEmailButton: '[data-js-send-email-button]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.sendEmailInputElement = this.rootElement.querySelector(this.selectors.sendEmailInput)
        this.sendEmailButtonElement = this.rootElement.querySelector(this.selectors.sendEmailButton)
        this.bindEvent()
    }

    onCopyInput = () => {
        this.sendEmailInputElement.select()

        navigator.clipboard.writeText(this.sendEmailInputElement.value)
            .then(() => {
                console.log(`Почта ${this.sendEmailInputElement.value} скопирована`)
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err)
            })
    }

    bindEvent() {
        this.sendEmailButtonElement.addEventListener('click', this.onCopyInput)
    }
}

class CopyButtonCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new CopyButton(element)
        })
    }
}

export default CopyButtonCollection
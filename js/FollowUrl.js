const rootSelector = '[data-js-header]'

class FollowUrl {
    selectors = {
        root: rootSelector,
        telegramButton: '[data-js-telegram-button]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.telegramButtonElement = this.rootElement.querySelector(this.selectors.telegramButton)
        this.bindEvent()
    }

    onFollowUrl = () => {
        window.open('https://t.me/wwhopelessww', '_blank')
    }

    bindEvent() {
        this.telegramButtonElement.addEventListener('click', this.onFollowUrl)
    }
}

class FollowUrlCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new FollowUrl(element)
        })
    }
}

export default FollowUrlCollection
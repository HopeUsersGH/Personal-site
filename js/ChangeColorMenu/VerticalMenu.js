const rootSelector = '[data-js-header]'

class VerticalMenu {
    selectors = {
        root: rootSelector,
        menuAnchor: '[data-js-vertical-menu-anchor]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.menuAnchorElement = this.rootElement.querySelectorAll(this.selectors.menuAnchor)
        this.bindEvent()
    }

    changeColorMenuAnchor = () => {
        this.scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
        this.documentHeight = document.documentElement.scrollHeight
        this.windowHeight = window.innerHeight

        this.menuAnchorElement.forEach(anchor => {
            this.section = document.querySelector(anchor.getAttribute('href'))
            if (this.section) {
                this.sectionTop = this.section.offsetTop - 130
                this.sectionHeight = this.section.offsetHeight

                if (this.scrollPosition >= this.sectionTop && this.scrollPosition < this.sectionTop + this.sectionHeight) {
                    anchor.classList.add('is-active')
                } else {
                    anchor.classList.remove('is-active')
                }
            }
        });

        if (this.scrollPosition + this.windowHeight >= this.documentHeight) {
            this.menuAnchorElement.forEach(anchor => anchor.classList.remove('is-active'))
            this.menuAnchorElement[this.menuAnchorElement.length - 1].classList.add('is-active')
        }
    }

    bindEvent() {
        document.addEventListener('scroll', this.changeColorMenuAnchor)
    }
}

class VerticalMenuCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new VerticalMenu(element)
        })
    }
}

export default VerticalMenuCollection
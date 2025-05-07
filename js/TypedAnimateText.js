const rootSelector = '[data-js-typed-text]'

class TypedAnimateText {
    selectors = {
        root: rootSelector,
    }

    strings = {
        firstString: "Frontend Developer",
        secondString: "Frontend Разработчик",
    }

    constructor() {
        this.bindEvent()
    }

    bindEvent() {
        var typed = new Typed(this.selectors.root, {
            strings: [this.strings.firstString, this.strings.secondString],
            typeSpeed: 60,
            backSpeed: 70,
            backDelay: 1000,
            startDelay: 0,
            loop: true,
        });
    }
}

export default TypedAnimateText
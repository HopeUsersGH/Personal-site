class ProgressBar {
    selectors = {
        progressBar: '[data-js-progress-bar]',
    }

    constructor() {
        this.progressBarElement = document.querySelector(this.selectors.progressBar)
        this.bindEvent()
    }

    progressBarProcess = () => {
        this.scroll = document.body.scrollTop || document.documentElement.scrollTop
        this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        this.scrolled = this.scroll / this.height * 100
        this.progressBarElement.style.width = this.scrolled + '%'
    }

    bindEvent() {
        window.addEventListener('scroll', this.progressBarProcess);
    }
}

export default ProgressBar
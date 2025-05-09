const rootSelector = '[data-js-promo]'

class PromoMoveXY {
    selectors =  {
        root: rootSelector,
    }

    constructor() {
        this.bindEvent()
    }

    mouseMove = (e) => {
        const promoElement = document.querySelector(this.selectors.root);
        if (promoElement) {
            promoElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -0.005}deg`);
            promoElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * -0.01}deg`);
        }
    }

    bindEvent() {
        document.addEventListener('mousemove', this.mouseMove);
    }
}

export default PromoMoveXY
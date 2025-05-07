class PromoMoveXY {
    constructor() {
        this.bindEvent()
    }

    mouseMove = (e) => {
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
            `
        })
    }

    bindEvent() {
        document.addEventListener('mousemove', this.mouseMove);
    }
}

export default PromoMoveXY
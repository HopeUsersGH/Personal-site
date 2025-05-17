class FixTooltipPosition {
    selectors = {
        target: '[data-js-fix-tooltip-position]',
        tooltip: '[data-js-tooltip]',
    }

    stateClasses = {
        isOnTheLeftSide: 'is-on-the-left-side',
        isOnTheRightSide: 'is-on-the-right-side',
    }

    constructor() {
        this.targetElements = document.querySelectorAll(this.selectors.target)
        this.bindEvents()
    }

    fixTooltipPosition(targetElement, tooltipElement) {
        const viewportWidth = document.documentElement.clientWidth
        const halfViewportWidth = viewportWidth / 2
        const { width, x } = targetElement.getBoundingClientRect()
        const targetCenterX = x + width / 2
        const isTargetOnTheLeftViewportSide = targetCenterX < halfViewportWidth

        tooltipElement.classList.toggle(
            this.stateClasses.isOnTheLeftSide,
            isTargetOnTheLeftViewportSide
        )

        tooltipElement.classList.toggle(
            this.stateClasses.isOnTheRightSide,
            !isTargetOnTheLeftViewportSide
        )
    }

    updateTooltips() {
        this.targetElements.forEach(targetElement => {
            const tooltipElement = targetElement.querySelector(this.selectors.tooltip)
            this.fixTooltipPosition(targetElement, tooltipElement)
        });
    }

    bindEvents() {
        this.updateTooltips()
        window.addEventListener('resize', this.updateTooltips.bind(this))
    }
}
export default FixTooltipPosition
class DragDropPage {
    constructor(page) {
        this.page = page;

        this.draggable = page.locator('text=Drag Me');
        this.dropTarget = page.locator('text=Drop Here');
    }

    async dragItemToTarget(sourceSelector = null, targetSelector = null) {
        const source = sourceSelector ? this.page.locator(sourceSelector) : this.draggable;
        const target = targetSelector ? this.page.locator(targetSelector) : this.dropTarget;

        await source.dragTo(target);
    }
}

module.exports = { DragDropPage };
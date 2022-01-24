export default class StoreGifs {
    constructor() {
        this._gifts = [];
    }
    addGift(gift) {
        this._gifts.push(gift);
    }
    get gifts() {
        return this._gifts;
    }
    getGiftByName(name) {
        const giftsNames = this._gifts.map((value) => value.name);
        const index = giftsNames.indexOf(name);
        return this._gifts[index] || null;
    }
    deleteGiftByName(name) {
        this._gifts = this._gifts.filter((value) => name !== value.name);
    }
    buyGiftByWish(wish) {
        const gift = this.getGiftByName(wish);
        if (gift) {
            this.deleteGiftByName(wish);
        }
        return gift;
    }
}

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
    buyGiftByWishAsync(wish, callback) {
        setTimeout(() => {
            let error;
            const gift = this.getGiftByName(wish);
            if (gift) {
                this.deleteGiftByName(wish);
            }
            else {
                error = new Error('Error: Gift is absent!');
            }
            callback(error, gift);
        }, 2000);
    }
    buyGiftByWishAsyncPromis(wish) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const gift = this.getGiftByName(wish);
                if (gift) {
                    this.deleteGiftByName(wish);
                    resolve(gift);
                }
                else {
                    reject(new Error('Error: Gift is absent!'));
                }
            }, 2000);
        });
    }
}

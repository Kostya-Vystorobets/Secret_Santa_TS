export default class User {
    constructor(name, wish) {
        this._happiness = 30;
        this._name = name;
        this._wish = wish;
        this._gift = null;
        this._wishFriend = null;
        this._giftFriend = null;
        this._storeGifts = null;
    }
    get name() {
        return this._name;
    }
    get wish() {
        return this._wish;
    }
    get gift() {
        return this._gift;
    }
    set gift(gift) {
        this._gift = gift;
    }
    unpackGift() {
        if (this._gift) {
            this._gift.unpackGift();
            this._happiness = Math.floor(Math.random() * (100 - 30) + 30);
        }
    }
    get wishFriend() {
        return this._wishFriend;
    }
    set wishFriend(wishFriend) {
        this._wishFriend = wishFriend;
    }
    get giftFriend() {
        return this._giftFriend;
    }
    buyGiftFriend() {
        if (this._storeGifts && this._wishFriend) {
            this._giftFriend = this._storeGifts.buyGiftByWish(this._wishFriend);
            if (this._giftFriend) {
                this._giftFriend.packGift();
            }
        }
    }
    deleteGiftFriend() {
        this._giftFriend = null;
    }
    set storeGifts(storeGifts) {
        this._storeGifts = storeGifts;
    }
}

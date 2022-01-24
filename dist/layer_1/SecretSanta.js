import User from "./User.js";
export default class SecretSanta extends User {
    constructor(name, wish) {
        super(name, wish);
        this._allGifts = [];
        this._allUsers = [];
    }
    addUser(user) {
        this._allUsers.push(user);
    }
    get allUsers() {
        return this._allUsers;
    }
    giveOutWishUsers() {
        const allWishesUsers = [];
        this._allUsers.forEach((value) => {
            if (value.wish) {
                allWishesUsers.push(value.wish);
            }
        });
        allWishesUsers.sort();
        this._allUsers.forEach((value) => {
            for (let i = 0; i < allWishesUsers.length; i++)
                if (value.wish !== allWishesUsers[i]) {
                    value.wishFriend = allWishesUsers[i];
                    allWishesUsers.splice(i, 1);
                    break;
                }
        });
    }
    collectGifts() {
        const collectionGift = [];
        this._allUsers.forEach((value) => {
            if (value.giftFriend) {
                collectionGift.push(value.giftFriend);
                value.deleteGiftFriend();
            }
        });
        this._allGifts = collectionGift;
    }
    get allGifts() {
        return this._allGifts;
    }
    giveGiftsUsers() {
        this._allUsers.forEach((user) => {
            for (var i = 0; i < this._allGifts.length; i++)
                if (user.wish === this._allGifts[i].name) {
                    user.gift = this._allGifts[i];
                    this._allGifts.splice(i, 1);
                    break;
                }
        }, this);
    }
}

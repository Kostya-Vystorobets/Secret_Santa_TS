import IGift from "../layer_2/IGift";
import IUser from "./IUser";
import User from "./User";

export default class SecretSanta extends User {
  private _allUsers: IUser[];
  private _allGifts: IGift[];

  public constructor(name: string, wish: string) {
    super(name, wish);
    this._allGifts = [];
    this._allUsers = [];
  }
  public addUser(user: IUser): void {
    this._allUsers.push(user);
  }
  public get allUsers(): IUser[] {
    return this._allUsers;
  }
  public giveOutWishUsers(): void {
    const allWishesUsers: string[] = [];
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
  public collectGifts(): void {
    const collectionGift: IGift[] = [];
    this._allUsers.forEach((value) => {
      if (value.giftFriend) {
        collectionGift.push(value.giftFriend);
        value.deleteGiftFriend();
      }
    });
    this._allGifts = collectionGift;
  }
  public get allGifts(): IGift[] {
    return this._allGifts;
  }
  public giveGiftsUsers(): void {
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

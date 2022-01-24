import IGift from "../layer_2/IGift";
import IStoreGifts from "./IStoreGifts";
import IUser from "./IUser";


export default class User implements IUser {
  private _happiness: number;
  private _name: string;
  private _wish: string;
  private _gift: IGift | null;
  private _wishFriend: string | null;
  private _giftFriend: IGift | null;
  private _storeGifts: IStoreGifts | null;

  public constructor(name: string, wish: string) {
    this._happiness = 30;
    this._name = name;
    this._wish = wish;
    this._gift = null;
    this._wishFriend = null;
    this._giftFriend = null;
    this._storeGifts = null;
  }
  public get name(): string {
    return this._name;
  }
  public get wish(): string {
    return this._wish;
  }
  public get gift(): IGift | null {
    return this._gift;
  }
  public set gift(gift: IGift | null) {
    this._gift = gift;
  }
  public unpackGift(): void {
    if (this._gift) {
      this._gift.unpackGift();
      this._happiness = Math.floor(Math.random() * (100 - 30) + 30);
    }
  }
  public get wishFriend(): string | null {
    return this._wishFriend;
  }
  public set wishFriend(wishFriend) {
    this._wishFriend = wishFriend;
  }
  public get giftFriend(): IGift | null {
    return this._giftFriend;
  }
  public buyGiftFriend(): void {
    if (this._storeGifts && this._wishFriend) {
      this._giftFriend = this._storeGifts.buyGiftByWish(this._wishFriend);
      if (this._giftFriend) {
        this._giftFriend.packGift();
      }
    }
  }
  public deleteGiftFriend(): void {
    this._giftFriend = null;
  }
  public set storeGifts(storeGifts: IStoreGifts) {
    this._storeGifts = storeGifts;
  }
}

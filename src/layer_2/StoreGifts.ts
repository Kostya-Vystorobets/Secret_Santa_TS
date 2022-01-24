import IStoreGifts from "../layer_1/IStoreGifts";
import IGift from "./IGift";


export default class StoreGifs implements IStoreGifts {
  private _gifts: IGift[];

  public constructor() {
    this._gifts = [];
  }
  public addGift(gift: IGift): void {
    this._gifts.push(gift);
  }
  public get gifts(): IGift[] {
    return this._gifts;
  }
  public getGiftByName(name: string): IGift | null{
    const giftsNames: string[] = this._gifts.map((value) => value.name);
    const index: number = giftsNames.indexOf(name);
    return this._gifts[index] || null;
  }
  public deleteGiftByName(name: string): void {
    this._gifts = this._gifts.filter((value) => name !== value.name);
  }
  public buyGiftByWish(wish: string): IGift | null{
    const gift: IGift | null = this.getGiftByName(wish);
    if (gift) {
      this.deleteGiftByName(wish);
    }
    return gift;
  }
}
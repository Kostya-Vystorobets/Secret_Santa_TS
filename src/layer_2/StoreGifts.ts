import IGiftU from "../layer_1/IGiftU";
import IStoreGifts from "../layer_1/IStoreGifts";
import IGiftS from "./IGiftS";

export default class StoreGifs implements IStoreGifts {
  private _gifts: IGiftS[];

  public constructor() {
    this._gifts = [];
  }
  public addGift(gift: IGiftS): void {
    this._gifts.push(gift);
  }
  public get gifts(): IGiftS[] {
    return this._gifts;
  }
  public getGiftByName(name: string): IGiftS | null {
    const giftsNames: string[] = this._gifts.map((value) => value.name);
    const index: number = giftsNames.indexOf(name);
    return this._gifts[index] || null;
  }
  public deleteGiftByName(name: string): void {
    this._gifts = this._gifts.filter((value) => name !== value.name);
  }
  public buyGiftByWish(wish: string): IGiftS | null {
    const gift: IGiftS | null = this.getGiftByName(wish);
    if (gift) {
      this.deleteGiftByName(wish);
    }
    return gift;
  }


  public buyGiftByWishAsync(wish: string, callback: (error: Error, gift: IGiftS | null) => void): void {
    setTimeout(() => {
          let error!: Error;
          const gift: IGiftS | null = this.getGiftByName(wish);
          if (gift) {
              this.deleteGiftByName(wish);
          } else {
              error = new Error('Error: Gift is absent!')
          }
          callback(error, gift);
      }, 2000);
  } 

public buyGiftByWishAsyncPromis(wish: string): Promise<IGiftS> {
  return new Promise<IGiftS>((resolve, reject): void => {
      setTimeout(() => {
          const gift: IGiftS | null = this.getGiftByName(wish);
          if (gift) {
              this.deleteGiftByName(wish);
              resolve(gift);
          } else {
              reject(new Error('Error: Gift is absent!'));
          }
      }, 2000);
  })
}

}
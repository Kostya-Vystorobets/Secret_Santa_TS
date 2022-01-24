import IGiftS from "../layer_2/IGiftS";

export default interface IStoreGifts {
  addGift(gift: IGiftS): void;
  buyGiftByWish(wish: string): IGiftS | null;
  buyGiftByWishAsync(wish: string, callback: (error: Error, gift: IGiftS | null) => void): void
  buyGiftByWishAsyncPromis(wish: string): Promise<IGiftS>
}

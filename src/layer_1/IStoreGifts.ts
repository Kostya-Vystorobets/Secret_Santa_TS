import IGift from "../layer_2/IGift";

export default interface IStoreGifts {
  addGift(gift: IGift): void;
  buyGiftByWish(wish: string): IGift | null;
}

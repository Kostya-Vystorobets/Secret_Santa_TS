import IGift from "../layer_2/IGift";
import IStoreGifts from "./IStoreGifts";

export default interface IUser {
  get name(): string;
  get wish(): string;
  set gift(gift: IGift | null);
  unpackGift(): void;
  set wishFriend(wishFriend: string | null);
  get wishFriend(): string | null;
  get giftFriend(): IGift | null;
  buyGiftFriend(): void;
  deleteGiftFriend(): void;
  set storeGifts(storeGifts: IStoreGifts);
}

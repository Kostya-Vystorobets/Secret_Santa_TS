import IGiftS from "../layer_2/IGiftS";
import IGiftU from "./IGiftU";
import IStoreGifts from "./IStoreGifts";

export default interface IUser {
  get name(): string;
  get wish(): string;
  set gift(gift: IGiftU | null);
  unpackGift(): void;
  set wishFriend(wishFriend: string | null);
  get wishFriend(): string | null;
  get giftFriend(): IGiftU | null;
  buyGiftFriend(): void;
  deleteGiftFriend(): void;
  set storeGifts(storeGifts: IStoreGifts);
}

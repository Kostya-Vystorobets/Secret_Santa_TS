export default interface IGift {
  get name(): string;
  packGift(): void;
  unpackGift(): void;
}

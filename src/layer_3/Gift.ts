import IGift from "../layer_2/IGift";

export default class Gift implements IGift {
  private _name: string;
  private _pack: boolean;

  public constructor(name: string) {
    this._name = name;
    this._pack = false;
  }
  public get name(): string {
    return this._name;
  }
  public get pack(): boolean {
    return this._pack;
  }
  public packGift(): void {
    this._pack = true;
  }
  public unpackGift(): void {
    this._pack = false;
  }
}

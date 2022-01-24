import IGiftU from "../layer_1/IGiftU";
import IGiftS from "../layer_2/IGiftS";

export default class Gift implements IGiftU, IGiftS {
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

export default class Gift {
    constructor(name) {
        this._name = name;
        this._pack = false;
    }
    get name() {
        return this._name;
    }
    get pack() {
        return this._pack;
    }
    packGift() {
        this._pack = true;
    }
    unpackGift() {
        this._pack = false;
    }
}

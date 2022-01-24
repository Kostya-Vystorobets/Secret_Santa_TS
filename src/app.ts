
import StoreGifs from "./layer_2/StoreGifts";
import Gift from "./layer_3/Gift";
import User from "./layer_1/User";
import IUser from "./layer_1/IUser";
import SecretSanta from "./layer_1/SecretSanta";
import IStoreGifts from "./layer_1/IStoreGifts";

const sg: IStoreGifts = new StoreGifs();
console.log(sg);

sg.addGift(new Gift("робот"));
sg.addGift(new Gift("брелок"));
sg.addGift(new Gift("игрушка"));
sg.addGift(new Gift("игра"));
sg.addGift(new Gift("блокнот"));
sg.addGift(new Gift("тарелка"));
sg.addGift(new Gift("мяч"));
sg.addGift(new Gift("олень"));
console.log(sg);

// console.log(sg.getGiftByName('игра'));
// console.log(sg.gifts);

// sg.deleteGiftByName('тарелка');
// console.log(sg.gifts);

///////////////////////////////////////////////////////////////////
const vs: IUser = new User("Вася", "блокнот");
const pt: IUser = new User("Петя", "игра");
const vn: IUser = new User("Ваня", "брелок");
const gn: IUser = new User("Гена", "мяч");
const fd: IUser = new User("Федя", "робот");
const lh: IUser = new User("Леха", "игрушка");
console.log(vs);
console.log(lh);
//////////////////////////////////////////////////////////////////

const ss: SecretSanta = new SecretSanta("Santa", "олень");

ss.addUser(vs);
ss.addUser(pt);
ss.addUser(vn);
ss.addUser(gn);
ss.addUser(fd);
ss.addUser(lh);
ss.addUser(ss);
console.log(ss);

// console.log(sg);
// console.log(pt);
pt.storeGifts = sg;
vs.storeGifts = sg;
vn.storeGifts = sg;
gn.storeGifts = sg;
fd.storeGifts = sg;
lh.storeGifts = sg;
ss.storeGifts = sg;

ss.giveOutWishUsers();
// console.log(ss);

pt.buyGiftFriend();
vs.buyGiftFriend();
vn.buyGiftFriend();
gn.buyGiftFriend();
fd.buyGiftFriend();
lh.buyGiftFriend();
ss.buyGiftFriend();
console.log(ss);

ss.collectGifts();
// console.log(ss);

ss.giveGiftsUsers();
// console.log(ss);

gn.unpackGift();
console.log(gn);
pt.unpackGift();
console.log(pt);
vs.unpackGift();
console.log(vs);
fd.unpackGift();
console.log(fd);
lh.unpackGift();
console.log(lh);
ss.unpackGift();
console.log(ss);

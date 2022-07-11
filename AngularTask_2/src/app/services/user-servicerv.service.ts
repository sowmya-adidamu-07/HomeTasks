import { Injectable } from '@angular/core';
import {users} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServicervService {
  userList:Array<users> = ([
   
    {"id":"Stim","firstName":"Beatrice","lastName":"Bog","age":1,"login":"bbog0","password":"QzVpGcNp","isDeleted":false},
{"id":"Fix San","firstName":"Dolores","lastName":"Clemoes","age":2,"login":"dclemoes1","password":"SyYSzML","isDeleted":true},
{"id":"Greenlam","firstName":"Walton","lastName":"Aveyard","age":3,"login":"waveyard2","password":"spZlF9z4QRl","isDeleted":true},
{"id":"Zamit","firstName":"Tam","lastName":"Rippingale","age":4,"login":"trippingale3","password":"eCGIzP9","isDeleted":false},
{"id":"Stronghold","firstName":"Melodee","lastName":"Edger","age":5,"login":"medger4","password":"10dLefmTz","isDeleted":true},
{"id":"Stringtough","firstName":"Reba","lastName":"MacCourt","age":6,"login":"rmaccourt5","password":"z83cju","isDeleted":false},
{"id":"Sonair","firstName":"Sherie","lastName":"Lenham","age":7,"login":"slenham6","password":"gN7xiop","isDeleted":false},
{"id":"Aerified","firstName":"Stillman","lastName":"Wreath","age":8,"login":"swreath7","password":"SOQAVItwTMZ","isDeleted":false},
{"id":"Cookley","firstName":"Delphine","lastName":"Gergely","age":9,"login":"dgergely8","password":"Tqu2BuiN","isDeleted":false},
{"id":"Alphazap","firstName":"Deni","lastName":"Cortin","age":10,"login":"dcortin9","password":"Ec1EfHKZsb","isDeleted":false},
{"id":"Tres-Zap","firstName":"Andeee","lastName":"Arnaudi","age":11,"login":"aarnaudia","password":"jVkpzZec","isDeleted":false},
{"id":"Andalax","firstName":"Brett","lastName":"Lehrer","age":12,"login":"blehrerb","password":"zF79esEG","isDeleted":true},
{"id":"Quo Lux","firstName":"Horten","lastName":"Hodgon","age":13,"login":"hhodgonc","password":"xJJv0p","isDeleted":false},
{"id":"Home Ing","firstName":"Dora","lastName":"Rudkin","age":14,"login":"drudkind","password":"2MtjIEpGEP21","isDeleted":false},

  ])

  constructor() { }
  getUsers() {
    return this.userList
}
getUsersByID(id: String) {
    return this.userList.find(x => x.id === id)
}



}

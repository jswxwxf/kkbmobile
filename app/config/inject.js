import { Container } from 'inversify';
import { helpers } from 'inversify-vanillajs-helpers';
import 'reflect-metadata';

import {
  UtilService,
  StoreService,
  BaseService,
  UserService
} from 'kkbmobile/app/shared/services';

export const TYPES = {
  utilService: 'utilService',
  storeService: 'storeService',
  userService: 'userService'
};

const container = new Container({ defaultScope: 'Singleton' });

helpers.annotate(UtilService);
container.bind(TYPES.utilService).to(UtilService);

helpers.annotate(BaseService);

helpers.annotate(StoreService);
container.bind(TYPES.storeService).to(StoreService);

helpers.annotate(UserService);
container.bind(TYPES.userService).to(UserService);

export const inject = (type) => {
  return container.get(type);
};

// const TYPES = {
//   Ninja: Symbol('Ninja'),
//   Katana: Symbol('Katana'),
//   Shuriken: Symbol('Shuriken')
// };

// class Katana {
//   hit() {
//     return 'cut!';
//   }
// }

// helpers.annotate(Katana);
// container.bind(TYPES.Katana).to(Katana);

// // inversify.decorate(inversify.injectable(), Katana);

// class Shuriken {
//   throw() {
//     return 'hit!';
//   }
// }

// helpers.annotate(Shuriken);
// container.bind(TYPES.Shuriken).to(Shuriken);

// // inversify.decorate(inversify.injectable(), Shuriken);

// class Ninja {
//   constructor(
//     katana,
//     shuriken) {
//     this._katana = katana;
//     this._shuriken = shuriken
//   }
//   fight() { return this._katana.hit(); }
//   sneak() { return this._shuriken.throw(); }
// }
// helpers.annotate(Ninja, [TYPES.Katana, TYPES.Shuriken]);
// container.bind(TYPES.Ninja).to(Ninja);

// // Resolve dependencies
// const ninja = container.get(TYPES.Ninja);
// console.warn(ninja.fight());
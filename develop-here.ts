import { utils } from './src';
// import { testUtils } from './src';
// import { models } from './src';

console.log('import and develop here using yarn start');

const a: any = utils.delayEx(async (param) => param, 1000);
const b: any = utils.delayEx((param) => param, 250);

a(1).then(console.log);
a(2).then(console.log);
a(3).then(console.log);
a(4).then(console.log);

b('turned into promise 1').then(console.log);
b('turned into promise 2').then(console.log);

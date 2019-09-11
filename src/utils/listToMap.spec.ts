import { expect } from 'chai';

import { listToMap } from './listToMap';

interface IUser {
  _id: string;
  name: string;
  email: string;
}

describe('listToMap', () => {
  const getUser_1 = () => ({ _id: '1', name: 'a', email: 'email-a' });
  const getUser_2 = () => ({ _id: '2', name: 'b', email: 'email-b' });
  const getUser_3 = () => ({ _id: '3', name: 'c', email: 'email-c' });
  let initialList: IUser[];
  let initialMap: { [key: string]: IUser};

  beforeEach(() => {
    initialList = [];
    initialMap = {};
  });

  it('should return same object for an empty array', () => {
    initialList = [];
    initialMap = {};

    expect(listToMap([], {})).to.deep.equal({});
    expect(listToMap([])).to.deep.equal({});
  });

  it('should map the array to an empty object', () => {
    initialList = [getUser_1(), getUser_2()];
    initialMap = {};
    expect(listToMap(initialList, initialMap)).to.deep.equal({ [getUser_1()._id]: getUser_1(), [getUser_2()._id]: getUser_2() });
  });

  it('should append an item to an existent map', () => {
    initialList = [getUser_3()];
    initialMap = { [getUser_1()._id]: getUser_1(), [getUser_2()._id]: getUser_2() };

    expect(listToMap(initialList, initialMap)).to.deep.equal({
      [getUser_1()._id]: getUser_1(),
      [getUser_2()._id]: getUser_2(),
      [getUser_3()._id]: getUser_3()
    });
  });

  it('should use a specific field to use as index', () => {
    initialList = [getUser_1()];
    initialMap = {};

    expect(listToMap(initialList, initialMap, 'email')).to.deep.equal({ [getUser_1().email]: getUser_1() });
  });
});

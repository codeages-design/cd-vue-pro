import Mock from 'mockjs';
import { addPrefix } from './utils';

import homepage from './mock/homepage';

const addToMock = (list) => {
  list.forEach((item) => {
    Mock.mock(addPrefix(item.path), item.data);
  });
};

addToMock(homepage);

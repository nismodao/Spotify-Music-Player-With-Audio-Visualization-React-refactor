import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import retry from '../src/components/List';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import React from 'react';


beforeEach(() => {
});

afterEach(() => {
});

function fetch(data, success_cb, error_cb) {
  const random = Math.random();
  setTimeout((random) => {
    if (random < 0.1) {
        success_cb(data);
      } else {
        error_cb('Error Son');
      }
  }, 0);
}

describe('Unsplash', () => {
  test('it should render', async () => {
    expect(await retry(5, fetch, [1, 2, 3], console.log, console.log)).toContain('https:');
  });
});


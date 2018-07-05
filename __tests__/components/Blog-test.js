import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Blog from '../../src/js/components/Blog';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

test('App renders', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

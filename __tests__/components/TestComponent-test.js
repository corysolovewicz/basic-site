import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import TestComponent from '../../src/js/components/TestComponent';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

test('App renders', () => {
  const component = renderer.create(
    <MemoryRouter>
      <TestComponent />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

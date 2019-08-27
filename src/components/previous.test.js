import React from 'react';
import { create } from 'react-test-renderer';
import Previous from './previous';

const suite = 'Testing Previous component <Previous />';

describe(suite, () => {
    const component = create(<Previous />).toJSON();
    test('renders previous component without breaking', () => {
    expect(component).toMatchSnapshot();
    });
});
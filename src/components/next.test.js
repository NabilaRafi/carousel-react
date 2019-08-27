import React from 'react';
import renderer from 'react-test-renderer';
import Next from './next';

const suite = 'Test <Next arrow component <Next />';

describe(suite, () => {
    test('renders without breaking', () => {
        const component = renderer.create(
            <Next />
        ).toJSON();

        expect(component).toMatchSnapshot();
    })
})
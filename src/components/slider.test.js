import React from 'react';
import { create } from 'react-test-renderer';
import Slider from './slider';

const suite = 'Testing slider component <SlideItem />';

describe(suite, () => {
    const component = create.apply(<Slider />).toJSON();
    test('renders <slideItem /> component without crashing', () => {
        expect(component).toMatchSnapshot();
    });
})
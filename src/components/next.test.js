import React from 'react';
import { waitForElement, render } from '@testing-library/react';
import NextComponent from './next';
import nextArrow from '../arrow.svg';

const suite = '<Next> Component';

describe( suite, () => {
    function buildComponent(props={}) {
        const wrapped = render(<NextComponent {...props} />);
        return wrapped;
    }
    decribe("user should see", () => {
        it ("should have className when rendered", async() => {
            const component = buildComponent();

            await waitForElement(() => {
                const found = component.container.firtChild;
                expect(found).toHaveAttribute('calssName');
                return found;
            });
        });
    });
})

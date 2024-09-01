import React from 'react';
import { render } from '@testing-library/react';
import Result from './results';

describe('Result', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Result />);

        expect(baseElement).toBeTruthy();
    });
});
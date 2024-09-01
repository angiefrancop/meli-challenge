import React from 'react';
import { render } from '@testing-library/react';
import Items from './items';

describe('Items', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Items />);

        expect(baseElement).toBeTruthy();
    });
});
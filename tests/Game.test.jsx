import React from 'react';
import { render } from '@testing-library/react';
import Game from '../src/js/components/Game';

describe('Game Component', () => {
    test('Renders without error', () => {
        render(<Game />);
    });
});
import { render } from '@testing-library/react';
import BasePageComponent from './BasePageComponent';
import { MemoryRouter } from 'react-router-dom';

test('renders BasePageComponent with children', () => {
    const { container } = render(
        <MemoryRouter>
            <BasePageComponent>
                <div>Test Child</div>
            </BasePageComponent>
        </MemoryRouter>
    );
    expect(container.textContent).toContain('Test Child');
});
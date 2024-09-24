import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';

test('renders NavbarComponent with link', () => {
    render(
        <MemoryRouter>
            <NavbarComponent />
        </MemoryRouter>
    );
    expect(screen.getByText(/FlowBoard/i)).toBeInTheDocument();
});

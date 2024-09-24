import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';

test("renders FlowBoard heading", () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { level: 1, name: /FlowBoard/i });
    expect(heading).toBeInTheDocument();
});
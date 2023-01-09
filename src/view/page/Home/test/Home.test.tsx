import React from 'react'
import Home from '../Home'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('navigate to contacts page when clicking Click Here button', async () => {
    const history = createMemoryHistory()
    render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
    )
    const user = userEvent.setup()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
    await user.click(screen.getByText(/Click Here/i))
    expect(history.location.pathname).toBe('/contacts')
})

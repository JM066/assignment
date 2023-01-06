import React from 'react'

import { createRoot } from 'react-dom/client'

import Routes from './view/routes/Routes'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
)

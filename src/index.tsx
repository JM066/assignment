import React from 'react'
import Layout from './view/layout/Layout/Layout'
import { createRoot } from 'react-dom/client'
import Routes from './view/routes/Routes'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
    <React.StrictMode>
        <Layout>
            <Routes />
        </Layout>
    </React.StrictMode>
)

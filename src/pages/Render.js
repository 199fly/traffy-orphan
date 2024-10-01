import React from 'react'

// Import components here as they are added
import Nav2 from './components/Nav2'

function Render({ id, status, type, name, data }) {
    switch (name) {
        case 'nav2':
            return <Nav2 data={data} />;
        case 'Component Name':
            // return component
            return null;
        default:

            return <div>{`Component Not Configured: ${name}`}</div>;
    }
}

export default Render;

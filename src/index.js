import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <StrictMode>
        <App title="Daddy"/>
    </StrictMode>
);





// import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('root'));

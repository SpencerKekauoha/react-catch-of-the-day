// Import React from node modules
import React from 'react';
//Rather than importing ReactDOM, you can import parts of it
import { render } from 'react-dom';
// importing CSS
import './css/style.css'

//Importing Components
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App />, document.getElementById('main'))

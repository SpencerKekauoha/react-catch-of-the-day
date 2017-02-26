// Import React from node modules
import React from 'react';
//Rather than importing ReactDOM, you can import parts of it
import { render } from 'react-dom';
//Import React Router
import { BrowserRouter, Match, Miss } from 'react-router';
// importing CSS
import './css/style.css'

//Importing Components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        {/* When the url is '/' show the component {StorePicker} */}
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'));

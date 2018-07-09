import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PApp from '../client/src/Components/PApp';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(<PApp />, document.getElementById('root'));
registerServiceWorker();
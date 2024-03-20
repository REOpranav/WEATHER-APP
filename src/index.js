import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfigbeeProvider from './ConfigbeeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
     <ConfigbeeProvider>
            <App />
    </ConfigbeeProvider>
  </React.StrictMode>
);

console.log(root)

 
reportWebVitals();

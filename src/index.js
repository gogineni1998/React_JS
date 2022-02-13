import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import { MyProvider } from './context';

const Main = () => {
  return(
    <MyProvider>
      <App/>
    </MyProvider>
    
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));



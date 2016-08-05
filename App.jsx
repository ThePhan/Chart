import React from 'react';
import Linkstate from './components/Linkstate.jsx';
import Auth from './components/Authlogin';
import Chart from './components/ggchart';

class App extends React.Component {
   render() {
      return (
         <div>
            <Chart />
         </div>
      );
   }
}

export default App;

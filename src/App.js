import React, { Component } from 'react';
import Palette from './Palette';
import seedColor from './seedColor';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Palette {...seedColor[4]} />
      </div>
     );
  }
}
 
export default App;
import React, { Component } from 'react';
import './App.css';


import { Button, TextareaItem } from 'antd-mobile';


class App extends Component {



    render() {


    return (
        <div>

          <TextareaItem
              rows={5}
              count={100}
          />
          <Button type="primary" size="small" inline>small</Button>


      </div>
    );
  }
}

export default App;

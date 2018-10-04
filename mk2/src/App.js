import React, { Component } from "react";
import "./App.css";
import { Button } from "antd";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </div>
    );
  }
}

export default App;

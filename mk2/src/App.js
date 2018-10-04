import React, { Component } from "react";
import "./App.css";

// Component imports
import Logo from "./components/Favicon";
import Navigation from "./components/Navigation";
import FooterInfo from "./components/FooterInfo";
import SliderInfo from "./components/SliderInfo";

//Ant Design Library
import { Layout } from "antd";
import "antd/dist/antd.css";

//React Router
import Routing from "./components/Routing";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="whole">
        <Logo />

        <Header>
          <Navigation />
        </Header>

        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            className="side-bar"
          >
            <SliderInfo />
          </Sider>

          <Layout>
            <Content>
              <Routing />
            </Content>
            <Footer>
              <FooterInfo />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;

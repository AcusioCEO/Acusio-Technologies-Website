import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Favicon";
import Navigation from "./components/Navigation";

import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import Routing from "./components/Routing";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content />
            <Routing />
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;

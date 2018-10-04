import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

class SliderInfo extends Component {
  render() {
    return (
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/about">
              <Icon type="team" />
              <span>About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/forum">
              <Icon type="message" />
              <span>Forum</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">
              <Icon type="phone" />
              <span>Contact</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default SliderInfo;

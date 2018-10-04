import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";

import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        {/* <Row>
          <Col className="hunnit" span={}> */}
        <Menu
          className="navbar"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item className="Acusio">
            <Link exact to="/">
              Acusio Technologies
              <span>
                <img
                  alt="Acusio Logo"
                  src="https://lh3.googleusercontent.com/-pxjmFmMK8do/AAAAAAAAAAI/AAAAAAAAAAA/AAN31DUFqMLVuezQ0HSkIXh5AaMC-39RXg/mo/photo.jpg?sz=46"
                />
              </span>
            </Link>
          </Menu.Item>
        </Menu>
        {/* </Col>
        </Row> */}
      </div>
    );
  }
}
export default Navigation;

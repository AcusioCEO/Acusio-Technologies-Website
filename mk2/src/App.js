import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Card, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="block">
          Acusio Technologies
          <span />
        </Header>
        <Content>
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  <img src="https://lh3.googleusercontent.com/-pxjmFmMK8do/AAAAAAAAAAI/AAAAAAAAAAA/AAN31DUFqMLVuezQ0HSkIXh5AaMC-39RXg/mo/photo.jpg?sz=46" />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
            <hr />
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
            <hr />

            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          FooterFooterFooterFooterFooterFooterFooterFooterFooterFooter
          FooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooter
          FooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooter
        </Footer>
      </Layout>
    );
  }
}

export default App;

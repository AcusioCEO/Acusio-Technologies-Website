import React, { Component } from "react";

import {
  Footer,
  FooterLinkList,
  FooterSection,
  FooterDropDownSection
} from "react-mdl";

class FooterInfo extends Component {
  render() {
    return (
      <Footer size="mega">
        <FooterSection type="middle">
          <FooterDropDownSection title="Features">
            <FooterLinkList>
              <a to="#">About</a>
              <a to="#">Terms</a>
              <a to="#">Partners</a>
              <a to="#">Updates</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Details">
            <FooterLinkList>
              <a to="#">Specs</a>
              <a to="#">Tools</a>
              <a to="#">Resources</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Technology">
            <FooterLinkList>
              <a to="#">How it works</a>
              <a to="#">Patterns</a>
              <a to="#">Usage</a>
              <a to="#">Products</a>
              <a to="#">Contracts</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="FAQ">
            <FooterLinkList>
              <a to="#">Questions</a>
              <a to="#">Answers</a>
              <a to="#">Contact Us</a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="Title">
          <FooterLinkList>
            <a to="#">Help</a>
            <a to="#">Privacy & Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    );
  }
}
export default FooterInfo;

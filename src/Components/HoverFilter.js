import React, { Component } from "react";
import BgImage from "./bg";
import "../styles.css";

export default function(component, num = 0.1) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false
      };

      this.onMouseEntered = this.onMouseEntered.bind(this);
      this.onMouseLeaved = this.onMouseLeaved.bind(this);
    }

    onMouseEntered() {
      console.log("on mouse enter...");
      this.setState({
        isHovered: true
      });
    }

    onMouseLeaved() {
      console.log("on mouse leave...");
      this.setState({
        isHovered: false
      });
    }

    render() {
      const { isHovered } = this.state;
      const result = isHovered ? `${num}` * 100 : 100;
      return (
        <div
          className="Filter"
          style={{
            filter: `grayscale(${result}%)`
          }}
          onMouseEnter={this.onMouseEntered}
          onMouseLeave={this.onMouseLeaved}
        >
          <BgImage {...this.props} />
        </div>
      );
    }
  };
}

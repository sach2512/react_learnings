import React, { Component } from "react";
import ClassProfile from "./ClassProfile";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About component constructor");
  }

  componentDidMount() {
    console.log("About component did mount");
  }

  render() {
    console.log("About component render");
    return (
      <>
        <h1>This is the About Us page </h1>
        <ClassProfile  />
        
      </>
    );
  }
}

export default About;

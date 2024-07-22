import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

class ClassProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://i.postimg.cc/2SZFNyBg/IMG-4144-HEIC.avif", // Updated image URL
      name: "",
      id: 0,
      email: "sachinjaing25@gmail.com", // Added email
      linkedin: "https://www.linkedin.com/in/sachin-aboutthis" // LinkedIn profile URL
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("childs mount");
    const getdata = async () => {
      const data = await fetch("https://api.github.com/users/sach2512");
      const json = await data.json();
      console.log(`fetch ${json}`);
      this.setState({ name: json.login, id: json.id });
    };
    getdata();
  }

  componentDidUpdate() {
    console.log("component did update"); // it will be called after every change of state like useEffect with dependency
  }

  componentWillUnmount() {
    console.log("component will unmount"); // it will be logged before it gets destroyed from DOM. For example, now we are on the about page; as soon as we go to another page, it will log because it's destroying the DOM and repainting.
    // We need unmount to clean up any leftover tasks. For example, if we keep setInterval in componentDidUpdate, even if we go to other pages, it will keep running, leading to performance loss. So during unmount, we will clear the interval.
  }

  render() {
    console.log("child render");
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          {this.state.url && (
            <img
              src={this.state.url}
              alt="Profile"
              className="rounded-full w-40 h-40 mx-auto mb-4 border-4 border-gray-300 shadow-lg"
            />
          )}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h1>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-bold">GitHub Name:</span> {this.state.name}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-bold">GitHub ID:</span> {this.state.id}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <span className="font-bold">Email:</span> {this.state.email}
          </p>
          <a
            href={this.state.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            <FaLinkedin className="text-2xl mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    );
  }
}

export default ClassProfile;

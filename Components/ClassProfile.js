import React from "react";
import { json } from "stream/consumers";
class ClassProfile extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        url: "",
        location:"",
        id:0,
        
      };
      
      
      console.log(` child cosntructor  `)
    }
  
   
    
   async componentDidMount(){
        console.log(`childs mount"`)
        const getdata = async ()=>{
          const data = await fetch ("https://api.github.com/users/sach2512")
          const json = await (data.json())
          console.log(`fetch ${json}`)
          this.setState({ name: json.login,id:json.id,url:json.avatar_url });
         
         
    
        }
       getdata()
     
    }
    componentDidUpdate(){
      console.log("component did update") // it will be called after every chnage of stat elike useeffect with dependecy 
    }
    componentWillUnmount(){
      console.log("component will unmount") // it will be logged before it gets destroy from dom fpr example now we are in about page as soon as we go to another page it will log because destroying dom and repaints
    }
    // but y we need unmount we need it to clean up any leftover tasl for example we keep setinterval leaving in componnetdid update even if we go to other pages it will be running performnce loose so duing unmount we will clear interval 
  
    render() {
      console.log(json)
        console.log(`child render `);
      return (
        <div>
          <h1>devloped by </h1>
          <img src={this.state.url}></img>
          <h1>name: {this.state.name}</h1>
          <h1>id: {this.state.id}</h1>
          
        </div>
      );
    }
  }

  export default ClassProfile;
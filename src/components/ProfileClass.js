import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // Create state
    this.state = {
      // replacement of useState hook
      count: 0,
      count2: 0,
      id: 0,
      login: "Dummy login",
    };
    console.log("constructor");
  }
  async componentDidMount() {
    console.log("componentdidmount"); // replacement of useEffect hook in functional component
    // API calls
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    //console.log(json)
    this.setState({
      id: json[0].id,
      login: json[0].login,
    });
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  componentWillUnmount() {
    console.log("componentwillunmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1> Profile Class Component </h1>
        <UserContext.Consumer>
          {({ user }) => <h2 className=""> Name : {user.name}</h2>}
        </UserContext.Consumer>
        {/* <h2> Name : {this.props.name}</h2> */}
        <h2>Count : {this.state.count}</h2>
        <h2>Login : {this.state.login}</h2>
        <h2>User_id : {this.state.id}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Profile;

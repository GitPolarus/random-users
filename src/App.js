import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchData: "",
      cb: true,
    };
    // console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json });
      });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {}

  searchName = (event) => {
    let value = event.target.value;
    this.setState({ searchData: value });
  };

  render() {
    const { users, searchData } = this.state;
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={(event) => {
            console.log(event);
            // this.searchName();
          }}
        />

        <input
          type="checkbox"
          placeholder="Search"
          onChange={(event) => {
            // console.log(event);
            this.setState({ cb: event.target.checked });
            // this.searchName();
          }}
        />
        {users
          .filter((u) => {
            return u.name.toLowerCase().includes(searchData.toLowerCase());
          })
          .map((item) => {
            return <h2 key={item.id}>{item.name}</h2>;
          })}
      </div>
    );
  }
}

export default App;

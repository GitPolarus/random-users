import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((userList) => {
        // console.log(userList);
        this.setState({ users: userList });
      });
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Ramdom Users</h1>
        <SearchBox
          placeholder="Seach User"
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;

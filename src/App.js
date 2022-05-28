import "./App.css";
import AddItem from "./AddItem";
import { Component } from "react";
import skylight from "react-skylight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  addItem = (item) => {
    this.setState({ items: [item, ...this.state.items] });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li key={index}>
        {item.product} {item.amount}
      </li>
    ));

    return (
      <div className="App">
        <h2> Shopping list</h2>
        <AddItem additem={this.addItem} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;

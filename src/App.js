import "./App.css";
import AddItem from "./AddItem";
import { Component } from "react";
import skylight from "react-skylight";

// Import List, ListItem and ListItemText components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  addItem = (item) => {
    this.setState({ items: [item, ...this.state.items] });
  };

  // Use List and ListItem in render() method
  render() {
    // Use ListItem component here instead of li
    const listItems = this.state.items.map((item, index) => (
      <ListItem key={index}>
        <ListItemText primary={item.product} secondary={item.amount} />
      </ListItem>
    ));

    return (
      <div className="App">
        <h2>Shopping list</h2>
        <AddItem additem={this.addItem} />
        <List>{listItems}</List>
      </div>
    );
  }
}
export default App;

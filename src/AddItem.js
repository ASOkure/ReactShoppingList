import { Component } from "react";
import SkyLight from "react-skylight";

// Import RaisedButton
//import RaisedButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
// Import TextField component
import TextField from "@material-ui/core/TextField";
// Use RaisedButton in render() method

class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  // Create new shopping item and calls addItem function.
  // Finally close the modal form

  addItem = () => {
    const item = { product: this.state.product, amount: this.state.amount };
    this.props.additem(item);
    this.addform.hide();
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Use TextField in render() method
  render() {
    return (
      <div>
        <section>
          <Button
            onClick={() => this.addform.show()}
            variant="raised"
            color="primary"
          >
            Add Item
          </Button>
        </section>
        <SkyLight
          hideOnOverlayClicked
          ref={(ref) => (this.addform = ref)}
          title="Add item"
        >
          <TextField
            type="text"
            name="product"
            onChange={this.handleChange}
            placeholder="product"
          />
          <br />
          <TextField
            type="text"
            name="amount"
            onChange={this.handleChange}
            placeholder="amount"
          />
          <br />
          <Button onClick={this.addItem} variant="default">
            Add
          </Button>
        </SkyLight>
      </div>
    );
  }
}

export default AddItem;

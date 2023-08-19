import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: "",
      valid: false,
    }
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ ...this.state, item: value })
    // update state with each keystroke
  };

  // class property to submit form
  submit = (e) => {
    e.preventDefault();
    if (this.state.item) {
      this.props.addItem(e, this.state.item);
      this.setState({ ...this.state, item: "", valid: false })
    } else {
      this.setState({ ...this.state, valid: true })
    }
  }

  render() {
    return (
      <>
        {this.state.valid && <p style={{ color: "red" }}>*Must be a valid entry</p>}
        <form onSubmit={this.submit}>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input type="text" name="item" value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default ListForm;
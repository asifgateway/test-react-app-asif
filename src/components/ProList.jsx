import React, { Component } from 'react';
class ProList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNewProductAdd: false,
      data: [{ "name": "Shirt", "id": 1 }, { "name": "Pant", "id": 2 }],
      textFieldValue: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const obj = { 'name': this.refs.itemName.value, "id": this.state.data.length + 1 };
    const newArray = this.state.data.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({ data: newArray });
    console.log(this.state.data);
    console.log(this.refs.itemName.value);
    console.log('test msg...');
  }
  onClickClose(d) {
    const list = this.state.data;
    list.splice(d, 1);
    this.setState({ data: list });
  }
  render() {
    const listItems = this.state.data.map((d, i) =>
      <tr>
        <td key={d.name}>{d.name}</td>
        <td><button className="btn btn-danger" onClick={() => this.onClickClose(i)}>Remove</button></td>
      </tr>
    );
    return (
      <div className="container">
        <div className="form-group d-flex">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
          <button onClick={this.handleClick} type="submit" className="btn btn-primary ml-2">Add</button>
        </div>

        <div className="container">
          <h4 className="mb-3">Total count = {this.state.data.length}</h4>
        </div>


        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>

        </table>
      </div>
    );
  }
}

export default ProList
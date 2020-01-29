import React, { Component } from "react";
import { getFlavors } from "../services/fakeFlavorService";

class Flavors extends Component {
  state = {
    flavors: getFlavors()
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>LongName</th>
            <th>ShortName</th>
            <th>Active</th>
            <th>CreatedDate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.flavors.map(flavor => (
            <tr>
              <td>{flavor.LongName}</td>
              <td>{flavor.ShortName}</td>
              <td>{flavor.Active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Flavors;

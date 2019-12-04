import React from "react";

class LocationInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <div className="field has-addons search-bar">
            <p className="control">
              <input
                className="input"
                onChange={this.handleChange}
                value={this.state.value}
              ></input>
            </p>
            <p className="control">
              <button className="button" onClick={this.handleSubmit}>
                Szukaj
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationInput;

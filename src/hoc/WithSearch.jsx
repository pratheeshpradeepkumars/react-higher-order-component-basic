import React from "react";

const WithSearch = WrappedComponent => {
  return class extends React.Component {
    state = {
      searchTerm: ""
    };
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <div>
          <div>
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.searchTerm}
              placeholder={this.props.placeholder}
            />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
  };
};

export default WithSearch;
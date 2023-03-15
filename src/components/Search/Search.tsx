import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="form-control" placeholder="Search" />
        <button>Search</button>
      </div>
    );
  }
}

export { Search };

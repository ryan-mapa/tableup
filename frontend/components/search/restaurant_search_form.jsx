import React from 'react';

class RestaurantSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchRestaurants(this.state.search);
  }

  update(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return(
      <div className='search-form'>
        <input
          className='search-input'
          placeholder='Restaurant, City, or Cuisine'
          value={this.state.search}
          onChange={e => this.update(e)}
          ></input>
        <button
          className='search-button'
          onClick={e => this.handleClick(e)}
          >Find Tables</button>
      </div>
    );
  }

}

export default RestaurantSearchForm;

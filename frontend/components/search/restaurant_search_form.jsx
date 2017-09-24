import React from 'react';

class RestaurantSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.restaurants;
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleClick(e) {

  }

  render() {
    return(
      <div>


        <input
          className='search-input'
          placeholder='find restaurants'
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

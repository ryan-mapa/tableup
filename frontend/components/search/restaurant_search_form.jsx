import React from 'react';
import Calendar from './calendar';

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
        <form onSubmit={e => this.handleClick(e)}>
          <h2>TableUp Today!</h2><br />
          <span className='search-bar' >
            <Calendar />
            <input
              className='search-input'
              placeholder='Restaurant, City, or Cuisine'
              value={this.state.search}
              onChange={e => this.update(e)}
              />
            <input className='search-button' type='submit' value='Find Tables'></input>
          </span>
        </form>
      </div>
    );
  }

}

export default RestaurantSearchForm;

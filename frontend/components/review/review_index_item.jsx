import React from 'react';


class ReviewIndexItem extends React.Component {


//add conditional logic for user profile page
  componentWillMount() {
    if (this.props.type === 'restaurant') {
      this.props.fetchUser(this.props.review.user_id);
    } else {
      this.props.fetchRestaurant(this.props.review.restaurant_id);
    }
  }

  render() {
    if (Object.keys(this.props.users).length === 0) {return null;}
    if (Object.keys(this.props.restaurants).length === 0) {return null;}

    //if user show user name else do restaurant name
    let content;
    if (this.props.type === 'restaurant') {
      content = <h2>Review by {this.props.users[this.props.review.user_id].name}:</h2>;
    } else {
      content = <h2>Review for {this.props.restaurants[this.props.review.restaurant_id].name}:</h2>;
    }
    return (
      <div>
        {content}
        {this.props.review.body}

      </div>
    );
  }
}

export default ReviewIndexItem;

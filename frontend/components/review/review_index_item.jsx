import React from 'react';


class ReviewIndexItem extends React.Component {

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


    let content;
    if (this.props.type === 'restaurant' && this.props.review.restaurant_id === parseInt(this.props.restaurant)) {
      content = (<div className='review-index-item'><h3>Review by {
          this.props.users[this.props.review.user_id].name
          }:</h3><hr /><br />{this.props.review.body}</div>);
    } else if (this.props.type === 'user' && this.props.review.user_id === parseInt(this.props.user)) {
      content = <div className='review-index-item'><h3>Review for {
          this.props.restaurants[this.props.review.restaurant_id].name
          }:</h3><hr /><br />{this.props.review.body}</div>;
    } else {
      content = <div></div>;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default ReviewIndexItem;

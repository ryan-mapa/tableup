import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {


  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {

    if (this.props.reviews.length === 0) {return null;}

    return (
      <div className='review-index'>
        <h2>Reviews:</h2>
          {
            this.props.reviews.map(review => (
              <ReviewIndexItem
                key={review.id}
                review={review}
                fetchUser={this.props.fetchUser}
                type={this.props.type}
                users={this.props.users}
                restaurants={this.props.restaurants}
                fetchRestaurant={this.props.fetchRestaurant}
                restaurant={this.props.restaurant}
                user={this.props.user}
                />
            ))
          }
      </div>
    );
  }
}

export default ReviewIndex;

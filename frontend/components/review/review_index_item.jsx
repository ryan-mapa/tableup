import React from 'react';


class ReviewIndexItem extends React.Component {


//add conditional logic for user profile page
  componentWillMount() {
    this.props.fetchUser(this.props.review.user_id);
  }

  render() {
    console.log(this.props.users);
    if (Object.keys(this.props.users).length === 0) {return null;}
    //if user show user name else do restaurant name
    let content;
    if (this.props.type === 'restaurant') {
      content = <h2>Review by {this.props.users[this.props.review.user_id].name}:</h2>;
    } else {
      content = <h2>Review for {}:</h2>;
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

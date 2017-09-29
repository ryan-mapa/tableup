import React from 'react';


class ReviewIndex extends React.Component {


  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {

    return (
      <div>
        <h2>Reviews:</h2>


      </div>
    );
  }
}

export default ReviewIndex;

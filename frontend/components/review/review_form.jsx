import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser ? this.props.currentUser.id : undefined,
      restaurant_id: this.props.restaurant.id
    };
  }


//takes in body from form.
//user id is from currentUser in state. (map state)
//restaurant id is from restuarant page... (thread it)

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }


  update(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <div className='review-form '>
        <h2>Write a Review!</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <textarea classname='review-textarea'
            type='text'
            onChange={e => this.update(e)}
            placeholder="Write your review here"
            ></textarea><br />
          <input className='review-form-button' type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }


}

export default ReviewForm;

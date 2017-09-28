import React from 'react';

class ReviewForm extends React.Component {


//takes in body from form.
//user id is from currentuser in state. (map state)
//restaurant id is from restuarant page... (thread it)


  handleSubmit(e) {
    e.preventDefault();

  }


  render() {

    return (
      <div>
        <h2>Write a Review!</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            placeholder="Write your review here"
            ></input><br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }


}

export default ReviewForm;

import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SigninModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
        {name: "", username: "", password: "", email: "", modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      if (this.props.errors.length === 0) ( this.closeModal());
    });
  }

  update(e, field) {
    return this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <span>

        <button onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>LOG ME IN YO</div>

            <form onSubmit={e => this.handleSubmit(e)}>
              <br />
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={(e) => this.update(e, 'username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={(e) => this.update(e, 'password')}
                  className="login-input"
                />
            </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
            <span className='session-errors'>{this.renderErrors()}</span>
        </Modal>
      </span>
    );
  }

}

export default SigninModal;

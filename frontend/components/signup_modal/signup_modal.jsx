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

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
        {username: "", password: "", email: "", modalIsOpen: false};

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }



  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <span>
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>

        </Modal>
      </span>
    );
  }

}

export default SignupModal;

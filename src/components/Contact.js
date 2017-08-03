import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleText = this.handleText.bind(this)

  }

  handleSubmit(e){
    e.preventDefault()
    alert('Ya this really isn\'t going to do anything.  But nice try')
    this.setState({
      email: "",
      text: ""
    })
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handleText(e){
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type='email' className='form-control' aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmail} value={this.state.email}/>
            <small className="form-text text-muted">If you contact us we will sell your email for even more profit</small>
          </div>
          <div className="form-group">
            <label htmlFor='body'>Message</label>
            <textarea className="form-control" rows="5" placeholder="Tell us what we can do better!" onChange={this.handleText} value={this.state.text}></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    );
  }

}

export default Contact;

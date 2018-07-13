import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import * as reducers from '../reducers'

class CommentForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      newCommentBody: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({
      newCommentBody: event.target.value,
    })
  }

  getUser() {
    const user_id = JSON.parse(
      JSON.parse(
        localStorage.getItem('persist:forum')).auth)
      .access.user_id
    return user_id
  }

  onFormSubmit(event){
    event.preventDefault()
    console.log("you clicked submit")
    let newComment = {}
    newComment.user = this.getUser()
    newComment.date = Date.now()
    newComment.body = this.state.newCommentBody
    this.props.createComment(newComment)
    this.setState({
      newComment: newComment
    })
  }


  render () {

    
    return (
        <Form reply>
            <Form.TextArea 
              onChange={this.onInputChange} />
            <Button content='Add Comment' user_id={this.getUser} onClick={this.onFormSubmit} labelPosition='left' icon='edit' primary />
        </Form>
    )
  }
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: reducers.isAuthenticated(state)
// })

// export default connect(mapStateToProps, null)(CommentForm);
export default CommentForm;
import React, {Component} from 'react'
import axios from 'axios'
import { Grid, Comment } from 'semantic-ui-react'
import CommentTemplate from './CommentTemplate'
import CommentForm from './CommentForm'
import {newComment} from  '../actions/comment'

const backend_url = 'https://forum-parvum.herokuapp.com'

class CommentContainer extends Component {
  state = {
    comments: [],
    newComment: newComment,
  }

  async getComments() {
    axios(`${backend_url}`)
    .then(res => {
      let comments = res.data;
      console.log(comments)
      this.setState({ comments });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  componentWillMount = async() => {
    this.getComments()
  }

  getToken() {
    const token = JSON.parse(
      JSON.parse(
        localStorage.getItem('persist:forum')).auth)
      .access.token
    return token
  }

  async postNewComment(newComment) {
    console.log("postNewComment has been triggered")
    console.log(newComment)
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + 
        this.getToken()}
    }
    axios.post(`${backend_url}/addcomment/`,
      newComment, 
      config)
    .then(function (response) {
      console.log(response);
    })
    // .then(this.getComments())
    .catch(function (error) {
      console.log(error);
    });
  }

  constructor(){
  super()
    this.createComment = this.createComment.bind(this);
  }

  createComment(newComment) {
    console.log("createComment has been triggered")
    console.log(newComment)
    this.postNewComment(newComment)

      // axios.get if there isn't an automated response to post
      // update comments, setState
  }

  render () {
    let comments = this.state.comments.map(comment => {
      return <CommentTemplate 
        key={'comment' + comment.pk} 
        user={comment.user} 
        photo_url={comment.photo_url}
        date={comment.date}
        body={comment.body} 
      />
    })

    return (
      <Grid centered columns={2}>
      <Grid.Column>
        <Comment.Group>
          {comments}
          <CommentForm createComment={this.createComment} />
        </Comment.Group>
      </Grid.Column>
      </Grid>
    )
  }
}

export default CommentContainer
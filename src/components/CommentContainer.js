import React, {Component} from 'react'
import axios from 'axios'
import { Grid, Comment } from 'semantic-ui-react'
import CommentTemplate from './CommentTemplate'
import CommentForm from './CommentForm'

class CommentContainer extends Component {
  state = {
    comments: []
  }


  async getComments() {
    axios(`http://localhost:8000/`)
    .then(res => {
      // let comments = JSON.parse(res.data);
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
    let config = {
      headers: {"Authorization": "bearer " + 
        this.getToken()}
    }
    console.log(config)
    axios.post('http://localhost:8000/addcomment', newComment, config)
    .then(function (response) {
      console.log(response);
    })
    // .then(getComments())
    .catch(function (error) {
      console.log(error);
    });
  }
///////////////////////////////////


  // refreshAccessToken = (token) => ({
  //   [RSAA]: {
  //     endpoint: 'http://localhost:8000/api/auth/token/refresh/',
  //     method: 'POST',
  //     body: JSON.stringify({refresh: token}),
  //     headers: { 'Content-Type': 'application/json' },
  //     types: [
  //       TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
  //     ]
  //   }
  // })

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
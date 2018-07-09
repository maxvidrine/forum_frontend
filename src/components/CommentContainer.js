import React, {Component} from 'react'
import axios from 'axios'
import { Grid, Comment } from 'semantic-ui-react'
import CommentTemplate from './CommentTemplate'
import CommentForm from './CommentForm'


class CommentContainer extends Component {

  state = {
    comments: []
  }

  componentWillMount = async() => {
    await axios(`http://localhost:8000`)
    .then(res => {
      console.log(res)
      // let comments = JSON.parse(res.data);
      let comments = res.data;
      this.setState({ comments });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    // let jsonresponse = "[{\"model\": \"forum.post\", \"pk\": 1, \"fields\": {\"user\": 1, \"date\": \"2018-07-05T23:08:56Z\", \"body\": \"On the subject of bunny rabbits\"}}, {\"model\": \"forum.post\", \"pk\": 2, \"fields\": {\"user\": 2, \"date\": \"2018-07-05T23:09:23Z\", \"body\": \"On the subject of prayer\"}}]";
    // let comment_data = JSON.parse(jsonresponse)

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
        <CommentForm />
      </Comment.Group>
      </Grid.Column>
      </Grid>
    )
  }
}

export default CommentContainer
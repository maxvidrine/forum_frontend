import React, {Component} from 'react'
import axios from 'axios'
import { Comment } from 'semantic-ui-react'
import CommentTemplate from './CommentTemplate'
import CommentForm from './CommentForm'


class CommentContainer extends Component {

  // let jsonresponse = "[{\"model\": \"forum.post\", \"pk\": 1, \"fields\": {\"user\": 1, \"date\": \"2018-07-05T23:08:56Z\", \"body\": \"On the subject of bunny rabbits\"}}, {\"model\": \"forum.post\", \"pk\": 2, \"fields\": {\"user\": 2, \"date\": \"2018-07-05T23:09:23Z\", \"body\": \"On the subject of prayer\"}}]";
  // JSON.parse(jsonresponse)
  state = {
    comments: []
  }

  componentWillMount = async() => {
    await axios(`http://localhost:8000`)
    .then(res => {
      let comments = JSON.parse(res.data);
      this.setState({ comments });
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  render () {

    console.log(this.state.comments)

    // comment_data = JSON.parse(jsonresponse)

    let comments = this.state.comments.map(comment => {
      return <CommentTemplate 
        key={'comment' + comment.pk} 
        user={comment.fields.user} 
        date={comment.fields.date}
        body={comment.fields.body} 
      />
    })
    return (
      <Comment.Group>
        {comments}
        <CommentForm />
      </Comment.Group>
    )
  }
}

export default CommentContainer
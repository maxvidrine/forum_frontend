import React, {Component} from 'react'
import { Comment } from 'semantic-ui-react'
import CommentTemplate from './CommentTemplate'
import CommentForm from './CommentForm'

class CommentContainer extends Component {
  render () {
    const comment_data = [
      { "model": "forum.post",
        "pk": 1,
        "fields":
          { "user": 1,
            "date": "2018-07-05T23:08:56Z",
            "body": "On the subject of bunny rabbits",
          },
      },
      {"model": "forum.post", "pk": 2, "fields": {"user": 2, "date": "2018-07-05T23:09:23Z", "body": "On the subject of prayer"}}
    ]
    let comments = comment_data.map(comment => {
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
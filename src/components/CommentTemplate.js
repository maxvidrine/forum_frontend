import React, {Component} from 'react'
import { Comment } from 'semantic-ui-react'

class CommentTemplate extends Component {
  render () {
    return (
        <Comment>
            <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
            <Comment.Content>
            <Comment.Author>{this.props.user}</Comment.Author>
            <Comment.Metadata>
                <div>{this.props.date}</div>
            </Comment.Metadata>
            <Comment.Text>{this.props.body}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
            </Comment.Content>
        </Comment>
        )
    }
}

export default CommentTemplate
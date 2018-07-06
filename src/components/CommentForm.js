import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

class CommentForm extends Component {
  render () {
    return (
        <Form reply>
            <Form.TextArea />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
    )
  }
}

export default CommentForm
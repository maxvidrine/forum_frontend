import React, {Component} from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import TextInput from './TextInput'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 
            'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }
  
  render() {
    const errors = this.props.errors || {}
    return (
        <Grid centered columns={2}>
        <Grid.Column>
            <Form onSubmit={this.onSubmit}>
                <h1>Authentication</h1>
                {
                errors.non_field_errors?
                <p>{errors.non_field_errors}</p>:
                ""
                }
                <TextInput name="username" label="Username" 
                            error={errors.username}
                            onChange={this.handleInputChange} />
                <TextInput name="password" label="Password" 
                            error={errors.password} type="password"  
                            onChange={this.handleInputChange} />
                <Button type="submit" primary >
                    Log In
                </Button>
            </Form>
        </Grid.Column>
        </Grid>
    )
  }
}
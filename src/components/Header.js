import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Nav from './Nav'

class Header extends Component {
  render () {
    return (
      <header>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <h1 id="header">Forum</h1>
            </Grid.Column>
            <Grid.Column>
              <Nav />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </header>
    )
  }
}

export default Header
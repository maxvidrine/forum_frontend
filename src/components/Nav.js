import React, {Component} from 'react'

class Nav extends Component {
    


    removeTokens=(e)=>{
        e.preventDefault();
        localStorage.removeItem('persist:forum')
        window.location.reload()
    }

  render () {


    return (
      <nav>
        <a href="" onClick={this.removeTokens}>Log Out</a>
      </nav>
    )
  }
}

export default Nav
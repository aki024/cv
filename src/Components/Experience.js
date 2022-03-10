import React, { Component } from 'react'

class Experience extends Component {
    constructor(props) {
      super(props)
    
      
    }

    
  render() {
     
    return (
      <div>
          <h3>Work Experience</h3>
         <button onClick={this.props.addWorkExperience}>Add</button>
      </div>
    )
  }
}

export default Experience
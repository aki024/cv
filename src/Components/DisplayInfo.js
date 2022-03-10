import React, { Component } from 'react'

class DisplayInfo extends Component {
    constructor(props) {
      super(props)
    
     
    }
  render() {
      const{firstName,lastName,title,address,phonenr,email,description,work,workExp} = this.props;
    return (
      <div>
          <h2>{firstName} {lastName}</h2>
          <h2> {title}</h2>
          
          <h2>Address {address}</h2>
          <h2>Phone number {phonenr}</h2>
          <h2>Email {email}</h2>
          <h2>Description {description}</h2>
          <h2>
              
              {workExp.map((work)=>{
                  return (<div id={work.id} key={work.id} >
                  <input type="text"placeholder="Position" onInput={this.props.handlePosition}></input>
                  <input type="text"placeholder="Company" onInput={this.props.handleCompany}></input>
                  <input type="text"placeholder="City" onInput={this.props.handleCity}></input>
                  <input type="text"placeholder="From" onInput={this.props.handleFrom}></input>
                  <input type="text"placeholder="To" onInput={this.props.handleTo}></input>
                  <button id={work.id} onClick={this.props.removeExperience}>Delete</button>
                  
                  </div>)
              })}
          </h2>

          <h2>Work Position : {workExp.map((work)=>{
            return(<div key={work.id}>
              <h2>{work.position} {work.company},{work.city} {work.from}-{work.to}</h2>
              
            </div>)
          })}</h2>

          
      </div>
    )
  }
}

export default DisplayInfo
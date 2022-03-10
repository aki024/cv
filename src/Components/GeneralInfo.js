import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
      super(props)
    
      
    }

    
  render() {
      const {handleInput,handleInputLn,handleInputTt,handleInputAd,handleInputPn,handleInputMail,handleInputDesc} = this.props;
    return (
      <div>
          <h3>Personal information</h3>
          <input placeholder='First Name' onInput={handleInput}></input>
          <input placeholder='Last Name' onInput={handleInputLn}></input>
          <input placeholder='Title' onInput={handleInputTt}></input>
          <input placeholder='Address' onInput={handleInputAd}></input>
          <input placeholder='Phone number' onInput={handleInputPn}></input>
          <input placeholder='Email' onInput={handleInputMail}></input>
          <input placeholder='Description' onInput={handleInputDesc}></input>

      </div>
    )
  }
}

export default GeneralInfo
import React, { Component } from 'react'
import DisplayInfo from './DisplayInfo'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'
import uniqid from "uniqid";

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       title:'',
       address:'',
       phonenr:'',
       email:'',
       description:'',
       work:{position:'',company:'',city:'',from:'',to:'',id:uniqid()},
       workExp:[]
    }
//Binds------------------------------------------
    this.handleInput = this.handleInput.bind(this);
    this.handleInputLn = this.handleInputLn.bind(this);
    this.handleInputTt = this.handleInputTt.bind(this);
    this.handleInputAd = this.handleInputAd.bind(this);
    this.handleInputPn = this.handleInputPn.bind(this);
    this.handleInputMail = this.handleInputMail.bind(this);
    this.handleInputDesc = this.handleInputDesc.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
  }
//INPUTSSSSS-------------------------------------------
  handleInput(e){
    this.setState({
      firstName:e.target.value
    })
  }

  handleInputLn(e){
    this.setState({
      lastName:e.target.value
    })
  }

  handleInputTt(e){
    this.setState({
      title:e.target.value
    })
  }

  handleInputAd(e){
    this.setState({
      address:e.target.value
    })
  }

  handleInputPn(e){
    this.setState({
      phonenr:e.target.value
    })
  }

  handleInputMail(e){
    this.setState({
        email:e.target.value
    })
  }

  handleInputDesc(e){
    this.setState({
      description:e.target.value
    })
  }
  handlePosition(e){
    this.setState(prevState =>({

      workExp: prevState.workExp.map(eachItem=>
        eachItem.id === e.target.parentElement.id ?
        {...eachItem,position:e.target.value} : eachItem 
      )
    }))
  }
  handleCompany(e){
    this.setState(prevState =>({

      workExp: prevState.workExp.map(eachItem=>
        eachItem.id === e.target.parentElement.id ?
        {...eachItem,company:e.target.value} : eachItem 
      )
    }))
  }
  handleCity(e){
    this.setState(prevState =>({

      workExp: prevState.workExp.map(eachItem=>
        eachItem.id === e.target.parentElement.id ?
        {...eachItem,city:e.target.value} : eachItem 
      )
    }))
  }

  handleFrom(e){
    this.setState(prevState =>({

      workExp: prevState.workExp.map(eachItem=>
        eachItem.id === e.target.parentElement.id ?
        {...eachItem,from:e.target.value} : eachItem 
      )
    }))
  }
  handleTo(e){
    this.setState(prevState =>({

      workExp: prevState.workExp.map(eachItem=>
        eachItem.id === e.target.parentElement.id ?
        {...eachItem,to:e.target.value} : eachItem 
      )
    }))
  }
  
  //INPUUUUTSSSSS---------------------------------------
  addWorkExperience(){
    this.setState({
      
      workExp: this.state.workExp.concat(this.state.work),
      work:{position:'',company:'',city:'',from:'',to:'',id:uniqid()},
      
      
    })
    
}

removeExperience(e){
    this.setState({
        workExp:this.state.workExp.filter(work=>{
            return work.id !== e.target.id
        })
    })
    
}

  render() {
    const{firstName,lastName,title,address,phonenr,email,description,work,workExp} = this.state;
    return (
      <div>
        <GeneralInfo handleInput={this.handleInput}
        handleInputLn={this.handleInputLn}
        handleInputTt={this.handleInputTt}
        handleInputAd={this.handleInputAd}
        handleInputPn={this.handleInputPn}
        handleInputMail={this.handleInputMail}
        handleInputDesc={this.handleInputDesc}
        />
        <DisplayInfo firstName={firstName} 
        lastName={lastName}
        title={title}
        address={address}
        phonenr={phonenr}
        email={email}
        description={description}
        //event listeners
        removeExperience={this.removeExperience}
        handlePosition={this.handlePosition}
        handleCompany={this.handleCompany}
        handleCity={this.handleCity}
        handleFrom={this.handleFrom}
        handleTo ={this.handleTo}
        workExp={workExp}
       
        />
        <Experience addWorkExperience={this.addWorkExperience}/>

      </div>
    )
  }
}

export default Main
import React, { Component } from 'react';
import './LoginPage.css'
import  firebase  from '../../firebase'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            signIn:true,
            signin_email:null,
            signin_password:null,
            name:null,
            email:null,
            password:null
        }
    }

    switchpage =()=>{
        if(this.state.signIn){
            this.setState({signIn:false})
        }else{
            this.setState({sigIn:true})
        }
    }

    signUp =(e) =>{
        e.preventDefault()
       
       firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then((userCredential)=>{
           let user = userCredential.uid
             // console.log(userCredential.uid)
           let payload ={
               "userID" : user,
               "userName":this.state.name,
               "userImage":"abc.url"
           }

           const requestOptions ={
               method:"POST",
               headers:{'Content-type':'application/json'},
               body: JSON.stringify(payload)
           }
            
           fetch('http://localhost:8080/api/userService/save',requestOptions).then(response=>response.json())
           .then(data =>{
            let user = userCredential.user
            console.log(data)
            localStorage.setItem('user',JSON.stringify(data))
            window.location.reload()
           }).catch((err)=>{
               console.log(err)
           })
       }).catch((error)=>{
           let errorCode =error.code
           let errorMessage = error.message
           console.log(errorCode)
           console.log(errorMessage)

       }
       )
    }

    signIn =(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.signin_email,this.state.signin_password)
        .then((userCredential)=>{
            console.log(userCredential.uid)
            let userId =userCredential.uid
            fetch('http://localhost:8080/api/userService/getAllUsers/'+ userId)
           .then(data =>{
            console.log(data)
           localStorage.setItem('user',JSON.stringify(data))
            window.location.reload()
           
           }).catch((err)=>{
               console.log(err)
           })
        }).catch((error)=>{
            let errorCode =error.code
            let errorMessage = error.message
            
 
        })
    }

    render() { 
        return (
   
        <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
       
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          {
              this.state.signIn?
              <form>
        
         
        <div className="form-ouontline mb-4">
            <input onChange={(event)=>{this.state.name=event.currentTarget.value}} type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a name" />
            <label className="form-label" >Name</label>
          </div>

          <div className="form-outline mb-4">
            <input onChange={(event)=>{this.state.email=event.currentTarget.value}} type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" >Email address</label>
          </div>

         
          <div className="form-outline mb-3">
            <input onChange={(event)=>{this.state.password=event.currentTarget.value}} type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              
            </div>
            
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  className="btn btn-primary btn-lg" onClick={this.signUp}
             >Sign Up</button>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  className="btn btn-primary btn-lg" onClick={this.switchpage}
             >Already have Account</button>
          </div>

        </form> :
          <form>
    
  
            <div className="form-outline mb-4">
              <input onChange={(e)=>{this.state.signin_email=e.currentTarget.value}} type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" />
              <label className="form-label" >Email address</label>
            </div>
  
           
            <div className="form-outline mb-3">
              <input onChange={(e)=>{this.state.signin_password=e.currentTarget.value}} type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" />
              <label className="form-label">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
             
              <div className="form-check mb-0">
                
              </div>
              
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button  onClick={this.signIn} className="btn btn-primary btn-lg"
               >Login</button>
            </div>
  
          </form>
          }
      
      </div>
    </div>
  </div>

  
  
  );
    }
}
 
export default LoginPage;
import React from 'react'
import ContactList from './ContactList';


class AddContact extends React.Component{
  state ={
    name:"",
    surname:"",
  };
    add = (e) => {
      e.preventDefault();
      if(this.state.name === "" || this.state.surname ===""){
        alert("all fields must be completed!");
        return
    
      }
      this.props.AddContactHandler(this.state);
      console.log(ContactList);
      this.setState({name:"",surname:""});
      
    }
    render(){
        return(
          <div className="container">
          <form ref="form" onSubmit={this.add}>
          <div className="form-group">
            <label >Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label className='title-wrap'>Surname</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
            value={this.state.name}
            onChange={(e) => this.setState({surname: e.target.value})}
            />
          </div>
          <div className="form-group">            
          </div>          
          
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
          </div>
        );
    }
}

export default AddContact
import React, {Component} from 'react';
import './myProfile.less';


class MyProfile extends Component {

  state = {
    name: "",
    gender: "Male",
    desc: "",
    checked: false
  }


  handleFieldChange = (field, event) => {
    const target = event.target;
    const value = field === 'checked'? !this.state.checked : target.value;
    this.setState({
      [field]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.gender);
    console.log(this.state.desc);
  }


  render() {
    return (
      <div className='container'>
        <form className='my-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' id='name' value={this.state.name} placeholder='Your name'
                   onChange={(event) => this.handleFieldChange('name', event)}/>
          </div>
          <div className='form-group'>
            <label>Gender</label>
            <select htmlFor='gender' className='custom-select d-block w-100' value={this.state.gender}
                    onChange={(event) => this.handleFieldChange('gender', event)}>Gender
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='form-group'>
            <textarea
              htmlFor='desc'
              placeholder='Description about yourself'
              value={this.state.desc}
              onChange={(event) => this.handleFieldChange('desc', event)}>Description
            </textarea>
          </div>
          <div className='form-group'>
            <input type='checkbox' onChange={(event) => this.handleFieldChange('checked', event)}/> I have read the terms of conduct
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={this.state.name === '' || this.state.gender === '' || this.state.desc === '' || !this.state.checked}
          >
            Submit
          </button>
        </form>
      </div>

    );
  }
}

export default MyProfile;



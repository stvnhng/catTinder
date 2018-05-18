import React, { Component } from 'react';
import {
  FormControl
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  render() {
    return (
      <div>
        <form>
          <p>New Feline</p>
          <FormControl
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.name}
          />

          <FormControl
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.age}
          />

          <FormControl
            type="text"
            name="enjoys"
            placeholder="Hobbies"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.enjoys}
          />

        <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>

        </form>
            {this.props.success &&
                <Redirect to="/cats" />
            }

      </div>
    )
  }
}

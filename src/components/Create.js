import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      taskTitle: '',
      subTask: '',
      subTask2: '',
      subTask3: '',
      patient: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { taskTitle, subTask, subTask2, subTask3, patient } = this.state;

    this.ref.add({
      taskTitle,
      subTask,
      subTask2,
      subTask3,
      patient
    }).then((docRef) => {
      this.setState({
        taskTitle: '',
        subTask: '',
        subTask2: '',
        subTask3: '',
        patient: ''
      });
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { taskTitle, subTask, subTask2, subTask3, patient } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Add task
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/" className="btn btn-primary">Go back</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="taskTitle">Title</label>
                <input type="text" className="form-control" name="title" value={taskTitle} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="subTask">Description</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{subTask}</textArea>
              </div>
              <div className="form-group">
                <label for="subTask2">Description</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{subTask2}</textArea>
              </div>
              <div className="form-group">
                <label for="subTask3">Description</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{subTask3}</textArea>
              </div>
              <div className="form-group">
                <label for="patient">Patient</label>
                <input type="text" className="form-control" name="author" value={patient} onChange={this.onChange} placeholder="Patient" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;

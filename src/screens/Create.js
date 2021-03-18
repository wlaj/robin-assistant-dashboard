import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Sidebar from '../components/Sidebar';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      taskTitle: '',
      subTask: '',
      subTask2: '',
      subTask3: '',
      subTask4: '',
      subTask5: '',
      subTask6: '',
      patient: '',
      imageUrl: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { taskTitle, patient, imageUrl, subTask, subTask2, subTask3, subTask4, subTask5, subTask6 } = this.state;

    this.ref.add({
      taskTitle,
      subTask,
      subTask2,
      subTask3,
      subTask4,
      subTask5,
      subTask6,
      patient,
      imageUrl
    }).then((docRef) => {
      this.setState({
        taskTitle: '',
        subTask: '',
        subTask2: '',
        subTask3: '',
        subTask4: '',
        subTask5: '',
        subTask6: '',
        patient: '',
        imageUrl: ''
      });
      this.props.history.push("/dashboard")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { taskTitle, patient, imageUrl, subTask, subTask2, subTask3, subTask4, subTask5, subTask6 } = this.state;
    return (
      <>
      <Sidebar />
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add task
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="taskTitle">Title:</label>
                <input type="text" class="form-control" name="taskTitle" value={taskTitle} onChange={this.onChange} placeholder="taskTitle" />
              </div>
              <div class="form-group">
                <label for="patient">Patient</label>
                <input type="text" class="form-control" name="patient" value={patient} onChange={this.onChange} placeholder="Patient" />
              </div>
              <div class="form-group">
                <label for="imageUrl">Image</label>
                <input type="text" class="form-control" name="imageUrl" value={imageUrl} onChange={this.onChange} placeholder="imageUrl" />
              </div>
              <CardColumns>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask" value={subTask} onChange={this.onChange} placeholder="subTask" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask2" value={subTask2} onChange={this.onChange} placeholder="subTask2" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask3" value={subTask3} onChange={this.onChange} placeholder="subTask3" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask4" value={subTask4} onChange={this.onChange} placeholder="subTask4" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask5" value={subTask5} onChange={this.onChange} placeholder="subTask5" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask6" value={subTask6} onChange={this.onChange} placeholder="subTask6" />
                </Card.Body>
                </Card>
              </div>
              </CardColumns>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Create;
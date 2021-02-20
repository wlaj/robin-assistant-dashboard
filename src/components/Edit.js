import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
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

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          taskTitle: board.taskTitle,
          patient: board.patient,
          imageUrl: board.imageUrl,
          subTask: board.subTask,
          subTask2: board.subTask2,
          subTask3: board.subTask3,
          subTask4: board.subTask4,
          subTask5: board.subTask5,
          subTask6: board.subTask6,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { taskTitle, patient, imageUrl, subTask, subTask2, subTask3, subTask4, subTask5, subTask6 } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      taskTitle,
      patient,
      imageUrl,
      subTask,
      subTask2,
      subTask3,
      subTask4,
      subTask5, 
      subTask6, 
    }).then((docRef) => {
      this.setState({
        key: '',
        taskTitle: '',
        patient: '',
        imageUrl: '',
        subTask: '',
        subTask2: '',
        subTask3: '',
        subTask4: '',
        subTask5: '',
        subTask6: '',
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT TASK
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.key}`} className="btn btn-primary">Go back</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="taskTitle">Title</label>
                <input type="text" className="form-control" name="taskTitle" value={this.state.taskTitle} onChange={this.onChange} placeholder="taskTitle" />
              </div>
              <div className="form-group">
                <label for="description">Patient</label>
                <input type="text" className="form-control" name="patient" value={this.state.patient} onChange={this.onChange} placeholder="Patient" />
              </div>
              <div className="form-group">
                <label for="imageUrl">Image URL</label>
                <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange} placeholder="imageUrl" />
              </div>
              <CardColumns>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask" value={this.state.subTask} onChange={this.onChange} placeholder="subTask" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask2" value={this.state.subTask2} onChange={this.onChange} placeholder="subTask2" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask3" value={this.state.subTask3} onChange={this.onChange} placeholder="subTask3" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask4" value={this.state.subTask4} onChange={this.onChange} placeholder="subTask4" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask5" value={this.state.subTask5} onChange={this.onChange} placeholder="subTask5" />
                </Card.Body>
                </Card>
              </div>
              <div class="form-group inline">
                <Card>
                <Card.Body>
                <input type="text" class="form-control" name="subTask6" value={this.state.subTask6} onChange={this.onChange} placeholder="subTask6" />
                </Card.Body>
                </Card>
              </div>
              </CardColumns>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;

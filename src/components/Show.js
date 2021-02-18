import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import Header from "./Header";

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/dashboard")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <>
      <Header />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
          <h4><Link to="/dashboard">Task list</Link></h4>
            <h3 className="panel-title">
              {this.state.board.taskTitle}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Subtask 1</dt>
              <dd>{this.state.board.subTask}</dd>
              <dt>Subtask 2</dt>
              <dd>{this.state.board.subTask2}</dd>
              <dt>Subtask 3</dt>
              <dd>{this.state.board.subTask2}</dd>
              <dt>Subtask 4</dt>
              <dd>{this.state.board.subTask2}</dd>
              <dt>Subtask 5</dt>
              <dd>{this.state.board.subTask2}</dd>
              <dt>Image</dt>
              <dd><img alt="Content" src={this.state.board.imageUrl}/></dd>
              <dt>Audio</dt>
              <dd><audio ref="audio_tag" src={this.state.board.audioUrl} controls/></dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Show;

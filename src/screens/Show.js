import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: '',
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection('boards')
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log('No such document!');
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection('boards')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        this.props.history.push('/dashboard');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className='container'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>{this.state.board.taskTitle}</h3>
              <h5 className='panel-title'>{this.state.board.patient}</h5>
            </div>
            <div className='panel-body'>
              <dl>
                <CardColumns>
                  <div class='form-group inline'>
                    <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask}</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class='form-group inline'>
                  <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask2}</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class='form-group inline'>
                  <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask3}</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class='form-group inline'>
                  <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask4}</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class='form-group inline'>
                  <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask5}</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class='form-group inline'>
                  <Card>
                      <Card.Body>
                        <p>{this.state.board.subTask6}</p>
                      </Card.Body>
                    </Card>
                  </div>
                </CardColumns>
                <dt>Image</dt>
                <dd>
                  <img style={{width: "15%"}} alt='Content' src={this.state.board.imageUrl} />
                </dd>
                <dt>Audio</dt>
                <dd>
                  <audio
                    ref='audio_tag'
                    src={this.state.board.audioUrl}
                    controls
                  />
                </dd>
              </dl>
              <Link to={`/edit/${this.state.key}`} className='btn btn-success'>
                Edit
              </Link>
              &nbsp;
              <button
                onClick={this.delete.bind(this, this.state.key)}
                className='btn btn-danger'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Show;

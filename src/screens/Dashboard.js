import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../Firebase';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import '../App.scss';

import blobs from '../public/img/home-content-header-image.svg';
import Container from 'react-bootstrap/Container';

import '../public/scss/Dashboard.scss';

import Sidebar from '../components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { taskTitle, patient, imageUrl } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        taskTitle,
        patient,
        imageUrl,
      });
    });
    this.setState({
      boards,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <>
        <Sidebar />
        <section
          style={{ backgroundImage: 'url(' + blobs + ')' }}
          className='dashboard-content-header'
        >
          <Container>
            <div class='jumbotron medium-text bg-transparent'>
              <h1 class='display-4'>Dashboard</h1>
              <p>
                For people with special needs and their carers <br></br>
                performing everyday activities.
              </p>
            </div>
          </Container>
        </section>
        <div className='dashboard-content'>
          <div className='container'>
            <div className='panel panel-default'>
              <h4 class='panel-heading-subtitle'>Learn more</h4>
              <div className='panel-heading'>
                <div class='row'>
                  <div class='col-sm-6'>
                    <div class='card'>
                      <div class='card-body'>
                        <p class='card-text'>
                          <small class='text-muted'>Robin Assistant tip of the day!</small>
                        </p>
                        <h5 class='card-title'>Make use of audiofiles</h5>
                        <p class='card-text'>
                          Import audiofiles in a task for better explanation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6'>
                    <div class='card'>
                      <div class='card-body'>
                        <p class='card-text'>
                          <small class='text-muted'>Robin Assistant tip of the day!</small>
                        </p>
                        <h5 class='card-title'>Make use of images</h5>
                        <p class='card-text'>
                          For better explanation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel-body'>
              <h4 class='panel-heading-subtitle'>All tasks</h4>
                {this.state.boards.map((board) => (
                  <>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <img alt="Content" src={board.imageUrl}/>
                          <Link to={`/show/${board.key}`}>
                            {board.taskTitle}
                          </Link>
                        </Card.Title>
                        {board.patient}
                      </Card.Body>
                    </Card>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

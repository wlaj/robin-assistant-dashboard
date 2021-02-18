import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Header from './Header';

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
      const { taskTitle, subTask, subTask2, subTask3, subTask4, patient } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        taskTitle,
        subTask,
        subTask2,
        subTask3,
        subTask4,
        patient
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
        <Header />
        <div className='container'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Task list</h3>
            </div>
            <div className='panel-body'>
              <h4>
                <Link to='/create' className='btn btn-primary'>
                  Add Task
                </Link>
              </h4>
              {this.state.boards.map((board) => (
                <>
                  <CardColumns>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <Link to={`/show/${board.key}`}>{board.taskTitle}</Link>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <p>{board.subTask}</p>
                      <p>{board.subTask2}</p>
                    </Card>
                  </CardColumns>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

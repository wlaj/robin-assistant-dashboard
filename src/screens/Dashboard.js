import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import '../App.scss';

import Header from '../components/Header';

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
      const { taskTitle, patient, subTask, subTask2, subTask3, subTask4, subTask5, subTask6, subTask7, subTask8, subTask9, subTask10,
       subTask11, subTask12, subTask13, subTask14, subTask15, subTask16, subTask17, subTask18, subTask19, subTask20, subTask21 } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        taskTitle,
        patient,
        subTask,
        subTask2,
        subTask3,
        subTask4,
        subTask5,
        subTask6,
        subTask7,
        subTask8,
        subTask9,
        subTask10,
        subTask11,
        subTask12,
        subTask13,
        subTask14,
        subTask15,
        subTask16,
        subTask17,
        subTask18,
        subTask19,
        subTask20,
        subTask21,
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
                <Link to='/create' className='btn btn-secondary'>
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
                    <Card.Body>
                      <p>{board.subTask}</p>
                      <p>{board.subTask2}</p>
                      <p>{board.subTask3}</p>
                      <p>{board.subTask4}</p>
                      <p>{board.subTask5}</p>
                      <p>{board.subTask6}</p>
                      <p>{board.subTask7}</p>
                      <p>{board.subTask8}</p>
                      <p>{board.subTask9}</p>
                      <p>{board.subTask10}</p>
                      <p>{board.subTask11}</p>
                      <p>{board.subTask12}</p>
                      <p>{board.subTask13}</p>
                      <p>{board.subTask14}</p>
                      <p>{board.subTask15}</p>
                      <p>{board.subTask16}</p>
                      <p>{board.subTask17}</p>
                      <p>{board.subTask18}</p>
                      <p>{board.subTask19}</p>
                      <p>{board.subTask20}</p>
                      <p>{board.subTask21}</p>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <Link to={`/show/${board.key}`}>{board.patient}</Link>
                        </Card.Title>
                      </Card.Body>
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

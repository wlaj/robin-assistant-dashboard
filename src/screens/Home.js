import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

import info from '../public/img/image-03.svg';
import banner from '../public/img/image-04.jpg';
import phone from '../public/img/smartphone-24px.svg';
import blobs from '../public/img/image-06.svg';

import '../public/scss/Home.scss';

function Home() {
  return (
    <>
      <Header />
      <section style={{ backgroundImage: 'url(' + blobs + ')' }} className='home-content-header'>
        <Container>
          <div class='jumbotron medium-text bg-transparent'>
            <p class='lead'>ROBIN ASSISTANT</p>
            <h1 class='display-4'>Assistive software service solution</h1>
            <p>
              For people with special needs and their carers <br></br>performing
              everyday activities.
            </p>
          </div>
        </Container>
      </section>
      <section className='home-content-cards'>
        <Container>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Download the app</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div class='button-group'>
                <Link className='btn btn-outline-primary' to='/signup'>
                  Download
                </Link>
              </div>
            </Card>
          </CardDeck>
        </Container>
      </section>
      <section className='home-content-robin-service'>
        <Container>
          <div class='jumbotron small-text bg-transparent'>
            <div class='service-text'>
              <h1 class='display-4'>What is Robin Assistant?</h1>
              <p>
                Robin is an assistive software solution that allows carers to
                set up and plan daily activities for the ones they are taking
                care of. <br></br>Robin will then assist the individual in
                performing these activities by providing step-by-step guidance,
                using images, text and audio instructions.
              </p>
            </div>
            <img src={info} alt='Information' />
          </div>
        </Container>
      </section>
      <section className='home-content-robin-card-deck'>
        <Container>
          <CardDeck>
            <Card>
              <Card.Img variant='top' src={phone} />
              <Card.Body>
                <Card.Title>Independence</Card.Title>
                <Card.Text>
                  Robin has several benefits to make your daily life as
                  comfortable as possible. What are the benefits of Robin
                  Assistant and why should you use it?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={phone} />
              <Card.Body>
                <Card.Title>Daily routines</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={phone} />
              <Card.Body>
                <Card.Title>Dashboard management</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </section>
      <section className='home-content-robin-info-card'>
        <Container>
          <Card style={{ backgroundImage: 'url(' + banner + ')' }}>
            <Card.Body>
              <Card.Text>
                Did we already convince you? Get Robin Assistant today and start
                helping others.
              </Card.Text>
            </Card.Body>
            <div class='button-group'>
              <Link className='btn btn-primary' to='/signup'>
                Sign up
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}

export default Home;

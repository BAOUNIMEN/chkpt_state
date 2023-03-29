
import './App.css';

import React, { Component } from 'react'


export default class extends Component {
  state = {
     Person :{
    fullName: 'IMEN BENAOUN',
    bio: 'IMEN BenAoun , I like Learning, Sport, Music, Taking care of animals.',
    profession: 'student at GO My Code Academy, The Full-Stack Javascript.',
    imgsrc: "https://media.istockphoto.com/id/1057789768/fr/photo/vue-de-dessus-de-bureau-avec-smart-phone-tablette-num%C3%A9rique-et-clavier-technologie-de-concept.jpg?s=170667a&w=0&k=20&c=EBET3avNsYTjhmBVoMoK7OnOBspBFGwKjVWbnHXTdB4=",
    
  },
  shows: true,
  count:0
  
  };
  handleshow = () => this.setState({ shows:  !this.state.shows} );
  
  

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }
  

  render() {

      const myStyle = { color: "blue", fontSize: "1.2rem", margin: "7px", };
      return (
        <div >
          
          <button onClick={this.handleshow} > {this.state.shows ? 'hide' : 'show'}</button>
          {
            this.state.shows &&

            <body style={{ margin: "150px 100px", fontSize: "1.2rem" }}>
              <h1>Self-Profile </h1>
              <div className="media">
                <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" className="mr-3" alt="Biophoto" style={{ width: "50px" }} />
                <div className="media-body">
                  <h5 className="mt-0" style={{ textTransform: "uppercase", margin: "10px", }}>{this.props.FullName}</h5>
                  <span style={myStyle}>FullName:</span> {this.state.Person.fullName} <br />
                  <span style={myStyle}>Bio:</span>{this.state.Person.bio}<br />
                  <span style={myStyle}>Profession:</span>{this.state.Person.profession}<br />
                </div>
              </div>
              <img src={this.state.Person.imgsrc} />
              <h3>The component has been rendered for {this.state.count} seconds</h3>
              
            </body>

          }
        </div>
      )
    }
  }


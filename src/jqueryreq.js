import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';

class App extends Component {
  state = {
    data: []
  }
  getData = () => {
    $.ajax({
      url: "http://5afda6962cfff500145ad936.mockapi.io/simpleimages"
    }).then(data => {
      console.log(data)
      this.setState({data: data})
    })
  }
  render() {
    const codeStyles = {
      display: 'block',
      fontSize: '44px',
      fontFamily: 'monospace'
    }
    return (
      <div>  
        <code style={codeStyles}>{JSON.stringify(this.state.data)}</code>
        <button onClick={this.getData}>Get Data!</button>

          {this.state.data ? this.state.data.map(imageData => {
            return <div className="d-block w-100">
               <img src={imageData.imgUrl} />
              </div>
          }): null}
          {console.log("this.state.data is: ",this.state.data)}
        
      </div>
    );
  }
}

export default App;
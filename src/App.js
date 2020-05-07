import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';


let marked = require("marked");

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        markdown: ''
      }

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown (event){
    this.setState({
      markdown: event.target.value
    });
  }

  render(){
    let {markdown} = this.state;
    console.log(markdown);
    return (
      <>
        <div className="App container">
          <div className="row">
              <div className="col-md-12">
                <h1 className= "text-center">Markdown Preview WebPage</h1>
                <hr />
              </div>
              <div className="col-md-6">
                <Form>
                  <Form.Group controlId='formControlsTextarea'>
                    <Form.Label>Markdown Area</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Markdown" value = {this.state.markdown} onChange = {this.updateMarkdown}/>
                  </Form.Group>
                </Form>
              </div>
              <div className = "col-md-6">
                <label>Markdown Result</label>
                <div>
                  <div dangerouslySetInnerHTML= {{__html: marked(markdown)}}></div>
                </div>
              </div>

          </div>
        </div>
      </>
    );
  }

}

export default App;

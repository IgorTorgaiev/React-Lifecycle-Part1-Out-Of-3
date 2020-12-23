import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// Constructor()

class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {topic: "Constructor"};
  }
  render() {
    return(
      <div>
        <h1>React. Lifecycle</h1>
        <p>1. The first method of Mounting is <strong>{this.state.topic}()</strong>.</p>
      </div>
    );
  }
}
ReactDOM.render(<Example />, document.getElementById('constructor'));

// getDerivedStateFromProps()

class Language extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first: "French",
      second: "English"
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {second: props.lang};
  }
  render(){
    return(
      <div>
        <h2>Here we used the method <em>getDerivedStateFromProps()</em>.</h2>
        <p>2. For example, we changed the language. Initially it'd been English, now it is {this.state.second}.</p>
      </div>
    );
  }
}
ReactDOM.render(<Language lang="Russian" />, document.getElementById('derived'));


// render()

class Topic extends React.Component {
  render() {
    return <h2>The <em>render()</em> method is the 3rd one that belongs to Mounting</h2>
  }
}
ReactDOM.render(<Topic />, document.getElementById('render'));


class Topic1 extends React.Component {
  render() {
    return(
      <div>
        <p>3. The <em>render()</em> method is the 3rd one that belongs to Mounting</p>
        <p>We used the <em>render()</em> method one more time. The difference is that after <em>return</em> we put NO brackets.</p>
      </div>
    );
  }
}
ReactDOM.render(<Topic1 />, document.getElementById('render1'));

// componentDidMount

class Sports extends React.Component {
  constructor(props){
    super(props);
    this.state = {kind: "boxing"};
  }
  componentDidMount() {
    setTimeout(()=> {
      this.setState({favouriteSports: "Street Workout"})
    }, 1000)
  }
  render(){
    return<p>The kind of sports I like doing is {this.state.favouriteSports}.</p>
  }
}

ReactDOM.render(<Sports />, document.getElementById('mount'));
import './App.css';
import Post from './UserOutput'
import Input from './UserInput'
import { Component } from 'react'

class App extends Component< any, {title: string, post: string} > {

  state = {
    title: '',
    post: ''
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: e.target.value})
  }

  onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({post: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Input onChangeInput={this.onChangeInput} onChangeTextArea={this.onChangeTextArea}></Input>
        <Post title={this.state.title} post={this.state.post}></Post>
      </div>
    )
  }
}

export default App;

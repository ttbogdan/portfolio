import React, {Component} from 'react';
import TitleInput from './title-component';

class MainTitle extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: 'Default Name - component mounted'
    });
  }

  handleInput(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    let {name} = this.state;

    return (
      <div className="main-title">
        <div className="input-container">
          <input type="text" onChange={this.handleInput} />
        </div>

        <TitleInput name={name}></TitleInput>
      </div>
    );
  }
}

export default MainTitle;
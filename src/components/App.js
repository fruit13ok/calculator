import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // each button press will append to curExpression
            curExpression: ''
        };
    }
    // lifting state up from ButtonComponent's text to update this curExpression
    onButtonPressed = (text) =>{
        this.setState({curExpression: this.state.curExpression + text});
    }
    render() {
        return (
            <div className="app-center">
                <input type="text" value={this.state.curExpression} disabled={true} />
                <ButtonComponent text="0" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="1" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="2" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="3" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="4" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="5" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="6" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="7" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="8" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="9" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="+" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="-" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="*" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="/" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="=" onButtonPressed={this.onButtonPressed}/>
                <ButtonComponent text="CLEAR" onButtonPressed={this.onButtonPressed}/>
            </div>
        );
    }
}
export default App;

import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

/* eslint no-eval: 0 */

/*
Basic Calculator
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // each button press will append or overwrite to curExpression
            curExpression: []
        };
    }
    // lifting state up from ButtonComponent's text to update this curExpression
    // a list of conditions to keep the input math expression valid.
    onButtonPressed = (text) =>{
        if(this.state.curExpression.length === 0){
            if(text.match(/[1-9]/)){
                this.setState({curExpression: this.state.curExpression.concat(text)});
            }
        }else{
            if(this.state.curExpression[this.state.curExpression.length-1].match(/[0-9]/)){
                if(text.match(/[0-9]/)){
                    let tempArr = this.state.curExpression.slice();
                    tempArr[tempArr.length-1]=tempArr[tempArr.length-1]+text;
                    this.setState({curExpression: tempArr});
                }else if(text.match(/^(\+|-|\*|\/)$/)){
                    this.setState({curExpression: this.state.curExpression.concat(text)});
                }else if(text === '='){
                    let tempArr = [];
                    tempArr.push(eval(this.state.curExpression.join('')).toString());
                    this.setState({curExpression: tempArr});
                }else if(text === 'DELETE'){
                    this.setState({curExpression: this.state.curExpression.slice(0,this.state.curExpression.length-1)});
                }
            }else if(this.state.curExpression[this.state.curExpression.length-1].match(/^(\+|-|\*|\/)$/)){
                if(text.match(/[0-9]/)){
                    this.setState({curExpression: this.state.curExpression.concat(text)});
                }
                //ignore text.match(/^(\+|-|\*|\/|=)$/)
                else if(text === 'DELETE'){
                    this.setState({curExpression: this.state.curExpression.slice(0,this.state.curExpression.length-1)});
                }
            }
        }
        if(this.state.curExpression){
            console.log(this.state.curExpression);
        }
    }
    render() {
        return (
            <div className="app-center">
                <h1>Basic Calculator</h1>
                <h4>To input click on the available numbers or opterators. This calculator on calculate integer input. Future upgrade will include decimal input.</h4>
                {/* the order of components is necessary for grid */}
                <div className='wrapper'>
                    <input className="inputDisplay" type="text" value={this.state.curExpression.join('')} disabled={true} />
                    <ButtonComponent text="1" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="2" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="3" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="+" color="lightblue" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="4" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="5" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="6" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="-" color="lightblue" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="7" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="8" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="9" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="*" color="lightblue" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="0" color="lightyellow" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="=" color="lightgreen" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="DELETE" color="lightpink" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent text="/" color="lightblue" onButtonPressed={this.onButtonPressed}/>
                </div>
            </div>
        );
    }
}
export default App;

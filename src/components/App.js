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
    // 3 helper functions to manipulate array base on input
    addNewEleToCurExpr = (str) =>{
        this.setState({curExpression: this.state.curExpression.concat(str)});
    }
    setLastEleCurExpr = (str) =>{
        let tempArr = this.state.curExpression.slice();
        tempArr[tempArr.length-1]=tempArr[tempArr.length-1]+str;
        this.setState({curExpression: tempArr});
    }
    removeLastEleCurExpr = () => {
        this.setState({curExpression: this.state.curExpression.slice(0,this.state.curExpression.length-1)});
    }
    // lifting state up from ButtonComponent's text to update this curExpression
    // a list of conditions to keep the input math expression valid.
    onButtonPressed = (text) =>{
        let lastElement = this.state.curExpression[this.state.curExpression.length-1];
        if(this.state.curExpression.length === 0){
            if(text === '.'){
                this.addNewEleToCurExpr('0.');
            }else 
            if(text.match(/[1-9]/)){
                this.addNewEleToCurExpr(text);
            }else if(text === '(-)'){
                this.addNewEleToCurExpr('(-1)*');
            }
        }else{
            if(lastElement === '.'){
                if(text.match(/[0-9]/)){
                    this.setLastEleCurExpr(text);
                }
            }else if(lastElement === '(-1)*'){
                if(text === '.'){
                    this.addNewEleToCurExpr('0.');
                }else if(text.match(/[0-9]/)){
                    this.addNewEleToCurExpr(text);
                }
            }else if(lastElement.match(/[0-9]/)){
                if(text === '.'){
                    if(!lastElement.match(/\./)){
                        this.setLastEleCurExpr(text);
                    }
                }else if(text.match(/[0-9]/)){
                    this.setLastEleCurExpr(text);
                }else if(text.match(/^(\+|-|\*|\/)$/)){
                    this.addNewEleToCurExpr(text);
                }else if(text === '='){
                    let tempArr = [];
                    tempArr.push(eval(this.state.curExpression.join('')).toString());
                    this.setState({curExpression: tempArr});
                }
            }else if(lastElement.match(/^(\+|-|\*|\/)$/)){
                if(text === '(-)'){
                    this.addNewEleToCurExpr('(-1)*');
                }else if(text.match(/[1-9]|\./)){
                    this.addNewEleToCurExpr(text);
                }
            }
            if(text === 'DELETE'){
                this.removeLastEleCurExpr();
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
                <h4>To input click on the available numbers or opterators. Invalid input will be ignore.</h4>
                <div className='wrapper'>
                    <input className="inputDisplay" type="text" value={this.state.curExpression.join('')} disabled={true} />
                    <ButtonComponent cssStyle="btn1" text="1" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn2" text="2" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn3" text="3" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn4" text="4" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn5" text="5" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn6" text="6" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn7" text="7" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn8" text="8" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn9" text="9" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btn0" text="0" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnAdd" text="+" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnSubtract" text="-" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnMultiply" text="*" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnDivide" text="/" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnDecimal" text="." onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnNegative" text="(-)" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnEqual" text="=" onButtonPressed={this.onButtonPressed}/>
                    <ButtonComponent cssStyle="btnDelete" text="DELETE" onButtonPressed={this.onButtonPressed}/>
                </div>
            </div>
        );
    }
}
export default App;

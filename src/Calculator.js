import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props) {

        super(props);

        this.state = {
            finalResult: "0",
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        const currentExpression = this.state.finalResult;
        if(e.target.value === "clear") {
            this.setState({finalResult: "0"});
        }
        else if(e.target.value === "="){
            const finalResult = eval(this.state.finalResult).toFixed(6);
            this.setState({ finalResult: finalResult.toString()});
        }
        else if(!isNaN((currentExpression[currentExpression.length-1])) || !isNaN(e.target.value)){
            if( currentExpression === "0") {
                this.setState({
                    finalResult: e.target.value,
                });
            }
            else {
                this.setState({
                    finalResult: this.state.finalResult + e.target.value,
                });
            }

        }
    }

    render() {
        return (
            <div className="mainDiv">
                <div className="calculator" id="resultDiv">{this.state.finalResult}</div>
                <div id="clearAndDivide">
                    <button id="clear" value="clear" onClick={this.handleClick}>clear</button>
                    <button id="divide" value="/"  onClick={this.handleClick}>%</button>
                </div>
                <div className="calculator" id="nums1">
                    <button id="7" value="7" onClick={this.handleClick}>7</button>
                    <button id="8" value="8" onClick={this.handleClick}>8</button>
                    <button id="9" value="9" onClick={this.handleClick}>9</button>
                    <button id="subtract" value="-" onClick={this.handleClick}>-</button>
                </div>
                <div className="calculator" id="nums2">
                    <button id="4" value="4" onClick={this.handleClick}>4</button>
                    <button id="5" value="5" onClick={this.handleClick}>5</button>
                    <button id="6" value="6" onClick={this.handleClick}>6</button>
                    <button id="sum" value="+" onClick={this.handleClick}>+</button>
                </div>
                <div className="calculator" id="nums3">
                    <button id="1" value="1" onClick={this.handleClick}>1</button>
                    <button id="2" value="2" onClick={this.handleClick}>2</button>
                    <button id="3" value="3" onClick={this.handleClick}>3</button>
                    <button id="calculate" value="=" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}
export default Calculator;
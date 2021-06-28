import React, {Component} from "react";
import './App.css'
import ColorPicker from './component/colorPicker'
import SizeSetting from './component/sizeSetting'
import Reset from './component/reset'
import Result from './component/result'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            fontSize: 15
        }
    }

    onSetColor = (params) => {
        this.setState({ 
            color: params,
        })
    }

    onChangeSize = (value) => {
        //8 <= size <= 36
        this.setState({
            fontSize: this.state.fontSize + value >= 8 && this.state.fontSize + value <= 35? this.state.fontSize + value: this.state.fontSize
        })
    }

    resetFontSize = () => {
        this.setState({
            color: "red",
            fontSize: 15
        })
    }
    render() {
        return (
            <div className='container mt-50'>
                <div className='row'>
                    <ColorPicker color={this.state.color} onReceiveColor = {this.onSetColor}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize = {this.state.fontSize} onChangeSize={this.onChangeSize}/>
                        <Reset resetFontSize = {this.resetFontSize}/>
                    </div>
                    <Result color={this.state.color} fontSize={this.state.fontSize}/>
                </div>
            </div>
        )
    }
}

export default App;

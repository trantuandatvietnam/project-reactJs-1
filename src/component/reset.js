import React from "react";
class Reset extends React.Component {
    resetFontSize = () =>{
        this.props.resetFontSize();
    }
    render() {
            return (
                <button type="button" className="btn btn-primary mt-1" onClick={this.resetFontSize}>reset</button>
            )
    }
}

export default Reset;

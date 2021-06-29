import React, {Component} from "react";
import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textName: "",
            password: "",
            textDesc: "",
            sltGender: 0,
            rdLang: "en",
            chkbStatus: true,
        }
    }
    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        console.log(name)
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        
                        <div className="panel panel-primary border p-3">
                            <div className="panel-heading">
                                <h3 className="panel-title bg-primary p-2">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit = {this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label>User Name: </label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="textName"
                                            onChange={this.onHandleChange}
                                            value= {this.state.textName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            name="password"
                                            onChange={this.onHandleChange}
                                            value= {this.state.password}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description: </label>
                                        
                                        <textarea 
                                            name="textDesc"
                                            onChange={this.onHandleChange} 
                                            className="form-control" rows="3"
                                            value = {this.state.textDesc}
                                        >

                                        </textarea>
                                        
                                    </div>

                                    <label className="mt-3">Sex</label>

                                    <select 
                                        name="sltGender" 
                                        className="form-control mt-2" 
                                        value={this.state.sltGender}
                                        onChange = {this.onHandleChange}
                                    >
                                        //attribute value ghi dạng "" thì sẽ lưu dạng chuỗi, còn ghi theo dạng {} sẽ lưu dạng số
                                        <option value={0}>female</option>
                                        <option value={1}>male</option>
                                    </select>

                                    <br />
                                    
                                    <label>Language</label>

                                    <div className="radio">
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="rdLang" 
                                                value="en"
                                                onChange = {this.onHandleChange}
                                                checked = {this.state.rdLang === "en"}
                                            />
                                            English
                                        </label>
                                        <br />
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="rdLang" 
                                                value="vi"
                                                onChange = {this.onHandleChange}
                                                checked = {this.state.rdLang === "vi"}
                                            />
                                            VietNamese
                                        </label>
                                    </div>
                                    
                                    <div className="checkbox">
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value={true} 
                                                name="chkbStatus"
                                                onChange = {this.onHandleChange}
                                                checked = {this.state.chkbStatus === true}
                                            />
                                            Status
                                        </label>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary mt-3">Save</button>

                                    <button type="reset" className="btn btn-danger mt-3 ms-1">Remove all</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App;

import React from "react";
import profilePic from '../Dinesh.jpg';
import style from "../style.module.css";
import custom from "../data.json";

class HeaderClass extends React.Component {

    constructor(props) {
        super(props);
        this.props.data.menuData = ["Projects", "About Me", "Contact Me", "Blog"];

        this.toUpdate = true;

        this.state = {
            "name": "Initial Name",
            "title": "Initial Title",
            "role": "",
            "logged": this.props.logged,
            "menu": "",
        }

        this.changeStateName = this.changeStateName.bind(this);
        this.changeStateTitle = this.changeStateTitle.bind(this);
        this.changeStateRole = this.changeStateRole.bind(this);
    }

    // static getDerivedStateFromProps(props) {
    //     return { "logged": true }
    // }

    fetchData() {
        // console.log("fetchData");
        // fetch('<URL>')
        //    .then(data => data.json())
        //    .then(data => this.setState({ "logged": data }));
        this.setState(() => ({menu: custom}));
    }

    componentDidMount() {
        // console.log("componentDidMount");
        setTimeout(() => {
            this.fetchData();
        }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextState.name, "Next State of Name");
        // console.log(this.state.name, "Current State of Name");
        console.log(nextProps, "nextProps");
        console.log(this.props, "this.props");
        
        if(nextState.name === this.state.name) {
            return false;
        } else {
            return true;
        }
        // return false;
        // console.log(this.toUpdate, "shouldComponentUpdate");
        // // return flag;
        // return this.toUpdate;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.name, "Previous State of Name");
        console.log(this.state.name, "Current State of Name");
        
        // if(prevState.name === this.state.name) {
        //     this.toUpdate = false;
        //     this.shouldComponentUpdate()
        // } else {
        //     this.toUpdate = true;
        // }
        return "";
    }

    componentDidUpdate() {
        console.log(this.state.name, "Component Did Update");
        this.fetchData();
    }

    changeStateName() {
        // console.log(this);
        this.setState(() => ({name: "New Updated Name"}));
        this.props.data.menuData = ["Menu 1"];
    }
    changeStateTitle() {
        // console.log(this);
        this.setState(() => ({title: "New Updated Title"}));
    }
    changeStateRole() {
        // console.log(this);
        this.setState(() => ({role: "New Updated Role"}));
    }
    render() {
        console.log("render");
        return (
            <>
                <p>Logged: {this.state.logged.toString()}</p>
                <p>Name: {this.state.name}</p>
                <p>Title: {this.state.title}</p>
                <p>Role: {this.state.role}</p>
                <p><button onClick={this.changeStateName}>Change State Name</button></p>
                <p><button onClick={this.changeStateTitle}>Change State Title</button></p>
                <p><button onClick={this.changeStateRole}>Change State Role</button></p>
                <div className="row1">
                    <div className="row1section1">
                        <div>
                            <img src={profilePic} alt="logo" className="logo" />
                        </div>
                        <div>
                            <h3 className={style.colorRed}>{this.props.data.name}</h3>
                            <div className='clsDiv'>{this.props.data.title}</div>
                            <div>{this.props.data.role}</div>
                            <div>Email Me</div>
                        </div>
                    </div>
                    {
                        this.props.data.menu && <Menu menuData={this.props.data.menuData} />
                    }
                    
                </div>
            </>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.menu = props;

        // console.log(this.menu);
    }
    render() {
        
        // let output = [];
        // menu.forEach((v, i) => {
        //     output.push(<div key={i}>{v}</div>)
        // });
        return (
            <>
                <h3>Menu</h3>
                <div className="row1section2">
                    {
                        this.menu.menuData.map((v, i) => {
                            return (<div key={i}>{v}</div>)
                        })
                    }

                    {/* {output} */}
                </div>
            </>
        )
    }
}

export default HeaderClass;
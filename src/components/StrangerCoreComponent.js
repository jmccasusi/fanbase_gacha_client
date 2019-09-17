import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import LoginComponent from './stranger/LoginComponent';
import SignUpComponent from './stranger/SignUpComponent';


class StrangerCoreComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageConfig: 'login'
        }
        this.changePageConfig = this.changePageConfig.bind(this);
    }

    changePageConfig(component) {
        this.setState({
            pageConfig: component
        })
    }

    renderCenterComponent() {
        if(this.state.pageConfig == 'login'){
            return (
                    <LoginComponent baseURL={this.props.baseURL} changePageConfig={this.changePageConfig} changeCoreConfig={this.props.changeCoreConfig} loginUser={this.props.loginUser}/>
            )
        } else if (this.state.pageConfig == 'signup') {
            return (
                    <SignUpComponent baseURL={this.props.baseURL} changePageConfig={this.changePageConfig}/>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <Row>
                {this.renderCenterComponent()}
                </Row>
            </div>
        )
    }

}

export default StrangerCoreComponent;
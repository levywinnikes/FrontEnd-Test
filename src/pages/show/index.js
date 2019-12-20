import React, { Component } from 'react'
import { Fade, ButtonGroup, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody, Button, Form, Table, CardFooter } from 'reactstrap';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { showUser, listUsers, changeUser } from '../../actions/actionUsers'

class Show extends Component {

    state = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
    }

    componentWillMount(){

    }

    editFistName = (event) => {

        this.setState({
            firstName: event.target.value
        })

    }

    editLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    cancelEdit = () => {
        if (window.confirm(`Do you really wants cancel ?`)) {
            this.props.history.push("/")
        }
    }

    saveEdit = () => {
        const user = {
            id: this.props.user.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.props.user.age,
            description: this.props.user.description
        }

        this.props.changeUser(user)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            ID:  {this.props.user.id}
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label>First name: </Label>
                                <Input type = "text" value =  {`${this.state.firstName}`} onChange = {this.editFistName} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last name: </Label>
                                <Input type = "text" value =  {`${this.state.lastName}`} onChange = {this.editLastName} />
                            </FormGroup>

                            <FormGroup>
                                <Label>Age: </Label>
                                {this.props.user.age}
                            </FormGroup>

                            <FormGroup>
                                <Label>Description: </Label>
                                {this.props.user.description}
                            </FormGroup>
                        </CardBody>

                        <CardFooter>
                            <Button className = "ml-1 btn-success" onClick = {this.saveEdit}>Save</Button>
                            <Button className = "ml-1 btn-danger" onClick = {this.cancelEdit}>Cancel</Button>
                        </CardFooter>
                    </Card>

                </Col>


            </div>
        )
    }

}


const mapStateToProps = (state) => {

    return {
        user: state.users.show
    }


}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ listUsers, showUser, changeUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Show)


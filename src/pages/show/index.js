import React, { Component } from 'react'
import { FormGroup, Label, Input, Col, Card, CardHeader, CardBody, Button, CardFooter } from 'reactstrap';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { showUser, listUsers, changeUser, searchUser } from '../../actions/actionUsers'

class Show extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            age: "",
            description: "",
        }

    }


    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {

            this.setState({
                id: nextProps.user.id,
                firstName: nextProps.user.firstName,
                lastName: nextProps.user.lastName,
                age: nextProps.user.age,
                description: nextProps.user.description,
            })
        }
    }


    componentWillMount() {
        this.showUser()
    }


    showUser = () => {
        this.props.showUser(this.props.match.params.id)
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
                            ID:  {this.state.id}
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label>First name: </Label>
                                <Input type="text" value={`${this.state.firstName}`} onChange={this.editFistName} name = "firtName-form"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Last name: </Label>
                                <Input type="text" value={`${this.state.lastName}`} onChange={this.editLastName} name = "lastName-form" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Age: </Label>
                                {this.state.age}
                            </FormGroup>

                            <FormGroup>
                                <Label>Description: </Label>
                                {this.state.description}
                            </FormGroup>
                        </CardBody>

                        <CardFooter>
                            <Button className="ml-1 btn-success" onClick={this.saveEdit}>Save</Button>
                            <Button className="ml-1 btn-danger" onClick={this.cancelEdit}>Cancel</Button>
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
    return bindActionCreators({ listUsers, showUser, changeUser, searchUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Show)


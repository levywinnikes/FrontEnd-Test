import React, { Component } from 'react'
import { Fade, ButtonGroup, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody, Button, Form, Table, CardFooter } from 'reactstrap';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { showUser, listUsers } from '../../actions/actionUsers'

class Show extends Component {

    cancelEdit = () => {
        if (window.confirm(`Do you really wants cancel ?`)) {
            this.props.history.push("/")
        }
    }

    saveEdit = () => {
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
                                <Input type = "text" value =  {`${this.props.user.firstName}`} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last name: </Label>
                                <Input type = "text" value =  {`${this.props.user.lastName}`} />
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
    return bindActionCreators({ listUsers, showUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Show)


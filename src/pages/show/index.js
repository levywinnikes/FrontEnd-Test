import React, { Component } from 'react'
import { Fade, ButtonGroup, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody, Button, Form, Table, CardFooter } from 'reactstrap';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { showUser, listUsers } from '../../actions/actionUsers'

class Show extends Component {

    componentWillMount() {


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
                                <Label>Nome: </Label>
                                {`${this.props.user.firstName}  ${this.props.user.lastName}`}
                            </FormGroup>

                            <FormGroup>
                                <Label>Idade: </Label>
                                {this.props.user.age}
                            </FormGroup>

                            <FormGroup>
                                <Label>Descrição: </Label>
                                {this.props.user.description}
                            </FormGroup>
                        </CardBody>

                        <CardFooter>
                            <Link to="/" >Voltar</Link>
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


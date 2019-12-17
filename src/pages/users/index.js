import React, { Component } from 'react';
import { Fade, ButtonGroup, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody, Button, Form, Table } from 'reactstrap';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { listUsers, removeUser, showUser } from '../../actions/actionUsers'



class Users extends Component {

    state = {
        itensChecked: [],
        users: [],

    }

    componentWillMount() {
        this.props.listUsers()

    }

    filter = (event) =>   {
        this.props.users.filter((user) => {
            return user.name == event.target.value
        });

    }


    deleteUser = (userToRemove) => {
        const userListUpdated = this.props.users.filter((user) => {
            return user !== userToRemove
        })

        this.props.removeUser(userListUpdated)

    }

    showUser = (user) => {
        this.props.showUser(user)
        this.props.history.push("/Show")
    }



    deleteSelected = () => {
        let userListUpdated = this.props.users

        for (var i = 0; i < this.state.itensChecked.length; i++) {
            let index = this.props.users.indexOf(this.props.users.find(x => x.id === this.state.itensChecked[i]))



            if (index > -1) {
                userListUpdated.splice(index, 1)

            }

        }
        this.props.removeUser(userListUpdated)


        this.unSelectAll()


        this.forceUpdate();


    }

    unSelectAll = () => {
        var items = document.getElementsByName('checkbox');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = false;
        }

        this.setState({
            itensChecked: []
        })
    }


    toggleCheckBox = (event, userId) => {
        if (event.target.checked) {
            const itensSelecionados = this.state.itensChecked
            itensSelecionados.push(userId)
            this.setState({
                itensChecked: itensSelecionados
            })
        }
        else {
            const itensSelecionados = this.state.itensChecked
            const index = itensSelecionados.indexOf(userId);
            if (index > -1) {
                itensSelecionados.splice(index, 1)
            }

            this.setState({
                itensChecked: itensSelecionados
            })
        }


    }

    render() {
        return (
            <div>
                <Col md='12'>


                    <Card>
                        <CardHeader>
                            <Label>Filter by name</Label>
                            <Input type="text" onChange = {(e) =>this.filter(e)}>
                            </Input>
                        </CardHeader>

                        <CardBody>

                     

                        <Button onClick={this.deleteSelected} disabled={!this.state.itensChecked.length} >
                            Delete selected
                </Button>

                        <Button>
                            Download
                </Button>
                        <Table>
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>
                                        Name
                    </th>
                                    <th>
                                        Actions
                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map((user, index) =>
                                    <tr>
                                        <td>
                                            <Input type="checkbox" name="checkbox" id={user.id} onChange={(e) => this.toggleCheckBox(e, user.id)} ></Input>
                                        </td>
                                        <td>
                                            {`${user.firstName} ${user.lastName}`}
                                        </td>
                                        <td>
                                            <Button class = "btn-success" onClick={() => this.showUser(user)}  >
                                                Show
                                </Button>
                                            /
                                <Button color = "danger" onClick={() => this.deleteUser(user)}  >
                                                Delete
                                </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div >
        )
    }

}


const mapStateToProps = (state) => {

    return {
        users: state.users.list
    }


}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ listUsers, removeUser, showUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
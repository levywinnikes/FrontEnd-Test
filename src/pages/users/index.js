import React, { Component } from 'react';
import { Label, Input, Col, Row, Card, CardHeader, CardBody, Button, Table, CardFooter } from 'reactstrap';
import { connect } from "react-redux"
import exportFromJSON from 'export-from-json'
import { bindActionCreators } from 'redux'
import { listUsers, removeUser, showUser, search } from '../../actions/actionUsers'
import ReactResizeDetector from 'react-resize-detector';



class Users extends Component {

    state = {
        itensChecked: [],
        users: [],
        smallSize: false

    }

    componentWillMount() {
        this.listUsers()
        this.resize()

    }

    listUsers = () => {
        this.props.listUsers(this.props.user)
    }

    componentWillUnmount() {
        this.resize()

    }



    resize = () => {
        if (window.innerWidth <= 1024) {
            this.setState({
                smallSize: true
            })
        }
        else {
            this.setState({
                smallSize: false
            })
        }

        this.unSelectAll()
    }

    filter = (event) => {
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

    downloadSelected = () => {
        let data = []
        const fileName = 'users'
        const exportType = 'json'

        for (var i = 0; i < this.state.itensChecked.length; i++) {
            let index = this.props.users.find(x => x.id === this.state.itensChecked[i])
            data.push(index)

            console.log(data[i])

        }

        this.unSelectAll()


        exportFromJSON({ data, fileName, exportType })

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
        const { search, value, works } = this.props;
        return (
            <div>
                <Col xs='12'>
                    <Card>
                        <Row>
                            <Col xs="12" >
                                <CardBody>
                                    <Row>

                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                            {this.state.smallSize === true ? (
                                                <Row>
                                                    <Col xs="12">
                                                        <Row>
                                                            <Col xs="12">
                                                                <Label>Filter by name</Label>
                                                                <Input type="text" onChange={(e) => search(e)} value={value} className="mb-1">
                                                                </Input>
                                                            </Col>
                                                            <Col xs="12">
                                                                <Button onClick={this.deleteSelected} disabled={!this.state.itensChecked.length} className="btn btn-danger btn-lg btn-block mb-1" >
                                                                    Delete selected
                                                                 </Button>
                                                            </Col>
                                                            <Col xs="12">
                                                                <Button className="btn btn-primary btn-lg btn-block mb-1" onClick={this.downloadSelected} disabled={!this.state.itensChecked.length}>
                                                                    Download
                                                                 </Button>
                                                            </Col>

                                                        </Row>
                                                        <Row>
                                                            {this.props.users.map((user, index) =>
                                                                <Col sm="6" md="4" lg="3" className="mb-1 mt-1">

                                                                    <Card className="d-flex align-items-stretch">
                                                                        <CardHeader>
                                                                            <h5>{user.firstName} {user.lastName}</h5>
                                                                        </CardHeader>
                                                                        <CardBody>
                                                                            <p><b>Age: </b> {user.age}</p>
                                                                            <p><b>description: </b>{user.description}</p>
                                                                        </CardBody>
                                                                        <CardFooter>
                                                                            <Input className="ml-1" type="checkbox" name="checkbox" id={user.id} onChange={(e) => this.toggleCheckBox(e, user.id)} ></Input>
                                                                            <Button className="btn-success ml-4" onClick={() => this.showUser(user)}  >
                                                                                Show
                                                                            </Button>

                                                                            <Button className="ml-1" color="danger" onClick={() => this.deleteUser(user)}  >
                                                                                Delete
                                                                            </Button>

                                                                        </CardFooter>


                                                                    </Card>
                                                                </Col>
                                                            )}
                                                        </Row>
                                                    </Col>
                                                </Row>

                                            ) : (
                                                    <Col xs="12">
                                                        <Row>
                                                            <Col xs="12">
                                                                <Row>

                                                                    <Col xs="2">
                                                                        <Label>Filter by name</Label>
                                                                    </Col>
                                                                    <Col xs="2">

                                                                    </Col>
                                                                    <Col xs="2">
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col xs="12">
                                                                <Row className="mb-1">
                                                                    <Col xs="2">

                                                                        <Input type="text" onChange={(e) => search(e)} value={value}>
                                                                        </Input>
                                                                    </Col>
                                                                    <Col xs="2">
                                                                        <Button onClick={this.deleteSelected} disabled={!this.state.itensChecked.length} >
                                                                            Delete selected
                                                            </Button>
                                                                    </Col>
                                                                    <Col xs="2">
                                                                        <Button onClick={this.downloadSelected} disabled={!this.state.itensChecked.length}>
                                                                            Download
                                                                     </Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>


                                                        </Row>
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
                                                                    <tr key={user.id}>
                                                                        <td>

                                                                            <Input type="checkbox" name="checkbox" id={user.id} onChange={(e) => this.toggleCheckBox(e, user.id)} ></Input>
                                                                        </td>
                                                                        <td>
                                                                            {`${user.firstName} ${user.lastName}`}
                                                                        </td>
                                                                        <td>
                                                                            <Button className="btn-success" onClick={() => this.showUser(user)}  >
                                                                                Show
                                                                         </Button>

                                                                            <Button color="danger ml-1" onClick={() => this.deleteUser(user)}  >
                                                                                Delete
                                                                         </Button>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                )
                                            }
                                        </Col>
                                    </Row>


                                </CardBody>
                            </Col>
                        </Row>
                    </Card >
                </Col >
                <ReactResizeDetector handleWidth handleHeight onResize={this.resize} />
            </div >
        )
    }

}


const mapStateToProps = (state) => {

    return {
        users: state.users.list,
        value: state.value,
        user: state.users.show,
    }


}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ listUsers, removeUser, showUser, search }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
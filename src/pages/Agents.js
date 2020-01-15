import React from 'react';
import { MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from 'mdbreact';

class Agents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{
                id: 1, msisdn: '0340016227', name: 'Christophe'
            }],
            editMode: false,
            name: "",
            msisdn: ""
        }
    }

    renderRow(row) {
        return (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.msisdn}</td>
                <td>{row.name}</td>
            </tr>
        );
    }

    toggleMode = () => {
        this.setState({editMode: !this.state.editMode});
    }

    handleInput = name => value => {
        this.setState({[name]: value});
    }

    save = () => {
        this.state.rows.push({id: this.state.rows.length + 1, name: this.state.name, msisdn: this.state.msisdn});
        this.toggleMode();
    }

    renderModal() {
        return (
            <MDBModal isOpen={this.state.editMode} toggle={this.toggleMode}>
                <MDBModalHeader toggle={this.toggleMode}>New Agent</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <MDBInput label="MSISDN" icon="phone" getValue={this.handleInput("msisdn")}/>
                        <MDBInput label="Name" icon="user" getValue={this.handleInput("name")}/>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="primary" onClick={this.save}>Save</MDBBtn>
                    <MDBBtn onClick={this.toggleMode} color="secondary" outline>Cancel</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
    }

    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="12">
                        <h1>Agents</h1>
                        <MDBBtn onClick={this.toggleMode}><MDBIcon icon="plus"/> New Agent</MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Num&eacute;ro</th>
                                    <th>Nom</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.rows.map(this.renderRow)}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>

                {this.renderModal()}
            </div>
        );
    }
}

export default Agents;
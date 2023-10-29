import React, { Component } from "react";
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";

class Makelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: [],
            value: '',
            MasterChecked: false,
            SelectedList: [],
            selecteddata: '',
        };
        this.ClickCheckbox = this.ClickCheckbox.bind(this);
    }

    onMasterCheck(e) {
        let tempList = this.state.file;

        tempList.slice(0, 15).map((item) => (item.selected = e.target.checked));

        this.setState({
            MasterChecked: e.target.checked,
            file: tempList,
            SelectedList: this.state.file.filter((e) => e.selected),
        });
    }

    onItemCheck(e, item1) {
        let tempList = this.state.file;
        tempList.map((item) => {
            if (item.id === item1.id) {
                item.selected = e.target.checked;
            }
            return item;
        });

        const totalItems = this.state.file.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            file: tempList,
            SelectedList: this.state.file.filter((e) => e.selected),
        });
    }

    getSelectedRows() {
        this.setState({
            SelectedList: this.state.file.filter((e) => e.selected),
        });
    }

    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`).then(res => {
            this.setState({ file: res.data.data.memes })
        })
    }

    ClickCheckbox() {
        if (localStorage.getItem('user') === "rahul") {
            localStorage.setItem('this.state.SelectedLista', JSON.stringify(this.state.SelectedList));
            alert("Your List is Ready, Go to check in Show My list Button on Dashboard")
        }
        else if (localStorage.getItem('user') === "shubham") {
            localStorage.setItem('this.state.SelectedListb', JSON.stringify(this.state.SelectedList));
            alert("Your List is Ready, Go to check in Show My list Button on Dashboard")
        }
        else {
            localStorage.setItem('this.state.SelectedLista', []);
            localStorage.setItem('this.state.SelectedListb', []);
        }
    }

    render() {
        return (
            <div className="makelist-container">
                <div className="alert">
                    <center>
                        <strong>Make List</strong> Page
                    </center>
                </div>
                <div className="buttons-container">
                    <button className="makebutton button1" onClick={this.ClickCheckbox}>
                        Save
                    </button>
                    <Link to="/dashboard">
                        <button className="makebutton button3">Cancel</button>
                    </Link>
                </div>
                <Table border="1">
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={this.state.MasterChecked}
                                    id="mastercheck"
                                    onChange={(e) => this.onMasterCheck(e)}
                                />
                            </th>
                            <th>id</th>
                            <th>name</th>
                            <th>url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.file.slice(0, 15).map((item, index1) => (
                            <tr key={item.id} className={item.selected ? "selected" : ""}>
                                <th>
                                    <input
                                        type="checkbox"
                                        checked={item.selected}
                                        className="form-check-input"
                                        id={`rowcheck${item.id}`}
                                        onChange={(e) => this.onItemCheck(e, item)}
                                    />
                                </th>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img
                                        src={item.url}
                                        alt="memes images"
                                        width="50px"
                                        height="25px"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <button
                    className="btn btn-primary"
                    onClick={() => this.getSelectedRows()}
                >
                    Get Selected Items {this.state.SelectedList.length}
                </button>

                <hr />
                <p>
                    Click here to --
                    <Link to="/dashboard">Back to Page</Link>
                </p>
            </div>
        );
    }
}

export default Makelist;
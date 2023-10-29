import React, { Component } from "react";
import { Link } from "react-router-dom";

class Showlist extends Component {
    constructor() {
        super();
        this.state = {
            listdata: [],
            showText: false,
        };
        this.solist = this.solist.bind(this);
    }

    solist() {
        if (localStorage.getItem('user') === "rahul") {
            this.setState({ listdata: JSON.parse(localStorage.getItem('this.state.SelectedLista')) });
        } else if (localStorage.getItem('user') === "shubham") {
            this.setState({ listdata: JSON.parse(localStorage.getItem('this.state.SelectedListb')) });
        }

        this.setState((state) => ({
            showText: !state.showText,  // Toggle showText
        }));
    }

    render() {
        const showlistdata = this.state.listdata ? this.state.listdata.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.url} alt="memes" width="50" height="20" /></td>
            </tr>
        )) : null;

        return (
            <div className="showlist-container">
                <div className="alert">
                    <center>
                        <strong>Show List</strong> Page
                    </center>
                </div>
                <button className="makebutton button1" onClick={this.solist}>
                    Click here to view list
                </button>

                {this.state.listdata ? (
                    this.state.showText && (
                        <table className="showlist-table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>image</th>
                                </tr>
                            </thead>
                            <tbody>{showlistdata}</tbody>
                        </table>
                    )
                ) : (
                    <p>No List Selected</p>
                )}

                <hr />
                <p>
                    Click here to --
                    <Link to="/Dashboard">Back to Page</Link>
                </p>
            </div>
        );
    }
}

export default Showlist;

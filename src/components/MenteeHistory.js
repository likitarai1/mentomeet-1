import React, { Component } from 'react';
import './../css/MenteeHistory.css';
import axios from 'axios';

const HistoryData = (props) => (
    <div className="card">
        <h5 className="card-header">{props.data.applicationDate.split("T")[0]}<span className="badge badge-warning badgePosition">{props.data.category}</span></h5>
        <div className="card-body">
            <h4 className="card-title queryTitle">{props.data.query}</h4>
            <p className="card-text queryDesp">
                {(props.data.status === "pending") ? "We will reach out to you soon!" : "Answer"}
                <br />
                {(props.data.approvedBy === "none") ? "" : props.data.approvedBy}</p>
        </div >
    </div >
)

class MenteeHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let menteeID = JSON.parse(localStorage.getItem('user')).id;
        console.log("LocalStoRAGE>>>>>", menteeID);
        axios.get(`/mentee/history/${menteeID}`)
            .then(response => {
                this.setState({ data: response.data });
                console.log("Data Set");
            })
            .catch((err) => {
                console.log('Error :', err);
            })
    }

    dataList() {
        return this.state.data.map((currData, i) => {
            return <HistoryData data={currData} key={i} />;
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mainTitle">History</h1>
                {this.dataList()}
            </React.Fragment>
        );
    }
}

export default MenteeHistory;
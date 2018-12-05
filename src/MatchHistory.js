import React, { Component } from "react";
import "./MatchHistory.css";

class MatchHistory extends Component {
  getTableContent = () => {
    return (
      <tbody className="table-body">
        {this.props.matches.map((match, index) => {
          return (
            <tr key={index} className="table-body-row">
              <td>{match[0]}</td>
              <td>{match[1]}</td>
              <td>{match[2]}</td>
              <td>{match[3]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  render() {
    let tableContent =
      this.props.matches.length === 0 ? (
        <div className="table-empty">
          {"Select teams and click predict to use the model!"}
        </div>
      ) : (
        this.getTableContent()
      );
    return (
      <table className="summary-table">
        <thead className="table-head">
          <tr>
            <th className="blue-head">Blue</th>
            <th className="blue-head">Win %</th>
            <th className="red-head">Red</th>
            <th className="red-head">Win %</th>
          </tr>
        </thead>
        {tableContent}
      </table>
    );
  }
}

export default MatchHistory;

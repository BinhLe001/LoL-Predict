import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const url = "https://binhle.ngrok.io/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: "Afreeca Freecs",
      team2: "Cloud9",
      team3: "Fnatic",
      team4: "Edward Gaming",
      team5: "Royal Never Give Up",
      team6: "G2 Esports",
      team7: "KT Rolster",
      team8: "Invictus Gaming",
      team9: "",
      team10: "",
      team11: "",
      team12: "",
      team13: "",
      team14: "",
      team15: "",
      predict1: "",
      predict2: "",
      predict3: "",
      predict4: "",
      predict5: "",
      predict6: "",
      predict7: ""
    };
  }

  handleClear = event => {
    this.setState({
      team1: "Afreeca Freecs",
      team2: "Cloud9",
      team3: "Fnatic",
      team4: "Edward Gaming",
      team5: "Royal Never Give Up",
      team6: "G2 Esports",
      team7: "KT Rolster",
      team8: "Invictus Gaming",
      team9: "",
      team10: "",
      team11: "",
      team12: "",
      team13: "",
      team14: "",
      team15: "",
      predict1: "",
      predict2: "",
      predict3: "",
      predict4: "",
      predict5: "",
      predict6: "",
      predict7: ""
    })
  }

  handleChange = team => event => {
    this.setState({ [team]: event.target.value });
  };

  getPrediction = (blueTeam, redTeam) => {
    console.log(blueTeam);
    console.log(redTeam);
    try {
      return axios.post(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        blue: {
          blueTeam
        },
        red: {
          redTeam
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleClick = () => {
    if (this.state.team14 !== "" && this.state.team13 !== "") {
      // Predict final
      this.getPrediction(this.state.team13, this.state.team14)
        .then(response => {
          let winningTeam =
            response["blue"] > response["red"]
              ? this.state.team13
              : this.state.team14;
          let winProb = Math.round(
            Math.max(response.data["blue"], response.data["red"]) * 100
          );
          this.setState({
            team15: winningTeam,
            predict7: winProb + "%"
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      if (
        this.state.team12 !== "" &&
        this.state.team11 !== "" &&
        this.state.team10 !== "" &&
        this.state.team9 !== ""
      ) {
        // Predict semifinal
        this.getPrediction(this.state.team9, this.state.team10)
          .then(response => {
            let winningTeam =
              response["blue"] > response["red"]
                ? this.state.team9
                : this.state.team10;
            let winProb = Math.round(
              Math.max(response.data["blue"], response.data["red"]) * 100
            );
            this.setState({
              team13: winningTeam,
              predict5: winProb + "%"
            });
          })
          .catch(error => {
            console.log(error);
          });
        this.getPrediction(this.state.team11, this.state.team12)
          .then(response => {
            let winningTeam =
              response["blue"] > response["red"]
                ? this.state.team11
                : this.state.team12;
            let winProb = Math.round(
              Math.max(response.data["blue"], response.data["red"]) * 100
            );
            this.setState({
              team14: winningTeam,
              predict6: winProb + "%"
            });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        if (
          this.state.team8 !== "" &&
          this.state.team7 !== "" &&
          this.state.team6 !== "" &&
          this.state.team5 !== "" &&
          this.state.team4 !== "" &&
          this.state.team3 !== "" &&
          this.state.team2 !== "" &&
          this.state.team1 !== ""
        ) {
          // Predict quarterfinal
          this.getPrediction(this.state.team1, this.state.team2)
            .then(response => {
              console.log(response);
              let winningTeam =
                response["blue"] > response["red"]
                  ? this.state.team1
                  : this.state.team2;
              let winProb = Math.round(
                Math.max(response.data["blue"], response.data["red"]) * 100
              );
              console.log(winProb);
              this.setState({
                team9: winningTeam,
                predict1: winProb + "%"
              });
            })
            .catch(error => {
              console.log(error);
            });
          this.getPrediction(this.state.team3, this.state.team4)
            .then(response => {
              let winningTeam =
                response["blue"] > response["red"]
                  ? this.state.team3
                  : this.state.team4;
              let winProb = Math.round(
                Math.max(response.data["blue"], response.data["red"]) * 100
              );
              this.setState({
                team10: winningTeam,
                predict2: winProb + "%"
              });
            })
            .catch(error => {
              console.log(error);
            });
          this.getPrediction(this.state.team5, this.state.team6)
            .then(response => {
              let winningTeam =
                response["blue"] > response["red"]
                  ? this.state.team5
                  : this.state.team6;
              let winProb = Math.round(
                Math.max(response.data["blue"], response.data["red"]) * 100
              );
              this.setState({
                team11: winningTeam,
                predict3: winProb + "%"
              });
            })
            .catch(error => {
              console.log(error);
            });
          this.getPrediction(this.state.team7, this.state.team8)
            .then(response => {
              let winningTeam =
                response["blue"] > response["red"]
                  ? this.state.team7
                  : this.state.team8;
              let winProb = Math.round(
                Math.max(response.data["blue"], response.data["red"]) * 100
              );
              this.setState({
                team12: winningTeam,
                predict4: winProb + "%"
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">6.s198 Demo - LoL Pregame Predict</div>
        <div className="Header-stroke" />
        <div className="App-body">
          <div className="Bracket-body">
            <div className="Bracket-round">
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team1}
                  onChange={this.handleChange("team1")}
                />
                <div className="Team-stroke" />
                <div className="Vertical-stroke" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team2}
                  onChange={this.handleChange("team2")}
                />
                <div className="Team-stroke" />
              </div>
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team3}
                  onChange={this.handleChange("team3")}
                />
                <div className="Team-stroke" />
                <div className="Vertical-stroke" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team4}
                  onChange={this.handleChange("team4")}
                />
                <div className="Team-stroke" />
              </div>
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team5}
                  onChange={this.handleChange("team5")}
                />
                <div className="Team-stroke" />
                <div className="Vertical-stroke" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team6}
                  onChange={this.handleChange("team6")}
                />
                <div className="Team-stroke" />
              </div>
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team7}
                  onChange={this.handleChange("team7")}
                />
                <div className="Team-stroke" />
                <div className="Vertical-stroke" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team8}
                  onChange={this.handleChange("team8")}
                />
                <div className="Team-stroke" />
                <div className="Spacer"/>
              </div>
            </div>
            <div className="Bracket-round">
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team9}
                  onChange={this.handleChange("team9")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob">{this.state.predict1}</div>
                <div className="Vertical-stroke2" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team10}
                  onChange={this.handleChange("team10")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob">{this.state.predict2}</div>
              </div>
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team11}
                  onChange={this.handleChange("team11")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob">{this.state.predict3}</div>
                <div className="Vertical-stroke2" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team12}
                  onChange={this.handleChange("team12")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob">{this.state.predict4}</div>
              </div>
            </div>
            <div className="Bracket-round">
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team13}
                  onChange={this.handleChange("team13")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob2">{this.state.predict5}</div>
                <div className="Vertical-stroke3" />
              </div>
              <div className="Team-body" id="Right-border">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team14}
                  onChange={this.handleChange("team14")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob2">{this.state.predict6}</div>
              </div>
            </div>
            <div className="Bracket-round">
              <div className="Team-body">
                <input
                  className="Team-input"
                  type="text"
                  value={this.state.team15}
                  onChange={this.handleChange("team15")}
                />
                <div className="Team-stroke" />
                <div className="Win-prob3">{this.state.predict7}</div>
              </div>
            </div>
          </div>
          <div className="Bracket-button">
            <button className="Clear-button" onClick={this.handleClear}>
              Clear Bracket
            </button>
            <button className="Predict-button" onClick={this.handleClick}>
              Predict Round
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

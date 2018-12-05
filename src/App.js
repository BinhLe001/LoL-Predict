import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import "./App.css";
import MatchHistory from "./MatchHistory";
import Loader from "react-loader-spinner";

const url = "https://binhle.ngrok.io/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blueTeam: "",
      redTeam: "",
      blueChance: "",
      redChance: "",
      predictHistory: [],
      predictLoading: false
    };
  }

  handleBlueChange = event => {
    if (event !== null) {
      this.setState({
        blueTeam: event.label
      });
    } else {
      this.setState({
        blueTeam: ""
      });
    }
  };

  handleRedChange = event => {
    if (event !== null) {
      this.setState({
        redTeam: event.label
      });
    } else {
      this.setState({
        redTeam: ""
      });
    }
  };

  getPrediction = () => {
    let blueTeam = this.state.blueTeam;
    let redTeam = this.state.redTeam;
    if (blueTeam && redTeam) {
      this.setState({
        predictLoading: true
      });
      return axios
        .post(url, {
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
        })
        .then(response => {
          console.log(response);
          let blueWinProb = response.data.blue.toFixed(3);
          let redWinProb = response.data.red.toFixed(3);
          let newHistory = this.state.predictHistory.slice();
          let currentGame = [blueTeam, blueWinProb, redTeam, redWinProb];
          newHistory.unshift(currentGame);
          this.setState({
            blueChance: blueWinProb,
            redChance: redWinProb,
            predictHistory: newHistory,
            predictLoading: false
          });
        })
        .catch(error => {
          alert("Failed to get predicitons with " + error);
          console.log(error);
          this.setState({
            predictLoading: false
          });
        });
    } else {
      alert("Please select teams before clicking predict.");
    }
  };

  handleClick = () => {};

  render() {
    let predictButtonContent = this.state.predictLoading ? (
      <div className="predict-loading">
        <Loader type="ThreeDots" color="white" height={15} width={40} />
      </div>
    ) : (
      "Predict"
    );

    let bracketSrc = process.env.PUBLIC_URL + "/pics/bracket.png";

    return (
      <div className="App">
        <div className="App-header">6.s198 Demo - LoL Predict</div>
        <div className="App-body">
          <div className="body-description">
            <div className="description-title">About the Project</div>
            <div className="description-content">
              {/* <p>
                League of Legends is the most popular e-sport in the world.
                There are over <b>27 million daily active players</b> and over{" "}
                <b>2 million dollars</b> is awarded at the World Championships.
                In addition, e-sports betting has a <b>13 billion dollar</b>{" "}
                market cap.
              </p>{" "} */}
              <p>
                {" "}
                This project explores the applicability of a{" "}
                <b>deep neural network classification model</b> to predict
                League of Legends matches. In order to make pregame predictions,
                teams are described based on the{" "}
                <b>average game statistics of their previous 10 games</b>.
              </p>
              <p>
                The model takes{" "}
                <b>
                  two inputs for each team and outputs the win probabilities for
                  each team
                </b>
                . This is an example of the model results for predicting the
                2018 World Championships knockout stage.
                {/* . The teams are described based on 18 feature columns such as
                the number of team kills, tower kills, dragon kills, gold
                differential at 10 minutes, etc. */}
              </p>
              <img src={bracketSrc} alt="bracket" className={"bracket-pic"} />
            </div>
          </div>
          <div className="body-model">
            <div className="model-title">Explore the Model</div>
            <div className="model-content">
              <div className="model-input">
                <div className="input-title">
                  <div className="input-title-blue">Blue Team</div>
                  <div className="input-title-red">Red Team</div>
                  <div className="input-title-spacer" />
                </div>
                <div className="input-teams">
                  <div className="input-blue">
                    <Select
                      id="blue-select"
                      placeholder="Blue Team"
                      className="blue-select"
                      onChange={this.handleBlueChange}
                      options={TEAMS}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                  <div className="input-red">
                    <Select
                      id="red-select"
                      placeholder="Red Team"
                      className="red-select"
                      onChange={this.handleRedChange}
                      options={TEAMS}
                      isClearable={true}
                      isSearchable={true}
                    />
                  </div>
                  <div className="input-button">
                    <button
                      className="predict-button"
                      onClick={this.getPrediction}
                      disabled={this.predictLoading}
                    >
                      {predictButtonContent}
                    </button>
                  </div>
                </div>
              </div>
              <div className="model-history">
                <MatchHistory matches={this.state.predictHistory} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const TEAMS = [
  { label: "100 Thieves", value: "100 Thieves" },
  { label: "100 Thieves Academy", value: "100 Thieves Academy" },
  { label: "17 Academy", value: "17 Academy" },
  { label: "AHQ Fighter", value: "AHQ Fighter" },
  { label: "AHQ e-Sports Club", value: "AHQ e-Sports Club" },
  { label: "Afreeca Freecs", value: "Afreeca Freecs" },
  { label: "Ascension Gaming", value: "Ascension Gaming" },
  { label: "BBQ Olivers", value: "BBQ Olivers" },
  { label: "Besiktas", value: "Besiktas" },
  { label: "Big Gods Jackals", value: "Big Gods Jackals" },
  { label: "Bilibili Gaming", value: "Bilibili Gaming" },
  { label: "Bursaspor Esports", value: "Bursaspor Esports" },
  { label: "CJ Entus", value: "CJ Entus" },
  { label: "CLG Academy", value: "CLG Academy" },
  { label: "CNB e-Sports Club", value: "CNB e-Sports Club" },
  { label: "Cilekler", value: "Cilekler" },
  { label: "Cloud9", value: "Cloud9" },
  { label: "Cloud9 Academy", value: "Cloud9 Academy" },
  { label: "Clutch Gaming", value: "Clutch Gaming" },
  { label: "Clutch Gaming Academy", value: "Clutch Gaming Academy" },
  { label: "Counter Logic Gaming", value: "Counter Logic Gaming" },
  { label: "Crew e-Sports Club", value: "Crew e-Sports Club" },
  { label: "DAN Gaming", value: "DAN Gaming" },
  { label: "Dark Passage", value: "Dark Passage" },
  { label: "Delta Fox", value: "Delta Fox" },
  { label: "Dignitas", value: "Dignitas" },
  { label: "Dire Wolves", value: "Dire Wolves" },
  { label: "EDward Gaming", value: "EDward Gaming" },
  { label: "EVOS Esports", value: "EVOS Esports" },
  { label: "Echo Fox", value: "Echo Fox" },
  { label: "Echo Fox Academy", value: "Echo Fox Academy" },
  { label: "Edward Gaming", value: "Edward Gaming" },
  { label: "EnVyUs", value: "EnVyUs" },
  { label: "Ever8 Winners", value: "Ever8 Winners" },
  { label: "Fenerbahce Esports", value: "Fenerbahce Esports" },
  { label: "Fire Ball", value: "Fire Ball" },
  { label: "Flamengo eSports", value: "Flamengo eSports" },
  { label: "Flash Wolves", value: "Flash Wolves" },
  { label: "FlyQuest", value: "FlyQuest" },
  { label: "FlyQuest Academy", value: "FlyQuest Academy" },
  { label: "Flyquest", value: "Flyquest" },
  { label: "Fnatic", value: "Fnatic" },
  { label: "Fnatic Academy", value: "Fnatic Academy" },
  { label: "Funplus Phoenix", value: "Funplus Phoenix" },
  { label: "G-Rex", value: "G-Rex" },
  { label: "G2 Esports", value: "G2 Esports" },
  { label: "GIGABYTE Marines", value: "GIGABYTE Marines" },
  { label: "Galakticos", value: "Galakticos" },
  { label: "Galatasaray Esports", value: "Galatasaray Esports" },
  { label: "Gambit Esports", value: "Gambit Esports" },
  { label: "Game Talents", value: "Game Talents" },
  { label: "Gen.G", value: "Gen.G" },
  { label: "Giants", value: "Giants" },
  { label: "Giants Gaming", value: "Giants Gaming" },
  { label: "Gigabyte Marines", value: "Gigabyte Marines" },
  { label: "Gold Coin United", value: "Gold Coin United" },
  { label: "Golden Guardians", value: "Golden Guardians" },
  { label: "Golden Guardians Academy", value: "Golden Guardians Academy" },
  { label: "Griffin", value: "Griffin" },
  { label: "H2K", value: "H2K" },
  { label: "HWA Gaming", value: "HWA Gaming" },
  { label: "Hanwha Life Esports", value: "Hanwha Life Esports" },
  { label: "Hong Kong Attitude", value: "Hong Kong Attitude" },
  { label: "Hong Kong Esports", value: "Hong Kong Esports" },
  { label: "I MAY", value: "I MAY" },
  { label: "I May", value: "I May" },
  { label: "IDM Gaming", value: "IDM Gaming" },
  { label: "INTZ e-Sports", value: "INTZ e-Sports" },
  { label: "INTZ e-Sports Club", value: "INTZ e-Sports Club" },
  { label: "Immortals", value: "Immortals" },
  { label: "Invictus Gaming", value: "Invictus Gaming" },
  { label: "Isurus Gaming", value: "Isurus Gaming" },
  { label: "J Team", value: "J Team" },
  { label: "JD Gaming", value: "JD Gaming" },
  { label: "Jin Air Green Wings", value: "Jin Air Green Wings" },
  { label: "KSV Esports", value: "KSV Esports" },
  { label: "KT Rolster", value: "KT Rolster" },
  { label: "KaBuM e-Sports", value: "KaBuM e-Sports" },
  { label: "KaBuM eSports", value: "KaBuM eSports" },
  { label: "Kaos Latin Gamers", value: "Kaos Latin Gamers" },
  { label: "Keyd Stars", value: "Keyd Stars" },
  { label: "Kinguin", value: "Kinguin" },
  { label: "Kingzone DragonX", value: "Kingzone DragonX" },
  { label: "Kongdoo Mongster", value: "Kongdoo Mongster" },
  { label: "Kongdoo Monster", value: "Kongdoo Monster" },
  { label: "LGD Gaming", value: "LGD Gaming" },
  { label: "Longzhu Gaming", value: "Longzhu Gaming" },
  { label: "Lyon Gaming", value: "Lyon Gaming" },
  { label: "MAD Team", value: "MAD Team" },
  { label: "MVP", value: "MVP" },
  { label: "Machi 17", value: "Machi 17" },
  { label: "Millenium", value: "Millenium" },
  { label: "Misfits", value: "Misfits" },
  { label: "Misfits Academy", value: "Misfits Academy" },
  { label: "Mysterious Monkeys", value: "Mysterious Monkeys" },
  { label: "NewBee", value: "NewBee" },
  { label: "Newbee", value: "Newbee" },
  { label: "Ninjas in Pyjamas", value: "Ninjas in Pyjamas" },
  { label: "OMG", value: "OMG" },
  { label: "OpTic Academy", value: "OpTic Academy" },
  { label: "OpTic Gaming", value: "OpTic Gaming" },
  { label: "Operation Kino", value: "Operation Kino" },
  { label: "Origen", value: "Origen" },
  { label: "Oyunhizmetleri", value: "Oyunhizmetleri" },
  { label: "P3P eSports", value: "P3P eSports" },
  { label: "Paris Saint-Germain", value: "Paris Saint-Germain" },
  { label: "Pentagram", value: "Pentagram" },
  { label: "Phoenix1", value: "Phoenix1" },
  { label: "ProGaming Esports", value: "ProGaming Esports" },
  { label: "QG Reapers", value: "QG Reapers" },
  { label: "RED Canids", value: "RED Canids" },
  { label: "ROX Tigers", value: "ROX Tigers" },
  { label: "Rainbow7", value: "Rainbow7" },
  { label: "Raise Gaming", value: "Raise Gaming" },
  { label: "Rampage", value: "Rampage" },
  { label: "Red Bulls", value: "Red Bulls" },
  { label: "Red Canids", value: "Red Canids" },
  { label: "Remo Brave eSports", value: "Remo Brave eSports" },
  { label: "Roccat", value: "Roccat" },
  { label: "Rogue Warriors", value: "Rogue Warriors" },
  { label: "Royal Bandits e-sports", value: "Royal Bandits e-sports" },
  { label: "Royal Never Give Up", value: "Royal Never Give Up" },
  { label: "SK Telecom T1", value: "SK Telecom T1" },
  { label: "Samsung Galaxy", value: "Samsung Galaxy" },
  { label: "Schalke 04", value: "Schalke 04" },
  { label: "Snake Esports", value: "Snake Esports" },
  { label: "Snake eSports", value: "Snake eSports" },
  { label: "Splyce", value: "Splyce" },
  { label: "Suning Gaming", value: "Suning Gaming" },
  { label: "SuperMassive", value: "SuperMassive" },
  { label: "T Show E-Sports", value: "T Show E-Sports" },
  { label: "TSM Academy", value: "TSM Academy" },
  { label: "Team AURORA", value: "Team AURORA" },
  { label: "Team Afro", value: "Team Afro" },
  { label: "Team Gates", value: "Team Gates" },
  { label: "Team Liquid", value: "Team Liquid" },
  { label: "Team Liquid Academy", value: "Team Liquid Academy" },
  { label: "Team One e-Sports", value: "Team One e-Sports" },
  { label: "Team SoloMid", value: "Team SoloMid" },
  { label: "Team WE", value: "Team WE" },
  { label: "Team oNe Esports", value: "Team oNe Esports" },
  { label: "Team oNe e-Sports", value: "Team oNe e-Sports" },
  { label: "Tempo Storm", value: "Tempo Storm" },
  { label: "Topsports Gaming", value: "Topsports Gaming" },
  { label: "Unicorns of Love", value: "Unicorns of Love" },
  { label: "Vici Gaming", value: "Vici Gaming" },
  { label: "Virtus.pro", value: "Virtus.pro" },
  { label: "Vitality", value: "Vitality" },
  { label: "Vivo Keyd", value: "Vivo Keyd" },
  { label: "Wayi Spider", value: "Wayi Spider" },
  { label: "Wind and Rain", value: "Wind and Rain" },
  { label: "Young Generation", value: "Young Generation" },
  { label: "YouthCREW", value: "YouthCREW" },
  { label: "eUnited", value: "eUnited" },
  { label: "eXtreme Gamers", value: "eXtreme Gamers" },
  { label: "paiN Gaming", value: "paiN Gaming" }
];

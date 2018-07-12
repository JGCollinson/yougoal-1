import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Detail extends Component {
  state = {
    players: [{}],
    team: []
  };

  // When this component mounts, grab the players with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  componentDidMount() {
    API.findPlayersByTeamID(this.props.match.params.teamID)
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));

    API.findTeamByID(this.props.match.params.teamID)
      // .then(res => this.setState({ team: res.data }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <Jumbotron>
                <h1> </h1>
              </Jumbotron>
            {this.state.players.length ? (
              <List>
                {this.state.players.map(player => (
                  <ListItem key={player._id}>
                    <Link to={"/players/" + player._id}>
                      <strong>
                        Player: {player.name}
                        <br />
                        Position: {player.postion}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Teams</Link>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Detail;

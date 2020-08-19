import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({name: e.target.value});
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <View style={styles.container}>

      </View>
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                This is a memory game
              </small>
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f24',
    justifyContent: "center",
    alignItems: 'center',
  },
  login: {
    display: flex,
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    width: "40vw",
    textAlign: "center",
    boxShadow: "6px 6px 6px gray",
    background: white,
  }
});

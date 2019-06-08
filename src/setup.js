import React, { Component } from "react";
import getTheme from "./components/index";
import App from "./App";
import { Font } from "expo";
import { StyleProvider } from "native-base";
import variables from "./variables/commonColor";

export default class Setup extends Component {
  state = {
    fontLoaded: false
  };
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Roboto_medium: require("./assets/fonts/Roboto_medium.ttf")
  //   });
  //   this.setState({ fontLoaded: true });
  // }
  render() {
    return (
      // <StyleProvider style={getTheme(variables)}>
      //   <App />
      // </StyleProvider>
      <h1>iko</h1>
    );
  }
}

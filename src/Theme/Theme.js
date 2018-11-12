// @flow

import * as React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";
import brown from "@material-ui/core/colors/brown";
import cyan from "@material-ui/core/colors/cyan";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";
import lightBlue from "@material-ui/core/colors/lightBlue";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import orange from "@material-ui/core/colors/orange";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import teal from "@material-ui/core/colors/teal";
import yellow from "@material-ui/core/colors/yellow";

//utils

import {
  getNonEmptyString,
  getNonEmptyStringC
} from "@artispace/utils/lib/ADTS/state";

// get your color back
export function returnColor(color: string): Object {
  switch (color) {
    case "amber":
      return amber;
    case "blue":
      return blue;
    case "blueGrey":
      return blueGrey;
    case "brown":
      return brown;
    case "cyan":
      return cyan;
    case "deepOrange":
      return deepOrange;
    case "deepPurple":
      return deepPurple;
    case "green":
      return green;
    case "indigo":
      return indigo;
    case "lightBlue":
      return lightBlue;
    case "lightGreen":
      return lightGreen;
    case "lime":
      return lime;
    case "orange":
      return orange;
    case "pink":
      return pink;
    case "purple":
      return purple;
    case "red":
      return red;
    case "teal":
      return teal;
    case "yellow":
      return yellow;
    default:
      return purple;
  }
}

type Customthemetype = {
  primary?: string,
  secondary?: string,
  type?: string
};

type Themeprops = {
  palette: Customthemetype
};

export const paletteFn = (props): Themeprops => {
  const safeTypeValue = (type: string) => (type === "light" ? "light" : "dark");
  const primary = getNonEmptyStringC("primary", "purple")(props.customtheme);
  const secondary = getNonEmptyStringC("secondary", "green")(props.customtheme);
  const type = getNonEmptyString("type", "light")
    .map(safeTypeValue)
    .evalWith(props.customtheme);

  return {
    palette: {
      type,
      primary: returnColor(primary),
      secondary: returnColor(secondary)
    }
  };
};

type Props = {
  customtheme: Customthemetype,
  children?: React.Node
};

const Themecomponent = (props: Props) => {
  return (
    <MuiThemeProvider theme={createMuiTheme(paletteFn(props))}>
      {props.children}
    </MuiThemeProvider>
  );
};

export default Themecomponent;

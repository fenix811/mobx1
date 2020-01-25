import React, {Component} from "react";
import navBar from "./my-decorator";

@navBar()
export class AnotherComponent extends Component {
  render() {
   return(
     <div>
       <p>some component</p>
      </div>
   )}
}
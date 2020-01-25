import React, {Component} from "react";

export default function navBar() {
    return function(Child:any) {
      return class extends Component {
         constructor(props:any) {
           super(props);
         }
         render() {
           return (
             <div>
               <h2>Hello this is the navigation bar</h2>
               <Child />
             </div>
           )
        }
     }
 }
}
import { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent/> */}
        <CSSModule />
      </div>
    )
  }
}

export default App;
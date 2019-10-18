import React from "react";

import Pexels from "./containers/Pexels/Pexels";

import "./App.scss";

// class App extends Component {
//   state = { result: [] };
//   componentDidMount = () => {
//     axios
//       .get(`https://api.pexels.com/v1/curated?per_page=15&page=1`, {
//         headers: {
//           Authorization:
//             "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
//         }
//       })
//       .then(res => {
//         this.setState({ result: res });
//       });
//   };
//   render() {
//     console.log(this.state.result);
//     return <div>hello</div>;
//   }
// }

function App() {
  return <Pexels />;
}

export default App;

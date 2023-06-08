// import Message from './Message'

// function App() {
//   return <div><Message></Message></div>;
// }

// export default App;

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Paris", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;

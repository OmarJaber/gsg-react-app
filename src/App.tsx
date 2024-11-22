import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Paris", "London", "Tokyo", "New York", "Rome"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <br />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>
    </div>
  );
}

export default App;

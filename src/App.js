import React from "react";
import { Button } from "@blueprintjs/core";
import robotApi from "./api/robotApi";
import destinationApi from "./api/destinationApi";
import './App.css';

const App = () => {
  const [destinatiosData, setDestinationData] = React.useState([]);

  const handleCall = async (item) => {
    await robotApi.call(destinatiosData, item)
  }
  const handleCancelCall = async (item) => {
    await robotApi.cancellCall(destinatiosData, item)
  }

  const getAllDestinations = async () => {
    const response = await destinationApi.getAll()
    console.log(response)
    setDestinationData(response.data.destinations);
  }

  const getCallButtonsUsingMap = (destArr) => {
    return destArr.map(({ name }) => {
      return <Button intent="success" rightIcon="arrow-right" large="true" alignText="left" text={name} onClick={() => handleCall(name)} />
    })
  }

  const getCancelCallButtonsUsingMap = (destArr) => {
    return destArr.map(({ name }) => {
      return <Button intent="danger" icon="refresh" large="true" alignText="right" text={name} onClick={() => handleCancelCall(name)} />
    })
  }

  React.useEffect(() => {
    getAllDestinations()
  },
    []);

  return (
    <div className="App">
      <div className="buttonsPanel">
        <div className="callButtons">
          {getCallButtonsUsingMap(destinatiosData)}
        </div>
        <div className="cancelCallButtons">
          {getCancelCallButtonsUsingMap(destinatiosData)}
        </div>
      </div>
    </div>
  );

}

export default App;

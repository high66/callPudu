import React from "react";
import destinationApi from "./api/destinationApi";
import robotApi from "./api/robotApi";
import { Button } from "@blueprintjs/core";

const ButtonsComponent = ({ robotId }) => {

    const [destinatiosData, setDestinationData] = React.useState([]);


    React.useEffect(() => {
        getAllDestinations()
    }, []);

    const getAllDestinations = async () => {
        const response = await destinationApi.getAll(robotId)
        setDestinationData(response.data.destinations);
    }

    const handleCall = async (item) => {
        await robotApi.call(destinatiosData, item)
    }
    const handleCancelCall = async (item) => {
        await robotApi.cancellCall(destinatiosData, item)
    }

    const getCallButtonsUsingMap = (destArr) => {
        return destArr.map(({ name }) => {
            return <Button intent="success" rightIcon="arrow-right" text={name} onClick={() => handleCall(name)} />
        })
    }

    const getCancelCallButtonsUsingMap = (destArr) => {
        return destArr.map(({ name }) => {
            return <Button intent="danger" icon="refresh" text={name} onClick={() => handleCancelCall(name)} />
        })
    }

    return (
        <div>
            {getCallButtonsUsingMap(destinatiosData)}
            {getCancelCallButtonsUsingMap(destinatiosData)}
        </div>
    );
}

export default ButtonsComponent;

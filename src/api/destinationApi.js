import { deviceId, robotId } from "../consts"

const destinationApi = {}

destinationApi.getAll = () => {
    return fetch(`http://localhost:9050/api/destinations?device=${deviceId}&robot_id=${robotId}`)
        .then((response) => response.json())
}
export default destinationApi



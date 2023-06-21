import { deviceId, robotId } from "../consts"

const callBody = (destinatiosData, item) => {
return JSON.stringify({
         deviceId, 
         robotId,
         destination: destinatiosData.filter(elem => elem.name === item)[0]
       })
}
export default callBody
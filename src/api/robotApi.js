import callBody from "../utils/callBody"

const robotApi = {}

robotApi.call = (destinatiosData, item) => {
  return fetch('http://localhost:9050/api/robot/call', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: callBody(destinatiosData, item)
  })
}

robotApi.cancellCall = (destinatiosData, item) => {
  return fetch('http://localhost:9050/api/robot/cancel/call', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: callBody(destinatiosData, item)
  })
}
export default robotApi
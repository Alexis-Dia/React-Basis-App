import { apiCall } from '../../services/api'

export function fetch (ob) {
    return apiCall(`http://nginxmicroservice.ml/save`, 'POST', ob.data)
}

export function fetchIfUserExist (ob) {
    return apiCall(`http://nginxmicroservice.ml/checkIfUserExist`, 'POST', ob.data)
}
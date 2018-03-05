const URL = 'http://localhost:4000';

export const RegisterUser = data => {
  return fetch(`${URL}/register`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => { 
    if(res.status < 400 ) {
      return res.json().then(json => {
        return json
      })
    }
    else {
      // throw Error(res.json())
      return res.json().then(json => {
        return Promise.reject(json)
      })
    }
  })
}

export const LoginUser = data => {
  return fetch(`${URL}/auth`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => { 
    if(res.status < 400 ) {
      return res.json().then(json => {
        return json
      })
    }
    else {
      // throw Error(res.json())
      return res.json().then(json => {
        return Promise.reject(json)
      })
    }
  })
}
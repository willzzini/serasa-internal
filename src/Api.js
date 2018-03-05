const URL = 'http://localhost:4000';

export const RegisterUser = (data) => {
  console.log(data)
  return fetch(`${URL}/register`, {
    method: 'post',
    body: JSON.stringify(data)
  })
  .then(res => { 
    if(res.ok) {
      return res.json()
    }
  })
  .then(json => {
    console.log(json)
    return json
  })
  .catch(err => { 
    console.log(err); 
  });
}
import axios from 'axios';

export async function getRequest(url) {
  try {
    let response = await axios.get(
      process.env.REACT_APP_BASE_URL + '/api' + url,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      process.env.REACT_APP_BASE_URL + '/api' + url,
      body,
      generateRequestHeader(),
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export function generateRequestHeader() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  };
}

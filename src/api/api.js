import axios from 'axios';

export async function getRequest(url) {
  try {
    let response = await axios.get(
      'http://20.189.113.70' + '/api' + url,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      'http://20.189.113.70' + '/api' + url,
      body,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

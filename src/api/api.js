import axios from 'axios';

export async function getRequest(url) {
  try {
    let response = await axios.get(
      'https://project.truyentienganh.com' + '/api' + url,
      //'http://localhost:3001' + '/api' + url
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      'https://project.truyentienganh.com' + '/api' + url,
      //'http://localhost:3001' + '/api' + url,
      body,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

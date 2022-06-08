import AsyncStorage from '@react-native-async-storage/async-storage';

// export const baseUrl = ''; // local

export const baseUrl = 'https://192.168.18.38:3000/api'; // dev

// export const baseUrl = ''; // prod

export async function get(url = '') {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + (await AsyncStorage.getItem('token')),
  };
  const response = await fetch(`${baseUrl}${url}`, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
  });
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 403) {
    const res = await response.json();
    throw new Error(res.message);
  } else if (response.status === 404) {
    const res = await response.json();
    throw new Error(res.message);
  } else {
    const res = await response.json();
    throw new Error(res.data.message);
  }
}

export async function post(url = '', data = {}) {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + (await AsyncStorage.getItem('token')),
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 500) {
    const res = await response.json();
    throw new Error(res.message);
  } else if (response.status === 422) {
    const res = await response.json();
    if (res.message) {
      throw new Error(res.message);
    } else {
      throw new Error(res.data.message);
    }
  } else if (response.status === 409) {
    const res = await response.json();
  } else {
    const res = await response.json();
    if (res.message) {
      throw new Error(res.message);
    } else {
      throw new Error(res.data.message);
    }
  }
}

export async function put(url = '', data = {}) {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + (await AsyncStorage.getItem('token')),
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 403) {
    const res = await response.json();
    throw new Error(res.message);
  } else {
    const res = await response.json();
    if (res.message) {
      throw new Error(res.message);
    } else {
      throw new Error(res.data.message);
    }
  }
}

export async function deleteRequest(url = '') {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + (await AsyncStorage.getItem('token')),
    },
  });
  const response = await res.json();
  return response;
}

export async function uploadFile(url, imageData = {}) {
  const tempPath = imageData.path;
  const filename = tempPath.replace(/^.*[\\\/]/, '');

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'multipart/form-data');
  myHeaders.append(
    'Authorization',
    'bearer ' + (await AsyncStorage.getItem('token')),
  );

  const formdata = new FormData();
  formdata.append('image', {
    uri: imageData.path,
    type: 'image/jpg',
    name: filename,
  });
  formdata.append('field', imageData.field);
  formdata.append('location', JSON.stringify(imageData.location));
  console.log({ formdata });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };
  const urll = `${baseUrl}+${url}`;

  const response = await fetch(urll, requestOptions);
  console.log(response.status);
  if (response.status === 200) {
    const res = await response.json();
    console.log(res);
    return res;
  } else {
    const res = await response.json();

    console.log({ res, sta: response });
    if (res.message) {
      throw new Error(res.message);
    } else {
      throw new Error(res.data.message);
    }
  }
}

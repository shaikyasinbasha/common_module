const saveScore = () => {
    console.log('------------saveScore------------');
}

const fetchScore = () => {
    console.log('------------fetchScore------------');
}

module.exports = {
    saveScore,
    fetchScore
};

/* 
import { CredentialsError } from './errorHandling';
import { parseQueryString, createQueryString, httpGetRequest, httpPostRequest, httpDeleteRequest } from './networking';
import platformData, { studentData } from './platformData';  


export default async function authenticate() {
  console.log("--------COOL-------");
  return; // TODO: Remove when intergrating with the platform
  let studentDataResponse;
  try {
    
    if (platformData.data.platformHost) {
      const authData = parseQueryString(await fetchAuthData());
      if (authData.studentID && authData.studentID !== '0') {
        studentDataResponse = parseQueryString(await fetchLaunchData());
      }else{
        console.log('id 0')
      }
    }else{
      console.log('no platform')
    }
  } catch (error) {
    console.error(error);
    return studentData.data; // return default student data
  } finally {
    return studentData.update(studentDataResponse); // set and return new student data
  }
}

export async function fetchAuthData() {
  if (!platformData.data.platformHost) {
    return;
  }
  return await httpPostRequest(`${platformData.data.platformHost}/api/legacy/auth`,
    createQueryString({
      taskID: platformData.data.taskID,
      authToken: studentData.data.authToken
    }), null, true
  );
}

export async function fetchLaunchData() {
  if (!platformData.data.platformHost) {
    return;
  }
  return await httpGetRequest(`${platformData.data.platformHost}/api/legacy/launch`, {
    taskID: platformData.data.taskID
  }, true);
}

export async function logInStudent(user, pass) {
  if (!platformData.data.platformHost) {
    return studentData.data; // default data
  }
  try {
    const loginData = parseQueryString(
      await httpPostRequest(`${platformData.data.platformHost}/api/legacy/launch`,
        createQueryString({
          taskID: platformData.data.taskID,
          xlogin: user,
          xpass: pass
        }), null, true
      )
    );

    if (loginData.studentID && loginData.studentID !== '') {
      return studentData.update(loginData);
    }

    throw new CredentialsError('>> logInStudent():\nWrong credentials!');
  } catch (error) {
    throw error;
  }
}

export async function sendScore(data) {
  return; // TODO: Remove when intergrating with the platform
  if (!platformData.data.apiHost) {return}

  const apiHost = platformData.data.apiHost;
  const route = '/games/score';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${studentData.data.authToken}` 
  }

  return await httpPostRequest(apiHost + route, data, headers, false);
}

export async function getScores(data) {
  // TODO: Remove below line when integrating with the platform
  return {"todayScores":[{"score":25,"date":"2020-03-24T15:39:35.000Z","name":"s s","school":"Secondary School"},{"score":0,"date":"2020-03-24T15:33:17.000Z","name":"s s","school":"Secondary School"},{"score":0,"date":"2020-03-24T15:33:01.000Z","name":"s s","school":"Secondary School"},{"score":-5,"date":"2020-03-24T15:36:54.000Z","name":"s s","school":"Secondary School"}],"user":[{"score":25,"date":"2020-03-24T15:39:35.000Z","name":"s s","school":"Secondary School"}],"highScores":[{"score":25,"date":"2020-03-24T15:39:35.000Z","name":"s s","school":"Secondary School"},{"score":0,"date":"2020-03-24T15:33:17.000Z","name":"s s","school":"Secondary School"},{"score":0,"date":"2020-03-24T15:33:01.000Z","name":"s s","school":"Secondary School"},{"score":-5,"date":"2020-03-24T15:36:54.000Z","name":"s s","school":"Secondary School"}]}
  if (!platformData.data.apiHost) {console.log('no host'); return}

  const apiHost = platformData.data.apiHost;
  const route = '/games/highscores';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${studentData.data.authToken}`
  }

  return await httpGetRequest(apiHost + route, data, false, headers);
}
 */
import Axios from "axios";

const createPatformData = () => {
    console.log('------------createPatformData------------');
}

const auth = () => {
    console.log('------------auth------------');
  createPatformData();
  Axios.get("http://api.plos.org/search?q=title:DNA").then(resp => {
    console.log("---------Axios-----------");
  })
}

module.exports = auth

/* import { Record } from 'immutable';
import { addTrailingSlash } from './utils';
import { urlParams } from './networking';

const studentRecord = new Record({
  studentID: '0',
  schoolName: '',
  studentName: '',
  authToken: ''
});

const platformRecord = new Record({
  authCode: '',
  studentID: '',
  taskID: '',
  realID: '',
  platform: '',
  contentPath: '',
  platformHost: '',
  assetHost: '',
  apiHost: '',
  apiToken: '',
  contentType: ''
});

let _studentData = studentRecord();
let _platformData = platformRecord();
let _loggedInAsStudent = false;

export const loggedInAsStudent = {
  get value() {
    return _loggedInAsStudent;
  },
  set value(val) {
    _loggedInAsStudent = val;
  }
};

export const studentData = {
  update(responseData = {}) {
    if (responseData.studentID && responseData.studentID !== '0') {
      // Make sure we don't set school name when not logged in
      this.data = {
        studentID: responseData.studentID,
        schoolName: responseData.school || 'n/a',
        studentName: responseData.student || 'n/a',
        authToken: responseData.authToken || ''
      };
    } else {
      this.data = {
        studentID: '0',
        schoolName: '',
        studentName: '',
        authToken: ''
      };
    }
    return this.data; // This uses the internal setter
  },
  get data() {
    return _studentData;
  },
  set data(val) {
    _studentData = _studentData.merge(val);
  }
};

const platformData = {
  init() {
    _platformData = _platformData.merge({
      authCode: urlParams.get('authCode') || '',
      studentID: urlParams.get('studentID') || '',
      taskID: urlParams.get('taskID') || '',
      realID: urlParams.get('realID') || '',
      platform: urlParams.get('platform') || 'mymaths',
      contentPath: addTrailingSlash(urlParams.get('contentPath') || ''),
      platformHost: urlParams.get('platformHost') || '',
      assetHost: urlParams.get('assetHost') || '',
      apiHost: urlParams.get('apiHost') || '',
      apiToken: urlParams.get('apiToken') || ''
    });
  },
  get data() {
    return _platformData;
  },
  set data(val) {
    _platformData = _platformData.merge(val);
  }
};

// export default platformData;

module.exports = {
    platformData,
    studentData,
    loggedInAsStudent
}

 */
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

// const apiKey = process.env.REACT_APP_apiKey
const authDomain = process.env.REACT_APP_authDomain
const projectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const appId = process.env.REACT_APP_appId
const measurementId = process.env.REACT_APP_measurementId

const firebaseConfig = {
    apiKey: 'AIzaSyA21ylcr3Yj7-SJ8PhTNwqZFDx82dVxdJY',
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}
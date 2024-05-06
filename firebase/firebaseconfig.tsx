// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ9F0PBM0JK0bYYnZjfep25C9jJ5Wz8io",
    authDomain: "lawyer-web-data.firebaseapp.com",
    databaseURL: "https://lawyer-web-data-default-rtdb.firebaseio.com",
    projectId: "lawyer-web-data",
    storageBucket: "lawyer-web-data.appspot.com",
    messagingSenderId: "821924869090",
    appId: "1:821924869090:web:446a7ba8f49d56f4c73fbb",
    measurementId: "G-9E2KPHHY2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Retrieve the database instance
const db = getDatabase(app);

// Reference to the "features" data
const featuresRef = ref(db, 'law-services');
const lawServicesRef = ref(db, 'law-features-extra');
const testimonialsRef = ref(db, 'testimonials');
const caseStudiesRef = ref(db, 'case-studies');



// Export the Firebase database instance and the features reference
export { db, featuresRef , lawServicesRef, testimonialsRef, caseStudiesRef};

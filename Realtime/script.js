

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY6_0YnI3Uqk0qjlE97fa2RSeR2g0swGs",
  authDomain: "contact-form-9d1cd.firebaseapp.com",
  databaseURL: "https://contact-form-9d1cd-default-rtdb.firebaseio.com",
  projectId: "contact-form-9d1cd",
  storageBucket: "contact-form-9d1cd.appspot.com",
  messagingSenderId: "291568132157",
  appId: "1:291568132157:web:93e25d75204cba6f980a54"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var num = document.getElementById("num").value;
  
  saveMessages(email, password,fname,lname,num);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (email, password,fname,lname,num) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    email: email,
    password: password,
    fname:fname,
    lname:lname,
    num:num
  });
};

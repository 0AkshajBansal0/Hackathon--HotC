const express = require("express")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const path = require('path')
const { initializeApp } = require("firebase/app")
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth")
const { log } = require("console")

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: "krishi-connect12.appspot.com",
    messagingSenderId: "44448474566",
    appId: "1:44448474566:web:93807fd8396b0157bebec7",
    measurementId: "G-J138W8N9ZF"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "landingPage.html"));
});

app.post('/signup', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.status(200).send("User created successfully: " + userCredential.user.uid);
        })
        .catch((error) => {
            console.error("Error creating user:", error);
            res.status(400).send("Error: " + error.message);
        });
});

app.post("/signin", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.status(200).send("User signed in successfully: " + userCredential.user.uid);
        })
        .catch((error) => {
            console.error("Error signing in:", error);
            res.status(400).send("Error: " + error.message);
        });
})

app.listen(process.env.PORT, function(req,res){
    console.log(process.env.PORT);
})
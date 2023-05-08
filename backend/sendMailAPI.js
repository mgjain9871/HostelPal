const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
require("dotenv").config();

const {initializeApp} = require('firebase/app')
const {getFirestore, collection, addDoc, getDocs} = require('firebase/firestore/lite')

const firebaseConfig = {
  apiKey: "AIzaSyBtrd_Dh2FEzOZWcqlgv5zZ8Eb65PceSyY",
  authDomain: "hostel-pal-559d5.firebaseapp.com",
  projectId: "hostel-pal-559d5",
  storageBucket: "hostel-pal-559d5.appspot.com",
  messagingSenderId: "652216242658",
  appId: "1:652216242658:web:dd1c63fc2085c6f4b1a9bb",
  measurementId: "G-CNXKYGY5W5"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const addRecord = async (id, name, email, complaint) => {
  const recordCol = collection(db, 'records');
  const docRef = await addDoc(recordCol, {
    id, name, email, complaint
  })
  return docRef.id;
}

const getRecords = async () => {
  const recordCol = collection(db, 'records');
  const docSnapshot = await getDocs(recordCol)
  const data = []
  docSnapshot.forEach((doc) => data.push(doc.data()))
  return data
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/data', async function (req, res) {
  return res.status(200).json(await getRecords())
})

app.get("/", function (req, res) {
  res.send("Welcome to send Mail API");
});
console.log(process.env.USER);
app.post("/complaints", function (req, res) {
  res.send("Mail sended");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: "mitulgoeljain0123@gmail.com",
    to: `${req.body.toEmail}`,
    cc:``,
    subject: `${req.body.complaintHead} Complaint`,
    html: `<strong>Hostel : ${req.body.hostel} &nbsp; &nbsp; Floor : ${
      req.body.floor
    } &nbsp; &nbsp; Room Number : ${req.body.roomNo} </strong> <br> ${
      req.body.category
        ? `<br> <strong>Complaint category : ${req.body.category}</strong> <br>`
        : ""
    } <br> <strong>${
      req.body.complaint
    }</strong> <br> <br> <hr> <strong>Emailed by :</strong> <br> Name: ${
      req.body.fname
    } <br> Registration Number: ${req.body.id} <br> Email: ${
      req.body.userEmail
    } <hr> <br>`,
  };
  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
    } else {
      await addRecord(req.body.id, req.body.fname, req.body.userEmail, req.body.complaint);
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running on Port 5000")
});

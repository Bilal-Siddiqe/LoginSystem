const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

const allUsers = [
    {
        fullName: "Bilal Siddique",
        age: "27",
        phoneNumber: "03102097912",
        gender: "Male",
        email: "b",
        pwd: "1",
        posts: []
    },
]

app.listen(port, () => {
    console.log(`Server is running on port-${port}`);
});

app.post("/reg", (req, res) => {
    const found = allUsers.find((items) => { return items.email == req.body.email });
    if (found) {
        res.status(201).send("User Already Exist");
    }
    else {
        allUsers.push(req.body);
        res.status(200).json(found);
    }
})

app.post("/login", (req, res) => {

    const found = allUsers.find((items) => { return items.email == req.body.email && items.pwd == req.body.pwd });

    if (found) {
        res.send(found);
    }
    else {
        res.send("User Not Found");
    }
})

app.post("/creatPost", (req, res) => {

    const found = allUsers.find((items) => { return items.email == req.body.loginUser });
    found.posts.push(req.body.postsData);
    res.send(found);

})

app.post('/delPost', (req, res) => {
    const postIndex = req.body.postIndex;
    allUsers[0].posts.splice(postIndex, 1);
    res.send(allUsers[0].posts);
});


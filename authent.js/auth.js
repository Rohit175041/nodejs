const jwt = require("jsonwebtoken");
const secret_key = "rohit@123";
const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    resp.json({
        message: "user Authentication"
    })
})

router.post("/", (req, resp) => {
    const user = {
        id: 1,
        username: "rohit",
        email: "rohit@gmail.com"
    }
    jwt.sign({ user }, secret_key, { expiresIn: '600s' }, (error, token) => {
        resp.json({
            token
        });
        console.log(token)
    });
})

router.post("/", verify_token, (req, resp) => {
    jwt.verify(req.token, secret_key, (error, authdata) => {
        if (error) {
            resp.send({
                result: "invalid token"
            });
        } else {
            resp.json({
                message: "profile accessed",
                authdata
            });
        }
    })
})

//token verification
function verify_token(req, resp, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        resp.send(
            {
                result: 'Token is not valid'
            }
        )
    }
}

module.exports = router;


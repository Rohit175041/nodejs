const jwt = require("jsonwebtoken");
const secret_key = "rohit@123";
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "user Authentication"
    })
})

router.post("/", (request, response) => {
    try {
        const user = {
            id: 1,
            username: "rohit",
            email: "rohit@gmail.com"
        }
        // console.log(token);
        jwt.sign({ user }, secret_key, { expiresIn: '6000s' }, (error, token) => {
            return response.status(200).send(token);    
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.post("/", verify_token, (request, response) => {
    try {
        jwt.verify(request.token, secret_key, (error, authdata) => {
            if (error) {
                return response.status(404).send({
                    result: "invalid token"
                });
            }
            return response.status(200).send({
                message: "profile accessed",
                authdata
            });

        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//token verification
function verify_token(request, response, next) {
    const bearerHeader = request.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        request.token = token;
        next();
    } else {
        response.send(
            {
                result: 'Token is not valid'
            }
        )
    }
}

module.exports = router;


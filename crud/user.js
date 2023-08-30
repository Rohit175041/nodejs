const express = require('express');
const route = express.Router();
const userschema = require('../databse/schema');


route.get("/", async (req, resp) => {
    console.log(req.body._id);
    let data = await userschema.findById(req.body._id);

    if (!data) {
        resp.send('data not found')
    } else {
        resp.send(data);
    }

})

route.post("/", async (req, resp) => {
    console.log(req.body);
    const newUser = new userschema({
        id: req.body.id,
        name: req.body.name,
    });
    if (!newUser) {
        resp.send('data not inserted')
    } else {
        newUser.save();
        resp.send(
            {
                message: "data inserted ",
            }
        );
    }

})

route.put("/", async (req, resp) => {
    const { _id, id, name } = req.body
    let data = await userschema.findOneAndUpdate({
        "_id": _id,
    }, {
        "name": name,
        "id": id
    });
    console.log(req.body);
    if (!data) {
        resp.send('data not found')
    } else {
        resp.send({
            message: "Updated successfully",
            user: req.body
        });
    }

})



route.delete("/", async (req, resp) => {
    console.log(req.body._id);
    var id = req.body._id;
    let data = await userschema.findByIdAndDelete(id);
    console.log(data);
    if (!data) {
        resp.send('data not found')
    } else {
        // data.remove();
        resp.send('data deleted')
    }

})

module.exports = route;
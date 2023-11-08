const express = require('express');
const route = express.Router();
const userschema = require('../databse/schema');

// get user by id
route.get("/:id", async (request, response) => {
    try {
        // console.log(request.body.id);
        let data = await userschema.findById(request.body.id);

        if (!data) {
            return response.send('data not found');
        }
        return response.status(200).send(data);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// get all users
route.get("/", async (request, response) => {
    try {
        let data = await userschema.find();

        if (!data) {
            return response.send('data not found')
        }
        return response.status(200).send(data);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

})

// post newuser data
route.post("/", async (request, response) => {
    try {
        // console.log(request.body);
        const newUser = new userschema({
            uid: request.body.uid,
            name: request.body.name,
        });
        if (!newUser) {
            return response.send('data not inserted')
        }
        const result = await userschema.create(newUser);
        return response.status(200).send(
            {
                message: result
            }
        );

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

})


// update existin user data
route.put("/:id", async (request, response) => {
    try {

        let data = await userschema.findOneAndUpdate({
            "_id": request.body.id,
        }, {
            "name": request.body.name,
            "uid": request.body.uid
        });
        console.log(request.body);
        if (!data) {
            return response.status(404).send('data not found')
        }
        return response.status(200).send({
            message: "Updated successfully",
            user: request.body
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

})


// datae all user data
route.delete("/delete_all", async (request, response) => {
    try {
        let data = await userschema.deleteMany({});
        console.log(data);
        if (!data) {
            response.status(404).send('data not deleted')
        }
        response.status(200).send({ message: "Database deleted successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

})

// delete user data by _id
route.delete("/:id", async (request, response) => {
    try {
        console.log(request.body.id);
        var id = request.body.id;
        let data = await userschema.findByIdAndDelete(id);
        console.log(data);
        if (!data) {
            response.status(404).send('data not found')
        }
        response.status(200).send('data deleted');
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

})




module.exports = route;
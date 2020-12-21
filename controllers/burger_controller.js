const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//Get all
router.get("/", async (req, res) => {
    try {
        const data = await burger.all();
        const handlebarOBJ = {
            burger: data
        };
        res.render("index", handlebarOBJ);
    } catch (err) {
        console.error("ERROR - burger_controller - router.get(/): ", err);
    }
});


// NEw burger
router.post("/api/burgers", async (req, res) => {
    try {
        const result = await burger.create(["burger_name", "devoured"], [req.body.burgerName, false]);

        if (data.affectedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (error) {
        console.log("ERROR - burgers_controller.js" + error);
    }
});

//Update existing
router.put("/api/burgers/:id", async (req, res) => {


    try {
        const burgerID = `id = ${req.params.id}`;
        const result = await burger.update({
            devoured: true
        }, burgerID);

        // If no rows were changed, return a 404 status
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch (error) {
        console.log("ERROR - burgers_controller.js" + error);
    }
});

//Delete route
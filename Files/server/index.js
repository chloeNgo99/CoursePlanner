const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");



//middleware
app.use(cors());
app.use(express.json());//able to get data from the client site


//ROUTES


//ceate schedule
app.post("/schedule", async(req, res) => {
    try {
        const {className, classDate, startTime, endTime, instructor, review} = (req.body);
        
        const newSchedule = await pool.query(
            "INSERT INTO schedule (class_name, class_date, start_time, end_time, instructor, review) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
            [className, classDate, startTime, endTime, instructor, review]);
        res.json(newSchedule.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});


//get all schedule
app.get("/schedule", async(req, res) => {
    try {
        const allSchedule = await pool.query("SELECT * FROM schedule");
        res.json(allSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get all schedule by id asc
app.get("/schedule/idAsc", async(req, res) => {
    try {
        const allSchedule = await pool.query("SELECT * FROM schedule ORDER BY id");
        res.json(allSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get all schedule by id desc
app.get("/schedule/idDesc", async(req, res) => {
    try {
        const allSchedule = await pool.query("SELECT * FROM schedule ORDER BY id desc");
        res.json(allSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get all schedule by review asc
app.get("/schedule/reviewAsc", async(req, res) => {
    try {
        const allSchedule = await pool.query("SELECT * FROM schedule ORDER BY review");
        res.json(allSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get all schedule by review desc
app.get("/schedule/reviewDesc", async(req, res) => {
    try {
        const allSchedule = await pool.query("SELECT * FROM schedule ORDER BY review desc");
        res.json(allSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});


//get schedule by id
app.get("/schedule/:id", async(req, res) => {
    try {
        const {id} = (req.params);
        const idSchedule = await pool.query("SELECT * FROM schedule WHERE id = $1", [id]);
        res.json(idSchedule.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});


//get schedult by review
app.get("/schedule/review/:review", async(req, res) => {
    try {
        const {review} = (req.params);
        const reviewSchedule = await pool.query("SELECT * FROM schedule WHERE review = $1", [review]);
        res.json(reviewSchedule.rows);
    } catch (error) {
        console.error(error.message);
    }
});


//update a schedule
app.put("/schedule/:id", async(req, res) => {
    try {
        const {id} = (req.params);
        const {className, classDate, startTime, endTime, instructor, review} = (req.body);
        const update = await pool.query("UPDATE schedule SET class_name = $1, class_date = $2, start_time = $3, end_time = $4, instructor = $5, review = $6 WHERE id=$7",
        [className, classDate, startTime, endTime, instructor, review, id]);
        res.json("schedule update");
    } catch (error) {
        console.error(error.message);
    }
});


//delete a schedule
app.delete("/schedule/:id", async(req, res) => {
    try {
        const {id} = (req.params);
        const deleteId = await pool.query("DELETE FROM schedule WHERE id = $1", [id]);
        res.json("schedule deleted");
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(3000, () => {
    console.log("server started");
});
# Course Planner

## Project Idea

Course Planner is a full PERN stack (PostgreSQL, Express.js, React.js, Node.js) project base on my experience of planning and registering for future courses. As we might know, instructor quality and class materials are one of the the most concern topic for many students. The current pain point of this process is that there are no suitable way to capture information of the courses along with the instructor review without switching between many websites. The idea behind Course Planner is to provides a convienient way for student to plan their classes where all the needing information can be store at one place. 


## Functionality
This web application will:
- Allow user to plan out the upcoming courses by inputing the relevent information such as: class name, meeting time and day, instructor name and instructor review.
- Allow user to directly navigate to ratemyprofessors.com 
- Allow user to view, edit and delete the data

## Backend - The Server

- Using PostgreSQL to host the database locally
- Using Postman to send request and test the routers 
- Useing Express and Node.js to buid REST API

## Frontend - The Client

- Using React to build user interface which including the input form, the output table and an iframe for direct navigate ratemyprofessors.com
- Use JavaScript XML (JSX) to write HTML elements
- Use React Fragments to return multiple elements without extra nodes to the DOM.

## Database Table
![schedule table](https://github.com/chloeNgo99/CoursePlanner/blob/main/Files/images/scheduleSchema.png)

## List Of Routes
- POST Request - Create new data into the database
- GET Request - Return all data 
- PUT Request - Update data
- DELETE Request - delete data by id

## Install On Your Machine
- Create folder name CoursePlanner
- Inside the CourserPlanner create 2 sub folders for client and server
- On the server folder install:
```
npm init
npm install cors
```
- Inside the server folder, install the rest of the server file on my github
- Connect to the PostgreSQL
```
const pool = new Pool({
    user: "your_postgresql_username",
    password: "your_postgresql_password",
    host: "localhost",
    port: 5432,
    database: "planschedule"
});
```

- On the client folder install:
```
npm i create-react-app
```
- Inside the src folder, install the rest of the client file on my github

## Project Picture
- Main display
![home display](https://github.com/chloeNgo99/CoursePlanner/blob/main/Files/images/coursePlanner.png)

- Edit classes
![edit](https://github.com/chloeNgo99/CoursePlanner/blob/main/Files/images/editCoursePlanner.png)

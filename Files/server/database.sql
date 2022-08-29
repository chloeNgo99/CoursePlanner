CREATE DATABASE planschedule;

CREATE TABLE schedule(
    id SERIAL PRIMARY KEY,
    class_name VARCHAR(225) ,
    class_date VARCHAR(5) ,
    start_time VARCHAR(25),
    end_time VARCHAR(25),
    instructor VARCHAR(225),
    review VARCHAR(5) 
);
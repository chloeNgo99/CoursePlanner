import React, { Fragment } from "react";

export default function InputCard() {

    //the var name need to be exactly the same as the name declared in the index.js request
    const [className, setClassName] = React.useState("");
    const [classDate, setClassDate] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");
    const [instructor, setInstructor] = React.useState("");
    const [review, setReview] = React.useState("");


    const onSubmitChange = async (e) => {
        e.preventDefault();

        try {
            const body = { className, classDate, startTime, endTime, instructor, review };
            const response = await fetch("http://localhost:3000/schedule", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            //console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    };


    return (
        <Fragment>
            <h1 className="title">Course Planner</h1>
            <div className='justify-content-center text-center mt-5 mb-3'>
                    <iframe height="280px" width="680px" src="https://www.ratemyprofessors.com/" ></iframe>
             </div>

            <div className="input-form">
                <form className="form-inline justify-content-center text-center" onSubmit={onSubmitChange}>
                    <div>
                        <div className="d-flex">
                            <div className="col-md-4 ">
                                <label>Class Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={className}
                                    //name="className"
                                    onChange={e => setClassName(e.target.value.toUpperCase())}
                                />
                            </div>
                            <div className="col-md-4 ">
                                <label>Day</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={classDate}
                                    //name="classDate"
                                    onChange={e => setClassDate(e.target.value.toUpperCase())}
                                />
                            </div>
                            <div className="col-md-4">
                                <label>Instructor Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={instructor}
                                    //name="instructorName"
                                    onChange={e => setInstructor(e.target.value)}
                                />
                            </div>

                        </div>


                        <div className="d-flex">
                            <div className="col-md-4">
                                <label >Start Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={startTime}
                                    //name="startTime"
                                    onChange={e => setStartTime(e.target.value.toUpperCase())}
                                />
                            </div>
                            <div className="col-md-4 ">
                                <label >End Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={endTime}
                                    //name="endTime"
                                    onChange={e => setEndTime(e.target.value.toUpperCase())}
                                />
                            </div>
                            <div className="col-md-4">
                                <label>Review</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={review}
                                    //name="classReview"
                                    onChange={e => setReview(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*
                        <div className="d-flex ">
                            <div className="col-md-4 mb-3 mr-5">
                                <label>Instructor Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={instructor}
                                    //name="instructorName"
                                    onChange={e => setInstructor(e.target.value)}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label>Review</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={review}
                                    //name="classReview"
                                    onChange={e => setReview(e.target.value)}
                                />
                            </div>

                        </div>
                        */}
                    </div>

                    <div className="col-sm-10 mt-3">
                        <button type="submit" className="submit-btn">Add</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
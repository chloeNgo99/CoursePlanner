import React, { Fragment, useEffect, useState } from "react";

export default function EditCard(card) {
    
    const [className, setClassName] = useState(card.className);
    const [classDate, setClassDate] = useState(card.classDate);
    const [startTime, setStartTime] = useState(card.startTime);
    const [endTime, setEndTime] = useState(card.endTime);
    const [instructor, setInstructor] = useState(card.instructor);
    const [review, setReview] = useState(card.review);

    //update function
    const update = async(e) => {
        e.preventDefault();
        try {
            const body = {className, classDate, startTime, endTime, instructor, review};
            const response = await fetch(`http://localhost:3000/schedule/${card.id}`,{
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${card.id}`}>
                Edit
            </button>

            <div className="modal" id={`id${card.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Class Schedule</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="d-flex">
                                <div className="col-md-4 mb-3">
                                    <label>Class Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={className}
                                        onChange={e => setClassName(e.target.value.toUpperCase())}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Class Day</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={classDate}
                                        onChange={e => setClassDate(e.target.value.toUpperCase())}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label >Instructor Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={instructor}
                                        onChange={e => setInstructor(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="col-md-4 mb-3">
                                    <label >Start Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={startTime}
                                        onChange={e => setStartTime(e.target.value.toUpperCase())}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>End Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={endTime}
                                        onChange={e => setEndTime(e.target.value.toUpperCase())}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>Review</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={review}
                                        onChange={e => setReview(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => update(e)}>Submit</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};
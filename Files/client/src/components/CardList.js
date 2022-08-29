import React, { Fragment, useEffect, useState } from "react";
import EditCard from "./EditCard";

export default function CardList() {
    const [cards, setCard] = useState([]);

    //create data
    const getCards = async () => {
        try {
            const response = await fetch("http://localhost:3000/schedule");
            const jsonData = await response.json();

            setCard(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    //delete data by id
    const deleteCard = async (id) => {
        try {
            const deleteCard = await fetch(`http://localhost:3000/schedule/${id}`, {
                method: "DELETE"
            });
            setCard(cards.filter(card => card.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    return (
        <Fragment>
             <div className="table-responsive">
                <table className="table table-hover mt-5 text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col-sm-1">Class Name</th>
                            <th className="col-sm-1">Class Date</th>
                            <th className="col-sm-1">Start Time</th>
                            <th className="col-sm-1">End Time</th>
                            <th className="col-sm-1">Instructor Name</th>
                            <th className="col-sm-1">Class Review</th>
                            <th className="col-sm-1">Edit</th>
                            <th className="col-sm-1">Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {cards.map(card => (
                            <tr key={card.id}>
                                <td>{card.class_name}</td>
                                <td>{card.class_date}</td>
                                <td>{card.start_time}</td>
                                <td>{card.end_time}</td>
                                <td>{card.instructor}</td>
                                <td>{card.review}</td>
                                <td className="col-sm-1"><EditCard
                                    card={card}
                                    id={card.id}
                                    className={card.class_name}
                                    classDate={card.class_date}
                                    startTime={card.start_time}
                                    endTime={card.end_time}
                                    instructor={card.instructor}
                                    review={card.review}
                                /></td>
                                <td className="col-sm-1"><button className="delete-btn"
                                    onClick={() => deleteCard(card.id)}
                                >Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};
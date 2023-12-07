import React, { useEffect, useState } from "react";
import { useUserContext } from "../../UserContext";

function PublicDeck() {
    const user_id = useUserContext();
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/${user_id}/deck`,
                    { credentials: "include" }
                );
                const data = await response.json();
                setDecks(data);
            } catch (error) {
                console.error("Error fetching decks:", error);
            }
        }

        fetchData();
    }, [user_id]);

    const cardStyle = {
        transition: "transform 0.2s",
        background: "transparent",
        color: "gray",
    };

    const hoverStyle = {
        transform: "scale(1.1)",
    };

    return (
        <div className="container">
            <h2
                className="text-center"
                style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    textShadow: "4px 4px 4px black",
                }}
            >
                Decks
            </h2>
            <div className="row">
                {decks &&
                    decks
                        .filter((deck) => deck.public_status)
                        .map((deck) => (
                            <div
                                key={deck.id}
                                className="col-md-3 mb-4"
                                style={cardStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        hoverStyle.transform;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "";
                                }}
                            >
                                <div className="card">
                                    <div className="card-body bg-light">
                                        <h5 className="card-title">
                                            <a href="/">{deck.name}</a>
                                        </h5>
                                    </div>
                                    <p className="card-text">
                                        New Card: {deck.total_cards}
                                    </p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}

export default PublicDeck;

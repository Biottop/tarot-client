// client/src/components/CallKingPanel.jsx

export default function CallKingPanel({ onCallKing }) {
    const kings = [
        { suit: "SPADES", label: "Roi de Pique" },
        { suit: "CLUBS", label: "Roi de Trèfle" },
        { suit: "HEARTS", label: "Roi de Coeur" },
        { suit: "DIAMONDS", label: "Roi de Carreau" },
    ];

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    backgroundColor: "#222",
                    pdding: "20px 30px",
                    borderRadius: "8px",
                    color: "white",
                    minWidth: "300px",
                    textAlign: "center",
                }}
            >
                <h2> Appeler un Roi </h2>
                <p> Choisis le Roi que tu appelles </p>
                <div
                    style={{
                        marginTop: "15px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {kings.map((k) => (
                        <button
                            key = {k.suit}
                            onClick = { () => onCallKing(k.suit) }
                            style={{
                                padding: "8px 12px",
                                borderRadius: "4px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#444",
                                color: "white",
                            }}
                        >
                            {k.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
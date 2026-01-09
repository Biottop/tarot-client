// client/src/components/BiddingPanel.jsx
export default function BiddingPanel( { onBid } ) {
    const bids = [
        { key: "passe",        label: "Passe" },
        { key: "petite",       label: "Petite" },
        { key: "pousse",       label: "Pousse" },
        { key: "garde",        label: "Garde" },
        { key: "garde_sans",   label: "Garde Sans" },
        { key: "garde_contre", label: "Garde Contre" },
    ];

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroungColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 900,
            }}
        >
            <div
                style={{
                    backgroundColor: "#222",
                    padding: "20px 30px",
                    borderRadius: "8px",
                    color: "white",
                    minWidth: "320px",
                    textAlign: "center",
                }}
            >
                <h2> Choisir une enchère </h2>
                <p> Sélectionne ton contrat </p>
                <div
                    style={{
                        marginTop: "15px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {bids.map((b) => (
                        <button
                            key = {b.key}
                            onClick = {() => onBid(b.key)}
                            style = {{
                                padding: "8px 12px",
                                borderRadius: "4px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#444",
                                color: "white",
                                textTransform: "capitalize",
                            }}
                        >
                            {b.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
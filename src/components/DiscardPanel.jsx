// client/src/components/DiscardPanel.jsx

export default function DiscardPanel({ hand, discardCards, onToggleCard, onValidate }) {
    return (
        <div
            style = {{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 950,
            }}
        >
            <div
                style = {{
                    backgroundColor: "#222",
                    padding: "20px 30px",
                    borderRadius: "8px",
                    color: "white",
                    minWidth: "420px",
                    maxWidth: "600px",
                    textAlign: "center",
                }}
            >
                <h2> Faire l'écart </h2>
                <p> Sélectionne les cartes à mettre dans le chien </p>

                {/* Main du preneur */}
                <div
                    style = {{
                        marginTop: "20px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        justifyContent: "center",
                    }}
                >
                    {hand.map((card, index) => (
                        <button
                            key = {`${card.suit}-${card.value}-${index}`}
                            onClick = {() => onToggleCard({ ...card, _index: index})}
                            style = {{
                                padding: "6px 10px",
                                borderRadius: "4px",
                                border: discardCards.some(
                                    (c) => c.suit === card.suit && c.value === card.value
                                )
                                    ? "2px solid #4caf50"
                                    : "1px solid #555",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "12px",
                            }}
                        >
                            {card.suit} {card.value}
                        </button>
                    ))}
                </div>
                {/* Zone d'écart*/}
                <div
                    style = {{
                        marginTop: "25px",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px dashed #666",
                        minHeight: "60px",
                    }}
                >
                    <h3 style = {{ marginBottom: "10px" }}> Ecart </h3>
                    <div
                        style = {{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            justifyContent: "center",
                        }}
                    >
                        {discardCards.length === 0 && (
                            <span style = {{ color: "#aaa", fontSize: "12px" }}>
                                Aucune carte sélectionnée
                            </span>
                        )}
                        {discardCards.map((card, index) => (
                            <button
                                key = {`${card.suit}-${card.value}-discard-${index}`}
                                onClick = {() => onToggleCard(card)}
                                style = {{
                                    padding: "6px 10px",
                                    borderRadius: "4px",
                                    border: "1px solid #999",
                                    backgroundColor: "#555",
                                    color: "white",
                                    cursor: "pointer",
                                    fontSize: "12px",
                                }}
                            >
                                {card.suit} {card.value}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Bouton valider */}
                <button
                    onClick = {onValidate}
                    style = {{
                        marginTop: "25px",
                        padding: "10px 16px",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#4caf50",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Valider l'écart
                </button>
            </div>
        </div>
    );
}
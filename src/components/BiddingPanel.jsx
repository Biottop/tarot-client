// client/src/components/BiddingPanel.jsx
export default function BiddingPanel( { onBid } ) {
    const bids = ["passe", "petite", "pousse", "garde", "garde_sans", "garde_contre"]
    return (
        <div>
            {bids.map(bid => (
                <button
                    key = {bid}
                    onClick={() => onBid(bid)}
                >
                    {bid}
                </button>
            ))}
        </div>
    )
}
// client/src/components/Table.jsx
import Hand from "./Hand";
import OpponentHand from "./OpponentHand";
import { Dog } from "./Dog";
import BiddingPanel from "./BiddingPanel";

export default function Table({ players, myCards, phase, onBid, chienCards }) {
  const count = players.length;

  return (
    <div className="table">
      {(phase === "bidding" || phase === "chien_hidden") && (
        <BiddingPanel onBid={onBid} />
      )}

      {/* Zone centrale */}
      <div className="table-center">
        <Dog 
          revealed={phase === "chien_revealed"} 
          cards={chienCards} 
        />
      </div>

      {/* Ta main en bas */}
      <Hand cards={myCards} />

      {/* Adversaires */}
      {count === 3 && (
        <>
          <OpponentHand position="top-left" />
          <OpponentHand position="top-right" />
        </>
      )}

      {count === 4 && (
        <>
          <OpponentHand position="left" />
          <OpponentHand position="top" />
          <OpponentHand position="right" />
        </>
      )}

      {count === 5 && (
        <>
          <OpponentHand position="top-left" />
          <OpponentHand position="top-right" />
          <OpponentHand position="left" />
          <OpponentHand position="right" />
        </>
      )}
    </div>
  );
}

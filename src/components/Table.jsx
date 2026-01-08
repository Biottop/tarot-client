import Hand from "./Hand";
import OpponentHand from "./OpponentHand";
import { Dog } from "./Dog";
import BiddingPanel from "./BiddingPanel";

export default function Table({ players, myCards, phase, onBid }) {
  const count = players.length;

  return (
    <div className="table">
      {phase === "bidding" && (
        <BiddingPanel onBid={onBid} />
      )}

      {/* Zone centrale */}
      <div className="table-center">
        <Dog />
        {/* plus tard : <Trick /> pour le pli */}
      </div>

      {/* Ta main en bas, inchangée */}
      <Hand cards={myCards} />

      {/* Adversaires / avatars comme avant */}
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

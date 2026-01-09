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
        {phase === "chien_revealed" && (
          <Dog revealed={true} cards={chienCards} />
        )}
        {phase === "chien_hidden" && (
          <Dog revealed={false} />
        )}
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

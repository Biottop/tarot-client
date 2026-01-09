// client/src/App.jsx
import { useEffect, useState } from "react";
import { socket } from "./ws/socket";
import "./App.css";
import { sortHandSmart } from "./utils/sortHand";
import Table from "./components/Table";

export default function App() {
  const [hand, setHand] = useState([]);
  const [players, setPlayers] = useState([]);
  const [phase, setPhase] = useState("bidding");
  const [chienCards, setChienCards] = useState([]);
  const [discardCards, setDiscardCards] = useState([]);

  useEffect(() => {
    console.log("Connexion WebSocket…");

    socket.onopen = () => {
      console.log("WS connecté !");
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log("Message reçu :", msg);
      // Réception de la main
      if (msg.type === "hand") {
        console.log("Main reçue :", msg.cards);
        setHand(sortHandSmart(msg.cards));
      }
      // Réception de la liste des joueurs
      if (msg.type === "players") {
        console.log("Joueurs :", msg.players);
        setPlayers(msg.players);
      }
      // Gestion des enchères
      if (msg.status === "bidding_continue") {
        console.log("Enchère suivante :", msg.next_player);
      }
      if (msg.status === "bidding_finished") {
        console.log("Enchères terminées ! Preneur :", msg.preneur);
        // On fait le chien
        console.log("Enchères terminée, en attente du chien");
      }
      if (msg.type === "call_king") {
        console.log("Phase appel du roi !");
        setPhase("call_king");
      }
      if (msg.type === "chien_revealed") {
        console.log("Chien révélé :", msg.cards);
        setChienCards(msg.cards);
        setPhase("chien_revealed");
        // Après 5 secondes on passe à l'écart
        setTimeout(() => {
          console.log("Fin de la révélation du chien on passe à l'écart");
          // TODO: setPhase("discard");
          // TODO: informer le server de l'écart
        }, 5000);
      }
      if (msg.type === "start_discard") {
        console.log("Début de l'écart pour le preneur");
        setPhase("discard");
      }
      if (msg.type === "chien_hidden") {
        console.log("Chien caché :", msg.owner);
        setPhase("chien_hidden");
      }
    };

    socket.onerror = (err) => {
      console.error("WS erreur :", err);
    };

    socket.onclose = () => {
      console.log("WS fermé");
    };
  }, []);
  console.log("PLAYERS DANS APP :", players);

  function handleBid(bid) {
    socket.send(JSON.stringify({
      type: "bid",
      bid
    }));
  }

  function handleCallKing(suit) {
    socket.send(JSON.stringify({
      type: "call_king", 
      suit
    }));
  }

  function handleToggleDiscard(card) {
    setDiscardCards((prev) => {
      const idx = prev.findIndex(
        (c) => c.suit === card.suit && c.value === card.value
      );
      if (idx === 1) {
        return [...prev, card];
      } else {
        // retirer une carte
        const copy = [...prev];
        copy.splice(idx, 1);
        return copy;
      }
    });
  }

  function handleValidateDiscard() {
    console.log("Ecart validé :", discardCards);
    socket.send(JSON.stringify({
      type: "discard_done",
      cards: discardCards,
    }));
  }

  return (
    <div className = "app-root">
      <Table 
        players = {players}
        myCards = {hand}
        phase = {phase}
        onBid = {handleBid}
        chienCards = {chienCards}
        onCallKing = {handleCallKing}
        discardCards = {discardCards}
        onToggleDiscard = {handleToggleDiscard}
        onValidateDiscard = {handleValidateDiscard}
      />
      { hand.length === 0 && (
        <div style = {{ position: "fixed", top: 20, left: 20}}>
          <p> Aucune carte reçue </p>
        </div>
      )}
    </div>
  );
}
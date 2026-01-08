// client/src/ws/socket.js
export const socket = new WebSocket("wss://server-shy-sunset-7208.fly.dev/ws/P0");

let listeners = [];

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  listeners.forEach((fn) => fn(msg));
};

export function onMessage(fn) {
  listeners.push(fn);
}

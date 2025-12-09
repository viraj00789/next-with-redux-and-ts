export const connectWS = () => {
  const ws = new WebSocket("ws://localhost:4000");

  ws.onopen = () => {
    console.log("Connected to WS server");
  };

  ws.onmessage = (event) => {
    console.log("Message from WS:", event.data);

    const data = JSON.parse(event.data);
    window.dispatchEvent(new CustomEvent("ws-message", { detail: data }));
  };

  return ws;
};

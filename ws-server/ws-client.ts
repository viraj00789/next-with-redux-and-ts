let ws: WebSocket | null = null;

export const connectWS = () => {
  if (!ws) {
    ws = new WebSocket(
      (process.env.WEB_SOCKET_URL as string) || "ws://localhost:4000"
    );

    ws.onopen = () => {
      console.log("Connected to WS server");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      window.dispatchEvent(new CustomEvent("ws-message", { detail: data }));
    };
  }

  return ws;
};

export const getWS = () => ws;

export const disconnectWS = () => {
  if (ws) {
    ws.close();
    ws = null;
  }
};

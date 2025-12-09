import { WebSocket, WebSocketServer } from "ws";

interface WSMessage {
  type: string;
  payload?: any;
}

const wss = new WebSocketServer({ port: 4000 });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", (data: string | Buffer) => {
    let message: WSMessage;

    try {
      message = JSON.parse(data.toString());
    } catch (err) {
      console.error("Invalid WS message:", err);
      return;
    }

    // Broadcast the message to all connected clients
    wss.clients.forEach((client: WebSocket) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running at ws://localhost:4000");

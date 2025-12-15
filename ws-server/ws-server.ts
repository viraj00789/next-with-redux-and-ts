import { WebSocket, WebSocketServer } from "ws";
import "dotenv/config";
interface WSMessage {
  type: string;
  payload?: any;
}

const PORT = Number(process.env.PORT) || 8080;
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

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

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

setInterval(() => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "ping" }));
    }
  });
}, 30000);

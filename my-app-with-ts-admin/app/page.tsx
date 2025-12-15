"use client";

import { useEffect } from "react";
import AdminProductForm from "./(admin)/admin/page";
import { connectWS } from "@ws-server/ws-client";

export let ws: WebSocket | null = null;

export default function Page() {
  useEffect(() => {
    ws = connectWS();
  }, []);
  return (
    <AdminProductForm />
  )
}

export const listenWS = (callback: (data: any) => void) => {
  window.addEventListener("ws-message", (e: any) => {
    callback(e.detail);
  });
};

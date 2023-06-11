import fetch from "node-fetch";
import { closeMainWindow, showToast, Toast } from "@raycast/api";

export default async function main() {
  try {
    await closeMainWindow({ clearRootSearch: true });
    await fetch("http://localhost:10769/playPause");
  } catch (error) {
    console.error(error);
    showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: "Failed to connect to Cider",
    });
  }
}

import fetch from "node-fetch";
import { closeMainWindow, showToast, Toast } from "@raycast/api";

export default async function main() {
  try {
    await fetch("http://127.0.0.1:10769/play");
  } catch (error) {
    if ((error as Error).name === "FetchError") {
      showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: "Couldn't connect to Cider",
      });
    } else {
      showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: "An unknown error occurred",
      });
    }
    return;
  }
  await closeMainWindow({ clearRootSearch: true });
}

import fetch from "node-fetch";
import { closeMainWindow, showToast, Toast } from "@raycast/api";

export default async function main() {
  try {
    await fetch("http://localhost:10769/addToLibrary");
    await closeMainWindow({ clearRootSearch: true });
  } catch (error) {
    console.error(error);
    showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: "Failed to connect to Cider",
    });
  }
}
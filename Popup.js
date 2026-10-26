// CHANGE YOUR WEBSITE URL HERE
const MY_WEBSITE_URL = "https://www.google.com";

document.getElementById("btn").addEventListener("click", () => {
  chrome.tabs.create({ url: MY_WEBSITE_URL });
});

async function loadHeader() {
  const headerContainer = document.getElementById("site-header");

  if (!headerContainer) return;

  try {
    const response = await fetch("/header.html");

    if (!response.ok) {
      throw new Error("Header could not be loaded.");
    }

    headerContainer.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);

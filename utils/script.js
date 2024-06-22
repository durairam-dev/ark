async function readTextFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function generateParagraphs(text, id) {
  const paragraphs = text.split(/\n\s*\n/); // Split by empty lines
  const contentDiv = document.getElementById(id);

  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph.trim();
    contentDiv.appendChild(p);
  });
}

async function loadContent(filePath, id) {
  const text = await readTextFile(filePath);
  if (text) {
    generateParagraphs(text, id);
  }
}

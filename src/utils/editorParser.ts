export function parseEditorText(text: string) {
  const el = document.createElement("div");
  el.innerHTML = text;
  const textParagraphs = el.getElementsByTagName("p");
  const pArr = Array.from(textParagraphs);
  const filteredParagraphs = pArr.filter((el) => {
    return el.innerText !== "";
  });
  console.log(filteredParagraphs);
}

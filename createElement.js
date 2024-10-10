export function createElement(tagName, tagNameText, tagId) {
  const element = document.createElement(tagName);
  const elementText = tagNameText;
  element.append(elementText);

  element.setAttribute("id", tagId);
  return element;
}

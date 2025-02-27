document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll("p:not(.reading-time)");
  let articleText = "";

  paragraphs.forEach((p) => {
    articleText += " " + p.textContent;
  });

  // Calculate reading time
  const readingTime = calculateReadingTime(articleText);

  const readingTimeElement = document.querySelector(".header p");
  if (readingTimeElement) {
    readingTimeElement.textContent = readingTime;
  }
});

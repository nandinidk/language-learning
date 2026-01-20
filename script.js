function showLessons() {
  const language = document.getElementById("language").value;
  const lessonBox = document.getElementById("lessonBox");

  if (language === "") {
    lessonBox.innerHTML = "<p>Please select a language.</p>";
    return;
  }

  let content = "";

  if (language === "french") {
    content = `
      <div class="lesson">
        <h3>French Basics</h3>
        <p>Hello – Bonjour</p>
        <p>Thank You – Merci</p>
        <p>How are you? – Comment ça va?</p>
        <p>Good Morning – Bonjour</p>
      </div>
    `;
  }

  if (language === "hindi") {
    content = `
      <div class="lesson">
        <h3>Hindi Basics</h3>
        <p>Hello – Namaste</p>
        <p>Thank You – Dhanyavaad</p>
        <p>How are you? – Aap kaise ho?</p>
        <p>Good Morning – Suprabhat</p>
      </div>
    `;
  }

  if (language === "kannada") {
    content = `
      <div class="lesson">
        <h3>Kannada Basics</h3>
        <p>Hello – Namaskara</p>
        <p>Thank You – Dhanyavaadagalu</p>
        <p>How are you? – Neevu hegiddira?</p>
        <p>Good Morning – Shubhodaya</p>
      </div>
    `;
  }

  lessonBox.innerHTML = content;
}

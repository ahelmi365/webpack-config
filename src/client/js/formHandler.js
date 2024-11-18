function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ formText }),
  })
    .then((res) => res.json())
    .then(function (res) {
      const p = document.createElement("p");
      const resContent = `Title: ${res.title}\n Message: ${res.message}\nTime: ${res.time}\nformText:${res.formText}`;
      p.innerText = resContent;
      document.getElementById("results").appendChild(p);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
function checkValidation() {
  console.log("Checking form validation!");
}
function showErrorMessages() {
  console.log("showing error messages!");
}
export { handleSubmit, checkValidation, showErrorMessages };

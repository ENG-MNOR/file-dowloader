const fileInput = document.querySelector("input"),
  dowloadBtn = document.querySelector("button");
dowloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dowloadBtn.innerText = "dowloading...";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = "filename";

      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempUrl);
      dowloadBtn.innerText = "Dowload File";
    })
    .catch(() => {
      dowloadBtn.innerText = "Dowload File";
      alert("failed to dowload file!");
    });
}

document.getElementById("name").addEventListener("input", function () {
  document.getElementById("preview-name").textContent = this.value;
});
document.getElementById("position").addEventListener("input", function () {
  document.getElementById("preview-position").textContent = this.value;
});
document.getElementById("phone").addEventListener("input", function () {
  document.getElementById("preview-phone").textContent = this.value;
});
document.getElementById("email").addEventListener("input", function () {
  document.getElementById("preview-email").textContent = this.value;
});
document.getElementById("address").addEventListener("input", function () {
  document.getElementById("preview-address").textContent = this.value;
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const formSection = document.querySelector(".form-section");
  const formSectionLink = document.querySelector(".form-section-link");

  function handleTabClick(event) {
    const tab = event.target.closest(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");
    if (tab.textContent.trim() === "Chi Tiết") {
      formSection.classList.remove("hidden");
      formSection.classList.add("isActive");
      formSectionLink.classList.add("hidden");
      formSectionLink.classList.remove("isActive");
    } else if (tab.textContent.trim() === "Links") {
      formSection.classList.remove("isActive");
      formSection.classList.add("hidden");
      formSectionLink.classList.remove("hidden");
      formSectionLink.classList.add("isActive");
    } else {
      formSection.classList.remove("hidden");
      formSection.classList.add("isActive");
      formSectionLink.classList.remove("isActive");
      formSectionLink.classList.add("hidden");
    }
  }
  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTabClick);
  });
});
const copyButton = document.querySelector(".copy-signature");

function copySignature() {
  const name = document.querySelector("#preview-name").textContent;
  const position = document.querySelector("#preview-position").textContent;
  const phone = document
    .querySelector("#preview-phone")
    .textContent.replace(" Điện thoại", "");
  const email = document
    .querySelector("#preview-email")
    .textContent.replace(" Email", "");
  const address = document
    .querySelector("#preview-address")
    .textContent.replace(" Địa chỉ", "");
  const website = document
    .querySelector("#preview-website")
    .textContent.replace("WebSite", "");
  const signatureText = `Tên: ${name}\nChức danh: ${position}\nĐiện thoại: ${phone}\nEmail: ${email}\nĐịa chỉ: ${address} \nWebsite: ${website} \n`;
  navigator.clipboard.writeText(signatureText)
  .then(() => {
    alert('Chữ ký đã được sao chép!');
  })
  .catch(err => {
    console.error('Lỗi sao chép: ', err);
  });
}
copyButton.addEventListener("click", copySignature);

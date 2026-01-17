(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const status = document.getElementById("status");

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(() => {
      status.innerText = "Message sent successfully ✅";
      this.reset();
    })
    .catch(() => {
      status.innerText = "Failed to send message ❌";
    });
});

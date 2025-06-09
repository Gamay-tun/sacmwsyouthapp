
    const shoeSelect = document.querySelector('select[name="shoe_size"]');
    for (let i = 27; i <= 47; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i;
      shoeSelect.appendChild(opt);
    }

    const form = document.getElementById('teamForm');
    const statusMsg = document.getElementById('statusMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch('https://script.google.com/macros/s/AKfycbwzxF3i6y_tmLFRYFmuNfMy-1VMak-3G1vMZXicuUD3GcYmtVNAFB-k9_r9BFv6MQh_Rg/exec', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())  // ✅ expecting JSON back
      .then(data => {
          if (data.status === "success") {
            statusMsg.textContent = "✅ Submitted successfully!";
            statusMsg.className = "success";
            statusMsg.style.display = "block";  // ✅ SHOW the message
            form.reset();
          } else {
            throw new Error("Response did not indicate success.");
          }
        })
        .catch(error => {
          statusMsg.textContent = "❌ Error submitting form. Check console.";
          statusMsg.className = "error";
          statusMsg.style.display = "block";  // ✅ SHOW the error message
          console.error("Form submission error:", error);
        });

      });
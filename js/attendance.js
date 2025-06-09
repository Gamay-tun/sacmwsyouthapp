const form = document.getElementById('attendanceForm');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbwZT96L7ZkhEDqxxtli_L92R1zGhGtXonhywwA4AWSw_v-i9waGye9p8qEUst7aIr1c/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      statusMsg.textContent = "✅ Attendance marked!";
      statusMsg.className = "success";
      statusMsg.style.display = "block";
      form.reset();
    } else {
      throw new Error("Not successful");
    }
  })
  .catch(error => {
    statusMsg.textContent = "❌ Error marking attendance.";
    statusMsg.className = "error";
    statusMsg.style.display = "block";
    console.error(error);
  });
});

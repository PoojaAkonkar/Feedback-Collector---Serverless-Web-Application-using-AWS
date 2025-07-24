document.getElementById("feedback-form").addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = {
                email: document.getElementById("email").value,
                name: document.getElementById("name").value,
                message: document.getElementById("message").value
            };

            try {
                const response = await fetch("https://pqjbaeblm5.execute-api.us-east-1.amazonaws.com/prod", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("✅ Feedback sent successfully!");
                    document.getElementById("feedback-form").reset();
                } else {
                    const errorData = await response.text();
                    alert("❌ Error: " + errorData);
                }
            } catch (err) {
                alert("❌ Request failed: " + err.message);
                console.error(err);
            }
        });
const axios = require("axios");

const testWebhookPost = async () => {
  try {
    // Using your actual Instagram data structure
    const response = await axios.post(
      "http://localhost:3000/api/webhook/handleWebhook",
      {
        object: "instagram",
        entry: [
          {
            time: Date.now(),
            id: "17841469815201091", // Your actual Instagram account ID
            messaging: [
              {
                sender: {
                  id: "1005658191606064", // Your test sender ID
                },
                recipient: {
                  id: "17841469815201091", // Your Instagram account ID
                },
                timestamp: Date.now(),
                message: {
                  mid: "test_message_id",
                  text: "test", // Using the same test message from your sample data
                },
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("POST Response:", response.data);
  } catch (error: any) {
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
      console.error("Error Status:", error.response.status);
    } else {
      console.error("Error:", error.message);
    }
  }
};

// Run tests
const runTests = async () => {
  console.log("\nTesting POST (Message)...");
  await testWebhookPost();
};

runTests();

import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const getBotResponse = async (userMessage) => {
    // TODO Remove this key from code to .env file
    const lowercasedMessage = userMessage.toLowerCase();
    let botResponse = 'I am not sure how to respond to that.';

    await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.VITE_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant. You are knowledgable accross many fields. Please answer like you would explain to a 10 year old',
                },
                {
                    role: 'system2',
                    content: 'unless  it is a greeting dont respond with a greeting',
                },
                {
                    role: 'user',
                    content: lowercasedMessage,
                }

            ]

        })
    })
        .then(async (response) => {
            if (response.status === 200) return response.json()
            else throw Error('Error: ' + JSON.stringify(await response.json()))
        })
        .then((data) => {
            // console.log("data", data)
            botResponse = data.choices[0].message.content.trim();
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    return botResponse;
};

app.post('/webhook', async (req, res) => {
    console.log('Received request:', req.body);
    const userMessage = req.body.query;
    const botResponse = await getBotResponse(userMessage);
    console.log('Sending response:', botResponse);

    res.json({ response: botResponse });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

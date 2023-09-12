```javascript
import axios from 'axios';

export async function getChatResponse(message) {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 60,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No response from ChatGPT');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```
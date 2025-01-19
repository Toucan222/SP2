import axios from 'axios';

export async function fetchDeepseeks(query) {
  const apiKey = import.meta.env.VITE_DEEPSEEKS_API_KEY;
  
  if (!apiKey) {
    throw new Error('Deepseeks API key not found in environment variables');
  }

  try {
    const response = await axios.post('https://api.deepseeks.com/llm', {
      prompt: query
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Deepseeks API Error:', error);
    throw new Error('Failed to fetch response from Deepseeks');
  }
}

import { useState } from 'react';
import { fetchDeepseeks } from '../utils/deepseeksApi';

export default function LLMDemoTool() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await fetchDeepseeks(prompt);
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="llm-demo">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt..."
            className="prompt-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading || !prompt.trim()}
            className="submit-button"
          >
            {loading ? 'Asking...' : 'Ask LLM'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {response && (
        <div className="response-container">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}

      <style>{`
        .llm-demo {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem;
        }

        .input-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .prompt-input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
        }

        .submit-button {
          padding: 0.5rem 1rem;
          background: var(--pastel-primary);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-family: inherit;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          color: #e74c3c;
          margin: 1rem 0;
          padding: 0.5rem;
          background: #fde2e2;
          border-radius: 4px;
        }

        .response-container {
          margin-top: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .input-group {
            flex-direction: column;
          }
          
          .submit-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

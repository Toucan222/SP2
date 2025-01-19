import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { tools } from './tools'
import './styles/global.css'

function App() {
  const [activeToolId, setActiveToolId] = useState(null)

  const activeTool = tools.find(tool => tool.id === activeToolId)

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <div className="container">
          {!activeToolId ? (
            <div>
              <h1 className="welcome-text">Welcome to SocialPlug Labs!</h1>
              <div className="tools-grid">
                {tools.map(tool => (
                  <div
                    key={tool.id}
                    className="tool-card"
                    onClick={() => setActiveToolId(tool.id)}
                  >
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="tool-detail">
              <button
                className="back-button"
                onClick={() => setActiveToolId(null)}
              >
                ← Back to Tools
              </button>
              <h2>{activeTool.title}</h2>
              <activeTool.component />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#f8d7da', color: '#721c24', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Application Render Error (White Screen Prevented)</h2>
          <p>Please share this exact error message with the AI assistant:</p>
          <div style={{ marginTop: '20px', background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #f5c6cb' }}>
            <strong>{this.state.error && this.state.error.toString()}</strong>
            <pre style={{ marginTop: '10px', fontSize: '12px', overflowX: 'auto' }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

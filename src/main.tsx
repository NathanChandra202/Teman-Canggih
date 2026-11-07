import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('CRITICAL REACT ROOT ERROR:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#022438',
          color: '#FAF8F5',
          padding: '40px 24px',
          fontFamily: 'monospace',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(251,186,0,0.4)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <div style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>
              ⚠️ [TEMAN CANGGIH RUNTIME DIAGNOSTIC]
            </div>
            <div style={{ fontSize: '14px', marginBottom: '16px', color: '#ff6b6b' }}>
              {this.state.error?.toString()}
            </div>
            <pre style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '11px',
              overflowX: 'auto',
              color: '#d1d5db',
              lineHeight: '1.5'
            }}>
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#2563EB',
                color: '#022438',
                fontWeight: 'bold',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>
  );
} else {
  console.error('Failed to locate #root element in DOM');
}


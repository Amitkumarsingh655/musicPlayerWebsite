import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, 
  Heart, Repeat, Shuffle, Home as HomeIcon, Library, 
  Compass, Settings, FileText, Shield
} from 'lucide-react';

import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderContent = () => {
    if (currentPath === '/terms') return <TermsAndConditions />;
    if (currentPath === '/privacy') return <PrivacyPolicy />;
    return <Home />;
  };

  return (
    <>
      <div className="app-container">
        {/* Sidebar */}
        <div className="sidebar glass-panel">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Play size={32} fill="url(#gradient)" color="#8b5cf6" />
            <span>Antigravity</span>
          </div>

          <div className="nav-menu">
            <div className={`nav-item ${currentPath === '/' ? 'active' : ''}`} onClick={() => navigate('/')}>
              <HomeIcon size={20} />
              <span>Home</span>
            </div>
            <div className="nav-item">
              <Compass size={20} />
              <span>Discover</span>
            </div>
            <div className="nav-item">
              <Library size={20} />
              <span>Your Library</span>
            </div>
          </div>

          <div className="nav-menu" style={{ marginTop: 'auto' }}>
            <div className={`nav-item ${currentPath === '/terms' ? 'active' : ''}`} onClick={() => navigate('/terms')}>
              <FileText size={20} />
              <span>Terms</span>
            </div>
            <div className={`nav-item ${currentPath === '/privacy' ? 'active' : ''}`} onClick={() => navigate('/privacy')}>
              <Shield size={20} />
              <span>Privacy</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Player Bar */}
      <div className="player-bar glass-panel">
        <div className="now-playing">
          <div className="now-playing-img" style={{ width: '56px', height: '56px', borderRadius: '8px', background: 'linear-gradient(135deg, #f43f5e, #8b5cf6)' }}></div>
          <div>
            <h4 style={{ fontSize: '15px' }}>Midnight Synths</h4>
            <p style={{ fontSize: '13px' }}>The Midnight</p>
          </div>
          <button style={{ marginLeft: '16px' }}><Heart size={18} /></button>
        </div>

        <div className="player-controls">
          <div className="control-buttons">
            <button><Shuffle size={18} /></button>
            <button><SkipBack size={24} fill="currentColor" /></button>
            <button 
              className="primary" 
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />}
            </button>
            <button><SkipForward size={24} fill="currentColor" /></button>
            <button><Repeat size={18} /></button>
          </div>
          <div className="progress-container">
            <span>2:14</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span>4:32</span>
          </div>
        </div>

        <div className="volume-controls flex items-center justify-end" style={{ width: '30%', gap: '12px' }}>
          <button><Volume2 size={20} /></button>
          <div className="progress-bar" style={{ width: '100px' }}>
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

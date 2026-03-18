import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
      <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '8px', background: 'linear-gradient(to right, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Privacy Policy
        </h1>
        <p style={{ marginBottom: '32px' }}>Last updated: October 2026</p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>1. Data Collection</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            At Antigravity Music Player, we deeply value your privacy. We collect minimal personal data—such as your 
            email address, listening history, and playlist preferences—solely to improve your music discovery experience 
            and provide accurate "Trending Now" statistics.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>2. How We Use Your Data</h2>
          <ul style={{ lineHeight: '1.8', marginLeft: '24px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '8px' }}>To personalize your daily music recommendations.</li>
            <li style={{ marginBottom: '8px' }}>To maintain your saved libraries and heart-ed tracks across devices.</li>
            <li style={{ marginBottom: '8px' }}>To analyze platform usage trends anonymously for performance improvements.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>3. Data Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            All audio streams and user data are transferred using industry-standard TLS 1.3 encryption. We store user credentials 
            using high-salience hashing algorithms and ensure your private playlists remain entirely hidden from the public 
            unless you explicitly choose to share them.
          </p>
        </section>
        
        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>4. Contact Us</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            If you have any questions about this Privacy Policy or wish to request the deletion of your account data, 
            please contact our compliance team at privacy@antigravitymusic.test.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
      <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '8px', background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Terms and Conditions
        </h1>
        <p style={{ marginBottom: '32px' }}>Last updated: October 2026</p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>1. Introduction</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            Welcome to Antigravity Music Player. By accessing or using our premium music streaming service, you agree to 
            be bound by these Terms and Conditions. Please read them carefully to understand your rights and 
            responsibilities when navigating our platform.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>2. User Accounts</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            When you create an account with us, you must provide accurate, complete, and current information at all times. 
            Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account 
            on our Service. You are responsible for safeguarding the password that you use to access the Service.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>3. Licensing and Content</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            All audio content, album artwork, and metadata provided through Antigravity are fully licensed and strictly intended 
            for personal, non-commercial use. Any unauthorized broadcasting, ripping, distribution, or reproduction of the 
            materials found on this platform is strictly prohibited and subject to legal action.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>4. Termination</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any 
            reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which 
            by their nature should survive termination shall survive termination.
          </p>
        </section>
      </div>
    </div>
  );
}

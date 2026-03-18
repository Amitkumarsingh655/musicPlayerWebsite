import React from 'react';
import { Heart, Search } from 'lucide-react';

export default function Home() {
  const featuredAlbums = [
    { title: "Midnight Synths", artist: "The Midnight", coverClass: "cover-1" },
    { title: "Ocean Drive", artist: "Duke Dumont", coverClass: "cover-2" },
    { title: "Neon Nights", artist: "Kavinsky", coverClass: "cover-3" },
    { title: "Lost in Echoes", artist: "Odesza", coverClass: "cover-4" },
    { title: "Electric Horizon", artist: "Daft Punk", coverClass: "cover-5" },
  ];

  return (
    <>
      <div className="header">
        <div className="search-bar">
          <Search size={20} color="var(--text-muted)" />
          <input type="text" placeholder="Search for artists, songs, or podcasts..." />
        </div>
        
        <div className="user-profile flex items-center" style={{ gap: '16px' }}>
          <button><Heart size={20} /></button>
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #10b981, #3b82f6)',
              cursor: 'pointer'
            }} 
          />
        </div>
      </div>

      <h2>Trending Now</h2>
      <p style={{ marginBottom: '24px', marginTop: '4px' }}>The most played tracks right now</p>
      
      <div className="grid">
        {featuredAlbums.map((album, idx) => (
          <div className="album-card" key={idx}>
            <div className={`album-cover ${album.coverClass}`}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
            </div>
            <div className="album-info">
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '48px' }}>Your Heavy Rotation</h2>
      <p style={{ marginBottom: '24px', marginTop: '4px' }}>Music you can't get enough of</p>
      <div className="grid">
        {[...featuredAlbums].reverse().map((album, idx) => (
          <div className="album-card" key={`rot-${idx}`}>
            <div className={`album-cover ${album.coverClass}`} style={{ borderRadius: '50%' }}></div>
            <div className="album-info" style={{ textAlign: 'center' }}>
              <h3>{album.artist}</h3>
              <p>Artist</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

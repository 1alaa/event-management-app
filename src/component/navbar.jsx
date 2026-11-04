import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <h2 style={{ color: '#0f172a', fontSize: '22px', fontWeight: 'bold' }}>EventFlow</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
        <Link to="/events" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Events</Link>
        <Link to="/about" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>About</Link>
        <Link to="/contact" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
      </div>

      <div>
        <Link to="/events">
          <button style={{
            background: '#4f46e5',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)'
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}
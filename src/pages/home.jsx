import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '80vh', padding: '60px 20px' }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', color: '#0f172a', fontWeight: '800', lineHeight: '1.2' }}>
          Effortless Event Management. <br />
          <span style={{ color: '#4f46e5' }}>Flawless Execution.</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#64748b', marginTop: '20px', lineHeight: '1.5' }}>
          The all-in-one platform to plan, promote, and power events of any size. From registration to real-time analytics.
        </p>

        <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Link to="/events">
            <button style={{
              background: '#4f46e5',
              color: '#white',
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}>
              Explore Events
            </button>
          </Link>
          <Link to="/about">
            <button style={{
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Features Cards Section */}
      <div style={{ maxWidth: '1000px', margin: '80px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h3 style={{ color: '#0f172a', fontSize: '18px', marginBottom: '10px' }}>Smart Registration</h3>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Create custom forms, manage attendees, and secure your event bookings seamlessly.</p>
        </div>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h3 style={{ color: '#0f172a', fontSize: '18px', marginBottom: '10px' }}>Promotion Tools</h3>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Drive attendance with built-in marketing tools, email campaigns, and social sharing.</p>
        </div>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h3 style={{ color: '#0f172a', fontSize: '18px', marginBottom: '10px' }}>Real-Time Analytics</h3>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Track ticket sales, monitor live attendance, and gather valuable participant feedback.</p>
        </div>
      </div>
    </div>
  );
}
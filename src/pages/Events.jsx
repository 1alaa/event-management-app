import { Link } from 'react-router-dom';

export default function Events() {
  // قائمة الفعاليات التجريبية
  const eventsList = [
    { id: 1, title: 'Advanced Web Tech Conference', date: 'May 15, 2026', location: 'Amman, Jo', category: 'Conference' },
    { id: 2, title: 'ReactJS & Vite Masterclass', date: 'June 01, 2026', location: 'Online Webinar', category: 'Workshop' },
    { id: 3, title: 'UI/UX Design Systems Meetup', date: 'June 20, 2026', location: 'Dubai, UAE', category: 'Meetup' },
    { id: 4, title: 'Fullstack Developers Summit', date: 'July 10, 2026', location: 'Riyadh, KSA', category: 'Summit' },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '85vh', padding: '50px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* ترويسة الصفحة */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', color: '#0f172a', fontWeight: '800' }}>Explore Events</h1>
            <p style={{ color: '#64748b', fontSize: '16px', marginTop: '5px' }}>Discover upcoming tech conferences, workshops, and global meetups.</p>
          </div>
          <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '8px', color: '#475569', fontSize: '14px', fontWeight: '500' }}>
            Total Events: {eventsList.length}
          </div>
        </div>

        {/* شبكة البطاقات (Grid System) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px' }}>
          {eventsList.map(event => (
            <div key={event.id} style={{ 
              background: '#ffffff', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)', 
              padding: '25px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div>
                <span style={{ 
                  background: '#e0e7ff', 
                  color: '#4f46e5', 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>
                  {event.category}
                </span>
                <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{event.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '5px 0' }}>📅 {event.date}</p>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '5px 0 20px' }}>📍 {event.location}</p>
              </div>

              <Link to={`/events/${event.id}`} style={{ width: '100%', textDecoration: 'none' }}>
                <button style={{ 
                  width: '100%', 
                  background: '#4f46e5', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '10px', 
                  borderRadius: '8px', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  textAlign: 'center'
                }}>
                  View Details & Register
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
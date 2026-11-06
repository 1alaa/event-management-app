import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '85vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Hero Section مع تصميم بصري غير متماثل وعصري */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 24px 60px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        
        <div>
          {/* شارة توضيحية للإصدار */}
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#e0e7ff', 
            color: '#4f46e5', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: '13px', 
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#4f46e5', borderRadius: '50%' }}></span>
            Next-Gen Event Management Platform
          </div>

          <h1 style={{ 
            fontSize: '52px', 
            fontWeight: '800', 
            lineHeight: '1.1', 
            letterSpacing: '-1.5px',
            color: '#0f172a',
            marginBottom: '20px'
          }}>
            Manage events with <br />
            <span style={{ color: '#4f46e5' }}>absolute precision.</span>
          </h1>

          <p style={{ 
            fontSize: '17px', 
            color: '#475569', 
            lineHeight: '1.6', 
            marginBottom: '35px',
            maxWidth: '500px'
          }}>
            The modern ecosystem for planning, promoting, and executing academic conferences, tech workshops, and global meetups seamlessly.
          </p>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <Link to="/events">
              <button style={{
                background: '#4f46e5',
                color: '#ffffff',
                border: 'none',
                padding: '14px 26px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                transition: 'transform 0.2s'
              }}>
                Explore Events
              </button>
            </Link>

            <Link to="/about">
              <button style={{
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                padding: '14px 26px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* بطاقة عرض تفاعلية بارزة (Featured Spotlight Card) */}
        <div style={{ 
          background: '#ffffff', 
          padding: '35px', 
          borderRadius: '16px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontWeight: '600', textTransform: 'uppercase' }}>
              Spotlight
            </span>
            <span style={{ fontSize: '13px', color: '#64748b' }}>May 15, 2026</span>
          </div>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
            Advanced Web Tech Conference
          </h3>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', marginBottom: '25px' }}>
            Join industry leaders and fellow students exploring fullstack architectures, ReactJS design patterns, and modern tooling.
          </p>
          
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: '#4f46e5', fontWeight: '600' }}>📍 Amman, Jordan</span>
            <Link to="/events" style={{ fontSize: '13px', color: '#0f172a', fontWeight: '600', textDecoration: 'none' }}>
              View Registration →
            </Link>
          </div>
        </div>

      </div>

      {/* قسم الإحصائيات والميزات النظيفة */}
      <div style={{ borderTop: '1px solid #e2e8f0', background: '#ffffff', padding: '70px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>
              Engineered for seamless management.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', marginTop: '8px' }}>
              Designed to handle everything from user participation to real-time analytics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '20px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Frictionless Routing</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                Instant page transitions using React Router v6 with clean nested component architectures.
              </p>
            </div>

            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '20px', marginBottom: '12px' }}>🛡️</div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Dynamic States</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                Robust event registration handling built directly into state hooks with clear visual feedback.
              </p>
            </div>

            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '20px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>SaaS Standard UI</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                Meticulously crafted component tokens aligning with modern Figma design principles.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
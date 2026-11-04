import Navbar from "./component/navbar";
import Footer from "./component/footer";

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to Event Management System</h1>
        <p>The app is running successfully! Now we can add pages one by one.</p>
      </div>
      <Footer />
    </div>
  );
}
const ParcelPoint = () => {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">🚀 Parcel Point</h1>
      <p className="text-lg text-gray-700 text-center">
        A dynamic MERN stack platform for seamless parcel booking, delivery, and
        management.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">
          🔑 User Roles & Access Control
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>User:</strong> Book parcels, track deliveries, and manage
            personal orders.
          </li>
          <li>
            <strong>Delivery Men:</strong> View assigned deliveries, update
            statuses, and receive feedback.
          </li>
          <li>
            <strong>Admin:</strong> Manage users, assign delivery personnel, and
            track system performance.
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">📦 Parcel Booking</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Easy-to-use parcel booking system.</li>
          <li>Automatic cost calculation based on weight.</li>
          <li>Real-time status updates (Pending, On The Way, Delivered).</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">📊 Admin Dashboard</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comprehensive statistics with React Apex Charts.</li>
          <li>Manage parcels, users, and delivery personnel.</li>
          <li>Assign deliveries and track progress.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">🚚 Delivery Men Dashboard</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track assigned deliveries and update statuses.</li>
          <li>View and respond to user feedback.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">⚡ Additional Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time notifications using SweetAlert2 and React Toastify.</li>
          <li>Interactive home page with animations (AOS, Lottie-React).</li>
          <li>Location tracking with MapBox integration.</li>
          <li>Secure payments via Stripe with React Confetti feedback.</li>
          <li>Light/Dark mode toggle.</li>
          <li>Authentication with Firebase & JWT.</li>
          <li>Optimized data fetching with React Query.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">🛠️ Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Frontend:</strong> React, React Router, Axios, AOS,
            SweetAlert2, React Toastify, React Query, React CountUp.
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js.
          </li>
          <li>
            <strong>Database:</strong> MongoDB (Aggregation for statistics).
          </li>
          <li>
            <strong>Authentication:</strong> Firebase Authentication (Google
            Sign-In & Email/Password Login).
          </li>
          <li>
            <strong>Styling:</strong> Shadcn component library.
          </li>
          <li>
            <strong>Payment Gateway:</strong> Stripe.
          </li>
          <li>
            <strong>Maps & Geolocation:</strong> React MapGL.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ParcelPoint;

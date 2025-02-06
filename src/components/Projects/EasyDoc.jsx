import Technology from "./Technology";

const EasyDoc = () => {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold py-4">User Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Doctor Slot Booking:</strong> View available doctors and their
          time slots, and book appointments.
        </li>
        <li>
          <strong>Search and Filter:</strong> Search for doctors by name,
          specialization, or availability.
        </li>
        <li>
          <strong>Appointment History:</strong> View past and upcoming
          appointments in a structured interface.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold py-4">Admin Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Doctor Management:</strong> Add, update, or delete doctor
          details, including name, specialization, and contact information.
        </li>
        <li>
          <strong>Slot Management:</strong> Create, modify, or remove time slots
          for doctors to manage availability.
        </li>
        <li>
          <strong>Booking Management:</strong> View and track all user bookings
          in one dashboard for better oversight.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold py-4">Additional Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Dynamic Slot Display:</strong> Real-time updates on available
          slots as bookings are made.
        </li>
        <li>
          <strong>Responsive Design:</strong> Fully responsive interface for
          both desktop and mobile devices.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold py-4">Technology Stack</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Frontend:</strong> React.js for a dynamic and responsive user
          interface.
        </li>
        <li>
          <strong>Backend:</strong> Node.js and Express.js for efficient routing
          and business logic.
        </li>
        <li>
          <strong>Database:</strong> MongoDB for secure and scalable data
          storage.
        </li>
        <li>
          <strong>API Integration:</strong> RESTful APIs for seamless
          communication between frontend and backend.
        </li>
        <li>
          <strong>Authentication:</strong> Role-based user authentication (admin
          and user).
        </li>
      </ul>

      <h2 className="text-3xl font-semibold py-4">
        Potential Future Enhancements
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Payment Integration:</strong> Support for online payments to
          book and confirm appointments.
        </li>
        <li>
          <strong>Notification System:</strong> Email or SMS notifications to
          remind users of upcoming appointments.
        </li>
        <li>
          <strong>Ratings and Reviews:</strong> Allow users to rate and review
          doctors.
        </li>
        <li>
          <strong>Multi-Language Support:</strong> Make the platform accessible
          in multiple languages.
        </li>
        <li>
          <strong>Teleconsultation:</strong> Add features for video
          consultations.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold py-4">Benefits</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Simplifies Appointment Booking:</strong> Provides an intuitive
          interface for patients.
        </li>
        <li>
          <strong>Efficient Management:</strong> Enhances administrative
          workflows for healthcare providers.
        </li>
        <li>
          <strong>Time Optimization:</strong> Reduces wait times with organized
          scheduling.
        </li>
        <li>
          <strong>Scalable Solution:</strong> Suitable for clinics and hospitals
          of varying sizes.
        </li>
      </ul>
      <Technology />
    </div>
  );
};

export default EasyDoc;

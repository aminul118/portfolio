import React from "react";
import Technology from "./Technology";

const Foddie = () => {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <p className="text-3xl font-semibold py-4">Details About Foddie</p>
      <p>
        This Restaurant Management Website allows restaurant owners to manage
        their menu, streamline food ordering processes, and enhance customer
        satisfaction through efficient backend and interactive frontend
        technologies. Key aspects of the project include: Responsive Design:
        Fully responsive on mobile, tablet, and desktop devices. Secure
        Authentication: Firebase authentication and JWT token-based
        authorization. Interactive UI: User-friendly interfaces with seamless
        navigation. Data Security: Secure Firebase and MongoDB credentials with
        environment variables.
      </p>
      <div className="mt-4">
        <p>
          Dynamic Navigation: Navbar with conditional login/logout
          functionality.
        </p>
        <p>
          Search and Filter: Advanced search functionality on the All Foods
          page.
        </p>
        <p> Authentication: Email-password and Google login. </p>
        <p>Order Management: Manage user-specific orders with timestamps.</p>
        <p>Food Management: Add, edit, and delete food items.</p>
        <p>Gallery Section: Interactive image gallery with lightbox support.</p>
        <p>Pagination: Backend-driven pagination for better performance.</p>
        <p> Theme Toggle: Switch between light and dark themes.</p>

        <p> Error Handling: Proper alerts and error messages.</p>
      </div>
      <Technology />
    </div>
  );
};

export default Foddie;

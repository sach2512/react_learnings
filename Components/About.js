import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to Food Villa! Our application is designed to provide an engaging and seamless experience in discovering and exploring restaurants. Below, you’ll find a detailed overview of the technologies and features we've implemented to make Food Villa a standout app.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies and Features</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">React</h3>
            <p>We’ve used React to build a dynamic and responsive front-end. Our app leverages React's powerful features like components, hooks, and state management to deliver a smooth user experience.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">React Router</h3>
            <p>React Router DOM is used for routing in our application. It allows users to navigate between different views, such as the list of restaurants and the menu for each restaurant.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Fetch and useEffect</h3>
            <p>We use the Fetch API combined with the <code>useEffect</code> hook to retrieve restaurant data from our backend. This data is then displayed in our application, ensuring up-to-date information.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">useState</h3>
            <p>The <code>useState</code> hook is used to manage the search functionality, allowing users to filter restaurants by name and update the UI accordingly.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">useContext</h3>
            <p>We use the <code>useContext</code> hook to provide and consume user email information throughout the app, ensuring personalized user experiences.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Custom Hooks</h3>
            <p>Our custom hook <code>useOnlineStatus</code> checks the user's online or offline status, which helps in providing relevant information or handling connectivity issues.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Shimmer Effect</h3>
            <p>To enhance the user experience during data loading, we use a shimmer effect to give a placeholder while restaurant data is being fetched.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Lazy Loading</h3>
            <p>Components such as the MenuPage are lazy-loaded using React's <code>lazy</code> and <code>Suspense</code>, improving the initial load time of the application.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Class Components</h3>
            <p>While our app primarily uses functional components, we’ve also utilized a class-based component for displaying restaurant details in a card format.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Redux</h3>
            <p>We use Redux to manage the "add to cart" functionality. This helps in efficiently handling state changes related to the shopping cart across different components.</p>
          </li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>Thank you for visiting Food Villa. We hope you enjoy exploring the diverse restaurant options and features our app has to offer!</p>
      </footer>
    </div>
  );
};

export default AboutUs;

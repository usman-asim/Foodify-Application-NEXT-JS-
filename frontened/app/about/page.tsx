import { FC } from "react";
import Head from "next/head";

const About: FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Food Ordering App</title>
        <meta
          name="description"
          content="Learn more about our Food Ordering App and our mission to deliver quality food to your doorstep!"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to our Food Ordering App! We are passionate about providing
            a seamless and delightful food ordering experience. Whether you're
            craving comfort food, quick snacks, or a gourmet meal, we've got you
            covered.
          </p>
        </section>

        <section className="mt-12 flex flex-col md:flex-row  gap-12 justify-center">
          <div className="md:w-100">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              Our mission is simple: to bring delicious food to your door with
              the utmost convenience and speed. With the best local restaurants
              at your fingertips, we strive to provide a smooth and reliable
              service to all our users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h2>
            <ul className="mt-4 text-gray-600 space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5.5V10H7.5A3.5 3.5 0 114.9 8.8L10 9v3.5H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Fast and reliable delivery to your doorsteps</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5.5V10H7.5A3.5 3.5 0 114.9 8.8L10 9v3.5H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Wide range of local restaurants and cuisines</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5.5V10H7.5A3.5 3.5 0 114.9 8.8L10 9v3.5H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Real-time order tracking and notifications</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member 1"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-800">
                John Doe
              </h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Team Member 2"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Team Member 3"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-800">
                Mark Johnson
              </h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Food Ordering App. All rights reserved.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

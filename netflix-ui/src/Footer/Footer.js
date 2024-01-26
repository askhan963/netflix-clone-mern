import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/4 mb-10 lg:mb-0 mr-4">
          <h2 className="text-2xl font-bold mb-4">Netflix</h2>
          <p className="text-gray-400">
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          </p>
        </div>
        <div className="lg:w-1/4 mb-10 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">About Netflix</li>
            <li className="mb-2">Investor Relations</li>
            <li className="mb-2">Jobs</li>
            <li className="mb-2">Press Center</li>
          </ul>
        </div>
        <div className="lg:w-1/4 mb-10 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul>
            <li className="mb-2">Help Center</li>
            <li className="mb-2">Account</li>
            <li className="mb-2">Redeem Gift Cards</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
        <div className="lg:w-1/4 mb-10 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Legal & Privacy</h3>
          <ul>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">Privacy Statement</li>
            <li className="mb-2">Cookie Preferences</li>
            <li className="mb-2">Corporate Information</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 mt-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className="text-gray-400">Copyright © 2023 Netflix, Inc.</p>
          <ul className="flex mt-6 lg:mt-0">
            <li className="mr-8">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            </li>
            <li className="mr-8">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            </li>
            <li className="mr-8">
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowUDownRightBold } from 'react-icons/pi';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prevKey) => (prevKey === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !dropdownRefs.current[openDropdown]?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const menuItems = [
    {
      name: 'view',
      path: '/view',
      options: [
        'Presentation Mode (Ctrl + M)',
        'Participant Overlay On Scroll',
        'Read Only Presentation Mode',
      ],
    },
    {
      name: 'settings',
      path: '/settings',
      options: [
        'Alert for unsaved changes',
        'Autosave every 10 seconds',
        'Settings Option 3',
      ],
    },
    {
      name: 'donations',
      path: '/donations',
      options: ['Donations', 'Donations ', 'Donations '],
    },
    {
      name: 'help',
      path: '/help',
      options: [
        'Instructions (new window)',
        'Instructions',
        'Platforms & API',
        'Privacy Policy',
        'Terms of service',
        'Release Notes',
        'About',
      ],
    },
  ];

  return (
    <div className="h-16 bg-gray-100 w-full flex justify-between items-center px-4">
      <div className="flex space-x-10">
        <PiArrowUDownRightBold />
        <h1 className="text-gray-400">This is a title [Not saved]</h1>
      </div>
      <div className="flex space-x-10 relative">
        {menuItems.map((item, idx) => (
          <div key={item.name} className="relative" ref={(el) => (dropdownRefs.current[item.name] = el)}>
            <Link
              to={item.path}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={() => toggleDropdown(item.name)}
            >
              {item.name}
            </Link>
            {openDropdown === item.name && (
              <div className="absolute bg-white border border-gray-300 p-2 mt-2 right-0 z-10 w-[360px]">
                {item.options.map((option, index) => (
                  <div className="flex items-center space-x-2 mt-1" key={index}>
                    <input type="checkbox" id={`${item.name}-option${index + 1}`} />
                    <label htmlFor={`${item.name}-option${index + 1}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

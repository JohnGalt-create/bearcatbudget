import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaWallet, FaMedal } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { icon: <FaTachometerAlt />, path: '/', label: 'Dashboard' },
    { icon: <FaWallet />, path: '/budget', label: 'Budget' },
    { icon: <FaMedal />, path: '/gamification', label: 'Points' },
  ];

  return (
    <nav className="bg-bunyGreen text-white flex justify-around p-3 shadow-lg fixed bottom-0 w-full">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center text-sm ${
            location.pathname === item.path ? 'text-yellow-300' : 'text-white'
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

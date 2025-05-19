import React from 'react';

const CheckBox= ({ checked, onChange }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <span
      className={`
       md:-mt-15 mr-5 -mt-5 w-7 h-7 rounded-full border-2 border-black-500 flex items-center justify-center
        ${checked ? 'bg-green-600 border-white' : 'bg-transparent'}
        transition-colors duration-200
      `}
    >
      {checked && (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
  </label>
);

export default CheckBox;

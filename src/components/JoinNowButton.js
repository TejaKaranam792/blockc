// src/components/JoinNowButton.js

import React from 'react';

function JoinNowButton() {
  return (
    <a
      href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf"
      target="_blank"   // Opens the link in a new tab
      rel="noopener noreferrer"  // Security improvement
    >
      <button className="button-primary">
        Join Now
      </button>
    </a>
  );
}

export default JoinNowButton;

import React, { useState, useEffect } from 'react';

function Content() {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser('Matt');
  }, []);

  return (
    <div>
      <div style={userTitle}>{user}'s 4 Year Plan</div>
    </div>
  );
}

const userTitle = {
  fontWeight: 'bold',
  fontSize: 'xx-large',
  color: 'navy',
  marginLeft: '5rem',
  marginTop: '2rem',
};

export default Content;

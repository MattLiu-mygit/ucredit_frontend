import React, { useState, useEffect } from 'react';
import CourseBar from './CourseBar';

function Content() {
  const [userName, setUserName] = useState('');
  const [majorCredits, setMajorCredits] = useState(0);

  useEffect(() => {
    setUserName('Matt');
    setMajorCredits(127);
  }, []);

  return (
    <div>
      <div style={userTitle}>{userName}'s 4 Year Plan</div>
      <CourseBar
        majorCredits={majorCredits}
        maxCredits={127}
        currentCredits={64}
        section={'Total Credits'}
        mainColor={'red'}
        subColor={'pink'}
      />
      <CourseBar
        majorCredits={majorCredits}
        maxCredits={48}
        currentCredits={0}
        section={'Computer Science'}
        mainColor={'orange'}
        subColor={'yellow'}
      />
      <CourseBar
        majorCredits={majorCredits}
        maxCredits={24}
        currentCredits={12}
        section={'Computer Science'}
        mainColor={'orange'}
        subColor={'yellow'}
      />
    </div>
  );
}

const userTitle = {
  fontWeight: 'bold',
  fontSize: 'xx-large',
  color: 'navy',
  marginLeft: '5rem',
  marginTop: '2rem',
  marginBottom: '3rem',
};

export default Content;

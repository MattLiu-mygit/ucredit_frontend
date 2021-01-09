import React, { useState, useEffect } from 'react';

function MajorSelect() {
  const [selectedMajor, setSelectedMajor] = useState('Add a major! +');

  useEffect(() => {
    setSelectedMajor('Computer Science - Bachelors of Science');
  }, []);

  return (
    <div
      style={{
        width: '12rem',
        float: 'right',
        display: 'inline',
        marginTop: '0.75rem',
        marginRight: '5rem',
        backgroundColor: 'whitesmoke',
        textWrap: 'true',
        borderRadius: '0.5rem',
      }}
    >
      <div style={currentMajor}>
        <div style={{ width: '90%' }}>{selectedMajor}</div>
        <div style={triangle}>▼</div>
      </div>
    </div>
  );
}

const triangle = {
  color: 'grey',
  position: 'relative',
  bottom: '2rem',
  left: '9.75rem',
};

const currentMajor = {
  padding: '0.5rem',
  paddingTop: '0.25rem',
  width: '100%',
  height: '2.5rem',
};

export default MajorSelect;

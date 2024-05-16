import React, { useEffect } from 'react';

const Notification: React.FC = () => {
  useEffect(() => {
    console.log('Component đã được mount!');
  }, []); 

  return null; 
}

export default Notification;

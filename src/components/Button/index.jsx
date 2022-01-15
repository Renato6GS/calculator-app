import React from 'react';

import './styles.css';

export default function Button({ digit, className }) {
  return <button className={className}>{digit}</button>;
}

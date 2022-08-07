import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-switch-vertical'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}>
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='m3 8 4-4 4 4M7 4v9M13 16l4 4 4-4M17 10v10' />
  </svg>
);

export default SvgComponent;

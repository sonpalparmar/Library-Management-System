import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


const data = [
  {
    label: 'Title',
    to: '/'
  },
  
  {
    label: 'Author',
    to: '/author'
  },
  {
    label: 'Subject',
    to: '/subject'
  },
  {
    label: 'PublishYear',
    to: '/publishyear'
  }
];

const Navbar = () => {
  return (
               
    <div className='navbar'> 
        <ul className='navbar_menu'>
          {data.map((item, key) => (
            <li key={key} className='navbar_menu_item'>
              <Link className='navbar_menu_item_link' to={item.to}>
               {item.label}
              </Link>
            </li>
          ))}
          </ul>
        
        
      </div>
   
    
  );
};


export default Navbar;

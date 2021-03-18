//import useState hook to create menu collapse state
import React, { useState } from 'react';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

//import icons from react icons
import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiHome, FiLogOut, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import robinlogo from '../public/img/robinassistant-logo.png';
import { Link } from "react-router-dom";

//import sidebar css from react-pro-sidebar module and our custom css
import 'react-pro-sidebar/dist/css/styles.css';
import '../public/scss/Sidebar.scss';

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id='header'>
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader onClick={menuIconClick}>
            <div className='logotext'>
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? 'Robin' : 'Robin Assistant dashboard'}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape='square'>
              <MenuItem icon={<FiHome />}><Link to="/">Home</Link></MenuItem>
              <MenuItem active={true} icon={<FaList />}><Link to="/dashboard">Dashboard</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to="/dashboard">Tasks</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to="/create">Create</Link></MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape='square'>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;

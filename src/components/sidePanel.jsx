import React from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
import File1 from '../assets/file1.svg';
import zoomout1 from '../assets/zoomout1.svg';
import Icon from '../assets/icon.png';
import Export from '../assets/export.svg';
import Pple from '../assets/pple.svg';
import Zoomin from '../assets/zoomin.svg';


const SidePanel = () => {
  return (
    <div className="w-16 bg-gray-100 h-screen flex flex-col items-center py-4 space-y-4">
      <FaHome className="text-gray-600 cursor-pointer w-20 h-7" />
      {/* <FaUserFriends className="text-gray-600 cursor-pointer" /> */}
      <FaCog title='new diagram' className="text-gray-600 cursor-pointer" />
      <img src={Icon} title='open source text' alt="" className='w-10' />
      <img src={File1} title='save source text' alt="" className='w-6' />
      <img src={Export} title='export diagram' alt="" className='w-6' />
      <img src={Pple} title='add participant' alt="" className='w-6' />
      <img src={Zoomin} title='zoom in' alt="" className='w-6' />
      <img src={zoomout1} alt="" title='zoom out' className='w-6'/>

    </div>
  );
};

export default SidePanel;

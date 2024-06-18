
import React ,{useContext, useState} from 'react';
import "./Sidebar.css";
import { Context } from '../context/Context';

const Sidebar = () => {
    const[expand,setExpand]=useState(false);
    const{onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context);
    const loadPrompt=async(prompt)=>{
         setRecentPrompt(prompt)
         await onSent(prompt)
    }
  return (
    <div className='sidebar'>
        <div className='top'>
            <i onClick={()=>setExpand(prev=>!prev)}className="fa-solid fa-bars"></i>
            <div onClick={()=>newChat()}className='new-chat'>
            <i className="fa-solid fa-plus"></i>
                {expand?<p>New chat</p>:null}
            </div>
        </div>
        {expand?<div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item,index)=>{
                return(    
                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                    <i className="fa-regular fa-message"></i>
                        <p>{item.slice(0,20)}...</p>
                    </div>
                    )
            })}
        
        </div>:null}
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
            <i class="fa-regular fa-circle-question"></i>
                {expand?<p>Help</p>:null}
            </div>
            <div className='bottom-item recent-entry'>
            <i className="fa-solid fa-clock-rotate-left"></i>
                {expand?<p>Activity</p>:null}
            </div>
            <div className='bottom-item recent-entry'>
            <i class="fa-solid fa-gear"></i>
                {expand?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
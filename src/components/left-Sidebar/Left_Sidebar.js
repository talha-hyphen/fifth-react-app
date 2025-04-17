import React from 'react'
import './Left_Sidebar.css'
import SidebarCategories from '.././sidebarCategories/SidebarCategories'
import meta from '../.././assets/images/meta.png'
import friends from '../.././assets/images/friends.png'
import fb from '../.././assets/images/fb.png'
import memories from '../.././assets/images/memories.png'
import saved from '../.././assets/images/save.png'
import groups_bar_icon from '../.././assets/images/group_bar_icon.png'
import video from '../.././assets/images/video.png'
import marketplace from '../.././assets/images/marketplace.png'
import feeds from '../.././assets/images/feeds.png'
import event from '../.././assets/images/event.png'
const leftBarData = [
  {
    icon: meta, title: 'Meta Al'
  }, {
    icon: friends, title: 'Friends'
  }, {
    icon: fb, title: 'Welcome'
  }, {
    icon: memories, title: 'Memories'
  }, {
    icon: saved, title: 'Saved'
  }, {
    icon: groups_bar_icon, title: 'Groups'
  }, {
    icon: video, title: 'Watch'
  }, {
    icon: marketplace, title: 'Marketplace'
  }, {
    icon: feeds, title: 'Feeds'
  }, {
    icon: event, title: 'Events'
  }
]
export default function Left_Sidebar() {
  return (
    <div className='left_sidebar'>
      {leftBarData.map((item, index) => {
        return (
          <SidebarCategories key={index} 
            icon={item.icon} title={item.title} />
        )
      })}
    </div>
  )
}

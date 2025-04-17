import React from 'react'
import './SidebarCategories.css'
export default function SidebarCategories(props) {
  return (
    <div >
      <table className='SidebarCategories'>
        <tr>
          <td>  <img src={props.icon} alt="logo"  />
          </td>
        </tr>
        <tr>
          <td>  <span>{props.title}</span>
          </td>
        </tr>
  </table>
    </div>
  )
}

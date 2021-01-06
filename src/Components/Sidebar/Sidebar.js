import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import './Sidebar.css'
import { useDataLayerValue } from '../../DataLayer'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"/>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <SidebarOption title="Metal" />
            <SidebarOption title="Rock" />
            <SidebarOption title="Country" />
        </div>
    )
}

export default Sidebar

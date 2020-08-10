import React from 'react';
import { inject, observer } from 'mobx-react';

const SidebarMenu = inject('helpers')(observer((props) => {
    const links = props.helpers.populateSideBar().map(link => {
        return link;
    });
    return (<>
        <div className="sidebar-menu">
            <div className="sidebar-menu-inner">
                <div className="sidebar-menu-text">
                    <ul>
                        {links}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}));

export default SidebarMenu;





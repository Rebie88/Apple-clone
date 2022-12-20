import React from 'react';
import {Link} from 'react-router-dom'

function HeaderLink({ linkUrl, linkName }){
  return (
   <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={linkUrl}>{linkName}</Link>
      </li>
  );
}

export default HeaderLink;

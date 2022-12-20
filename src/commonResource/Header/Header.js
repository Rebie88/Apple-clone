import React from 'react';
import logo from '../images/icons/logo-sm.png'
import search from '../images/icons/search-icon-sm.png'
import cart from '../images/icons/cart-sm.png'
import HeaderLink from './HeaderLink';


const Header = () => {
  return (
    <>
      <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="/"><img src={logo}/></a>

			    <div className="navbar-collapse collapse">
			    <ul className="navbar-nav nav-justified w-100 nav-fill">
						     <HeaderLink linkUrl="/mac/" linkName="Mac" />
                  <HeaderLink linkUrl="/iphone/" linkName="iphone" />
                  <HeaderLink linkUrl="/ipad/" linkName="ipad" />
                  <HeaderLink linkUrl="/watch/" linkName="watch" />
                  <HeaderLink linkUrl="/tv/" linkName="tv" />
                  <HeaderLink linkUrl="/Music/" linkName="Music" />
								<HeaderLink linkUrl="/Support/" linkName="Support" />
								
									<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} alt=""/></a></li>
									<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} alt=""/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    </>
  );
}

export default Header;

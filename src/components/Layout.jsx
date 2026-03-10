import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import StaticSection from './StaticSection.jsx';

const sectionLinks = [
  { label: 'About', href: '#about' },
  { label: 'How', href: '#how' },
  { label: 'Events', href: '#events' },
  { label: 'FAQ', href: '#faq' }
];

function ScrollManager() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      const scrollToTarget = () => {
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      window.requestAnimationFrame(scrollToTarget);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return null;
}

function Layout() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <ScrollManager />
      <nav>
        <div className="nav-inner container" style={{ padding: 0 }}>
          <Link className="nav-logo" to="/">
            <span className="nav-logo-dot" />
            TINY SOCIAL
          </Link>
          <ul className="nav-links">
            {sectionLinks.map((item) => (
              <li key={item.href}>
                <a href={`${baseUrl}${item.href}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/board">Board</NavLink>
            </li>
          </ul>
          <a className="nav-cta" href={`${baseUrl}#events`}>
            Join Event →
          </a>
        </div>
      </nav>
      <main className="page-shell">
        <Outlet />
      </main>
      <StaticSection src="footer.html" />
    </>
  );
}

export default Layout;

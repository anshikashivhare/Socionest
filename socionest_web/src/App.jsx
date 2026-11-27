import { useMemo, useState } from 'react';
import {
  Activity, Bell, Building2, CalendarDays, CheckCircle2, ChevronDown,
  ChevronRight, CircleHelp, ClipboardList, CreditCard, Home, LayoutDashboard,
  LogOut, Menu, MessageSquare, Search, Settings, ShieldCheck, Users,
  Wrench, X, Plus, Clock3, AlertTriangle, BriefcaseBusiness, UserRound
} from 'lucide-react';

const roleConfig = {
  Resident: {
    subtitle: 'Your community, all in one place.',
    nav: ['Overview', 'My Services', 'Bills & Payments', 'Facilities', 'Announcements'],
    stats: [['Open requests', '02', '2 awaiting attention'], ['Maintenance due', '₹2,500', 'Due 30 Nov'], ['Upcoming bookings', '01', 'Community Hall']],
    actions: [['Request a service', 'Book a verified society professional', Wrench], ['Pay maintenance', 'View and manage your dues', CreditCard], ['Book a facility', 'Reserve shared spaces', CalendarDays]]
  },
  Worker: {
    subtitle: 'Stay on top of your work and availability.',
    nav: ['Overview', 'My Jobs', 'Availability', 'My Reviews'],
    stats: [['Assigned jobs', '03', '1 scheduled today'], ['Completed this month', '18', 'Great work so far'], ['Average rating', '4.8 ★', 'From resident reviews']],
    actions: [['View assigned jobs', 'Check tasks and schedules', ClipboardList], ['Update availability', 'Manage your working hours', Clock3], ['View reviews', 'See resident feedback', MessageSquare]]
  },
  Security: {
    subtitle: 'A safer, smoother gate experience.',
    nav: ['Overview', 'Visitor Entry', 'Visitor Logs', 'Alerts'],
    stats: [['Visitors today', '24', 'Across all entry gates'], ['Pending approvals', '03', 'Require resident response'], ['Active alerts', '01', 'Review alert details']],
    actions: [['Add visitor entry', 'Record an incoming visitor', UserRound], ['View visitor logs', 'Search recent gate activity', ClipboardList], ['Review alerts', 'Check society notifications', AlertTriangle]]
  },
  Admin: {
    subtitle: 'A clear view of your society operations.',
    nav: ['Overview', 'Residents & Staff', 'Workers', 'Service Requests', 'Billing', 'Reports'],
    stats: [['Active residents', '248', 'Across 4 buildings'], ['Open service requests', '12', '4 need assignment'], ['Pending payments', '₹38,500', 'Across 16 flats']],
    actions: [['Manage people', 'Residents, staff and access', Users], ['Verify workers', 'Review documents and profiles', ShieldCheck], ['Manage requests', 'Assign and track service jobs', ClipboardList]]
  }
};

const activities = [
  { icon: Wrench, title: 'Plumbing request submitted', detail: 'Flat B-204 · 10 minutes ago', status: 'Open' },
  { icon: CreditCard, title: 'Maintenance payment received', detail: 'Flat A-103 · 35 minutes ago', status: 'Completed' },
  { icon: UserRound, title: 'Visitor checked in', detail: 'Main Gate · 1 hour ago', status: 'Recorded' },
  { icon: CalendarDays, title: 'Clubhouse booking confirmed', detail: 'Flat C-302 · 2 hours ago', status: 'Confirmed' }
];

export default function App() {
  const [role, setRole] = useState('Resident');
  const [active, setActive] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [query, setQuery] = useState('');
  const config = roleConfig[role];

  const filteredActivities = useMemo(() => activities.filter(item =>
    (item.title + item.detail + item.status).toLowerCase().includes(query.toLowerCase())
  ), [query]);

  function selectRole(nextRole) {
    setRole(nextRole);
    setActive('Overview');
    setMobileOpen(false);
  }

  function showNotice(message) {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2800);
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark"><Building2 size={22} /></div>
          <div><div className="brand-name">SocioNest</div><div className="brand-caption">COMMUNITY, CONNECTED</div></div>
          <button className="icon-btn close-sidebar" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={19}/></button>
        </div>
        <div className="society-switch"><div className="society-avatar">MR</div><div className="society-copy"><strong>Maple Residency</strong><span>Society workspace</span></div><ChevronDown size={16}/></div>
        <div className="side-label">WORKSPACE</div>
        <nav className="side-nav">
          {config.nav.map((item, index) => {
            const Icon = [LayoutDashboard, Wrench, CreditCard, CalendarDays, MessageSquare, Activity][index % 6];
            return <button key={item} className={`nav-item ${active === item ? 'nav-active' : ''}`} onClick={() => {setActive(item);setMobileOpen(false);}}>
              <Icon size={18}/><span>{item}</span>{item === 'Service Requests' && <span className="nav-count">4</span>}
            </button>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><CircleHelp size={18}/></div><strong>Need a hand?</strong><p>Find help with using SocioNest.</p><button onClick={() => showNotice('Help centre will be available soon.')}>Visit help centre <ChevronRight size={14}/></button></div>
          <button className="nav-item" onClick={() => showNotice('Settings are part of the next milestone.')}><Settings size={18}/>Settings</button>
          <div className="profile-row"><div className="profile-avatar">AS</div><div className="profile-copy"><strong>Anshika Shivhare</strong><span>{role} account</span></div><button className="icon-btn" onClick={() => showNotice('Demo profile menu')} aria-label="Profile menu"><ChevronDown size={17}/></button></div>
        </div>
      </aside>

      {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation"/>}

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left"><button className="icon-btn menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu/></button><div className="breadcrumb">Workspace <ChevronRight size={14}/> <strong>{active}</strong></div></div>
          <div className="topbar-right">
            <label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search activity..." /></label>
            <button className="icon-btn notification-btn" onClick={() => showNotice('You are all caught up!')} aria-label="Notifications"><Bell size={19}/><i/></button>
            <div className="top-avatar">AS</div>
          </div>
        </header>

        <div className="page-content">
          <div className="welcome-line"><div><div className="eyebrow">THURSDAY, 27 NOVEMBER 2026</div><h1>{active === 'Overview' ? 'Good evening, Anshika' : active}</h1><p>{config.subtitle}</p></div>
            <div className="role-picker"><span>Viewing as</span><select value={role} onChange={e=>selectRole(e.target.value)} aria-label="Select role"><option>Resident</option><option>Worker</option><option>Security</option><option>Admin</option></select></div>
          </div>

          {active === 'Overview' ? <>
            <section className="hero-card"><div className="hero-content"><div className="hero-pill"><span/> YOUR SOCIETY AT A GLANCE</div><h2>Better living starts<br/>with a connected community.</h2><p>Manage everyday tasks, stay informed and get things done — all from one place.</p><button className="hero-button" onClick={() => showNotice('Welcome to your SocioNest demo workspace!')}>Explore your workspace <ChevronRight size={16}/></button></div><div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-building"><div className="building-roof"/><div className="building-body"><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/><span/></div></div><div className="art-plant plant-one">✦</div><div className="art-plant plant-two">✦</div></div></section>

            <div className="section-heading"><div><h2>Your overview</h2><p>Here’s what’s happening in your society today.</p></div><button className="text-button" onClick={() => showNotice('Showing the latest demo statistics.')}>Last 30 days <ChevronDown size={15}/></button></div>
            <section className="stats-grid">{config.stats.map(([label,value,note],i)=><article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><span className={`stat-icon stat-icon-${i}`}>{[<Activity size={18}/>,<CreditCard size={18}/>,<CalendarDays size={18}/>][i]}</span></div><strong>{value}</strong><small><span className="tiny-dot"/> {note}</small></article>)}</section>

            <div className="section-heading activity-heading"><div><h2>Quick actions</h2><p>Common tasks, just a click away.</p></div><span className="muted-label">BASED ON YOUR ROLE</span></div>
            <section className="actions-grid">{config.actions.map(([title,description,Icon])=><button className="action-card" key={title} onClick={() => showNotice(title + ' — this demo interaction is ready for feature implementation.')}><span className="action-icon"><Icon size={20}/></span><span className="action-copy"><strong>{title}</strong><small>{description}</small></span><ChevronRight className="action-arrow" size={18}/></button>)}</section>

            <section className="activity-panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Latest updates from your community.</p></div><button className="text-button" onClick={() => showNotice('You are viewing all available demo activity.')}>View all <ChevronRight size={15}/></button></div><div className="activity-list">{filteredActivities.map(({icon:Icon,title,detail,status})=><div className="activity-row" key={title}><div className="activity-icon"><Icon size={17}/></div><div className="activity-copy"><strong>{title}</strong><span>{detail}</span></div><span className={`status status-${status.toLowerCase()}`}>{status}</span><ChevronRight className="row-chevron" size={16}/></div>)}{filteredActivities.length===0 && <div className="empty-state">No activity matches “{query}”.</div>}</div></section>
          </> : <section className="placeholder-panel"><div className="placeholder-icon"><ClipboardList size={28}/></div><h2>{active}</h2><p>This section is part of the SocioNest web prototype. Its role-specific workflows will be implemented next.</p><button className="primary-button" onClick={() => setActive('Overview')}>Back to overview</button></section>}

          <footer className="footer"><span>© 2026 SocioNest. Made for better communities.</span><span><span className="online-dot"/> Demo environment · Sample data</span></footer>
        </div>
      </main>
      {notice && <div className="toast"><CheckCircle2 size={18}/>{notice}<button onClick={()=>setNotice('')} aria-label="Dismiss"><X size={15}/></button></div>}
    </div>
  );
}
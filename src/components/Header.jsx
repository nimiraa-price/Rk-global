import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import logoUrl from '../assets/brand/logo.png';
import footerLogoUrl from '../assets/brand/footer-logo.svg';
import citizenshipPrograms, { defaultCitizenshipSlug } from '../data/citizenshipPrograms';
import residencePrograms, { defaultResidenceSlug } from '../data/residencePrograms';
import businessMigrationPrograms, { defaultBusinessMigrationSlug } from '../data/businessMigrationPrograms';
import digitalNomadPrograms, { defaultDigitalNomadSlug } from '../data/digitalNomadPrograms';

const Header = () => {
  const headerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const citizenshipCloseTimerRef = useRef(null);
  const residenceCloseTimerRef = useRef(null);
  const businessCloseTimerRef = useRef(null);
  const digitalCloseTimerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [citizenshipMenuOpen, setCitizenshipMenuOpen] = useState(false);
  const [residenceMenuOpen, setResidenceMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [digitalMenuOpen, setDigitalMenuOpen] = useState(false);
  const location = useLocation();
  const isCitizenshipRoute = location.pathname.startsWith('/citizenship');
  const isResidenceRoute = location.pathname.startsWith('/residence');
  const isBusinessRoute = location.pathname.startsWith('/business-migration');
  const isDigitalRoute = location.pathname.startsWith('/digital-nomad');
  const isTransparentPage =
    location.pathname === '/' ||
    isCitizenshipRoute ||
    isResidenceRoute ||
    isBusinessRoute ||
    isDigitalRoute;


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;

      document.documentElement.style.setProperty(
        '--site-header-height',
        `${headerRef.current.offsetHeight}px`
      );
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [isScrolled, menuOpen, location.pathname]);

  // Close menu on route change / outside scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    clearCloseTimer(citizenshipCloseTimerRef);
    clearCloseTimer(residenceCloseTimerRef);
    clearCloseTimer(businessCloseTimerRef);
    clearCloseTimer(digitalCloseTimerRef);
    setCitizenshipMenuOpen(false);
    setResidenceMenuOpen(false);
    setBusinessMenuOpen(false);
    setDigitalMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      clearCloseTimer(citizenshipCloseTimerRef);
      clearCloseTimer(residenceCloseTimerRef);
      clearCloseTimer(businessCloseTimerRef);
      clearCloseTimer(digitalCloseTimerRef);
    };
  }, []);

  const shouldShowBg = isScrolled || menuOpen || !isTransparentPage;
  const headerBgClass = shouldShowBg ? 'bg-white/95 shadow-md backdrop-blur-lg' : 'bg-transparent';
  const textColorClass = shouldShowBg ? 'text-gray-900' : 'text-white';
  const currentLogo = shouldShowBg ? footerLogoUrl : logoUrl;
  const logoSizeClass = shouldShowBg
    ? 'w-[110px] sm:w-[135px] md:w-[155px]'
    : 'w-[120px] sm:w-[150px] md:w-[175px]';
  const hamburgerColor = shouldShowBg ? '#111' : '#fff';
  // Always visible header
  const headerTop = '0px';
  const citizenshipBasePath = `/citizenship/${defaultCitizenshipSlug}`;
  const residenceBasePath = `/residence/${defaultResidenceSlug}`;
  const businessBasePath = `/business-migration/${defaultBusinessMigrationSlug}`;
  const digitalNomadBasePath = `/digital-nomad/${defaultDigitalNomadSlug}`;
  const businessGroupOrder = {
    canada: 0,
    uk: 1,
    usa: 2,
    portugal: 3,
    france: 4,
  };
  const businessProgramOrder = {
    'canada-start-up-visa': 0,
    'canada-ict-visa': 1,
    'uk-innovator-founder-visa': 0,
    'uk-expansion-worker-visa': 1,
    'usa-e2-investor-visa': 0,
    'usa-eb5-investor-visa': 1,
    'portugal-d2-entrepreneur-visa': 0,
    'portugal-d7-passive-income-visa': 1,
    'france-talent-passport': 0,
  };
  const getBusinessCountryKey = (program) => {
    if (program.slug.startsWith('canada')) return 'canada';
    if (program.slug.startsWith('uk')) return 'uk';
    if (program.slug.startsWith('usa')) return 'usa';
    if (program.slug.startsWith('portugal')) return 'portugal';
    if (program.slug.startsWith('france')) return 'france';
    return 'zzz';
  };
  const businessMenuPrograms = [...businessMigrationPrograms].sort((a, b) => {
    const countryOrderA = businessGroupOrder[getBusinessCountryKey(a)] ?? 99;
    const countryOrderB = businessGroupOrder[getBusinessCountryKey(b)] ?? 99;

    if (countryOrderA !== countryOrderB) {
      return countryOrderA - countryOrderB;
    }

    const programOrderA = businessProgramOrder[a.slug] ?? 99;
    const programOrderB = businessProgramOrder[b.slug] ?? 99;

    if (programOrderA !== programOrderB) {
      return programOrderA - programOrderB;
    }

    return a.menuLabel.localeCompare(b.menuLabel);
  });
  const navLinks = [
    { to: '/', label: 'HOME', end: true },
    { type: 'citizenship' },
    { type: 'residence' },
    { type: 'business' },
    { type: 'digitalNomad' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  const renderMegaMenuLink = (program, basePath) => (
    <NavLink
      key={program.slug}
      to={`${basePath}/${program.slug}`}
      className={({ isActive }) =>
        `relative flex items-center gap-3 rounded-2xl border px-3 py-3 text-xs tracking-[0.08em] transition-all ${isActive
          ? 'border-[#002668] bg-[#002668] text-white shadow-lg'
          : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50'
        }`
      }
    >
      <img
        src={program.flag}
        alt={`${program.name} flag`}
        className="h-14 w-20 rounded-lg object-cover border border-gray-200 bg-gray-100 shrink-0 md:h-16 md:w-24"
      />
      <div className="flex flex-col gap-1">
        <span className="leading-tight">{program.menuLabel}</span>
        {program.suspended && (
          <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[9px] font-bold text-white uppercase tracking-[0.06em] shadow-sm shadow-red-500/30 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90 shrink-0" />
            Temporarily Suspended
          </span>
        )}
      </div>
    </NavLink>
  );

  const clearCloseTimer = (timerRef) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openCitizenshipMenu = () => {
    clearCloseTimer(citizenshipCloseTimerRef);
    setCitizenshipMenuOpen(true);
  };

  const openResidenceMenu = () => {
    clearCloseTimer(residenceCloseTimerRef);
    setResidenceMenuOpen(true);
  };

  const openBusinessMenu = () => {
    clearCloseTimer(businessCloseTimerRef);
    setBusinessMenuOpen(true);
  };

  const openDigitalMenu = () => {
    clearCloseTimer(digitalCloseTimerRef);
    setDigitalMenuOpen(true);
  };

  const closeCitizenshipMenuWithDelay = () => {
    clearCloseTimer(citizenshipCloseTimerRef);
    citizenshipCloseTimerRef.current = setTimeout(() => {
      setCitizenshipMenuOpen(false);
    }, 180);
  };

  const closeResidenceMenuWithDelay = () => {
    clearCloseTimer(residenceCloseTimerRef);
    residenceCloseTimerRef.current = setTimeout(() => {
      setResidenceMenuOpen(false);
    }, 180);
  };

  const closeBusinessMenuWithDelay = () => {
    clearCloseTimer(businessCloseTimerRef);
    businessCloseTimerRef.current = setTimeout(() => {
      setBusinessMenuOpen(false);
    }, 180);
  };

  const closeDigitalMenuWithDelay = () => {
    clearCloseTimer(digitalCloseTimerRef);
    digitalCloseTimerRef.current = setTimeout(() => {
      setDigitalMenuOpen(false);
    }, 180);
  };

  return (
    <header
      ref={headerRef}
      style={{ top: headerTop }}
      className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'p-1 md:p-0' : 'p-[10px]'} ${headerBgClass}`}
    >
      <div className={`max-w-[1400px] mx-auto w-full px-6 md:px-10 transition-all duration-300 ${isScrolled ? 'py-1 md:py-0' : 'py-[10px]'}`}>
        <div className="flex items-center justify-between  py-2 pointer-events-auto">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group" onClick={() => setMenuOpen(false)}>
            <img
              src={currentLogo}
              alt="RK Global Immigration Logo"
              className={`${logoSizeClass} z-[9999] h-auto object-contain transition-all duration-300`}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-5 text-[0.75rem] font-semibold tracking-[0.15em] ${textColorClass}`}>
            {navLinks.map((item) => {
              if (item.type === 'citizenship') {
                return (
                  <div
                    key="citizenship"
                    className="relative"
                    onMouseEnter={openCitizenshipMenu}
                    onMouseLeave={closeCitizenshipMenuWithDelay}
                  >
                    <NavLink
                      to={citizenshipBasePath}
                      className={`transition-all hover:opacity-70 ${isCitizenshipRoute ? 'border-b border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        CITIZENSHIP
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${citizenshipMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openCitizenshipMenu}
                      onMouseLeave={closeCitizenshipMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${citizenshipMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                        }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {citizenshipPrograms.map((program) => renderMegaMenuLink(program, '/citizenship'))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.type === 'residence') {
                return (
                  <div
                    key="residence"
                    className="relative"
                    onMouseEnter={openResidenceMenu}
                    onMouseLeave={closeResidenceMenuWithDelay}
                  >
                    <NavLink
                      to={residenceBasePath}
                      className={`transition-all hover:opacity-70 ${isResidenceRoute ? 'border-b border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        RESIDENCY
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${residenceMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openResidenceMenu}
                      onMouseLeave={closeResidenceMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${residenceMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                        }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-4 gap-3">
                          {residencePrograms.map((program) =>
                            renderMegaMenuLink(program, '/residence')
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.type === 'business') {
                return (
                  <div
                    key="business"
                    className="relative"
                    onMouseEnter={openBusinessMenu}
                    onMouseLeave={closeBusinessMenuWithDelay}
                  >
                    <NavLink
                      to={businessBasePath}
                      className={`transition-all hover:opacity-70 ${isBusinessRoute ? 'border-b border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        BUSINESS MIGRATION
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${businessMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openBusinessMenu}
                      onMouseLeave={closeBusinessMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${businessMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                        }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                          {businessMenuPrograms.map((program) =>
                            renderMegaMenuLink(program, '/business-migration')
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.type === 'digitalNomad') {
                return (
                  <div
                    key="digital-nomad"
                    className="relative"
                    onMouseEnter={openDigitalMenu}
                    onMouseLeave={closeDigitalMenuWithDelay}
                  >
                    <NavLink
                      to={digitalNomadBasePath}
                      className={`transition-all hover:opacity-70 ${isDigitalRoute ? 'border-b border-current pb-1' : 'opacity-90'}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        DIGITAL NOMAD
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${digitalMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </span>
                    </NavLink>

                    <div
                      onMouseEnter={openDigitalMenu}
                      onMouseLeave={closeDigitalMenuWithDelay}
                      className={`fixed left-1/2 top-[calc(var(--site-header-height,88px)+8px)] z-50 w-screen -translate-x-1/2 px-4 md:px-6 transition-all duration-200 ${digitalMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                        }`}
                    >
                      <div className="mx-auto max-w-[1400px] rounded-3xl border border-gray-100 bg-white p-5 text-gray-900 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
                          {digitalNomadPrograms.map((program) =>
                            renderMegaMenuLink(program, '/digital-nomad')
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              const { to, label, end } = item;

              return (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `transition-all hover:opacity-70 ${isActive ? 'border-b border-current pb-1' : 'opacity-90'}`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </nav>

          {/* Hamburger Button — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none z-50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: hamburgerColor,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col items-start gap-0 px-8 pb-6 pt-2 bg-white/95 backdrop-blur-lg">
          {navLinks.map((item) => {
            if (item.type === 'citizenship') {
              return (
                <div key="citizenship-mobile" className="w-full">
                  <button
                    onClick={() => setCitizenshipMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${isCitizenshipRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>CITIZENSHIP</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${citizenshipMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${citizenshipMenuOpen ? 'max-h-[700px]' : 'max-h-0'}`}>
                    {citizenshipPrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/citizenship/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            if (item.type === 'residence') {
              return (
                <div key="residence-mobile" className="w-full">
                  <button
                    onClick={() => setResidenceMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${isResidenceRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>RESIDENCY</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${residenceMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${residenceMenuOpen ? 'max-h-[900px]' : 'max-h-0'}`}>
                    {residencePrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/residence/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-2 w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                        {program.suspended && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[8px] font-bold text-white uppercase tracking-[0.04em] shadow-sm shadow-red-500/30">
                            <span className="w-1 h-1 rounded-full bg-white/90 shrink-0" />
                            Suspended
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            if (item.type === 'business') {
              return (
                <div key="business-mobile" className="w-full">
                  <button
                    onClick={() => setBusinessMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${isBusinessRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>BUSINESS MIGRATION</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${businessMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${businessMenuOpen ? 'max-h-[900px]' : 'max-h-0'}`}>
                    {businessMenuPrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/business-migration/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-2 w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                        {program.suspended && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[8px] font-bold text-white uppercase tracking-[0.04em] shadow-sm shadow-red-500/30">
                            <span className="w-1 h-1 rounded-full bg-white/90 shrink-0" />
                            Suspended
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            if (item.type === 'digitalNomad') {
              return (
                <div key="digital-nomad-mobile" className="w-full">
                  <button
                    onClick={() => setDigitalMenuOpen((prev) => !prev)}
                    className={`w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-left transition-all hover:text-[#C9A84C] ${isDigitalRoute ? 'text-[#C9A84C]' : 'text-gray-900'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>DIGITAL NOMAD</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${digitalMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </span>
                  </button>

                  <div className={`w-full overflow-hidden transition-all duration-300 ${digitalMenuOpen ? 'max-h-[700px]' : 'max-h-0'}`}>
                    {digitalNomadPrograms.map((program) => (
                      <NavLink
                        key={program.slug}
                        to={`/digital-nomad/${program.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-2 w-full py-3 pl-4 border-b border-gray-100 text-xs font-bold tracking-[0.12em] transition-all ${isActive ? 'text-[#C9A84C]' : 'text-gray-700 hover:text-[#C9A84C]'
                          }`
                        }
                      >
                        {program.menuLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            const { to, label, end } = item;

            return (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full py-4 border-b border-gray-100 text-sm font-bold tracking-[0.2em] text-gray-900 transition-all hover:text-[#C9A84C] ${isActive ? 'text-[#C9A84C]' : ''}`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

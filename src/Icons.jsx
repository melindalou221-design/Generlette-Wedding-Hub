import React from 'react';

/*
  Hand-drawn "engraved heirloom" icon set.
  Every glyph is a single-weight line drawing on a 32x32 grid, stroked in
  currentColor so it inherits the navy / gold palette of whatever it sits in.
  Deliberately vintage: rotary telephone, folding camera, wax-sealed letter —
  not emoji.
*/

const glyphs = {
  // --- navigation -----------------------------------------------------------
  home: (
    <>
      <path d="M3.6 15.4 16 4.8l12.4 10.6" />
      <path d="M6.8 13.4V27.2h18.4V13.4" />
      <path d="M13 27.2v-7.4h6v7.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="16" cy="16" r="11.6" />
      <path d="M16 8.8V16l4.8 3" />
      <path d="M16 4.4v1.8M16 26v1.8M4.4 16h1.8M26 16h1.8" />
    </>
  ),
  compass: (
    <>
      <circle cx="16" cy="16" r="11.6" />
      <path d="M21.2 10.8 17.8 18l-7 3.2 3.4-7.2z" />
      <circle cx="16" cy="16" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  stamp: (
    <>
      <circle cx="16" cy="16" r="12" strokeDasharray="0.6 2" />
      <circle cx="16" cy="16" r="8.4" />
      <path d="M16 9.6l1.7 4.7 4.7 1.7-4.7 1.7-1.7 4.7-1.7-4.7-4.7-1.7 4.7-1.7z" />
    </>
  ),
  menu: (
    <>
      <path d="M4.6 11h22.8M4.6 16h22.8M4.6 21h22.8" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4.6 16h21.4" />
      <path d="M19.4 9.4 26 16l-6.6 6.6" />
    </>
  ),
  'arrow-left': (
    <>
      <path d="M27.4 16H6" />
      <path d="M12.6 9.4 6 16l6.6 6.6" />
    </>
  ),
  plus: (
    <>
      <path d="M16 6.4v19.2M6.4 16h19.2" />
    </>
  ),
  // Wide typographic rule: thin lines, small centred lozenge.
  flourish: (
    <>
      <path d="M2 8h42M76 8h42" />
      <path d="M60 2.6 65.4 8 60 13.4 54.6 8z" />
      <circle cx="48.6" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="71.4" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),

  // --- guest actions --------------------------------------------------------
  // 1950s rotary desk telephone: handset on the cradle, finger-hole dial.
  phone: (
    <>
      <path d="M4.4 26.4 7 18.6h18l2.6 7.8z" />
      <path d="M10.4 18.6v-1M21.6 18.6v-1" />
      <circle cx="16" cy="22.4" r="3" strokeDasharray="0.5 1.72" />
      <circle cx="16" cy="22.4" r="0.9" fill="currentColor" stroke="none" />
      <path d="M6.6 11.4 8.6 17.6H12l.6-3.8c1.8-1.4 5-1.4 6.8 0l.6 3.8h3.4l2-6.2c-3.2-1.8-15.6-1.8-18.8 0z" />
    </>
  ),
  // Folding rangefinder camera: viewfinder hump, shutter knob, glass lens.
  camera: (
    <>
      <rect x="2.6" y="10.6" width="26.8" height="14.6" rx="2.4" />
      <path d="M10.6 10.6V8.2a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2.4" />
      <path d="M23.2 10.6V9.2h2.8v1.4" />
      <circle cx="16" cy="17.9" r="5" />
      <circle cx="16" cy="17.9" r="2.3" />
      <rect x="5.2" y="13.4" width="3.4" height="2.4" rx="0.7" />
    </>
  ),
  // Letter closed with a wax seal.
  letter: (
    <>
      <rect x="2.6" y="7.6" width="26.8" height="17.6" rx="2.4" />
      <path d="M3.6 9.2 16 18.4 28.4 9.2" />
      <path d="M16 24.2c-2.1-1.6-3.5-2.6-3.5-4a1.9 1.9 0 0 1 3.5-1 1.9 1.9 0 0 1 3.5 1c0 1.4-1.4 2.4-3.5 4z" />
    </>
  ),
  heart: (
    <>
      <path d="M16 26.6c-1.4-1.1-10-6.6-10-12.8A5.6 5.6 0 0 1 16 10.4a5.6 5.6 0 0 1 10 3.4c0 6.2-8.6 11.7-10 12.8z" />
    </>
  ),
  lock: (
    <>
      <rect x="6.4" y="13.8" width="19.2" height="13.6" rx="2.6" />
      <path d="M10.8 13.8v-3.4a5.2 5.2 0 0 1 10.4 0v3.4" />
      <circle cx="16" cy="19.4" r="1.7" />
      <path d="M16 21.1v2.8" />
    </>
  ),

  // --- places + moments -----------------------------------------------------
  mountains: (
    <>
      <path d="M2 25.6 11 11.4l5.4 7.9 3.9-6L30 25.6" />
      <path d="M8.3 16.4 9.9 15.1l1.3 1.3 1.3-1.3 1.4 1.3" />
      <path d="M24.9 6.6l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  palm: (
    <>
      <path d="M16.3 11.6C15.4 16.2 15 21 14.7 25.8" />
      <path d="M11.4 25.9h6.6" />
      <path d="M16 11C12.7 9.5 9 10.3 6.2 13.4" />
      <path d="M16 11C13 7.4 9.4 6.2 6 7" />
      <path d="M16 11c-.8-4 0-6.8 1.6-8.4" />
      <path d="M16 11c3-3.6 6.6-4.8 10-4" />
      <path d="M16 11c3.4-1.5 7.1-.7 9.9 2.4" />
      <circle cx="17.5" cy="13.2" r="0.85" />
      <circle cx="19.1" cy="14.1" r="0.8" />
    </>
  ),
  city: (
    <>
      <path d="M2.8 26.8h26.4" />
      <path d="M4.8 26.8V14.2h5.6v12.6" />
      <path d="M12.4 26.8V9.6h6.2v17.2" />
      <path d="M20.6 26.8V16.8h6v10" />
      <path d="M15.5 9.6V6.2" />
      <path d="M6.6 17.4h2M6.6 21h2M14.4 13h2.2M14.4 17.4h2.2M14.4 21h2.2M22.4 20h2.2" />
    </>
  ),
  ticket: (
    <>
      <path d="M3.6 11h24.8v3.4a2.6 2.6 0 0 0 0 5.2V23H3.6v-3.4a2.6 2.6 0 0 0 0-5.2z" />
      <path d="M18.4 12.4v9.2" strokeDasharray="1.6 1.8" />
      <path d="M8 15.4h5.6M8 18.6h5.6" />
    </>
  ),
  plane: (
    <>
      <path d="M28.8 4.8 3.4 15.2l9.8 4.2 4 8.2z" />
      <path d="M28.8 4.8 13.2 19.4" />
    </>
  ),
  cup: (
    <>
      <path d="M6.4 11.6h14.8v6.6a5.4 5.4 0 0 1-5.4 5.4h-4a5.4 5.4 0 0 1-5.4-5.4z" />
      <path d="M21.2 13.4h2.4a3.2 3.2 0 0 1 0 6.4h-2.4" />
      <path d="M5 26.8h18.4" />
      <path d="M11.6 8.6c-1.1-1.4 1-2.2 0-3.6M16.4 8.6c-1.1-1.4 1-2.2 0-3.6" />
    </>
  ),

  // --- celebration ----------------------------------------------------------
  sparkle: (
    <>
      <path d="M13.4 3.6l2 6.6 6.6 2-6.6 2-2 6.6-2-6.6-6.6-2 6.6-2z" />
      <path d="M24 19.6l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </>
  ),
  dining: (
    <>
      <path d="M10.6 5.2v6.6a2.6 2.6 0 0 1-5.2 0V5.2" />
      <path d="M8 5.2v6.6M8 14.4v12.4" />
      <path d="M22.4 5.4c2.3 2.6 2.8 6.1 2 9.4h-2z" />
      <path d="M23.3 14.8v12" />
    </>
  ),
  microphone: (
    <>
      <rect x="9.8" y="4.4" width="12.4" height="15.4" rx="6.2" />
      <path d="M12.6 8.4h6.8M12.6 12h6.8M12.6 15.6h6.8" />
      <path d="M16 19.8v3.8" />
      <path d="M11.4 27.4h9.2" />
      <path d="M13 23.6h6" />
    </>
  ),
  medal: (
    <>
      <path d="M10.6 4.4l3.4 9M21.4 4.4 18 13.4" />
      <circle cx="16" cy="20.4" r="6.8" />
      <path d="M16 16.8l1.1 2.5 2.5 1.1-2.5 1.1-1.1 2.5-1.1-2.5-2.5-1.1 2.5-1.1z" />
    </>
  ),
  swan: (
    <>
      <path d="M15.4 21.2c-3-3.2-2.6-9.8 1-12.8 1.6-1.3 3.8-1.1 5 .5" />
      <path d="M21.8 9.9l3.8 1.1-3.4 1.5" />
      <circle cx="20.6" cy="9.4" r="0.5" fill="currentColor" stroke="none" />
      <path d="M4.6 21.2c1.8 4.4 6.4 6.8 10.8 6 4.2-.8 7.2-4.2 7.2-8-2.4 1.8-5.2 2.4-7.8 1.6-3.8-1.2-7.6-1.2-10.2.4z" />
      <path d="M9 22.2c2.6-1.2 5.8-1 8.4.6" />
    </>
  ),
  golf: (
    <>
      <path d="M9.6 26V5" />
      <path d="M9.6 5.8l12.2 3.2-12.2 3.4z" />
      <ellipse cx="9.6" cy="26.4" rx="4.2" ry="1.5" />
      <path d="M4 26.4h24" />
      <circle cx="23.4" cy="24.8" r="1.6" />
    </>
  ),
  film: (
    <>
      <rect x="3.4" y="8.6" width="25.2" height="14.8" rx="1.8" />
      <path d="M3.4 12.6h25.2M3.4 19.4h25.2" />
      <path d="M5.6 10.6h21" strokeDasharray="2.2 2.4" />
      <path d="M5.6 21.4h21" strokeDasharray="2.2 2.4" />
    </>
  ),
  check: (
    <>
      <circle cx="16" cy="16" r="11.4" />
      <path d="M10.4 16.4 14.6 21l7.2-9.4" />
    </>
  ),
  circle: (
    <>
      <circle cx="16" cy="16" r="11.4" strokeDasharray="1.2 2.2" />
    </>
  ),
};

// Glyphs drawn on a canvas other than the default 32x32 square.
const viewBoxes = {flourish: '0 0 120 16'};

export function Icon({name, className = '', label, style}) {
  const glyph = glyphs[name];
  if (!glyph) return null;
  const a11y = label ? {role: 'img', 'aria-label': label} : {'aria-hidden': 'true'};
  return (
    <svg
      className={('icon icon-' + name + ' ' + className).trim()}
      viewBox={viewBoxes[name] || '0 0 32 32'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      style={style}
      {...a11y}
    >
      {glyph}
    </svg>
  );
}

export default Icon;

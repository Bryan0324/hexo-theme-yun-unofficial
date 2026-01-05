import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './ThemeModeToggle.css';

const THEME_MODES = ['light', 'dark', 'auto', 'sunset'];

export default function ThemeModeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  const [currentMode, setCurrentMode] = useState(colorMode);

  useEffect(() => {
    // Handle auto mode based on time
    if (currentMode === 'auto') {
      const hour = new Date().getHours();
      if (hour >= 7 && hour < 17) {
        setColorMode('light');
      } else if (hour >= 17 && hour < 20) {
        setColorMode('sunset');
      } else {
        setColorMode('dark');
      }
    } else {
      setColorMode(currentMode);
    }
  }, [currentMode, setColorMode]);

  const cycleMode = () => {
    const currentIndex = THEME_MODES.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % THEME_MODES.length;
    setCurrentMode(THEME_MODES[nextIndex]);
  };

  const getModeIcon = () => {
    switch (currentMode) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'sunset':
        return '🌅';
      case 'auto':
        return '🔄';
      default:
        return '☀️';
    }
  };

  return (
    <button
      className="yun-theme-toggle"
      onClick={cycleMode}
      aria-label={`Switch to ${THEME_MODES[(THEME_MODES.indexOf(currentMode) + 1) % THEME_MODES.length]} mode`}
      title={`Current: ${currentMode} mode`}
    >
      <span className="yun-theme-toggle-icon">{getModeIcon()}</span>
    </button>
  );
}

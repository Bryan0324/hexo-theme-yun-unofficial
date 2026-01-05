import React from 'react';
import clsx from 'clsx';
import Layout from '@theme-original/Layout';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ThemeModeToggle from '../components/ThemeModeToggle';
import BackToTop from '../components/BackToTop';
import Fireworks from '../components/Fireworks';
import './Layout.css';

export default function LayoutWrapper(props) {
  const { colorMode } = useColorMode();
  const themeConfig = useThemeConfig();
  
  // Access theme config safely
  const yunConfig = themeConfig?.yun || {};
  const { features = {} } = yunConfig;

  return (
    <div className={clsx('yun-layout', `yun-theme-${colorMode}`)}>
      <Layout {...props}>
        {props.children}
      </Layout>
      
      {/* Theme mode toggle button */}
      <ThemeModeToggle />
      
      {/* Back to top button */}
      <BackToTop />
      
      {/* Fireworks effect */}
      {features.fireworks?.enable && (
        <Fireworks 
          enable={features.fireworks.enable}
          colors={features.fireworks.colors}
        />
      )}
    </div>
  );
}

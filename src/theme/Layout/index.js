import React from 'react';
import clsx from 'clsx';
import Layout from '@theme-original/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import ThemeModeToggle from '../components/ThemeModeToggle';
import './Layout.css';

export default function LayoutWrapper(props) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx('yun-layout', `yun-theme-${colorMode}`)}>
      <Layout {...props}>
        {props.children}
      </Layout>
      <ThemeModeToggle />
    </div>
  );
}

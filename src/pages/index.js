import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import About from '../sections/about';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="VITrendz Chennai" />
          <Banner />
          <About />
          <KeyFeature />
          <Feature />
          <CoreFeature />
        </Layout>
    </ThemeProvider>
  );
}

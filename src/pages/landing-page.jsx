import { useRef } from 'react';

import Box from '@mui/material/Box';

import FeaturesSection from '../components/landing/features-section.jsx';
import FooterSection from '../components/landing/footer-section.jsx';
import HeroSection from '../components/landing/hero-section.jsx';
import JoinSection from '../components/landing/join-section.jsx';
import ProgramsSection from '../components/landing/programs-section.jsx';

/**
 * 크로스핏 허브 랜딩페이지
 *
 * Example usage:
 * <LandingPage />
 */
function LandingPage() {
  const joinRef = useRef(null);

  const handleScrollToJoin = () => {
    joinRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <HeroSection onClickCta={ handleScrollToJoin } />
      <FeaturesSection />
      <ProgramsSection />
      <JoinSection sectionRef={ joinRef } />
      <FooterSection />
    </Box>
  );
}

export default LandingPage;

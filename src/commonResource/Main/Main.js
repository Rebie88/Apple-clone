import React from 'react';
import YouTube from '../Youtube/YouTube';
import AlertSection from './AlertSection';
import FifthSection from './FifthSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import SixthSection from './SixthSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

const Main = () => {
  return (
    <>
     <AlertSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <YouTube/>
    </>
  );
}

export default Main;

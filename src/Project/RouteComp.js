// RouteCompo.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LinkCompo from './LinkComp';
import Home from './Home';  
import ContextAPI from './ContextAPI';
import Detail from './BoxDetail';
import TechUdemy from './Sub-Components/TechUdemy';
import CartPage from './Cart/cartPage';

// import MyLearningPage from '../learning';

function RouteCompo() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <ContextAPI>
      <LinkCompo/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/business" element={<Business />} />
        <Route path="/business/communication" element={<BusinessCom />} />
        <Route path="/business/managements" element={<BusinessManagement />} />
        <Route path="/business/strategy" element={<BusinessStrategy />} />
        <Route path="/business/operations" element={<BusinessOperations />} />
        <Route path="/business/humanresources" element={<BusinessHuman />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance/taxes" element={<FinanceTaxes />} />
        <Route path="/finance/economics" element={<FinanceEconomics />} />
        <Route path="/finance/compliance" element={<FinanceCompliance />} />
        <Route path="/finance/accounting" element={<FinanceAccounting />} /> */}

{/* 
        <Route path="/itsoftware" element={<ItSoftware />} />
        <Route path="/itsoftware/certification" element={<ItSoftwareCertification />} />
        <Route path="/itsoftware/network&security" element={<ItSoftwareNetwork/>} />
        <Route path="/itsoftware/hardware" element={<ItSoftwareHardware/>} />
        <Route path="/itsoftware/operatingsystem" element={<ItSoftwareOperation/>} />

        <Route path="/design" element={<Design />} />
        <Route path="/design/web" element={<DesignWeb />} />
        <Route path="/design/game" element={<DesignGame />} />
        <Route path="/design/3d" element={<Design3d />} />
        <Route path="/design/fashion" element={<DesignFashion />} />
        <Route path="/mylearning" element={<MyLearningPage />} />


        <Route path="/marketing/digital" element={<MarketingDigital />} />
        <Route path="/marketing/social" element={<MarketingSocial/>} />
        <Route path="/marketing/public" element={<MarketingPublic />} />
        <Route path="/marketing/content" element={<MarketingContent/>} />
        <Route path="/marketing" element={<Marketing />} />



        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/lifestyle/arts" element={<LifestyleArts />} />
        <Route path="/lifestyle/beauty" element={<LifestyleBeauty />} />
        <Route path="/lifestyle/pet" element={<LifestylePet />} />
        <Route path="/lifestyle/food" element={<LifestyleFood />} />


        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/tools" element={<PhotographyTools />} />
        <Route path="/photography/digital" element={<PhotographyDigital />} />
        <Route path="/photography/commerical" element={<PhotographyCommercial />} />
        <Route path="/photography/video" element={<PhotographyVideo />} />


        <Route path="/musicarts" element={<MusicArts />} />
        <Route path="/musicarts/vocal" element={<MusicArtsVocal />} />
        <Route path="/musicarts/instruments" element={<MusicArtsInstruments />} />
        <Route path="/musicarts/production" element={<MusicArtsProduction/>} />
        <Route path="/musicarts/software" element={<MusicArtsSoftware />} />


        <Route path="/health" element={<Health />} />
        <Route path="/health/fitness" element={<HealthFitness />} />
        <Route path="/health/yoga" element={<HealthYoga />} />
        <Route path="/health/mental" element={<HealthMental />} />
        <Route path="/health/sport" element={<HealthSport />} />

        <Route path="/teaching" element={<Teaching />} />
        <Route path="/teaching/engineering" element={<TeachingEngineering />} />
        <Route path="/teaching/math" element={<TeachingMath />} />
        <Route path="/teaching/social" element={<TeachingSocial />} />
        <Route path="/teaching/science" element={<TeachingScience />} /> */}
        

        

        <Route path="/tech" element={<TechUdemy/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </ContextAPI>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default RouteCompo;

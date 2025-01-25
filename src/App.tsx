import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import Section1_1 from './components/Section1_1';
import Section1_2 from './components/Section1_2';
import Section1_3 from './components/Section1_3';
import Section1_4 from './components/Section1_4';
import Section1_5 from './components/Section1_5';
import Section1_6 from './components/Section1_6';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='section1_1' element={<Section1_1 />} />
          <Route path='section1_2' element={<Section1_2 />} />
          <Route path='section1_3' element={<Section1_3 />} />
          <Route path='section1_4' element={<Section1_4 />} />
          <Route path='section1_5' element={<Section1_5 />} />
          <Route path='section1_6' element={<Section1_6 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
   return (
      <BrowserRouter>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
}
export default App;
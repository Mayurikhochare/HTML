import { lazy, Suspense } from 'react';
const AboutUs = lazy(() => import('./AboutUs'));

const Home = () => {
   return (
      <div className="App">
         <h1>Home Page</h1>
        
      </div>
   );
};
export default Home;
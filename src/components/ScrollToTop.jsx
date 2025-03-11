import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, [location]);

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;

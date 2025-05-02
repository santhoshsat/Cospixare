import { useEffect } from 'react';

const GA_TRACKING_ID = import.meta.env.VITE_API_GAID;

export const GoogleAnalytics = () => {
  useEffect(() => {
    try {
        if(GA_TRACKING_ID){
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
            script.async = true;
            document.head.appendChild(script);

            // Initialize gtag
            window.dataLayer = window.dataLayer || [];
            function gtag(){
                window.dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', GA_TRACKING_ID, { // Use the environment variable here
                cookie_flags: 'SameSite=Lax; Secure',
                cookie_domain: 'cospixaretechnologies.in',
                cookie_expires: 63072000,
            });
        } else { console.log('Please add Google Analytics id') }
    } catch (error) {
        console.error('Error initializing Google Analytics:', error);
    }
  }, [GA_TRACKING_ID]);
  return null;
};
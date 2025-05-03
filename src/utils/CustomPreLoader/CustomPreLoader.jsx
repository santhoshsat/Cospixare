import { useState, useEffect, useRef } from 'react'
import './CustomPreLoader.css'

const CustomPreLoader = () => {
    const preLoaderRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const hasShown = localStorage.getItem('preloaderShown')
        const preloader = preLoaderRef.current

        if(!hasShown && preloader) {
            setVisible(true)
            let localProgress = 0

            const interval = setInterval(() => {
                if (localProgress < 100){
                    localProgress += Math.random() * 10 + 5
                    if(localProgress > 100) localProgress = 100;
                    setProgress(Math.floor(localProgress))
                } else {
                    clearInterval(interval)
                    hidePreloader()
                }
            }, 100)

            const maxTimeOut = setTimeout(() => {
                if(preloader){
                    preloader.classList.add('hidden')
                    setTimeout(() => {
                        setVisible(false);
                        sessionStorage.setItem("preloaderShown", "true");
                    }, 600);
                }
            })

            const hidePreloader = () => {
                if (preloader) {
                  preloader.classList.add("hidden");
                  setTimeout(() => {
                    setVisible(false);
                    sessionStorage.setItem("preloaderShown", "true");
                  }, 600);
                }
            };

            return () => { 
                clearInterval(interval)
                clearTimeout(maxTimeOut)
            }
        } else {
            setVisible(false)
        }
    }, [])

    return (
        <div id="preloader" className="preloader" ref={preLoaderRef}>
            <div className="loader-content">
                <div className="loader-spinner" />
                <div className="loader-progress">{progress}%</div>
            </div>
        </div>
    )
}

export default CustomPreLoader
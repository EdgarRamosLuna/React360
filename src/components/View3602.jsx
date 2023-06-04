import React, { useEffect, useRef, useState } from 'react';
import './View360.css';  // Suponiendo que tu CSS está en este archivo.

const View3602 = ({ id, folder, filename, amount, width, height, hotspotsConfig, magnifierSize }) => {
    const [showHotspots, setShowHotspots] = useState(true);
    const viewerRef = useRef(null);

    const toggleHotspots = () => {
        setShowHotspots(!showHotspots);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.0/js-cloudimage-360-view.min.js";
        script.async = true;
        script.onload = () => {
            if (viewerRef.current && window.CI360) {
                window.CI360.init(viewerRef.current);
                if (hotspotsConfig && hotspotsConfig.length > 0) {
                    window.CI360.addHotspots(id, hotspotsConfig);
                }
            }
        };
        document.body.appendChild(script);
        return () => { document.body.removeChild(script) };
    }, []);

    useEffect(() => {
        const hotspots = document.querySelectorAll('.cloudimage-360-hotspot-custom-icon');
        hotspots.forEach(hotspot => {
            hotspot.style.display = showHotspots ? 'block' : 'none';
        });
    }, [showHotspots]);

    return (
        <>
            <button onClick={toggleHotspots}>Toggle Hotspots</button>
            <div ref={viewerRef}
                id={id}
                className="ci-360-viewer cloudimage-360"
                data-folder={folder}
                data-filename-x={filename}
                data-amount-x={amount}
                data-hotspots
                data-magnifier={magnifierSize}
                data-full-screen
                data-responsive="scaleflex"
                style={{ width, height }}
            ></div>
        </>
    );
}

export default View3602;

import React, { useEffect, useRef } from 'react';

const View360 = () => {
    const viewerRef = useRef(null);

    useEffect(() => {
        import('js-cloudimage-360-view')
            .then(module => {
                if (viewerRef.current) {
                    new module.default(viewerRef.current);
                }
            })
            .catch(err => {
                console.error('Failed to load module', err);
            });
    }, []);

    return (
        <div ref={viewerRef}
            className="ci-360-viewer cloudimage-360"
            data-folder="https://scaleflex.cloudimg.io/v7/demo/suv-orange-car-360/"
            data-filename="orange-{index}.jpg"
            data-amount="36">
        </div>
    );
}

export default View360;

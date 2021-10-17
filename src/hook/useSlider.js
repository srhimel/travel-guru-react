import { useEffect, useState } from 'react';

const useSlider = () => {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch('./Slider.json')
            .then(res => res.json())
            .then(data => setSlider(data))
            .catch(error => console.log(error));
    }, []);
    return [slider];
};

export default useSlider;
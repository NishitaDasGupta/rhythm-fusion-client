import { useEffect, useState } from "react";
const useSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        fetch('sliderdata.json')
            .then(res => res.json())
            .then(data => setSliderData(data))
    }, [])
    return [sliderData];
};

export default useSlider;
import  { useEffect } from 'react';

const useOnOutsideClick = (ref, callback) => {
    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (ref.current && ref.current.contains(event.target) === false) {
                callback();
            }
        })
    }, []);
    return null;
};

export default useOnOutsideClick;

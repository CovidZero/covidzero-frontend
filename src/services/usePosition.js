import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: false,
      timeout: Infinity,
      maximumAge: 0,
    };
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    let watcher = geo.watchPosition(onChange, onError, options);
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };

}

export default usePosition

import React, { useEffect } from "react";
import { Container, Track, Thumb } from './styles'

const Switch = ({ onChange, value }) => {
  const [active, setActive] = React.useState(!!value || false);

  useEffect(() => {
    setActive(!!value);
  }, [value]);

  useEffect(() => {
    onChange && onChange(active);
  }, [onChange, active]);

  return (
    <Container>
      <Track>
        <Thumb
          active={active}
          onClick={() => setActive(!active)}
        />
      </Track>
    </Container>
  );
};

export default Switch;

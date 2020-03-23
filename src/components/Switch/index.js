import React from "react";
import { Container, Track, Thumb } from './styles'

const Switch = ({ onChange }) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
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

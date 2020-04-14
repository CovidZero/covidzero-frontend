import React from 'react';
import { Style } from './styles';

const Dots = (props) => {
    return (
        (() => {
            switch(props.dot) {
                case "recovered":
                    return <Style.DotRecovered theme={props.theme} />;
                case "confirmed":
                    return <Style.DotConfirmed theme={props.theme} />;
                case "suspect":
                    return <Style.DotSuspect theme={props.theme} />;
                case "you":
                    return <Style.DotYou theme={props.theme} />;
                case "hidden":
                    return <Style.DotHidden theme={props.theme} />;
                default:
                    return <Style.DotDefault theme={props.theme} />;
            }
        })()
    );
};

export default Dots;
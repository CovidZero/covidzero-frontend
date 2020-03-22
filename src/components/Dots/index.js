import React from 'react';
import { Style } from './styles';

const Dots = (props) => {
    return (
        (() => {
            switch(props.dot) {
                case "recovered":
                    return <Style.DotRecovered />;
                case "confirmed":
                    return <Style.DotConfirmed />;
                case "suspect":
                    return <Style.DotSuspect />;
                case "you":
                    return <Style.DotYou />;
                default:
                    return <Style.DotDefault />;
            }
        })()
    );
};

export default Dots;

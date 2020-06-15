import React from 'react';
import { Style } from './styles';
import Truncate from 'react-truncate';

const CardDonations = (props) => {
    return (
        <Style.CardBoxStyle>
            <Style.CardBoxTitle>
                {props.title}
            </Style.CardBoxTitle>
            <Style.CardBoxContent>
                {/*<Truncate lines={3} ellipsis="...">*/}
                    {props.content}
                {/*</Truncate>*/}
            </Style.CardBoxContent>
            <Style.CardBoxFooter>
               {props.footer}
            </Style.CardBoxFooter>
        </Style.CardBoxStyle>
    );
};

export default CardDonations;

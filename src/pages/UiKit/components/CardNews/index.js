import React from 'react';
import { Style } from './styles';
import Truncate from 'react-truncate';

const CardNews = (props) => {
    return (
        <Style.CardBoxStyle>
            <Style.CardBoxTitle>
                {props.title}
            </Style.CardBoxTitle>
            <Style.CardBoxContent>
                <Truncate lines={3} ellipsis="...">
                    {props.content}
                </Truncate>
            </Style.CardBoxContent>
            <Style.CardBoxFooter>
                {props.date.toLocaleDateString()}, {props.date.toLocaleTimeString()}
                {props.tag}
            </Style.CardBoxFooter>
        </Style.CardBoxStyle>
    );
};

export default CardNews;

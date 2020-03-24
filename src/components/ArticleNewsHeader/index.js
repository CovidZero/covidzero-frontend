import React from 'react';
import { Style } from './styles';

const ArticleNewsHeader = (props) => {
    return (
        <Style.ArticleBoxImage style={{backgroundImage: `url(${props.source})`}}>
            <Style.ArticleBoxTitle>
                {props.title}
            </Style.ArticleBoxTitle>
        </Style.ArticleBoxImage>
    );
};

export default ArticleNewsHeader;

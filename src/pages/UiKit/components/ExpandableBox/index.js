import React, { useState } from "react";
import { ArrowIosUpwardOutline, ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline";
import { ExpandableBox as ExpandableBoxStyle, ExpandableBoxBody, ExpandableBoxHeader, ExpandableBoxHeaderIcon } from './styles'

const ExpandableBox = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <ExpandableBoxStyle>
            <ExpandableBoxHeader onClick={() => setOpen(!open)}>
                {props.header}
                <ExpandableBoxHeaderIcon >
                    { open ? <ArrowIosUpwardOutline color="white" size="20px" /> : <ArrowIosDownwardOutline color="white" size="20px" />    }
                </ExpandableBoxHeaderIcon>

            </ExpandableBoxHeader>

            {
                open && <ExpandableBoxBody>{props.body}</ExpandableBoxBody>
            }


        </ExpandableBoxStyle>
    );
};

export default ExpandableBox;

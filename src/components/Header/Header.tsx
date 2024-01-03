import styled from "@emotion/styled";
import React from "react";
import {StInnerContainer, StFlexRow} from "styles/common";
import {StHeaderTitle} from "components/Header/style";

const Header: React.FC = () => {
    return (
        <StHeader>
            <StInnerContainer className="flex flex-row justify-between items-center" >
                <StHeaderTitle>0jo's dev blog</StHeaderTitle>

                <StFlexRow>
                    <li>
                        <a href="https://github.com/0jo-gil" target="_blank">GitHub</a>
                    </li>

                    <li>
                        <a href="mailto:0joofficial@gmail.com">Email</a>
                    </li>
                </StFlexRow>
            </StInnerContainer>
        </StHeader>
    )
}

export default Header;

const StHeader = styled.header`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
`;
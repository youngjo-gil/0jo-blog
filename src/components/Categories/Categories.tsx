import React, { PropsWithChildren } from "react";
import CategoriesItem from "./CategoriesItem";
import styled from "styled-components";

const Categories = ({children}: PropsWithChildren) => {
    return (
        <StCategoriesContainer>
            {children}
        </StCategoriesContainer>
    )
}

export default Categories;

Categories.Item = CategoriesItem;

const StCategoriesContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 60px;
    padding: 20px 0;
    border-bottom: 1px solid #aaa;
`;
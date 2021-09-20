import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLW>
                <FooterDesc>
                    <h1>Explora</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Similique, maiores?</p>
                </FooterDesc>
                <FooterLItems>
                    <FooterLinkTitle>Contactanos</FooterLinkTitle>
                    <FooterLink to="/">Contact</FooterLink>
                    <FooterLink to="/">Soporte</FooterLink>
                    <FooterLink to="/">Destinos</FooterLink>
                    <FooterLink to="/">Productos</FooterLink>
                </FooterLItems>
            </FooterLW>
            <FooterLW>
                <FooterLItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/">Contact</FooterLink>
                    <FooterLink to="/">Soporte</FooterLink>
                    <FooterLink to="/">Destinos</FooterLink>
                    <FooterLink to="/">Productos</FooterLink>
                </FooterLItems>
            </FooterLW>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px)/2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`
const FooterLW = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`
const FooterDesc = styled.div`
    padding: 0 2rem;
    h1{
        margin-bottom: 3rem;
        color: #f26a2e;

    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`
const FooterLItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {ImLocation} from "react-icons/im"

const Places = ({heading}) => {
  const data = useStaticQuery(graphql`
    query PlaceQuery {
      allPlacesJson {
        edges {
          node {
            alt
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
    //funcion que recorre el json y devulve la data
  function getPlaces(data) {
    const placesArray = []
    data.allPlacesJson.edges.forEach((item,index) => {
      placesArray.push(
        <ProductCard key={index}>
          <ProductImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
              <TextWrap>
                  <ImLocation />
                  <PlaceInfo>{item.node.name}</PlaceInfo>
              </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })
    return placesArray
  }

  return (
    <PlacesContainer>
      <PlacesHeading>{heading}</PlacesHeading>
      <PlaceWrapper>{getPlaces(data)}</PlaceWrapper>
    </PlacesContainer>
  )
}

export default Places

const PlacesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
`
//calc es Una expresión matemática cuyo resultado es usado como valor para la propiedad sobre la cual se aplica

const PlacesHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const PlaceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const PlaceInfo = styled.div`
    font-weight: 400;
    font.size: 1rem;
    margin-left: 0.5rem;
`
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import {useStaticQuery, graphql} from "gatsby"

const Travelers = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["backpacker-1", "backpacker-2"]}}
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
  `)

  return (
    <TravelersContainers>
      <TopLine>Conocenos</TopLine>
      <Description>Una app de viajeros para viajeros</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline css='font-size: 2rem; margin-bottom:1rem;'/>
            <h3>Conoce Nicaragua de una manera inmersiva</h3>
            <p>
              "Explora te mostrara una manera diferente de conocer este bello país.
              Descubre sitios nuevos que te dejarán maravillado"
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css='font-size: 2rem; margin-bottom:1rem;'/>
            <h3>Planea tu Aventura</h3>
            <p>
              "Ya seas un mochilero, turista nacional o extranjero. Explora tiene
              tus necesidades cubiertas. Desde tu deseo de conocer algo nuevo hasta
              las actividades que quieras realizar."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        {data.allFile.edges.map((image, key)=>(
          <Images key={key} fluid={image.node.childImageSharp.fluid}/>
        ))}
        </ColumnTwo>
      </ContentWrapper>
    </TravelersContainers>
  )
}

export default Travelers

const TravelersContainers = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
`

const TopLine = styled.p`
  color: #088bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`

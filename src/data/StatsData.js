import React from "react"
import { FaStreetView } from "react-icons/fa"
import { ImQrcode, ImMap } from "react-icons/im"
import { GiStarsStack } from "react-icons/gi"

export const StatsData = [
  {
    icon: <FaStreetView color="#000072" />,
    title: "Da un vistazo al sitio",
    desc: "¡Con el novedoso Tour virtual 360° podrás navegar como si estuvieras en el sitio presencialmente! Incluso puedes ir más allá con elementos de realidad aumentada que te darán una experiencia más enriquecedora e inmersiva.",
  },
  {
    icon: <ImQrcode color="#104EB3" />,
    title: "Conoce información del sitio",
    desc: "Con el lector QR dentro de la app podrás conocer información interesante del sitio con los códigos QR dentro del sitio. Podrás conocer desde el menú de un restaurante hasta los horarios de la terminal de buses. Inclusive ¡podrás conocer las especies animales de un sitio ecoturístico!",
  },
  {
    icon: <ImMap color="#5489DE" />,
    title: "¿No sabes cómo llegar a un sitio? No te preocupes",
    desc: "Explora te acompañará en tu travesía con la guía de viaje y la función de movilización te guiaremos por la mejor ruta para que llegues a tu destino.",
  },
  {
    icon: <GiStarsStack color="#FFA000" />,
    title: "¡Conoce la opinión de otros como tú!",
    desc: "Podrás conocer opiniones y experiencias de otros usuarios mediante sus comentarios y puntuaciones al sitio. Además, podrás conocer los mejores lugares elegidos por la comunidad con el Top 5 de Explora.",
  },
]

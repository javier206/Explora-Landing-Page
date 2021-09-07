import React from 'react'
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica color="blue"/>
    ),
    title: "Lorem ipsum dolor sit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    icon: <MdAirplanemodeActive color="yellow"/>,
    title: "Lorem ipsum dolor sit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    icon: <MdTimer color="red"/>,
    title: "Lorem ipsum dolor sit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    icon: <FaMoneyCheck color="lightblue"/>,
    title: "Lorem ipsum dolor sit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
]
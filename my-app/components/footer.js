import React from 'react'
import { FaEnvelope, FaInstagram, FaSlack } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";

export default function PageFooter() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center p-24">

        <a href="mailto:aiinmedicine@cambridgesu.co.uk" className='p-3 text-gray-300 transition-transform hover:scale-125'>
            <FaEnvelope size={35}/>
        </a>

        <a href="https://www.instagram.com/aiinmedicinesoc/" className='p-3 text-gray-300 transition-transform hover:scale-125'>
            <FaInstagram size={34}/>
        </a>

        <a href="https://linktr.ee/aiinmedicinesoc" className='p-3 text-gray-300 transition-transform hover:scale-125'>
            <BiLinkAlt size={32}/>
        </a>
        <a href="https://app.slack.com/client/T05ULP1JXK8/C05UQESSD61" className="p-3 text-gray-300 transition-transform hover:scale-125">
            <FaSlack size={30}/>
        </a>
    </div> 
  )
}

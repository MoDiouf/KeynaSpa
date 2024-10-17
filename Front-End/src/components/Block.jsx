import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
export function Block() {

    return <>
        <section className='infoKeyna'>
            <div className='range' >
                <div>
                    <span> <FaMapMarkerAlt /> </span>
                    <span>Corniche Ouest</span>
                </div>
                <div>
                    <span><IoIosMail /></span>
                    <span>contact@keynaspa.sn</span>
                </div>
                <div>
                    <span><BsFillTelephoneFill /></span>
                    <span>+221 33 864 29 04</span>
                </div>
            </div>
        </section>
    </>
}
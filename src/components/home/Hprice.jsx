import React from "react"
import PriceCard from "../pricing/PriceCard"
import Title from "../common/title/Title"

const Hprice = () => {
    return (
        <>
            <section className='hprice padding'>
                <Title subtitle='OUR PRICING' title='Pricing & Packages' />
                <div className='price container grid'>
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Hprice

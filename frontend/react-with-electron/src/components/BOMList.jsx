import React from 'react'
import BOMAccordion from './BOMAccordion'

function BOMList() {
  return (
    <>
    <div className="grid items-start gap-6 mb-6 md:grid-cols-3 w-2/3 h-1/3">
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    <BOMAccordion title="BOM machine1" answer="hello there"/>
    <BOMAccordion title="BOM machine2" answer="hello there2"/>
    </div>
    </>
  )
}

export default BOMList
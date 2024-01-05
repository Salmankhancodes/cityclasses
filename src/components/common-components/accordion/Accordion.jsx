import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({
  headerTitle,
  accordionDescription,
  accordionState,
  updateAccordionState,
}) => {
  return (
    <div className='accordion'>
      <div
        className='accordion-header'
        onClick={() => updateAccordionState(accordionState)}
      >
        {/* <span className='material-symbols-outlined collapsible-icon'>
          expand_more
        </span> */}
        <span
          className='collapsible-icon'
          title={!accordionState ? 'Open' : 'Close'}
        >
          {!accordionState ? '+' : '-'}
        </span>
        <h3 className='accordion-title'>{headerTitle}</h3>
      </div>
      <div
        className={`accordion-text-area ${accordionState ? 'open' : ''}`}
        id=''
        cols='30'
        rows='10'
      >
        {accordionDescription}
      </div>
    </div>
  )
}

export default Accordion

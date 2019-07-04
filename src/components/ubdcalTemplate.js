import React from 'react';
import './ubdcalTemplate.css';

const ubdcalTemplate = ({form, result}) => {
    return(
        <main className="ubd-cal-template">
         <div className="title">
            UBD 계산기
         </div>
         <section className="form-wrapper">
            <div className="disc">
            1 UBD = 172,212 
            </div>
         </section>
         <section className="cal-wrapper">
            {form}
         </section>
         <section className="res=wrapper">
            {result}
         </section>
        </main>
    );
};

export default ubdcalTemplate;
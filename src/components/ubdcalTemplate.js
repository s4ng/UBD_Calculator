import React from 'react';
import './ubdcalTemplate.css';

const ubdcalTemplate = ({form, children}) => {
    return(
        <main className="ubd-cal-template">
        <div className="title">
            엄복동 계산기
        </div>
        <section className="form-wrapper">
            {form}
        </section>
        <section className="cal-wrapper">
            { children }
        </section>
        </main>
    );
};

export default ubdcalTemplate;
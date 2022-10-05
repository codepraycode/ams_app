import React from 'react';


/* A section wrapper */

function Section ({title, children }) {

    return (
        <section>

            <div className="header">
                <span className='section_title'>{title}</span>
                <span className='liner'></span>
            </div>

            <div className="section_content">
                {children}
            </div>


        </section>
    )
}

export default Section;
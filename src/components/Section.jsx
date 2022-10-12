import React from 'react';
import Button from '../widgets/Button';


/* A section wrapper */

function Section ({title, children }) {

    return (
        <section>

            <div className="header">
                <span className='section_title'>{title}</span>

                <Button 
                    label={"Add"}
                    variant={"solid"}
                />

                <span className='liner'></span>
            </div>

            <div className="section_content">
                {children}
            </div>


        </section>
    )
}

export default Section;
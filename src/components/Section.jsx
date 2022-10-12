import React from 'react';
import Button from '../widgets/Button';


/* A section wrapper */

function Section({ title, children, contentProps }) {

    const wrapperProps = {
        // className: className||''
    }

    const { className:contentClassNames, ...restContentProps } = contentProps || {};

    const wrapperContentProps = {
        className: `section_content ${contentClassNames || ''}` ,
        ...restContentProps,
    }

    return (
        <section {...wrapperProps}>

            <div className="header">
                <span className='section_title'>{title}</span>

                <Button 
                    label={"Add"}
                    variant={"solid"}
                />

                <span className='liner'></span>
            </div>

            <div {...wrapperContentProps}>

                {children}

            </div>


        </section>
    )
}

export default Section;
import React from 'react';
import Button from '../widgets/Button';


/* A section wrapper */

function Section({ title, children, wrapperProps, contentProps }) {

    const wrapperPropsToUse = {
        ...wrapperProps
    }

    const { className:contentClassNames, ...restContentProps } = contentProps || {};

    const wrapperContentProps = {
        className: `section_content ${contentClassNames || ''}` ,
        ...restContentProps,
    }

    return (
        <section {...wrapperPropsToUse}>

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
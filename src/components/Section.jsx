import React from 'react';
import Button from '../widgets/Button';


/* A section wrapper */

function Section({ title, children, header, wrapperProps, contentProps }) {

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

            {header && (
                <div className="header">
                    <span className='section_title'>{header.title}</span>

                    <Button
                        label={header.action.label}
                        variant={"solid"}
                        onClick={header.action.act}
                    />

                    <span className='liner'></span>
                </div>
            )}

            <div {...wrapperContentProps}>

                {children}

            </div>


        </section>
    )
}

export default Section;
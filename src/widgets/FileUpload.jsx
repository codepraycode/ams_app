import React from 'react';
import { placeholder } from '../constants/assets';
import Button from './Button';


function GrandImageFileUpload({}){

    return (
        <div className='img_uploader grand'>
            <div className="preview" >
                <img src={placeholder} />
            </div>

            <div className="cta">

                <Button label={"Change"} variant={"gradient"}/>
                {/* <Button label={"Save"} variant={"solid"}/> */}
            </div>

            
        </div>
    )
}

function ImageFileUpload({ wrapperProps, inputProps, grand }) {

    const {type, ...restInputProps} = inputProps;

    const pprops = {
        className: "mb-3 img_uploader",
        ...wrapperProps
    }

    const inpProps = {
        type: "file",
        className: "form-control",
        ...restInputProps,
    }


    if( grand) return <GrandImageFileUpload/>;

    return (
        <div {...pprops}>

            <div className="preview" >
                    <img src={placeholder} />
                </div>
            <div className='upload_action'>
                <input
                    {...inpProps}
                />

                <span className='msg'>Recommended: 512x512px</span>

                <div className='cta'>
                    <span className="up "> {/* disabled */}
                        <i className="fas fa-upload "></i>
                    </span>
                    
                    <span className="del">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}


function FileUpload( props ) {
    const { wrapperProps, inputProps } = props;

    if (inputProps.type === "image") {
        return <ImageFileUpload {...props}/>
    }

    const pprops = {
        className: "mb-3",
        ...wrapperProps
    }

    const inpProps = {
        type: "text",
        className: "form-control",
        ...inputProps,
    }

    

    return (
        <>
            {inputProps.label && <label>{inputProps.label}</label>}
            <div {...pprops}>

                <input
                    {...inpProps}
                />
            </div>
        </>

    )
}

export default FileUpload
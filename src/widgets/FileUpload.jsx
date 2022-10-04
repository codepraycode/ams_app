import React from 'react';
import { placholder } from '../constants/assets';


function ImageFileUpload({ wrapperProps, inputProps }) {

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

  return (
      <div {...pprops}>

          <div className="preview" >
                <img src={placholder} />
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
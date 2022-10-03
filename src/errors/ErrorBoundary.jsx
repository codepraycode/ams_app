import React,{Component} from 'react';
import '../scss/error.scss';
import Error500 from './500.jsx';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);

        this.state = {
            hasError: false
        };
    }


    static getDerivedStateFromError (error){
        // Update state so the next render will show the fallback UI
        return {
            hasError:true
        };
    }

    componentDidCatch(error, errorInfo){
        // You can also log the error tot a reporting service
        // console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return (
                <div className='error_page'>
                    <Error500/>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
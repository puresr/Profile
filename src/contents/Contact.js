import React , {Component} from 'react'

import Social from '../component/Social'

class Contact extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className='topic'>Contact</h1>
                <h3>Email : pure.saran@gmail.com</h3>
                <h3>Tel : 061-9259-541</h3>
                <Social/>
            </div>
        )
    }
}

export default Contact;
import React, {Component} from 'react';
import Widecard from '../component/Widecard';

class Education extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className='topic'>My Education</h1>
                <Widecard title="University" where="King Mongkut's University of Technology Thonburi" from='2018' to='Present'/>
                <Widecard title="High School" where="Satit Bansomdej" from='2012' to='2018' />
            </div>
        )
    }
}

export default Education;
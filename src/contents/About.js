import React , {Component} from 'react'
import profilepic from '../img/profile.jpg'

class About extends Component{
    render(){
        return(
         <div className='condiv about'>
             <h1 className='topic'>About me</h1>
            <img src={profilepic} className="profilepic"/>
            <h3>สวัสดีครับ ผมชื่อ ศรัณย์ ชมสุวรรณ</h3>
            <p>  กำลังศึกษาอยู่ชั้นปีที่ 3 มหาวิทยาลัยเทคโนโลยีพระจอมธนบุรี <br/>
            คณะ ครุศาสตร์อุตสาหกรรมและเทคโนโลยี สาขา คอมพิวเตอร์ประยุกต์-มัลติมีเดีย<br/>
            
            </p>
         </div>   
        )
    }
}

export default About;
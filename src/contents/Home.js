import React,{Component} from 'react'
import Social from '../component/Social'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component{
    render(){
        return(
            <div className='condiv home'>
                <img src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/67824082_1155981217936826_173222177145880576_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=hqcc_ZHUG-UAX9Wj1bG&_nc_ht=scontent.fbkk2-5.fna&oh=9fb5557615e1eec5ad7dcde71cd3e208&oe=60E1ED8A" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['Welcome']} speed={100} eraseDelay={200} className="typingeffect"></ReactTypingEffect>
                <Social/>
            </div>
        )
    }
}

export default Home;
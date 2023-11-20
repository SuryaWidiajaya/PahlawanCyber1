import LoginBlog from '@/component/CeritaElement/LoginBlog';
import BgLogin from '../../../public/image/Bg-start3.png'
import ManHifi from '../../../public/image/ManHiFi.png';

export default function LoginSiswaLK() {
    return(
        <>
        <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgLogin.src})` }}>
            <div className='flex justify-center '>
                <div className='mt-[150px]'>
                <LoginBlog image={ManHifi} link='/Cerita/IdentitasSiswaLK'/>
                </div>
            </div>
        </div>
        </>
    );
}
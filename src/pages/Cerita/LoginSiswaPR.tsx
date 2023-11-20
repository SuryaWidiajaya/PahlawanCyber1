import LoginBlog from '@/component/CeritaElement/LoginBlog';
import BgLogin from '../../../public/image/Bg-start3.png'
import WomanHifi from '../../../public/image/WomanHiFi.png';

export default function LoginSiswaPR() {
    return(
        <>
        <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgLogin.src})` }}>
            <div className='flex justify-center '>
                <div className='mt-[150px]'>
                <LoginBlog image={WomanHifi} link='/Cerita/IdentitasSiswaPR'/>
                </div>
            </div>
        </div>
        </>
    );
}
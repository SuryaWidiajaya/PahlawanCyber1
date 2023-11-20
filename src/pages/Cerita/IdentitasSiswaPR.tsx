import BgLogin from '../../../public/image/Bg-start3.png'
import WomanHifi from '../../../public/image/WomanHiFi.png';
import IdentitasBlog from '@/component/CeritaElement/IdentitasBlog';

export default function IdentitasSiswaPR() {
    return(
        <>
        <div className="relative bg-cover h-[1024px]" style={{ backgroundImage: `url(${BgLogin.src})` }}>
            <div className='flex justify-center '>
                <div className='mt-[150px]'>
                <IdentitasBlog Image={WomanHifi} />
                </div>
            </div>
        </div>
        </>
    );
}
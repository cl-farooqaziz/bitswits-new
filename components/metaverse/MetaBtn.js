import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import style from '@/styles/metaverse/metaverse.module.css';
import Phone from '@/public/metaverse/images/tell-icon.png';

function MetaBtn() {

    return (
        <>  
            <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                Hire Blockchain Developer
            </Link>
            <span className={style.centerBorder}></span>
            <Link href="javascript:;" className={`font25 text-white`}>
                <Image src={Phone} width={25} />
                <span className={style.metaSpan}>
                    1-844-400-0025
                </span>
            </Link>
        </>
    );
}
export default MetaBtn;
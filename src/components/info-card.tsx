import Image from 'next/image';
import Link from 'next/link';

const InfoCard = ({ title, description, image }: {title: string, description: string, image: string}) => (
    <Link href={'/projects?filter=' + title.replaceAll(' ', '%20')} className={`grid grid-rows-[auto_1fr] rounded-lg bg-[var(--color-bg-accent)] w-[75vw] sm:w-[400px] h-auto hover:shadow-[0_0px_15px_var(--color-foreground)] hover:animate-lift-up animate-lift-down`}>
        <Image className="rounded-t-lg w-full h-full" src={image} alt="Image" width={1000} height={1000}/>
        <div className='p-2'>
            <div className="font-bold text-2xl">{title}</div>
            <div className="">{description}</div>
        </div>
    </Link>
);

export default InfoCard;
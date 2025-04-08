import Image from 'next/image';

const InfoCard = ({ title, description, image }: {title: string, description: string, image: string}) => (
    <div className={`grid grid-rows-[auto_1fr] rounded-lg bg-[var(--color-bg-accent)] w-[75vw] sm:w-[400px] h-auto hover:shadow-[0_0px_15px_var(--color-foreground)] hover:animate-lift-up animate-lift-down`}>
        <Image className="rounded-t-lg w-full h-full" src={image} alt="Image" width={1000} height={1000}/>
        <div className='p-2'>
            <div className="font-bold text-2xl">{title}</div>
            <div className="">{description}</div>
        </div>
    </div>
);

export default InfoCard;
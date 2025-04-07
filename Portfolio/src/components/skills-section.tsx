"use client"

import useAnimateEntrance from './animate-entrance';
import TailwindProgressBar from './progress-bar'

enum SKillLevel {
    Beginner = 25,
    Intermediate = 50,
    Advanced = 75,
    Expert = 100
}

const SkillField = ({name , strenghtLevel }: {name: string, strenghtLevel: SKillLevel}) => {
    return (
        <div className='m-3 sm:m-6'>
            <div className='grid grid-cols-2 grid-rows-1 font-bold'>
                <span className='text-left'>{name}:</span>
                <span className='text-right'>{SKillLevel[strenghtLevel]}</span>
            </div>
            <TailwindProgressBar percent={strenghtLevel}/>
        </div>
    )
}

const SkillsSection = () => {
    const section1Visible = useAnimateEntrance("skills_section1");
    const section2Visible = useAnimateEntrance("skills_section2");
    
    return (
        <div id='skills' className="pageSection font-[family-name:var(--font-geist-mono)]">
            <div className="p-8 sm:p-10">
                <h2 id='skills_section1' className={`text-2xl sm:text-6xl font-bold justify-self-left ${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Skills
                </h2>
                <div className={`bg-blue-300 h-1 w-20 mt-5 mb-5 ${section1Visible ? 'animate-fade-slide-in' : ''}`}/>
                <div id='skills_section2' className={`text-2x1 w-fill sm:grid sm:grid-cols-2 ${section2Visible ? 'animate-fade-slide-in' : ''}`}>
                    <SkillField name="C#" strenghtLevel={SKillLevel.Advanced}/>
                    <SkillField name="ASP.NET CORE" strenghtLevel={SKillLevel.Advanced}/>
                    <SkillField name=".NET" strenghtLevel={SKillLevel.Advanced}/>
                    <SkillField name="MYSQL" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="PHP" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="PYTHON" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="HTML" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="CSS" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="Javascript" strenghtLevel={SKillLevel.Intermediate}/>
                    <SkillField name="React" strenghtLevel={SKillLevel.Beginner}/>
                    <SkillField name="Tailwind" strenghtLevel={SKillLevel.Beginner}/>
                    <SkillField name="Typescript" strenghtLevel={SKillLevel.Beginner}/>
                </div>
            </div>
        </div>
    )
};
    
  export default SkillsSection;
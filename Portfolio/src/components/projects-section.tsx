"use client"

import useAnimateEntrance from './animate-entrance';
import InfoCard from './info-card';

const ProjectsSection = () => {
    const section1Visible = useAnimateEntrance("projects_section1");
    const section2Visible = useAnimateEntrance("projects_section2");
    const section3Visible = useAnimateEntrance("projects_section3");
    
    return (
        <div id='projects' className="pageSection font-[family-name:var(--font-geist-mono)] bg-green-500">
            <div className="p-8 sm:p-10">
                <h2 id='projects_section1' className={`text-2xl sm:text-6xl font-bold justify-self-left ${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Projects
                </h2>
                <div className={`bg-blue-300 h-1 w-20 mt-5 mb-5 ${section1Visible ? 'animate-fade-slide-in' : ''}`}/>

                <div className="flex flex-wrap">
                    <div id='projects_section2' className={`${section2Visible ? 'animate-fade-slide-in' : ''} p-5`}>
                        <InfoCard title="Spool Meter Management Sytem" description="Keep track of the remaining amount of material left in a spool and predict when it will run out." image="/grad.png"/>
                    </div>
                    <div id='projects_section3' className={`${section3Visible ? 'animate-fade-slide-in' : ''} p-5`}>
                        <InfoCard title="Cronocord" description="Discord bot helps manage schedules betweeen multiple people." image="/grad.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
    
  export default ProjectsSection;
"use client"

import useAnimateEntrance from './animate-entrance';

const ProjectsSection = () => {
    const section1Visible = useAnimateEntrance("projects_section1");
    
    return (
        <div id='projects' className="pageSection font-[family-name:var(--font-geist-mono)] bg-green-500">
            <div className="grid grid-rows-[1fr_1fr_1fr] p-8 sm:p-10">
                <div id='projects_section1' className={`${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Temp
                </div>
            </div> 
        </div>
    )
};
    
  export default ProjectsSection;
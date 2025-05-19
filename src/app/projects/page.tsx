"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import QueryReader from "@/components/query-reader";
import { Suspense } from "react";

let searchFilter = '';

enum SkillCatgegory {
    Language = '#FF6F61',
    Framework = '#4CAF50',
    Library = '#2196F3',
}

type Skill = {
    name: string
    category: SkillCatgegory;
}

type SkillFilterTag = {
    skill: Skill;
    selected: boolean;
    isFilter: boolean;
    setDisplayedProjects?: React.Dispatch<React.SetStateAction<typeof projects>>;
}

type ProjectInfoProps = {
    name: string;
    description: string;
    skillsUsed: Skill[];
    githubLink?: string;
}

const FilterProjects = (setDisplayedProjects: React.Dispatch<React.SetStateAction<typeof projects>>) => {
    // Update displayed projects
    const projectsToDisplay: React.ReactElement<typeof ProjectInfo>[]  = []
    const selectedSkills: string[] = []
    
    // 
    Object.entries(filteredSkills).forEach(([, value]: [string, { skill: Skill, selected: boolean}]) => {
        if (value.selected)
            selectedSkills.push(value.skill.name)
    });

    projects.forEach((curProject: React.ReactElement<typeof ProjectInfo>) => {
        // Access props of the component
        const props = curProject.props as unknown as ProjectInfoProps;
        const tempSkills = structuredClone(selectedSkills)

        // Skip project if the name doesnt match the search filter
        if (searchFilter !== '' && props.name.toLowerCase().startsWith(searchFilter) == false)
            return;
        
        // Remove any skills that are met
        props.skillsUsed.forEach((skill: Skill) => {
            const skillIndex = tempSkills.indexOf(skill.name);
            if (skillIndex !== -1) {
                tempSkills.splice(skillIndex, 1);
            }
        })
        
        // Display project if it has all the skills selected
        if (tempSkills.length == 0) {
            projectsToDisplay.push(curProject)
        }
    })
    
    if (setDisplayedProjects)
        setDisplayedProjects(projectsToDisplay)
}

const SearchAndFilterBar: React.FC<{setDisplayedProjects: React.Dispatch<React.SetStateAction<typeof projects>>, searchBarRef: React.RefObject<HTMLDivElement | null> }> = ({ setDisplayedProjects, searchBarRef }) => {
    const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (searchBarRef.current) {
            searchFilter = e.target.value.toLowerCase();
            FilterProjects(setDisplayedProjects)
        }
    }

    return (
        <div className="text-center w-full p-4 space-y-3">
            <div className="space-x-5">
                <label className="text-2xl">Filter by name:</label>
                <div ref={searchBarRef}>
                    <input  onChange={Search} id="search_filter" type="text" className="p-2 border rounded-4xl" />
                </div>
            </div>
            <div className="space-x-2">
                {filteredSkills.map((skillTag, index) => (
                    <SkillTag key={index} skill={skillTag.skill} selected={skillTag.selected} isFilter={true} setDisplayedProjects={setDisplayedProjects}/>
                ))}
            </div>
        </div>
    )
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ name, description, skillsUsed, githubLink}) => {
    return (
        <div id={name.replaceAll(' ', '_')} className="p-4 rounded-lg bg-[var(--color-bg-accent)] space-y-2">
            <h3 className="text-2xl font-bold">
                {name}
            </h3>
            <div>
                {description}
            </div>
            <div className="space-x-2 space-y-2">
                {skillsUsed.map((skill, index) => (
                    <SkillTag key={index} skill={skill} selected={true} isFilter={false}/>
                ))}
            </div>
            {githubLink && <Link href={githubLink} target="_blank" className="text-blue-600 hover:text-blue-800">GitHub</Link>}
        </div>
    );
}

const SkillTag: React.FC<SkillFilterTag> = ({skill, selected, isFilter, setDisplayedProjects}) => {
    const [isSelected, setSelected] = useState(selected);

    const toggleSelect = () => {
        if (isFilter) {
            setSelected(!isSelected);

            const toggledSkillIndex = filteredSkills.findIndex((skillTag) => {
                return skillTag.skill.name == skill.name
            })

            if (toggledSkillIndex !== -1)
                filteredSkills[toggledSkillIndex].selected = !isSelected

            if (setDisplayedProjects)
                FilterProjects(setDisplayedProjects)
        }
    }

    return (
        <div onClick={toggleSelect} style={{ backgroundColor: isSelected ? skill.category : 'var(--color-bg-alt-accent)' }} className={`${isFilter ? 'hover:animate-grow animate-shrink hover:cursor-default' : ''} inline-block px-2 py-1 rounded-full text-sm w-fit`}>
            {skill.name}
        </div>
    )
} 

const skillsDictionary: Record<string, Skill> = {
    'C#': { name: 'C#', category: SkillCatgegory.Language },
    'SQL': { name: 'SQL', category: SkillCatgegory.Library },
    'PHP': { name: 'PHP', category: SkillCatgegory.Language },
    'Python': { name: 'Python', category: SkillCatgegory.Language },
    'HTML': { name: 'HTML', category: SkillCatgegory.Language },
    'CSS': { name: 'CSS', category: SkillCatgegory.Language },
    'JavaScript': { name: 'JavaScript', category: SkillCatgegory.Language },
    'TypeScript': { name: 'TypeScript', category: SkillCatgegory.Language },
    'ASP.NET CORE': { name: 'ASP.NET CORE', category: SkillCatgegory.Framework },
    '.NET MAUI': { name: '.NET MAUI', category: SkillCatgegory.Framework },
    'Tailwind': { name: 'Tailwind', category: SkillCatgegory.Framework },
    'Next.js': { name: 'Next.js', category: SkillCatgegory.Framework },
    'React': { name: 'React', category: SkillCatgegory.Library },
    'jQuery': { name: 'jQuery', category: SkillCatgegory.Library },
};

const filteredSkills = Object.values(skillsDictionary).map((skill) => {
    return {
        skill: skill,
        selected: false,
    }
}).sort((a, b) => b.skill.category.toString().localeCompare(a.skill.category.toString()));

const projects: React.ReactElement<typeof ProjectInfo>[] = [
    <ProjectInfo
        key={0}
        name='Spool Meter Management System' 
        description=
            {`The Spool Meter Management System was my technical project for my final term at NAIT.
            The goal of the project is to track the usage of material on a spool and be able to predict when the spool will run out of material using recent usage data.
            This project required me to work with another student to create an iot device and a full stack application.
            I worked on the full stack application.
            I used .NET MAUI to create an andriod app, ASP.NET Core to create the API server, and Microsoft SQL Server for the database. 
            Push notifications were sent to the client from the server using Firebase. 
            .NET MAUI, Firebase, and Bluetooh Low Enegry were new technologies for me when starting this project so I had to learn them from scratch.
            Entity framework was used to interact with the database from the server and I used REST to communicate between the server and the client.`}
        skillsUsed={[
            skillsDictionary['C#'],
            skillsDictionary['ASP.NET CORE'],
            skillsDictionary['.NET MAUI'],
            skillsDictionary['SQL']
        ]}
        githubLink="https://github.com/JohnNasitem/Spool-Meter-Mangement-System/"
    />,
    <ProjectInfo 
        key={1}
        name='Cronocord'
        description=
            {`Cronocord is a Discord bot that helps manage schedules between multiple people.
            Users will add their availabilities and can then generate a schedule that contains all the availabilities of everyone the user has selected.
            This is a group project that was created for UofA's HackEd 2025 hackathon, the first hackathon I ever attended.
            This project taught me how to use Discord's API and a serverless database, and it strengthened my skills in teamwork, time management, and project management.
            After the hackathon, I remade the bot by myself in C# using discord.net.`}
        skillsUsed={[
            skillsDictionary['Python'],
            skillsDictionary['C#'],
            skillsDictionary['SQL']
        ]}
        githubLink="https://github.com/JohnNasitem/CronoCord/"
    />,
    <ProjectInfo 
        key={2}
        name='Website Portfolio'
        description=
            {`This is the website you are looking at right now.
            The computer engineering technology program I attended at NAIT taught me how to use HTML, CSS, Javascript, and jQuery, but I wanted to learn more modern web development technologies.
            Before this project, I had never used any other web development technologies and had little experience with UI/UX. 
            The goal of this project was the build experience with new techonlogies, so I had decided to learn Next.js, React, Tailwind, and Typescript.`}
        skillsUsed={[
            skillsDictionary['TypeScript'],
            skillsDictionary['HTML'],
            skillsDictionary['CSS'],
            skillsDictionary['JavaScript'],
            skillsDictionary['Tailwind'],
            skillsDictionary['Next.js'],
            skillsDictionary['React']
        ]}
        githubLink="https://github.com/JohnNasitem/Website-Portfolio"
    />
]

export default function Home() {
    const [displayedProjects, setProjects] = useState(projects);

    const searchBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        FilterProjects(setProjects)
        if (searchBarRef.current) {
            const input = searchBarRef.current?.querySelector('input');
            if (input) {
                input.value = searchFilter;
            }
        }
    }, []);


    return (
       <div className="p-4">
            <Suspense>
                <QueryReader onQuery={(query) => {searchFilter = query ? query.toLocaleLowerCase() : ''}} />
            </Suspense>
            <div className="w-full text-center text-4xl font-bold">Projects</div>
            <SearchAndFilterBar setDisplayedProjects={setProjects} searchBarRef={searchBarRef}/>
            <div className="grid gap-y-5">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`
                            ${displayedProjects.includes(project) ? '' : 'hidden'}`}>
                        {project}
                    </div>
                ))}
            </div>
       </div>
     );
}
     
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

enum SkillCatgegory {
    Language = '#FF6F61',
    Framework = '#4CAF50',
    Library = '#2196F3',
}

type Skill = {
    name: string
    category: SkillCatgegory;
}

const SkillTag: React.FC<SkillFilterTag> = ({skill, selected, isFilter}) => {
    const [isSelected, setSelected] = useState(selected);

    const toggleSelect = () => {
        if (isFilter) {
            console.log(`Filter by ${skill.name}`);
            setSelected(!isSelected);
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

type SkillFilterTag = {
    skill: Skill;
    selected: boolean;
    isFilter: boolean;
}

const filteredSkills = Object.values(skillsDictionary).map((skill) => {
    return {
        skill: skill,
        selected: false,
    }
}).sort((a, b) => b.skill.category.toString().localeCompare(a.skill.category.toString()));

type ProjectInfoProps = {
    name: string;
    description: string;
    skillsUsed: Skill[];
    githubLink?: string;
}

const SearchAndFilterBar: React.FC = () => {
    return (
        <div className="text-center w-full p-4 space-y-3">
            <div className="space-x-5">
                <label className="text-2xl">Filter by name:</label>
                <input type="text" className="p-2 border rounded-4xl" />
            </div>
            <div className="space-x-2">
                {filteredSkills.map((skillTag, index) => (
                    <SkillTag key={index} skill={skillTag.skill} selected={skillTag.selected} isFilter={true}/>
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
            {githubLink && <Link href={githubLink} className="text-blue-600 hover:text-blue-800">GitHub</Link>}
        </div>
    );
}

const projects = [
    <ProjectInfo 
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
            skillsDictionary['SQL'],
        ]}
    />
]

const displayedProjects = projects

export default function Home() {
    return (
       <div className="p-4">
            <div className="w-full text-center text-4xl font-bold">Projects</div>
            <SearchAndFilterBar/>
            {displayedProjects.map((project, index) => (
                <div key={index}>
                    {project}
                </div>
            ))}
       </div>
     );
}
     
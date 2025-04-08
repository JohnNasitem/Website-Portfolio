import { Slabo_13px } from "next/font/google";

enum SkillCatgegory {
    Language = '#FF0000',
    Framework = '#00FF00',
    Other = '#0000FF'
}

type Skill = {
    name: string
    category: SkillCatgegory;
}

type ProjectInfoProps = {
    name: string;
    description: string;
    skillsUsed: Skill[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ name, description, skillsUsed}) => {
    return (
        <div>
            {name} - {description} -
            {skillsUsed.map((skill, index) => (
                <div key={index} style={{ backgroundColor: skill.category}}>{skill.name}</div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
       <div>
            Add tags for different category of skills (ones displayed in the skills tab) color them by that category, each project should have a group of skills they use, and let the projects be sortable by skills
            <ProjectInfo name='Test Project' description="Project Description" skillsUsed={[{name:'C#', category:SkillCatgegory.Language}]} />
       </div>
     );
}
     
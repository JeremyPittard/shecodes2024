import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} alt={`${projectData.title} image`} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;

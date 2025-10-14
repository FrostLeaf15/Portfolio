function ProjectCard({title, image, description, link}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank">Lihat Project</a>
        </div>
    );
}

export default ProjectCard;
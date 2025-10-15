import Button from "./Button"

function ProjectCard({title, image, description, link}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Button href={link} label="Lihat Project"/>
        </div>
    );
}

export default ProjectCard;
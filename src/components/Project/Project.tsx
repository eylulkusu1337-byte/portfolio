import "./project.scss";

type ProjectItem = {
    id: number;
    img: string;
    link: string;
};

const projects: ProjectItem[] = [
    {
        id: 1,
        img: "/src/assets/img/project1.png",
        link: "https://yusufxl.github.io/Totembo/",
    },
    {
        id: 2,
        img: "/src/assets/img/project2.png",
        link: "https://umidjon2272.github.io/feng-shui/",
    },
    {
        id: 3,
        img: "/src/assets/img/project3.png",
        link: "https://umidjon2272.github.io/Vue-cinema/",
    },
    {
        id: 4,
        img: "/src/assets/img/project4.png",
        link: "https://vite-xi-topaz-80.vercel.app/",
    },
    
    
];

const Project = () => {
    return (
        <div className="project">
            <div className="container">
                <h1 className="project_title">
                    My Projects
                </h1>
                <section className="projects">
                    <div className="projects__wrapper">
                        <div className="projects__dots projects__dots--1"></div>
                        <div className="projects__dots projects__dots--2"></div>
                        <div className="projects__dots projects__dots--3"></div>
                        <div className="projects__arrow"></div>

                        {projects.map((item) => (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={item.id}
                                className={`projects__card projects__card--${item.id}`}
                            >
                                <img
                                    src={item.img}
                                    alt="project"
                                    className="projects__img"
                                />
                            </a>
                        ))}
                    </div>
                </section>
                <div className="project_box">
                    <p className="project_text">
                        I created these projects as practice to improve myself and gain experience. Through each project, I tried to learn new knowledge and strengthen my practical skills. These works are part of my development journey in programming.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Project;
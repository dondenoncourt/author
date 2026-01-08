import { Accordion } from 'react-bootstrap';

const Skill=()=>{
    const skills = [
        { name: 'Ruby', description: 'I became enamored with Ruby in 2008, after losing too much time learning PHP.' },
        { name: 'Rails', description: 'I moved to Rails in 2011 and never looked back.' },
        { name: 'SQL', description: 'I have used SQL since the 1990s on DB2, PostgreSQL, MySQL, and Microsoft SQL Server.' },
        { name: 'Javascript', description: 'I first used Javascript in 1998 and, after use a dozen libraries, I adopted jQuery.' },
        { name: 'Java', description: 'I was an early adopter of Java in 1996. I published several books and hundreds of articles on Java.' },
        { name: 'C++', description: 'I did C and C++ for six years. I wrote a C++-based RPG and Cobol debugger as well as an AS/400 performance tuner.' },
        { name: 'React.js', description: 'I started using React.js in 2022 and I love it' },
        { name: 'RPG', description: 'This was my first programming language, I cut my teeth on RPG for ERP applications. I later wrote a C++-based RPG debugger in the mid-1990s' },
        { name: 'Cobol', description: 'I did Cobol in college and a few years at Circuit City.' },
        { name: 'Linux', description: 'I am comfortable with Linux having published the book "Web Hosting on Linux".' },
        { name: 'AS/400-iSeries', description: 'I worked on the AS/400 for over a decade. I knew it inside and out as I wrote a profitable performance tuning tool.' },
        { name: 'Web Development', description: 'I have been a web developer since 1995, starting with HTML and PHP. I have also done a lot of work with JavaScript, jQuery, and React.js.' }
    ];

    return(
       <section>
        <h3>⚒ Skills</h3>
        <Accordion>
            {skills.map((skill, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{skill.name}</Accordion.Header>
                    <Accordion.Body>
                        {skill.description}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
       </section>
    )
}
export default Skill;

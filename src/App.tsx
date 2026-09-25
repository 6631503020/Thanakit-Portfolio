import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { projects, type Project } from './data/projects'
import resumePdf from './assets/resume.pdf.pdf'

const navItems = ['about', 'experience', 'projects', 'skills', 'contact']

const experiences = [
  { period: '2026', title: 'University Project: AI-Powered Room Booking System', role: 'Project Stakeholder / Business Consultant', details: ['Acted as the primary stakeholder for an AI-powered room booking system tailored for a sophomore project.', 'Defined core business requirements, project scope, and success metrics.', 'Evaluated project deliverables to ensure strict alignment with established business goals.'] },
  { period: '2025 — 2026', title: 'Senior Project: AI Dental Implant Detection (Collaborated with Faculty of Dentistry)', role: 'Business Analyst & Project Manager', details: ['Led requirement gathering and managed the Label Studio data pipeline to deliver a YOLO-based AI dental detection system.', 'Bridged communication and workflows between technical development teams and clinical dental teams.', 'Conducted comprehensive TAM/SAM/SOM market analysis for AI-ready hospitals in Thailand.', 'Designed a future premium subscription strategy to drive commercial viability and product growth.'] },
  { period: '2024', title: 'University Project: Pin & Plan (Travel Planning App)', role: 'Business Analyst', details: ['Elicited and documented detailed user requirements for a web-based travel planning platform.', 'Designed user flows and wireframes utilizing Figma to align business goals with technical implementation.', 'Facilitated Agile project management processes to ensure efficient team collaboration and timely delivery.'] },
  { period: '2023', title: 'University Project: Himmapan (Dormitory Booking App)', role: 'System Analyst & Frontend Developer', details: ['Analyzed student requirements to design the core system architecture for a dormitory booking application.', 'Developed a responsive frontend interface using Bootstrap and JavaScript to ensure a seamless user experience.', 'Aligned technical development with overarching business objectives, ensuring the final product fully met user needs.'] },
]

function Reveal({ children, className = '', direction = 'up' }: { children: React.ReactNode; className?: string; direction?: 'up' | 'left' | 'right' }) {
  const offset = direction === 'left' ? { x: -42, y: 0 } : direction === 'right' ? { x: 42, y: 0 } : { x: 0, y: 24 }
  return <motion.div className={className} initial={{ opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionHeader({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-header"><span className="section-number">{number}</span><span>{children}</span></div>
}

function Navbar() {
  return <header className="site-nav"><nav className="nav-links" aria-label="Primary navigation">{navItems.map((item, index) => <a key={item} href={`#${item}`}><span>0{index + 1}</span>{item}</a>)}</nav></header>
}

function ProjectPreview({ project }: { project: Project }) {
  return <div className={`project-preview preview-${project.theme}`}><img src={project.image} alt={`${project.name} project preview`} /><div className="preview-overlay"><div className="preview-topline"><span>THANAKIT / {project.number}</span><span>PROJECT STUDY</span></div><div className="preview-caption"><small>SELECTED PROJECT / 2026</small><strong>{project.screenLabel}</strong></div></div></div>
}

function ProjectCard({ project }: { project: Project }) {
  return <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}><motion.div initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}><ProjectPreview project={project} /></motion.div><Reveal direction="left"><div className="project-info"><div className="project-title"><span>{project.number}</span><h3>{project.name}</h3></div><p className="project-category">{project.category}</p><div className="project-meta"><p>{project.description}</p><div><span>{project.role}</span><span>{project.technologies.join(' · ')}</span></div></div><a className="project-link" href={project.url} target="_blank" rel="noreferrer">View Project <ArrowUpRight size={16} /></a></div></Reveal></motion.article>
}

function ExperienceTimeline() {
  return <div className="experience-timeline">{experiences.map((experience) => <Reveal className="timeline-item" direction="left" key={experience.title}><span className="timeline-dot" /><div className="timeline-content"><div className="timeline-heading"><div><h3>{experience.title}</h3><strong>{experience.role}</strong></div><time>{experience.period}</time></div><ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></Reveal>)}</div>
}

function GalaxyBackground() {
  return <div className="galaxy-background" aria-hidden="true"><span className="star-field" /><span className="constellation constellation-one" /><span className="constellation constellation-two" /><span className="planet planet-one" /><span className="planet planet-two" /><span className="shooting-star shooting-star-one" /><span className="shooting-star shooting-star-two" /><span className="shooting-star shooting-star-three" /></div>
}

function App() {
  return <div id="top"><GalaxyBackground /><Navbar /><main>
    <section className="hero page-grid"><div className="hero-kicker"><span>PORTFOLIO</span></div><div className="hero-heading"><motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}><motion.span variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>THANAKIT</motion.span><motion.span variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>CHUPVIROJ</motion.span></motion.h1></div><div className="hero-footer"><p>BUSINESS ANALYST <em>×</em><br />UX/UI DESIGNER</p><p className="hero-intro">Fourth-year Software Engineering student passionate about understanding people, shaping better products, and creating thoughtful digital experiences.</p><a className="scroll-cue" href="#about">SCROLL <ArrowDownRight size={16} /></a></div></section>
    <section id="about" className="content-section page-grid"><SectionHeader number="01">About Me</SectionHeader><div className="about-layout"><Reveal direction="left"><h2>Understanding needs.<br /><i>Designing possibilities.</i></h2></Reveal><Reveal className="about-copy"><p>My Name is Thanakit Chupviroj. Fourth-year Software Engineering student aspiring to be an IT Business Analyst. Experienced in requirement gathering, analyzing market viability, and bridging the gap between technical teams and business stakeholders.</p><p>I enjoy turning complex needs into clear, intuitive, and functional digital experiences.</p><div className="tag-list"><span>Business Analysis</span><span>UX/UI Design</span><span>Web Design</span><span>React</span><span>TypeScript</span><span>Figma</span></div><a className="resume-button" href={resumePdf} download="Thanakit-Chupviroj-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Download Resume <ArrowUpRight size={15} /></a></Reveal></div></section>
    <section id="experience" className="content-section page-grid"><SectionHeader number="02">Experience</SectionHeader><ExperienceTimeline /></section>
    <section id="projects" className="content-section projects-section page-grid"><SectionHeader number="03">Selected Projects</SectionHeader><div className="projects-list">{projects.map((project) => <Reveal key={project.number}><ProjectCard project={project} /></Reveal>)}</div></section>
    <section id="skills" className="content-section page-grid"><SectionHeader number="04">Skills</SectionHeader><Reveal className="skills-layout"><div className="skill-group"><span>ANALYSIS</span>{['Requirements Gathering', 'User Research', 'Problem Framing', 'User Flows', 'Documentation'].map((skill) => <strong key={skill}>{skill}</strong>)}</div><div className="skill-group"><span>DESIGN</span>{['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping'].map((skill) => <strong key={skill}>{skill}</strong>)}</div><div className="skill-group"><span>FRONTEND</span>{['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap'].map((skill) => <strong key={skill}>{skill}</strong>)}</div><div className="abilities"><span>ADDITIONAL ABILITIES</span><p>Article Writing<br />Public Speaking<br />Presentation<br />Commercial Negotiation<br />Project Supervision</p></div></Reveal></section>
    <section id="contact" className="contact-section page-grid"><SectionHeader number="05">Contact</SectionHeader><Reveal className="contact-content"><h2>Let's build something<br /><i>meaningful.</i></h2><div className="contact-bottom"><div><span>THANAKIT CHUPVIROJ</span><a href="mailto:tnk.chupviroj@gmail.com">tnk.chupviroj@gmail.com <ArrowUpRight size={15} /></a></div><div className="contact-links"><a href="https://github.com/6631503020" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div></div></Reveal></section>
  </main><footer className="footer page-grid"><span>© 2026 THANAKIT CHUPVIROJ</span><span>BUSINESS ANALYSIS · UX/UI · FRONTEND</span></footer></div>
}

export default App

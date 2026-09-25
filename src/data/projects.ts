import roomBookingImage from '../../pic/AI-Powered Room Booking System.png'
import dentalImage from '../../pic/AIDentalImplantDetection.png'
import pinPlanImage from '../../pic/Pin&Plan.png'
import himmapanImage from '../../pic/Himmapan.png'

export type Project = {
  number: string
  name: string
  category: string
  description: string
  technologies: string[]
  role: string
  theme: 'lime' | 'orange' | 'blue' | 'pink'
  screenLabel: string
  image: string
  url: string
}

export const projects: Project[] = [
  { number: '01', name: 'AI-Powered Room Booking System', category: 'University Project · Room Booking', description: 'An AI-powered room booking system tailored for student needs, with clear business requirements, defined project scope, and measurable success criteria.', technologies: ['Business Analysis', 'AI Product', 'Requirements'], role: 'Project Stakeholder / Business Consultant', theme: 'lime', screenLabel: 'Book the right room', image: roomBookingImage, url: 'https://www.figma.com/design/hfYUaBQn12beH7fZDbJEDE/SOS-DORMHUB?node-id=0-1&p=f&t=ThpF6GRjMjzJanLx-0' },
  { number: '02', name: 'AI Dental Implant Detection', category: 'Senior Project · Healthcare AI', description: 'An AI dental implant detection project developed with the Faculty of Dentistry, connecting clinical workflows, data operations, and commercial product strategy.', technologies: ['YOLO', 'Label Studio', 'TAM / SAM / SOM'], role: 'Business Analyst & Project Manager', theme: 'orange', screenLabel: 'Make clinical insight visible', image: dentalImage, url: 'https://ai-implantid.com/' },
  { number: '03', name: 'Pin & Plan', category: 'University Project · Travel Planning App', description: 'A web-based travel planning platform shaped through user requirements, Figma wireframes, user flows, and Agile collaboration.', technologies: ['Requirements', 'Figma', 'Agile'], role: 'Business Analyst', theme: 'blue', screenLabel: 'Plan your next place', image: pinPlanImage, url: 'https://play.google.com/store/apps/details?id=com.aboutblank.pinnplan&pcampaignid=web_share' },
  { number: '04', name: 'Himmapan', category: 'University Project · Dormitory Booking App', description: 'A dormitory booking application built from student requirements, with system architecture and a responsive Bootstrap and JavaScript frontend.', technologies: ['System Analysis', 'Bootstrap', 'JavaScript'], role: 'System Analyst & Frontend Developer', theme: 'pink', screenLabel: 'Find a place to feel at home', image: himmapanImage, url: 'https://www.figma.com/design/XYk9G7s0Zzl2fkroHo4a6N/Reserve-a-dormitory?node-id=72-22&t=Jxy3UrBqosCIIJ7T-0' },
]
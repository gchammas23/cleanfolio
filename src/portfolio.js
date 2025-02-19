const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gchammas23.github.io/portfolio',
  title: 'GC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel',
  role: 'Software Developer',
  description:
    'As a curious and detail-focused software developer, I thrive on collaborating with others to tackle challenges and deliver optimal outcomes. This portfolio showcases a selection of projects that reflect my evolving knowledge and skills. Thank you for taking the time to explore my work! 😊',
  resume: 'https://rb.gy/o878fo',
  social: {
    linkedin: 'https://linkedin.com/in/gabriel-chammas/',
    github: 'https://github.com/gchammas23',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Audio Library',
    description:
      'This repository contains several APIs for managing an audio library',
    stack: ['JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'JWT', 'Joi Validation'],
    sourceCode: `${about.social.github}/AudioLibrary`,
  },
  {
    name: 'EggTimer',
    description:
      'EggTimer is a macOS application that helps you cook your eggs to your preferences.',
    stack: ['Swift', 'UIKit'],
    sourceCode: `${about.social.github}/EggTimer`,
  },
  {
    name: 'BMI-App',
    description:
      'This is a BMI calculator app. Create an account, log in and calculate your bmi and keep track of it through the app.',
    stack: ['CSS', 'JavaScript', 'React', 'MongoDB', 'ExpressJS', 'NodeJS', 'Axios', 'Bootstrap', ],
    sourceCode: `${about.social.github}/Bmi-app`,
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'React',
  'Python',
  'NodeJS',
  'Git',
  'ExpressJS',
  'MongoDB',
  'NestJS',
  'Swift'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabrielchammas23@gmail.com',
}

export { header, about, projects, skills, contact }

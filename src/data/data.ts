/* eslint-disable max-len */
export interface ISocial{
  name: string;
  url: string;
}

export interface ICertification{
  name: string;
  issuedBy: string;
  verificationURL: string;
}

export interface IProject{
  name: string;
  companyName: string;
  url: string;
  description: string[];
  tags: string[];
}

// export interface IDate{
//   day: string;
//   month: string;
//   year: string;
// }

// export interface IDateRange{
//   startDate: IDate;
//   endDate: IDate;
// }

export interface IExperience{
  companyName: string;
  endDate: string;
  position: string;
  startDate: string;
  summary: string;
  website: string;
}

export interface ISkill{
  languages: string[];
  frameworks: string[];
  tools: string[];
  design: string[];
  devtools: string[];
}

export interface IStudent{
  avatar: string;
  name: string;
  quote: string;
}

export interface IProfile{
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
}

const profile : IProfile = {
  name: 'Muhammad Adnan Mustafa',
  intro: 'Ruby On Rails Full Stack Developer, Contact: +92 315 386 7744',
  students: [
    {
      name: 'UrRong',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQHNewoR5FzCaQ/profile-displayphoto-shrink_400_400/0/1587200960601?e=1623888000&v=beta&t=mquh0pdkolkg1VWbpkIKU2BlskgnfJSyNhTxyowWVU8',
      quote: 'http://www.urrong.com/',
    },
    {
      name: 'Umair Zafar',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEnZr7IWnstyQ/profile-displayphoto-shrink_400_400/0/1615956840787?e=1623888000&v=beta&t=HtxlJheHPxhmfW9J0M7gxlzDcG0yAtsuKcmPWBjxNCY',
      quote: 'Mechanical Engineer turned Front-End Engineer',
    },
    {
      name: 'Muhammad Naeem Shahzad',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEpvSpnRoE2fQ/profile-displayphoto-shrink_400_400/0/1615923251107?e=1623888000&v=beta&t=zMxgT_UcKU8T_S-bcV1pgwEtuCybrwQGmbssd5NZY-A',
      quote: 'Front-End Developer at Uncle Fixer',
    },
    {
      name: 'Ahmad Muzzafar',
      avatar: '',
      quote: 'Learning to crawl, walk, run and fly.',
    },
    {
      name: 'Muhammad Shahzeb',
      avatar: '',
      quote: 'Learning to crawl, walk, run and fly.',
    },
  ],
  phone: '+923153867744',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adnanmirza-/',
    },
    {
      name: 'Github',
      url: 'http://www.github.com/adnanmirza1',
    },
    {
      name: 'Instagram',
      url: 'http://www.instagram.com/bunny.mee',
    },
    {
      name: 'Twitter',
      url: 'http://www.twitter.com/',
    },
  ],
  email: 'mirzaadnanmustafa@yahoo.com',
  bio: ['I`m a Results-oriented Ruby on Rails Developer, with 2+ years of work experience. Aiming to leverage academic experience and a proven knowledge of web development, programming, and application development to successfully fill the Software Developer role at your company. Frequently praised as adaptable by my peers, I can be relied upon to help your company achieve its goals.',
    'My interests range from Ruby on Rails development to full stack Web Development.'],
  skills: {
    languages: ['Ruby', 'CoffeeScript', 'Javascript', 'HTML', 'CSS/Sass', 'SQL'],
    frameworks: ['Rails', 'React'],
    tools: ['Git', 'Postman', 'Chrome DevTools', 'Trello', 'Jira'],
    design: ['Figma', 'Adobe'],
    devtools: ['RubyMine', 'VSCode', 'Visual Studio', 'Atom'],
  },
  experiences: [
    {
      companyName: 'Viral Square',
      endDate: 'Currently Working here',
      position: 'Software Engineer',
      startDate: '2020-07-17',
      summary: 'Viral Square is a software development company with a legacy of adding value to progressive businesses through optimized digital transformations and tailored software solutions. Their main expertise are Web Development, Mobile Application Development, UI/UX development',
      website: 'https://www.linkedin.com/company/viral-square/',
    },
    {
      companyName: 'Alchemative',
      endDate: '2018-09-31',
      position: 'Software Engineer',
      startDate: '2020-06-09',
      summary: 'While working as an Software Engineer, my responsibilities included the Platform-independence of Reports module in cross-browser environments by converting ASP Classic pages to ASP .NET Web Forms & VB Scripts to JavaScript/JQuery.',
      website: 'https://www.linkedin.com/company/alchemative',
    },
    {
      companyName: 'Aabshar - Plan9 - PITB\'s Tech Incubator',
      endDate: '2020-06-05',
      position: 'Web Developer',
      startDate: '2019-11-6',
      summary: 'At Aabshar, my job was to create design and maintain their website as a full stack web developer. I had designed most of their front end.',
      website: 'https://www.linkedin.com/company/plan9---pitbs-tech-incubator/',
    },
    {
      companyName: 'Bizclan',
      endDate: '2019-10-26',
      position: 'Bidding Expert and Web Development Intern',
      startDate: '2019-08-30',
      summary: 'While working for Bizclan, I learned languages such as HTML, CSS and JavaScript. I also learn bidding on multiple freelancing platforms.',
      website: 'https://www.linkedin.com/company/bizzclan/',
    },
    {
      companyName: 'EMS - Punjab University College of Information Technology,Lahore',
      endDate: '2019-12-25',
      position: 'Assistant Management',
      startDate: '2018-11-12',
      summary: 'In the apprenticeship of Sir Farhan Khalid, I was given the opportunity to assist and manage the events of PUCIT. This opportunity served me as a benchmark to learn crowd management and presentational skills.',
      website: 'https://www.linkedin.com/company/punjab-university-college-of-information-technology-lahore/',
    },
  ],
  certifications: [{
    name: 'Front End with React',
    issuedBy: 'Coursera',
    verificationURL: 'https://www.coursera.org/account/accomplishments/certificate/22Y2A8JUBPPF',
  },
  {
    name: 'Python Bootcamp',
    issuedBy: 'Udemy',
    verificationURL: 'https://www.udemy.com/certificate/UC-2dedd5f8-759d-43be-94fb-151977928f55/',
  },
  ],
  projects: [
    {
      name: 'UrRong | Ruby on Rails Web Application',
      companyName: 'UrRong',
      url: 'http://www.urrong.com/',
      description: ['UrRong is a Web Application for reading and finding Essays with multiple filters working in real time.'],
      tags: ['Ruby', 'Rails', 'Ajax', 'Javascript', 'Bootstrap', 'CSS'],
    },
    {
      name: 'The Digital Claims | Ruby on Rails Web Application',
      companyName: 'Viral Square Development',
      url: 'https://thedigitalclaims.com/',
      description: ['The Digital Claims is a USA based Claims processing and Digital Appraisal services. Using multiple databases and subdomains for each company.'],
      tags: ['Ruby', 'Rails', 'Javascript', 'Bootstrap', 'CSS'],
    },
    {
      name: 'WarmLofts Insulation | Ruby on Rails Web Application',
      companyName: 'Warm Lofts Insulation, UK',
      url: 'https://warmloftsinsulation.co.uk/',
      description: ['Warm Lofts Insulation is a UK based Company which provides Spray foam insulation with complete panel of managing their services.'],
      tags: ['Ruby', 'Rails', 'Javascript', 'Bootstrap', 'CSS'],
    },
    {
      name: 'OPENWORK.club MIXER',
      companyName: 'Warm Lofts Insulation, UK',
      url: 'https://warmloftsinsulation.co.uk/',
      description: ['OPENWORK.club MIXER is a complete digital calculator consist of multiple fields and formulas to calculate their company configs.'],
      tags: ['PHP', 'JS', 'JQUERY', 'CSS', 'HTML'],
    },
  ],
};

const getProfileData = () => profile;

export default getProfileData;

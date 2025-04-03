export type Profile = {
  id: string
  name: string
  avatar: string
  shortDescription: string
  biography: string
  email: string
  phone: string
  address: string
  coordinates: {
    latitude: number
    longitude: number
  }
  skills: string[]
  createdAt: string
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "UX Designer with 5+ years of experience",
    biography:
      "Alex is a passionate UX designer who specializes in creating intuitive digital experiences. With a background in psychology and design, Alex brings a unique perspective to every project. Having worked with startups and enterprise clients, Alex has developed a versatile approach to design challenges.",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    address: "123 Design Ave, San Francisco, CA",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    skills: ["UI Design", "User Research", "Prototyping", "Figma", "Adobe XD"],
    createdAt: "2023-01-15T08:30:00Z",
  },
  {
    id: "2",
    name: "Sam Rivera",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Full Stack Developer specializing in React",
    biography:
      "Sam is a full stack developer with expertise in React, Node.js, and cloud infrastructure. With a computer science degree and 7 years of industry experience, Sam has built everything from e-commerce platforms to real-time collaboration tools. Sam is passionate about clean code and mentoring junior developers.",
    email: "sam.rivera@example.com",
    phone: "(555) 234-5678",
    address: "456 Code Blvd, Austin, TX",
    coordinates: {
      latitude: 30.2672,
      longitude: -97.7431,
    },
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    createdAt: "2023-02-20T10:15:00Z",
  },
  {
    id: "3",
    name: "Taylor Kim",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Data Scientist with focus on ML applications",
    biography:
      "Taylor is a data scientist with a PhD in Computer Science and a focus on machine learning applications. With experience at leading tech companies, Taylor has developed algorithms that power recommendation systems used by millions. Taylor is passionate about ethical AI and regularly speaks at industry conferences.",
    email: "taylor.kim@example.com",
    phone: "(555) 345-6789",
    address: "789 Data Drive, Seattle, WA",
    coordinates: {
      latitude: 47.6062,
      longitude: -122.3321,
    },
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Visualization", "Statistics"],
    createdAt: "2023-03-10T14:45:00Z",
  },
  {
    id: "4",
    name: "Jordan Patel",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Product Manager with agile methodology expertise",
    biography:
      "Jordan is a product manager with a strong background in agile methodologies. After starting as a software developer, Jordan transitioned to product management to have a more direct impact on user experience. Jordan has successfully launched products in fintech, healthcare, and e-commerce sectors.",
    email: "jordan.patel@example.com",
    phone: "(555) 456-7890",
    address: "101 Product Road, Chicago, IL",
    coordinates: {
      latitude: 41.8781,
      longitude: -87.6298,
    },
    skills: ["Agile", "Scrum", "Product Strategy", "User Stories", "Roadmapping"],
    createdAt: "2023-04-05T09:20:00Z",
  },
  {
    id: "5",
    name: "Morgan Chen",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "DevOps Engineer focused on CI/CD pipelines",
    biography:
      "Morgan is a DevOps engineer with expertise in building and optimizing CI/CD pipelines. With a background in system administration and software development, Morgan brings a comprehensive approach to infrastructure challenges. Morgan has helped multiple organizations transition to microservices architecture and implement robust deployment processes.",
    email: "morgan.chen@example.com",
    phone: "(555) 567-8901",
    address: "202 DevOps Street, Portland, OR",
    coordinates: {
      latitude: 45.5051,
      longitude: -122.675,
    },
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    createdAt: "2023-05-12T11:30:00Z",
  },
  {
    id: "6",
    name: "Casey Wilson",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Marketing Specialist with digital focus",
    biography:
      "Casey is a marketing specialist with a focus on digital channels and analytics. With experience at both agencies and in-house teams, Casey has developed comprehensive marketing strategies for brands across various industries. Casey is particularly interested in the intersection of data analytics and creative content.",
    email: "casey.wilson@example.com",
    phone: "(555) 678-9012",
    address: "303 Marketing Avenue, New York, NY",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Social Media"],
    createdAt: "2023-06-18T13:10:00Z",
  },
  {
    id: "7",
    name: "Riley Thompson",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "UI Developer specializing in accessible interfaces",
    biography:
      "Riley is a UI developer with a passion for creating accessible interfaces. With formal training in both design and development, Riley bridges the gap between creative vision and technical implementation. Riley has worked on projects for government agencies and educational institutions, ensuring digital experiences are available to all users.",
    email: "riley.thompson@example.com",
    phone: "(555) 789-0123",
    address: "404 Interface Lane, Boston, MA",
    coordinates: {
      latitude: 42.3601,
      longitude: -71.0589,
    },
    skills: ["HTML/CSS", "JavaScript", "Accessibility", "WCAG", "Responsive Design"],
    createdAt: "2023-07-22T15:40:00Z",
  },
  {
    id: "8",
    name: "Avery Martinez",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Cybersecurity Analyst with focus on application security",
    biography:
      "Avery is a cybersecurity analyst specializing in application security. With certifications in ethical hacking and secure coding practices, Avery helps organizations identify and address vulnerabilities in their software. Avery regularly conducts security audits and penetration testing for financial and healthcare clients.",
    email: "avery.martinez@example.com",
    phone: "(555) 890-1234",
    address: "505 Security Circle, Denver, CO",
    coordinates: {
      latitude: 39.7392,
      longitude: -104.9903,
    },
    skills: ["Penetration Testing", "Vulnerability Assessment", "OWASP", "Security Auditing", "Encryption"],
    createdAt: "2023-08-30T16:25:00Z",
  },
  {
    id: "9",
    name: "Quinn Nguyen",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Project Manager specializing in remote teams",
    biography:
      "Quinn is a project manager with expertise in coordinating remote and distributed teams. Having managed projects across different time zones and cultures, Quinn has developed effective strategies for communication and collaboration in virtual environments. Quinn's projects consistently deliver on time and within budget.",
    email: "quinn.nguyen@example.com",
    phone: "(555) 901-2345",
    address: "606 Project Place, Miami, FL",
    coordinates: {
      latitude: 25.7617,
      longitude: -80.1918,
    },
    skills: ["Project Management", "Remote Collaboration", "Budgeting", "Risk Management", "Stakeholder Communication"],
    createdAt: "2023-09-14T12:50:00Z",
  },
  {
    id: "10",
    name: "Jamie Lee",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Content Strategist with B2B focus",
    biography:
      "Jamie is a content strategist specializing in B2B marketing and communications. With a background in journalism and digital marketing, Jamie creates content that educates and engages professional audiences. Jamie has developed content strategies for SaaS companies, professional services firms, and industry associations.",
    email: "jamie.lee@example.com",
    phone: "(555) 012-3456",
    address: "707 Content Court, Nashville, TN",
    coordinates: {
      latitude: 36.1627,
      longitude: -86.7816,
    },
    skills: ["Content Strategy", "Copywriting", "Editorial Planning", "SEO", "Brand Messaging"],
    createdAt: "2023-10-08T17:15:00Z",
  },
  {
    id: "11",
    name: "Reese Jackson",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Mobile App Developer with iOS expertise",
    biography:
      "Reese is a mobile app developer with a focus on iOS applications. With a degree in computer science and years of experience with Swift and Objective-C, Reese has published numerous apps on the App Store. Reese is passionate about creating intuitive mobile experiences and staying current with Apple's evolving design guidelines.",
    email: "reese.jackson@example.com",
    phone: "(555) 123-4567",
    address: "808 Mobile Street, Los Angeles, CA",
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    skills: ["iOS Development", "Swift", "UIKit", "SwiftUI", "App Store Optimization"],
    createdAt: "2023-11-19T10:30:00Z",
  },
  {
    id: "12",
    name: "Dakota Smith",
    avatar: "/placeholder.svg?height=150&width=150",
    shortDescription: "Blockchain Developer with smart contract expertise",
    biography:
      "Dakota is a blockchain developer specializing in smart contract development and decentralized applications. With a background in cryptography and distributed systems, Dakota has contributed to several open-source blockchain projects. Dakota is passionate about the potential of blockchain technology to transform industries beyond finance.",
    email: "dakota.smith@example.com",
    phone: "(555) 234-5678",
    address: "909 Blockchain Blvd, Atlanta, GA",
    coordinates: {
      latitude: 33.749,
      longitude: -84.388,
    },
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DApp Development"],
    createdAt: "2023-12-25T14:20:00Z",
  },
]


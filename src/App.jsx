import { useState } from 'react'
import './App.css'

const assignments = [
  {
    id: 1,
    title: "Assignment 1 - REST API",
    color: "#10b981",
    objective: "Demonstrate proficiency in building and testing CRUD RESTful APIs using Spring Boot and Postman, showcasing the fundamental operations of Create, Read, Update, and Delete for user data management.",
    tags: ["Spring Boot", "Postman", "CRUD", "REST API"],
    pdf: "/assignment1.pdf",
    github: "https://github.com/lanserinno/springboot-restful-service"
  },
  {
    id: 2,
    title: "Assignment 2 - AWS Infrastructure",
    color: "#f59e0b",
    objective: "Create a comprehensive How-To document guide based on the AWS Tutorial for beginners, covering the setup and configuration of EC2, S3, and RDS services to host a complete web application on Amazon Web Services.",
    tags: ["AWS", "EC2", "S3", "RDS", "Cloud Hosting"],
    pdf: "/assignment2.pdf"
  },
  {
    id: 3,
    title: "Assignment 3 - Docker Study",
    color: "#3b82f6",
    objective: "Complete a 6-week comprehensive study plan on Docker and containerization, covering foundations, image building, networking, storage, orchestration with Docker Compose, and security best practices.",
    tags: ["Docker", "Containers", "Docker Compose", "DevOps"],
    pdf: "/assignment3.pdf"
  },
  {
    id: 4,
    title: "Lab Activity - Docker Image",
    color: "#8b5cf6",
    objective: "Hands-on lab activity demonstrating the creation of custom Docker images using Nginx to serve static HTML content, applying containerization concepts in a practical deployment scenario.",
    tags: ["Docker", "Nginx", "HTML", "Container Build"],
    pdf: "/lab_activity_docker_image.pdf",
    github: "https://github.com/lanserinno/DockerActivity"
  },
  {
    id: 5,
    title: "Assignment 4 - Comparative Report",
    color: "#ec4899",
    objective: "Develop a narrative comparative analysis report examining the key differences, advantages, and use cases between Virtualization and Containerization technologies in modern cloud infrastructure.",
    tags: ["Virtualization", "Containerization", "Analysis", "Report"],
    pdf: "/assignment4.pdf"
  },
  {
    id: 6,
    title: "Assignment 5 - Kubernetes Lab",
    color: "#06b6d4",
    objective: "Complete hands-on Kubernetes lab activities including Hello Minikube tutorial and WordPress deployment, demonstrating container orchestration and management skills using Kubernetes.",
    tags: ["Kubernetes", "Minikube", "WordPress", "Orchestration"],
    pdf: "/assignment5.pdf"
  }
]

function App() {
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState('')

  const openPdfModal = (pdf, title) => {
    setSelectedPdf(pdf)
    setSelectedTitle(title)
  }

  const closePdfModal = () => {
    setSelectedPdf(null)
    setSelectedTitle('')
  }

  return (
    <div className="app">
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
      
      <header className="hero">
        <div className="hero-content">
          <div className="badge">ELEC3 Cloud Computing</div>
          <h1 className="title">
            <span className="title-main">Finals Compilation</span>
            <span className="title-accent">2025</span>
          </h1>
          <p className="subtitle">
            A comprehensive digital portfolio of assignments, lab activities, 
            and research reports completed for Cloud Computing
          </p>
          <div className="author-card">
            <div className="author-avatar">LV</div>
            <div className="author-info">
              <span className="author-name">Lans Clarence S. Villena</span>
              <span className="author-section">IV - ACSAD</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cloud-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C14.9798 5 17.4522 7.17213 17.9203 10.0194C20.2085 10.2313 22 12.1564 22 14.5C22 16.9853 19.9853 19 17.5 19H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="assignments-section">
          <h2 className="section-title">Course Work Portfolio</h2>
          <div className="assignments-grid">
            {assignments.map((assignment, index) => (
              <article 
                key={assignment.id} 
                className="assignment-card"
                style={{ '--accent-color': assignment.color, '--delay': `${index * 0.1}s` }}
              >
                <div className="card-header">
                  <span className="card-number">0{assignment.id}</span>
                </div>
                <h3 className="card-title">{assignment.title}</h3>
                <p className="card-objective">
                  <strong>Objective:</strong> {assignment.objective}
                </p>
                <div className="card-tags">
                  {assignment.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <button 
                    className="view-btn"
                    onClick={() => openPdfModal(assignment.pdf, assignment.title)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    View Document File
                  </button>
                  {assignment.github && (
                    <a 
                      href={assignment.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Repository
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 ELEC3 Finals Compilation</p>
          <p className="footer-sub">Cloud Computing • IV - ACSAD</p>
        </div>
      </footer>

      {selectedPdf && (
        <div className="modal-overlay" onClick={closePdfModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedTitle}</h3>
              <div className="modal-actions">
                <a 
                  href={selectedPdf} 
                  download 
                  className="download-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
                <button className="close-btn" onClick={closePdfModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="pdf-container">
              <iframe 
                src={selectedPdf} 
                title={selectedTitle}
                width="100%" 
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

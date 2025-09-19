import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Download,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  User,
  MessageCircle,
  ChevronDown,
  Calendar
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import profileImage from '@/assets/jayant-profile.jpg';

const Portfolio = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const handleResumeDownload = () => {
    window.open('/assets/Jayant_Kaushik_Resume.pdf', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['C++', 'Java', 'C', 'Python', 'JavaScript', 'HTML', 'CSS', 'PHP'],
    frameworks: ['Node.js', 'Express.js', 'React.js', 'Angular', 'Laravel', 'Bootstrap', 'Mongoose'],
    databases: ['MySQL', 'MongoDB'],
    other: ['Data Structures & Algorithms', 'Competitive Programming', 'Web Development', 'DevOps'],
    soft: ['Problem Solving', 'Leadership', 'Project Management', 'Adaptability']
  };

  const experience = [
    {
      title: 'Chief Operating Officer (COO)',
      company: 'MindFuel (EdTech Startup)',
      location: 'Onsite',
      period: 'Oct 2024 – Mar 2025',
      description: [
        'Led operational strategy to drive 42% user engagement growth through analytics and UX enhancements.',
        'Directed cross-functional teams, streamlining delivery cycles and improving learning outcomes with data-driven processes.'
      ]
    },
    {
      title: 'Frontend Intern',
      company: 'Biologic Products Pvt. Ltd.',
      location: 'Remote',
      period: 'Jun 2024 – Jul 2024',
      description: [
        'Developed a responsive React.js website with Bootstrap, increasing user engagement by 25%.',
        'Optimized data access by 30% through structured data pipelines using Python, SQL, and Excel for 50+ companies.'
      ]
    }
  ];

  const projects = [
    {
      title: 'e-School – School Management System',
      description: 'Built a School Management System using the MERN stack with 3 role-based access for Admins, Teachers, and Students.',
      highlights: 'Automated attendance, grading, and reporting, saving 6+ hours/week with secure, responsive design.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
    },
    {
      title: 'Pixel Harbor – HD Wallpaper App',
      description: 'Developed using Node.js and Express.js; featured 1,000+ HD wallpapers with downloads under 3 seconds.',
      highlights: 'Achieved 30% boost in DAU and 95% improvement in load times through performance optimization.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Performance Optimization']
    },
    {
      title: 'Algo Visualizer – DSA Animation Tool',
      description: 'Created an algorithm visualizer using React.js and D3.js to demonstrate Dijkstra, Merge Sort, Binary Search, etc.',
      highlights: 'Helped 10,000+ users understand DSA concepts via intuitive, real-time visual feedback.',
      tech: ['React.js', 'D3.js', 'JavaScript', 'Algorithms']
    }
  ];

  const achievements = [
    'Co-Founder, Jeevan Innovations: Initiative to build impact-driven web/mobile apps through strategic leadership and collaboration.',
    'Event Leader: Organized & conducted workshops/seminars with Tech Stack, Team7, Legacy, Apna College LPU.',
    'Smart India Hackathon Semi-Finalist: Shortlisted for Disaster Management project by university.',
    'NCC \'B\' Certificate Holder: Served as Company Leader with distinction in shooting and leadership.',
    'Letter of Recommendation: Recognized for performance and discipline during internship tenure.'
  ];

  const certifications = [
    'Generative AI – Coursera',
    'AI & ML: Getting Started – LinkedIn',
    'DevOps: Beginner Guide – LinkedIn',
    'Design & Analysis of Algorithms – Coursera',
    'Python Toolkit for Data Science: ML and Deep Learning',
    'SQL Bootcamp (3 Days)',
    'Python Basics – GUVI',
    'Fundamentals of Management – University of California, Irvine (Coursera)',
    'Become a Data Scientist – LinkedIn'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl gradient-text">Jayant Kaushik</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Contact
              </button>
            </div>
            <Button variant="hero" onClick={handleResumeDownload}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fadeInUp">
              <img
                src={profileImage}
                alt="Jayant Kaushik"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-glow animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fadeInUp [animation-delay:0.2s]">
              Jayant Kaushik
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-fadeInUp [animation-delay:0.4s]">
              Full Stack Developer & Tech Innovator
            </p>
            <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto animate-fadeInUp [animation-delay:0.6s]">
              Computer Science student, COO at MindFuel, passionate about creating innovative web solutions 
              and leading cross-functional teams to deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp [animation-delay:0.8s]">
              <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline-hero" size="lg" onClick={() => scrollToSection('projects')}>
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
            <div className="mt-12 animate-fadeInUp [animation-delay:1s]">
              <ChevronDown 
                className="w-8 h-8 text-primary-foreground/60 mx-auto animate-bounce cursor-pointer"
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Passionate about technology and innovation, I combine technical expertise with leadership experience 
                to create impactful solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-gradient-card border-card-border shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Professional Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground leading-relaxed">
                      I'm a dedicated Computer Science student at Lovely Professional University with a passion for 
                      full-stack development and competitive programming. Currently serving as COO at MindFuel, 
                      I've led operational strategies that drove 42% user engagement growth and directed cross-functional teams.
                    </p>
                  </CardContent>
                </Card>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>jayantkaushikjdk@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91-9389848096</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-card border-card-border shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Databases & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[...skills.databases, ...skills.other].map((skill) => (
                        <Badge key={skill} variant="accent">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Experience</h2>
              <p className="text-muted-foreground text-lg">
                Professional journey and leadership roles in tech organizations.
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-card-border shadow-medium">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-accent">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-card-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                Innovative solutions built with modern technologies and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gradient-card border-card-border shadow-medium hover:shadow-large transition-smooth group">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span className="text-lg">{project.title}</span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {project.highlights}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-8">Education</h2>
                <Card className="bg-gradient-card border-card-border shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Lovely Professional University, Punjab
                    </CardTitle>
                    <CardDescription>B.Tech, Computer Science & Engineering</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">CGPA:</span>
                        <span className="text-accent">7.56</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Duration:</span>
                        <span>Aug 2022 – Present</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Certifications
                  </h3>
                  <div className="space-y-2">
                    {certifications.slice(0, 5).map((cert, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                    <details className="text-sm">
                      <summary className="cursor-pointer text-accent hover:text-accent-glow">
                        Show more certifications...
                      </summary>
                      <div className="mt-2 space-y-2">
                        {certifications.slice(5).map((cert, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-8">Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="bg-gradient-card border-card-border shadow-medium">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <p className="text-card-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
              <p className="text-muted-foreground text-lg">
                Ready to collaborate on innovative projects or discuss opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-gradient-card border-card-border shadow-medium">
                  <CardHeader>
                    <CardTitle>Get In Touch</CardTitle>
                    <CardDescription>
                      Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>jayantkaushikjdk@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91-9389848096</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>India</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-gradient-card border-card-border shadow-medium">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Jayant Kaushik. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
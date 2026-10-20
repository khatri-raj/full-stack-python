import { useState } from "react";
import {
  Calendar,
  IndianRupee,
  FolderKanban,
  User,
  Code2,
  Briefcase,
  Award,
  GitBranch as Github,
  Users,
  Laptop,
  Globe,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Rocket,
  Star,
  Send,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { icon: <User className="w-6 h-6" />, title: "Expert Guidance", desc: "Learn from experienced mentors" },
    { icon: <Code2 className="w-6 h-6" />, title: "Practical Learning", desc: "Live coding & real-world examples" },
    { icon: <Briefcase className="w-6 h-6" />, title: "2 Real Projects", desc: "Build portfolio-ready applications" },
    { icon: <Award className="w-6 h-6" />, title: "Certificate", desc: "Get course completion certificate" },
    { icon: <Github className="w-6 h-6" />, title: "GitHub & LinkedIn", desc: "Build your profile & professional network" },
    { icon: <Users className="w-6 h-6" />, title: "Placement Support", desc: "Resume building & interview preparation" },
  ];

  const modules = [
    {
      id: "01",
      title: "Web Fundamentals",
      color: "from-blue-600 to-blue-800",
      icon: "HTML5",
      points: ["HTML5, CSS3, Responsive Design", "JavaScript Basics", "JavaScript DOM & Events", "Mini Project: Personal Portfolio"],
      month: "Month 1",
    },
    {
      id: "02",
      title: "Python & OOP",
      color: "from-green-600 to-green-800",
      icon: "Python",
      points: ["Python Basics & Data Structures", "Functions, Modules, File Handling", "OOP (Classes, Inheritance, Polymorphism)", "Mini Project: Python Applications"],
      month: "Month 2",
    },
    {
      id: "03",
      title: "DBMS & Django Basics",
      color: "from-purple-600 to-purple-800",
      icon: "DB",
      points: ["Database Design & Normalization", "SQL Queries & Joins", "Django Architecture & Models", "Mini Project: DB Connected App"],
      month: "Month 3",
    },
    {
      id: "04",
      title: "Django Backend Development",
      color: "from-emerald-600 to-emerald-800",
      icon: "dj",
      points: ["CRUD Operations", "Forms & Validation", "Authentication & Admin Panel", "REST API Fundamentals"],
      month: "Month 4",
    },
    {
      id: "05",
      title: "React & Full Stack Integration",
      color: "from-pink-600 to-pink-800",
      icon: "React",
      points: ["Components, Props, State, Hooks", "Routing & API Calls", "Connect React with Django", "Mini Project: Full Stack App"],
      month: "Month 5",
    },
    {
      id: "06",
      title: "Projects & Career Readiness",
      color: "from-amber-600 to-amber-800",
      icon: "Career",
      points: ["Git & GitHub", "Deployment (Vercel/Render)", "LinkedIn Profile & Resume", "Interview Preparation"],
      month: "Month 6",
    },
  ];

  const whyChoose = [
    "Complete Full Stack Development",
    "Hands-on Practical Training",
    "2 Portfolio Projects",
    "GitHub, LinkedIn & Resume Support",
    "Certificate After Completion",
    "Placement & Career Guidance",
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Syllabus", href: "#syllabus" },
    { name: "Projects", href: "#projects" },
    { name: "Fee & Timeline", href: "#fee" },
    { name: "Why Join?", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              {"</>"}
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight group-hover:text-blue-300 transition">Full Stack Python</h1>
              <p className="text-[10px] text-blue-300 tracking-wider">Learn • Build • Grow</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1 hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden lg:flex btn-press bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-105"
          >
            Enroll Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-90"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1220] border-t border-white/10 px-4 py-4 space-y-2 animate-[fadeIn_0.3s_ease]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-3 text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 rounded-full font-semibold btn-press hover:scale-105 transition"
            >
              Enroll Now
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-pulse-glow">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              6 MONTHS • HANDS-ON • JOB ORIENTED
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Full Stack{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Python
              </span>
              <br />
              Development
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-3 max-w-lg mx-auto lg:mx-0">
              Learn to build real-world web applications using Python, Django, React and modern web technologies.
            </p>
            <p className="text-blue-300 font-medium mb-8">
              From zero to hero – Build your skills, your projects and your future!
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {[
                { icon: <Calendar className="w-5 h-5 text-blue-400" />, label: "Duration", value: "6 Months" },
                { icon: <IndianRupee className="w-5 h-5 text-green-400" />, label: "Course Fee", value: "₹8,000/-" },
                { icon: <FolderKanban className="w-5 h-5 text-purple-400" />, label: "Projects", value: "2 Projects" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <div className="icon-bounce">{s.icon}</div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">{s.label}</p>
                    <p className="font-semibold">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="btn-press bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group"
              >
                Enroll Now <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/Full_Stack_Python_Syllabus.pdf"
                download="Full_Stack_Python_Syllabus.pdf"
                className="btn-press border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
              >
                <Download className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" /> Download Syllabus
              </a>
            </div>
          </div>

          {/* Laptop Visual */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Floating badges with animation */}
              <div className="absolute -top-3 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-sm font-medium shadow-xl animate-float hover:scale-110 transition-transform cursor-default">
                <span className="text-cyan-400">⚛</span> React
              </div>
              <div className="absolute top-10 -right-2 sm:-right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-sm font-medium shadow-xl animate-float-delay hover:scale-110 transition-transform cursor-default">
                <span className="text-green-400 font-bold">dj</span> Django
              </div>
              <div className="absolute top-24 -left-4 sm:-left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-sm font-medium shadow-xl animate-float-slow hover:scale-110 transition-transform cursor-default">
                <span className="text-yellow-400 font-bold">Py</span> Python
              </div>
              <div className="absolute bottom-28 -left-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-sm font-medium shadow-xl animate-float hover:scale-110 transition-transform cursor-default">
                <span className="text-orange-400">HTML5</span>
              </div>
              <div className="absolute bottom-16 -right-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-sm font-medium shadow-xl animate-float-delay hover:scale-110 transition-transform cursor-default">
                <span className="text-blue-400">CSS3</span>
              </div>
              <div className="absolute bottom-2 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-sm font-medium shadow-xl animate-float-slow hover:scale-110 transition-transform cursor-default">
                <Github className="w-4 h-4" /> GitHub
              </div>

              {/* Laptop */}
              <div className="relative mx-auto mt-6 group">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-blue-500/20 group-hover:border-blue-500/30">
                  <div className="bg-[#0d1117] rounded-xl overflow-hidden aspect-[16/10] relative">
                    <div className="absolute top-0 left-0 right-0 h-7 sm:h-8 bg-[#161b22] flex items-center gap-2 px-3">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:scale-125 transition"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:scale-125 transition"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:scale-125 transition"></div>
                    </div>
                    <div className="pt-9 sm:pt-10 px-3 sm:px-4 font-mono text-[10px] sm:text-xs text-green-400 leading-relaxed">
                      <p><span className="text-purple-400">from</span> django.urls <span className="text-purple-400">import</span> path</p>
                      <p><span className="text-purple-400">from</span> . <span className="text-purple-400">import</span> views</p>
                      <p className="mt-2 text-gray-500"># Full Stack Python</p>
                      <p className="text-blue-400">urlpatterns = [</p>
                      <p className="pl-3 sm:pl-4">path(<span className="text-yellow-300">'api/'</span>, views.api),</p>
                      <p className="pl-3 sm:pl-4">path(<span className="text-yellow-300">''</span>, views.home),</p>
                      <p className="text-blue-400">]</p>
                      <div className="mt-3 sm:mt-4 flex justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center text-lg sm:text-2xl font-bold text-black transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                          Py
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-2.5 sm:h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-3 sm:mx-4"></div>
                <div className="h-1 bg-gray-600 rounded-full mx-12 sm:mx-16 mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white text-gray-800 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-blue-600 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-6 group-hover:from-blue-100 group-hover:to-cyan-100">
                <div className="transition-transform duration-300 group-hover:scale-125">
                  {f.icon}
                </div>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SYLLABUS ================= */}
      <section id="syllabus" className="py-16 sm:py-20 relative">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <p className="text-blue-400 font-semibold text-sm tracking-wider mb-2">COURSE SYLLABUS</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">What You’ll Learn?</h2>
              <p className="text-gray-400 max-w-md text-sm sm:text-base">
                A complete 6-month journey from basics to advanced full stack development.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 hover:scale-105 transition cursor-default">6 Modules</span>
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 hover:scale-105 transition cursor-default">Complete Curriculum</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {modules.map((m) => (
              <div
                key={m.id}
                className={`relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${m.color} border border-white/10 shadow-xl card-lift hover:shadow-2xl cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black opacity-30 group-hover:opacity-50 transition">{m.id}</span>
                  <span className="text-xs font-bold bg-black/30 px-2 py-1 rounded group-hover:bg-black/50 transition">{m.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 group-hover:translate-x-1 transition-transform">{m.title}</h3>
                <ul className="space-y-2 mb-6">
                  {m.points.map((p, i) => (
                    <li key={i} className="text-sm text-white/90 flex items-start gap-2 group-hover:text-white transition">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0 group-hover:scale-125 transition"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="inline-block bg-black/30 px-4 py-1.5 rounded-full text-xs font-semibold group-hover:bg-black/50 transition">
                  {m.month}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS + FEE + WHY ================= */}
      <section className="py-14 sm:py-16 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Projects */}
          <div id="projects" className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 card-lift hover:border-pink-500/30">
            <div className="flex items-center gap-2 mb-5">
              <Rocket className="w-5 h-5 text-pink-400 icon-bounce" />
              <h3 className="text-lg font-bold">Your Projects</h3>
            </div>
            <p className="text-sm text-gray-400 mb-5">Build 2 real-world projects and add them to your portfolio.</p>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Laptop className="w-5 h-5 text-blue-400 icon-bounce" />
                  <h4 className="font-semibold text-sm sm:text-base">Project 1 — Web Application</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Build a complete full-stack web application using Django + React.
                  <br /><span className="text-xs">(e.g. Student Management System)</span>
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-cyan-400 icon-bounce" />
                  <h4 className="font-semibold text-sm sm:text-base">Project 2 — Real-World Solution</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Create a project of your choice with database, authentication, and deployment.
                  <br /><span className="text-xs">(e.g. E-commerce, Blog, or Edu Portal)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Fee */}
          <div id="fee" className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 card-lift hover:border-green-500/30">
            <div className="flex items-center gap-2 mb-5">
              <IndianRupee className="w-5 h-5 text-green-400 icon-bounce" />
              <h3 className="text-lg font-bold">Course Fee & Timeline</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5 text-center hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-3xl font-bold text-green-400">₹8,000/-</p>
                <p className="text-sm text-gray-400 mt-1">Total Course Fee</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
                <Calendar className="w-5 h-5 text-blue-400 icon-bounce" />
                <div>
                  <p className="font-semibold">6 Months</p>
                  <p className="text-xs text-gray-400">Duration</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
                <Calendar className="w-5 h-5 text-purple-400 icon-bounce" />
                <div>
                  <p className="font-semibold">Installment Option</p>
                  <p className="text-xs text-gray-400">Flexible payment plan available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why */}
          <div id="why" className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 card-lift hover:border-yellow-500/30 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Star className="w-5 h-5 text-yellow-400 icon-bounce" />
              <h3 className="text-lg font-bold">Why Choose This Course?</h3>
            </div>

            <ul className="space-y-3">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm hover:text-green-300 transition-colors duration-300 group cursor-default">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-48 sm:h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-blue-500/30 transition-colors duration-500">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Send className="w-5 h-5 text-blue-400 icon-bounce" />
                <h2 className="text-2xl sm:text-3xl font-bold">Ready to Build Your Future?</h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm sm:text-base">
                Join now and take the first step towards becoming a Full Stack Python Developer!
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 w-full max-w-xs hover:border-blue-500/40 hover:scale-105 transition-all duration-300">
              <p className="text-sm text-gray-400 mb-4">For More Details & Enrollments Contact</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center icon-bounce">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <p className="font-semibold">Raj Khatri</p>
              </div>
              <a href="tel:8262813490" className="flex items-center gap-3 text-sm text-gray-300 mb-2 hover:text-green-400 transition-colors group">
                <Phone className="w-4 h-4 text-green-400 transition-transform group-hover:scale-125" />
                8262813490
              </a>
              <a href="mailto:rajkhatri8060@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-blue-400 transition-colors group">
                <Mail className="w-4 h-4 text-blue-400 transition-transform group-hover:scale-125" />
                rajkhatri8060@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        © 2025 Full Stack Python Course. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
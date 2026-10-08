"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "I am a software engineer.",
  "I build systems.",
  "I automate what repeats.",
  "I understand what's underneath.",
  "I am a C programmer.",
  "I explore AI at the systems level.",
  "I build things that actually work.",
];

const timeline = [
  {
    number: "01",
    title: "C",
    detail: "The foundation",
  },
  {
    number: "02",
    title: "EMBEDDED SOFTWARE",
    detail: "Close to the machine",
  },
  {
    number: "03",
    title: "MIDDLEWARE",
    detail: "Build the layer",
  },
  {
    number: "04",
    title: "AUTOMATION",
    detail: "Remove repetition",
  },
  {
    number: "05",
    title: "CLOUD",
    detail: "Work at scale",
  },
  {
    number: "06",
    title: "AI",
    detail: "Explore what is next",
  },
];

const experienceChapters = [
  {
    number: "01",
    eyebrow: "FOUNDATION",
    title: "C / EMBEDDED SOFTWARE",
    lead: "Start close to the machine.",
    body:
      "The engineering foundation was built around C, device-level software and the realities of systems where hardware and software meet. Printer technologies and Windows driver work added another layer: understanding software beyond the application boundary.",
    learned:
      "How constraints shape design. How to debug beneath the abstraction. How to make software behave reliably when the environment is not forgiving.",
    tags: [
      "C",
      "Embedded Software",
      "Device Software",
      "Windows Drivers",
    ],
  },
  {
    number: "02",
    eyebrow: "SYSTEMS",
    title: "MIDDLEWARE",
    lead: "Move up the stack without losing the foundation.",
    body:
      "Middleware became the bridge between lower-level systems and the software that depends on them. The emphasis moved toward reusable libraries, integration and components that could serve more than one immediate use case.",
    learned:
      "Good engineering is not only about making one thing work. It is about creating a dependable layer that other software can build on.",
    tags: [
      "Middleware",
      "Libraries",
      "APIs",
      "Integration",
      "Reusability",
    ],
  },
  {
    number: "03",
    eyebrow: "LEVERAGE",
    title: "AUTOMATION",
    lead: "If something repeats, make the computer do it.",
    body:
      "Automation became a recurring engineering theme — turning repeated work into tooling, improving workflows and building reusable utilities. The goal is not automation for its own sake; it is reducing friction so engineering effort can move toward higher-value problems.",
    learned:
      "The most useful automation often removes a task completely. Reusable tooling compounds its value across engineering workflows.",
    tags: [
      "Automation",
      "Developer Tooling",
      "SDLC",
      "Agile",
      "Scrum",
    ],
  },
  {
    number: "04",
    eyebrow: "MODERN ENGINEERING",
    title: "CLOUD",
    lead: "The scale changed. The fundamentals stayed.",
    body:
      "Cloud engineering added a different scale and a different set of operational concerns. The same systems instinct remained useful: understand the layers, understand the dependencies and build with the wider system in mind.",
    learned:
      "A system is more than its code. Infrastructure, interfaces, workflows and operational context all become part of the engineering problem.",
    tags: [
      "Google Cloud",
      "Cloud Engineering",
      "Cloud Services",
      "Infrastructure",
    ],
  },
  {
    number: "05",
    eyebrow: "CURRENT EXPLORATION",
    title: "AI / LLMs / GENERATIVE SYSTEMS",
    lead: "Use the old foundations to understand the new stack.",
    body:
      "Current experiments connect systems thinking with modern AI — from LLM inference at the C level to generative-image workflows and AI-oriented tooling on GitHub.",
    learned:
      "New abstractions become easier to reason about when you understand what sits underneath them. Building is still the fastest way to learn.",
    tags: [
      "LLMs",
      "Generative AI",
      "AI Tooling",
      "Python",
      "C",
    ],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "SYSTEMS",
    description: "Software that has to understand the machine.",
    skills: [
      "C",
      "Embedded Software",
      "Device Software",
      "Windows Drivers",
      "Printer Technologies",
    ],
  },
  {
    number: "02",
    title: "MIDDLEWARE",
    description: "Reusable layers between systems and applications.",
    skills: [
      "Middleware Libraries",
      "APIs",
      "Integration",
      "Reusable Components",
    ],
  },
  {
    number: "03",
    title: "ENGINEERING",
    description: "Ways of making software work and keep working.",
    skills: [
      "Automation",
      "Developer Tooling",
      "SDLC",
      "Code Quality",
      "Agile / Scrum",
    ],
  },
  {
    number: "04",
    title: "CLOUD",
    description: "Modern infrastructure and services.",
    skills: [
      "Google Cloud",
      "Cloud Engineering",
      "Cloud Services",
      "Infrastructure",
    ],
  },
  {
    number: "05",
    title: "AI / EXPERIMENTATION",
    description: "Hands-on exploration of modern AI systems.",
    skills: [
      "LLM Inference",
      "Generative AI",
      "AI Tooling",
      "Stable Diffusion",
      "Python",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "AI / WORKFLOW",
    title: "Agent Scheduler.",
    description:
      "A forked Stable Diffusion Web UI extension exploring queued generative workflows, prioritisation, history and an HTTP API.",
    tags: [
      "Python",
      "FastAPI",
      "Stable Diffusion",
      "AI Tooling",
    ],
    href:
      "https://github.com/supersonic13/sd-webui-agent-scheduler",
  },
  {
    number: "02",
    category: "AI / LOW LEVEL",
    title: "LLMs at the C level.",
    description:
      "A hands-on exploration of LLaMA 3 inference through a compact C implementation, looking beneath higher-level AI abstractions.",
    tags: [
      "C",
      "LLMs",
      "Inference",
      "Systems",
    ],
    href:
      "https://github.com/supersonic13/llama3.c",
  },
  {
    number: "03",
    category: "AI / TOOLING",
    title: "Packaging ReForge for Pinokio.",
    description:
      "An experiment around installing and managing Stable Diffusion WebUI ReForge through Pinokio.",
    tags: [
      "JavaScript",
      "Pinokio",
      "AI Tooling",
      "Generative AI",
    ],
    href:
      "https://github.com/supersonic13/pinokio-reforge",
  },
];

const labProjects = [
  {
    number: "01",
    name: "sdxs-pinokio",
    description:
      "Pinokio-oriented tooling and adaptation work around SDXS.",
    type: "ADAPTATION / TOOLING",
    language: "JavaScript",
    meta: "PUBLIC REPOSITORY",
    href:
      "https://github.com/supersonic13/sdxs-pinokio",
  },
  {
    number: "02",
    name: "sd-webui-forge-pinokio",
    description:
      "A fork exploring Pinokio packaging and installation for Stable Diffusion WebUI Forge.",
    type: "FORK / TOOLING",
    language: "JavaScript",
    meta: "PUBLIC REPOSITORY",
    href:
      "https://github.com/supersonic13/sd-webui-forge-pinokio",
  },
  {
    number: "03",
    name: "interactive-resume-pinokio",
    description:
      "An adaptation exploring an interactive resume experience through Pinokio.",
    type: "ADAPTATION",
    language: "JavaScript",
    meta: "PUBLIC REPOSITORY",
    href:
      "https://github.com/supersonic13/interactive-resume-pinokio",
  },
  {
    number: "04",
    name: "claude-code-everything-you-need-to-know",
    description:
      "A public experiment documenting and exploring Claude Code workflows.",
    type: "EXPERIMENT",
    language: "PUBLIC WORK",
    meta: "PUBLIC REPOSITORY",
    href:
      "https://github.com/supersonic13/claude-code-everything-you-need-to-know",
  },
  {
    number: "05",
    name: "moneyprinterturbo",
    description:
      "A public AI-oriented experiment exploring automated content generation workflows.",
    type: "EXPERIMENT",
    language: "PUBLIC WORK",
    meta: "PUBLIC REPOSITORY",
    href:
      "https://github.com/supersonic13/moneyprinterturbo",
  },
];

const principles = [
  {
    number: "01",
    title: "AUTOMATE WHAT REPEATS",
    text:
      "Repeated work is a signal. Turn it into a tool, script or reusable workflow.",
  },
  {
    number: "02",
    title: "UNDERSTAND THE ABSTRACTION",
    text:
      "Use the abstraction, but know what is happening underneath it.",
  },
  {
    number: "03",
    title: "MAKE USEFUL THINGS REUSABLE",
    text:
      "A good solution becomes more valuable when other work can build on it.",
  },
  {
    number: "04",
    title: "LEARN BY BUILDING",
    text:
      "Read, experiment, break things, inspect the result and build again.",
  },
  {
    number: "05",
    title: "KEEP EVOLVING",
    text:
      "The stack changes. The engineering instinct should keep getting sharper.",
  },
];

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let delay = deleting ? 42 : 72;

    if (!deleting && displayText === currentPhrase) {
      delay = 2200;
    }

    if (deleting && displayText === "") {
      delay = 500;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentPhrase.substring(
          0,
          displayText.length + 1
        );

        setDisplayText(nextText);

        if (nextText === currentPhrase) {
          setDeleting(true);
        }
      } else {
        const nextText = currentPhrase.substring(
          0,
          displayText.length - 1
        );

        setDisplayText(nextText);

        if (nextText === "") {
          setDeleting(false);

          setPhraseIndex(
            (current) => (current + 1) % phrases.length
          );
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, phraseIndex]);

  const { scrollYProgress } = useScroll();

  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  return (
    <main>
      <div className="noise" />

      <motion.div
        className="scrollLine"
        style={{ scaleY: scrollScale }}
      />

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header>
        <a href="#top" className="logo">
          AV<span>/</span>26
        </a>

        <nav>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#lab">Lab</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <small>
          SOFTWARE ENGINEER · 16+ YEARS
        </small>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="top" className="hero">
        <div className="kicker">
          <span>
            ARUN VELURI / ENGINEERING JOURNAL
          </span>

          <span>SYSTEMS → AI</span>
        </div>

        <div className="heroCenter">
          <div className="heroPhoto">
            <div className="photoFrame">
              <img
                src="/arun.jpg"
                alt="Arun Veluri"
              />

              <div className="photoCaption">
                <span>ARUN VELURI</span>
                <span>SOFTWARE ENGINEER</span>
              </div>
            </div>
          </div>

          <div className="heroCopy">
            <label>SOFTWARE ENGINEER</label>

            <h1>
              FROM
              <br />
              <em>SYSTEMS</em>
              <br />
              TO AI.
            </h1>

            <div className="heroStatement">
              <span>{displayText}</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        <div className="heroFoot">
          <span>SCROLL ↓</span>

          <span>
            C · EMBEDDED SOFTWARE · MIDDLEWARE · AUTOMATION ·
            CLOUD · AI
          </span>
        </div>
      </section>

      {/* =====================================================
          THE THREAD
      ===================================================== */}

      <section className="section thread">
        <small className="label">
          01 / THE THREAD
        </small>

        <div className="split threadIntro">
          <h2>
            A career spent understanding what sits{" "}
            <em>underneath</em> the abstraction.
          </h2>

          <p>
            From embedded software and middleware to
            automation, cloud and hands-on AI experiments.
            The tools change. The instinct stays the same:
            understand the system, remove friction, build
            something useful.
          </p>
        </div>

        <div className="threadStages">
          {timeline.map((item) => (
            <motion.div
              key={item.title}
              className="threadStage"
              whileHover={{ y: -8 }}
            >
              <div className="threadStageTop">
                <small>{item.number}</small>

                <span>{item.detail}</span>
              </div>

              <b>{item.title}</b>

              <div className="threadLine">
                <i />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ENGINEERING SIGNALS
      ===================================================== */}

      <section className="section dark signals">
        <small className="label">
          02 / ENGINEERING SIGNALS
        </small>

        <div className="signalsIntro">
          <h2>
            THE
            <br />
            <em>WEIGHT</em>
            <br />
            OF EXPERIENCE.
          </h2>

          <p>
            Years are only useful when they leave behind
            better judgement, stronger fundamentals and a
            wider view of the system.
          </p>
        </div>

        <div className="stats">
          <div>
            <b>16+</b>

            <small>
              YEARS OF
              <br />
              EXPERIENCE
            </small>
          </div>

          <div>
            <b>150+</b>

            <small>
              PUBLIC
              <br />
              REPOSITORIES
            </small>
          </div>

          <div>
            <b>2008</b>

            <small>
              TECHNICAL
              <br />
              PUBLICATION
            </small>
          </div>

          <div>
            <b>02</b>

            <small>
              PROFESSIONAL
              <br />
              CERTIFICATIONS
            </small>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section experience"
      >
        <small className="label">
          03 / 16+ YEARS
        </small>

        <div className="experienceHeader">
          <h2>
            A CAREER
            <br />
            <em>IN LAYERS.</em>
          </h2>

          <p>
            Not just where the work happened — what each
            layer taught, and how those lessons carried into
            the next one.
          </p>
        </div>

        <div className="experienceTimeline">
          {experienceChapters.map((chapter) => (
            <motion.article
              className="experienceChapter"
              key={chapter.number}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 35,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
            >
              <div className="experienceMeta">
                <span>{chapter.number}</span>

                <small>{chapter.eyebrow}</small>
              </div>

              <div className="experienceBody">
                <h3>{chapter.title}</h3>

                <p className="experienceLead">
                  {chapter.lead}
                </p>

                <p className="experienceDescription">
                  {chapter.body}
                </p>

                <div className="learned">
                  <span>WHAT IT TAUGHT</span>

                  <p>{chapter.learned}</p>
                </div>

                <div className="experienceTags">
                  {chapter.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
    SKILLS
===================================================== */}

<section
  id="skills"
  className="section skills dark"
>
  <small className="label">
    04 / ENGINEERING CAPABILITY
  </small>

  <div className="skillsIntro">
    <h2>
      THE
      <br />
      <em>TOOLBOX.</em>
    </h2>

    <p>
      A capability map rather than a keyword wall —
      grouped by the engineering problems Arun has
      worked around.
    </p>
  </div>

  <div className="skillsGrid">
    {skillGroups.map((group) => (
      <motion.article
        className="skillGroup"
        key={group.number}
        whileHover={{ y: -5 }}
      >
        <span className="skillNumber">
          {group.number}
        </span>

        <h3>{group.title}</h3>

        <p>{group.description}</p>

        <div className="skillList">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.article>
    ))}
  </div>
</section>
      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section
        id="work"
        className="section work"
      >
        <small className="label">
          05 / SELECTED WORK
        </small>

        <div className="split">
          <h2>
            Things
            <br />
            <em>built,</em>
            <br />
            studied.
          </h2>

          <p>
            Three stories selected for the engineering thread
            they reveal — not simply the number of stars
            attached to a repository.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              className="projectCard"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="projectTop">
                <small>{project.number}</small>

                <span>{project.category}</span>
              </div>

              <div className="projectMain">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="projectTags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="projectLink"
              >
                VIEW ON GITHUB ↗
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          LAB
      ===================================================== */}

      <section
        id="lab"
        className="section dark labSection"
      >
        <small className="label">
          06 / THE LAB
        </small>

        <div className="split">
          <h2>
            Public work,
            <br />
            <em>without the noise.</em>
          </h2>

          <div>
            <p>
              A curated view of the public GitHub work:
              forks, adaptations, experiments and tools.
              Provenance is deliberately visible.
            </p>

            <a
              className="githubProfile"
              href="https://github.com/supersonic13"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE THE FULL GITHUB ↗
            </a>
          </div>
        </div>

        <div className="lab">
          {labProjects.map((project) => (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.name}
              className="labItem"
              whileHover={{ paddingLeft: 22 }}
            >
              <small>{project.number}</small>

              <div className="labName">
                <b>{project.name}</b>

                <p>{project.description}</p>
              </div>

              <span>{project.type}</span>

              <em>{project.language}</em>

              <div className="labMeta">
                <small>{project.meta}</small>

                <b>↗</b>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* =====================================================
          CAREER
      ===================================================== */}

      <section
        id="career"
        className="section careerSection"
      >
        <small className="label">
          07 / CAREER
        </small>

        <div className="career">
          <h2>
            The geography
            <br />
            <em>changed.</em>
            <br />
            The craft didn&apos;t.
          </h2>

          <div className="careerList">
            <article>
              <small>01</small>

              <div>
                <b>INDIA</b>

                <p>
                  Early engineering foundations across
                  software, embedded systems, printer
                  technologies and middleware.
                </p>
              </div>
            </article>

            <article>
              <small>02</small>

              <div>
                <b>UNITED KINGDOM</b>

                <p>
                  Continued engineering work as part of
                  the wider Wipro journey, carrying the
                  systems and software foundation forward.
                </p>
              </div>
            </article>

            <article>
              <small>03</small>

              <div>
                <b>IRELAND</b>

                <p>
                  Current chapter in software engineering,
                  with middleware, automation, cloud and
                  continued hands-on exploration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW I THINK
      ===================================================== */}

      <section
        id="about"
        className="section principles"
      >
        <small className="label">
          08 / HOW I THINK
        </small>

        <div className="principlesLayout">

          {/* LEFT — PRINCIPLES */}

          <div className="principlesList">
            {principles.map((item) => (
              <div
                className="principleRow"
                key={item.number}
              >
                <small>{item.number}</small>

                <div>
                  <b>{item.title}</b>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <blockquote className="compactQuote">
              “I love to automate stuff.”
            </blockquote>
          </div>

          {/* RIGHT — HEADING */}

          <div className="principlesHeading">
            <h2>
              THE ENGINEERING
              <br />
              <em>INSTINCT.</em>
            </h2>

            <p>
              The tools change. These principles keep
              showing up.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          CREDENTIALS
      ===================================================== */}

      <section
        id="credentials"
        className="section credentials"
      >
        <small className="label">
          09 / CREDENTIALS + PUBLIC WORK
        </small>

        <div className="creds">
          <div>
            <small>2022</small>

            <b>
              Google Associate Cloud Engineer
            </b>

            <span>GOOGLE CLOUD</span>
          </div>

          <div>
            <small>2020</small>

            <b>
              Professional Scrum Master I
            </b>

            <span>SCRUM.ORG</span>
          </div>

          <div>
            <small>2008</small>

            <b>
              Feasibility study of implementing UPnP
              on public printers
            </b>

            <span>WIPRO INTERNAL FORUM</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact"
      >
        <small className="label">
          10 / CONTACT
        </small>

        <div className="contactLayout">

          <div className="contactHeading">
            <h2>
              LET&apos;S BUILD
              <br />
              <em>SOMETHING</em>
              <br />
              USEFUL.
            </h2>
          </div>

          <div className="contactDetails">

            {/* PHONE */}

            <a
              href="tel:+353XXXXXXXXX"
              className="contactItem"
            >
              <small>PHONE</small>

              <span>
                +353 XX XXX XXXX ↗
              </span>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:arun@veluri.net"
              className="contactItem"
            >
              <small>EMAIL</small>

              <span>
                arun@veluri.net ↗
              </span>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://ie.linkedin.com/in/arunveluri"
              target="_blank"
              rel="noreferrer"
              className="contactItem"
            >
              <small>LINKEDIN</small>

              <span>
                linkedin.com/in/arunveluri ↗
              </span>
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/supersonic13"
              target="_blank"
              rel="noreferrer"
              className="contactItem"
            >
              <small>GITHUB</small>

              <span>
                github.com/supersonic13 ↗
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div>
          <b>ARUN VELURI</b>

          <span>
            Software Engineer
            <br />
            Systems · Automation · AI
          </span>
        </div>

        <div className="footerNav">
          <a href="#top">Home</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#lab">Lab</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social">
          <a
            href="https://github.com/supersonic13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://ie.linkedin.com/in/arunveluri"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
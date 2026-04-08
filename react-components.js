// @ts-nocheck

const { useState } = React;

// Generic Tabs Component
function Tabs({ tabs }) {
    const [active, setActive] = useState(0);

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-btn ${active === index ? "active" : ""}`}
                        onClick={() => setActive(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tabs-content">
                {tabs[active].content}
            </div>
        </div>
    );
}

// PROJECT TABS
const projectTabs = [
    {
        label: "Go Microservices",
        content: (
            <div>
                <h3>Go Microservices Architecture</h3>
                <p>Distributed microservices system built with Go, Docker, PostgreSQL, and AWS.</p>
            </div>
        )
    },
    {
        label: "TypeScript Full‑Stack",
        content: (
            <div>
                <h3>TypeScript Full‑Stack App</h3>
                <p>Next.js + Node.js + PostgreSQL with CI/CD and containerization.</p>
            </div>
        )
    },
    {
        label: "Legacy Modernization",
        content: (
            <div>
                <h3>PHP 8.4 Modernization</h3>
                <p>Upgraded legacy systems, improved performance, added automated testing.</p>
            </div>
        )
    }
];

// EXPERIENCE TABS
const experienceTabs = [
    {
        label: "CCSI (USA)",
        content: (
            <div>
                <h3>Software Developer — Clinical Computer Systems</h3>
                <p>Led end‑to‑end module development, microservices, CI/CD, PHP 8.4 modernization.</p>
            </div>
        )
    },
    {
        label: "Syncfab (USA)",
        content: (
            <div>
                <h3>Software Development Intern — Syncfab</h3>
                <p>Worked with AWS S3/RDS, MongoDB, Linux, secure cloud pipelines.</p>
            </div>
        )
    },
    {
        label: "Cisco (India)",
        content: (
            <div>
                <h3>Technical Engineer — Cisco</h3>
                <p>Built automation tools, improved reliability, collaborated across engineering teams.</p>
            </div>
        )
    }
];

// Render components
ReactDOM.render(<Tabs tabs={projectTabs} />, document.getElementById("projects-tabs"));
ReactDOM.render(<Tabs tabs={experienceTabs} />, document.getElementById("experience-tabs"));

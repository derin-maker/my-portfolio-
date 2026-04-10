import React from "react";

export default function Services() {
    const services = [
        "Web Development",
        "Frontend React Development",
        "Next.js Full-Stack Development",
        "Cybersecurity Testing",
        "API &Database Setup",
        "Technical Support",
    ];

    return(
        <section className = "services-section">
            <h2>
                Services
            </h2>

            <div className = "services-grid">
                {services.map((item,index) => (
                    <div className="service-card" key={index}>
                        <h3>{item}</h3>
                    </div>
                ))}

            </div>
        </section>
    )
}
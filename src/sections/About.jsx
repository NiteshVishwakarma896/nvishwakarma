import React from "react";

export default function About() {
  return (
    <div className="p-4 text-white about-section">
      <h2 className="about-title">Nitesh Vishwakarma </h2>
      <p className="about-heading">Software Engineer @ Cognizant</p>
      <p className="about-description">
        Software engineer with experience in designing software solutions.
        Ability to learn quickly and implement new concepts, complex technical
        design and, identify ideas to improve system performance and
        availability.
      </p>
      <figure class="quote">
        <blockquote>
            Bad programmers worry about the code. Good programmers worry about data structures and their relationships.
        </blockquote>
        <figcaption>
          &mdash; Linus Torvalds
        </figcaption>
      </figure>
    </div>
  );
}

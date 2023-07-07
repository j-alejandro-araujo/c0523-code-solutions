import React, { useState } from 'react';
import Accordian from './Accordian';
import './App.css';

const accordianData = [
  {
    title: 'Hypertext Markup Language',
    content:
      'HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.',
  },
  {
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    title: 'JavaScript',
    content:
      'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordianClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="App">
      <div className="accordian">
        {accordianData.map((item, index) => (
          <Accordian
            key={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => handleAccordianClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

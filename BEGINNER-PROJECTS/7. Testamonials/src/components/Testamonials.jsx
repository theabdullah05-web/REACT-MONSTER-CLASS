import { useState } from "react";

const Testamonials = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const testimonials = [
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      quote:
        "Kindness is the language which the deaf can hear and the blind can see.",
      author: "Mark Twain",
    },
    {
      quote:
        "It is easier to fool people than to convince them that they have been fooled.",
      author: "Mark Twain",
    },
    {
      quote:
        "We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.",
      author: "Richard Dawkins",
    },
    {
      quote: "Science is the poetry of reality.",
      author: "Richard Dawkins",
    },
    {
      quote:
        "The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil and no good, nothing but blind, pitiless indifference.",
      author: "Richard Dawkins",
    },
    {
      quote: "I would rather die with glory than live without it.",
      author: "Achilles",
    },
    {
      quote: "Fate is the only thing that walks beside every man from birth.",
      author: "Achilles",
    },
  ];
  const handlePrev = () => {
    currIdx > 0 ? setCurrIdx(currIdx - 1) : setCurrIdx(testimonials.length - 2);
  };
  const handleNext = () => {
    currIdx < testimonials.length - 2 ? setCurrIdx(currIdx + 1) : setCurrIdx(0);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">{testimonials[currIdx].quote}</div>
      <div className="testimonials-author">{testimonials[currIdx].author}</div>
      <div className="testimonials-nav">
        {/* {currIdx > 0 && <button onClick={handlePrev}>Previous</button>}
        {currIdx < testimonials.length - 2 && (
          <button onClick={handleNext}>Next</button>
        )} */}
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testamonials;

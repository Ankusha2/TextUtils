import React from 'react';

export default function About() {
  return (
    <div className='container my-3'>
      <h2 className='mx-3 '>About Us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Welcome to Text Utils – Your Ultimate Text Companion!
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Unlock the full potential of your words with our powerful suite of text tools designed for writers, marketers, and anyone who loves to play with language. Whether you need to polish your prose, analyze your content,  Text Utils has you covered.<br/>Explore a variety of features, from formatting and manipulation to in-depth analysis and optimization. Our user-friendly interface makes it easy to transform your text effortlessly.Join a community of creators and communicators who trust Text Utils to enhance their writing journey. Dive in, and let your words shine!</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Features of Text Utils
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><b>Text Formatting Tools</b><br/><b>Text Analysis</b><br/><b>Text Manipulation</b><br/><b>Word Count Tool </b> <br/><b>Readability Checker</b></div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Why Choose Text Utils?
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"><b>User-Friendly Interface:</b> Intuitive design for a seamless experience.<br/><b>Fast and Reliable:</b> Quick processing times without sacrificing quality.

            </div>
            </div>
        </div>
        </div>

</div>
  );
}
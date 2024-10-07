import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen snap-start flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Contact Me!</h2>

        <div className="p-8">
          <div className="p-4 text-2xl">
            <b>Email: </b>
            <a className="email" href="mailto:liuboqian2015@outlook.com">
              liuboqian2015@outlook.com
            </a>
          </div>
          <div className="p-4 text-2xl">
            <b>Cell Phone: </b>
            +86 17621379964
          </div>
          <div className="p-4 text-2xl">
            <b>Github: </b>
            <a href="https://github.com/liuboqian">
              https://github.com/liuboqian
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

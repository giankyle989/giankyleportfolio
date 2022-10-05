import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-sky-900 text-gray-300 flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/5a9f7b84-540b-45b3-9758-2f60cdac224f" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#38b6ff]">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or email me! - kylelaguerta989@gmail.com
          </p>
        </div>
        <input className="bg-[#ccd6f6] text-black" type="text" placeholder="Name" name="name"></input>
        <input
          className="my-4 py-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Email"
          name="email"
        ></input>
        <textarea className="bg-[#ccd6f6] text-black" placeholder='Message' name="message" cols='30' rows='10'></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto hover:bg-[#38b6ff] hover:border-[#38b6ff] flex items-center" >Submit Form!</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Layout from "./Layout";
import "../css/Generator.css";
import logoCircle from "../assets/logo-circle.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import { toPng } from "html-to-image";
import * as htmlToImage from "html-to-image";

import defaultAvatar from "../assets/avatar.png";

import { useRef } from "react";

const Generator = () => {
  const socialTemplate = useRef(null);
  const [authorDp, setDP] = useState(null);
  const [title, setTitle] = useState("");
  const [jName, setjName] = useState("");
  const [authorNames, setauthorNames] = useState([]);
  const dummyauthorNames = ["Albert Einstein", "Marie Curie", "Isaac Newton", "Richard Feynman", "Stephen Hawking"];
  const [currentAuthorName, setcurrentAuthorName] = useState("");
  const [noAuthor, setnoAuthor] = useState(false);

  function addAuthor() {
    if (currentAuthorName.trim() !== "") {
      setauthorNames((prevAuthors) => [...prevAuthors, currentAuthorName]);
      setcurrentAuthorName("");
      setnoAuthor(false);
    } else {
      setnoAuthor(true);
      console.log("No Author");
    }
  }

  const deleteAuthor = (index) => {
    setauthorNames((previousAuthors) => previousAuthors.filter((_, i) => i !== index));
  };

  function ChangeJournal(e) {
    setjName(e.target.value);
  }
  function ChangeTitle(e) {
    setTitle(e.target.value);
  }
  function changeDP(e) {
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById("image-preview").src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);

    setDP(e.target.files[0]);
  }

  //   console.log(authorDp);
  const areFontsLoaded = () => {
    return Promise.all([...document.fonts.values()].map((font) => font.loaded));
  };
  const downloadImage = async () => {
    try {
      socialTemplate.current.style.width = "609px";
      socialTemplate.current.style.height = "fit-content";
      const dataUrl = await htmlToImage.toPng(socialTemplate.current, { quality: 1.9 });

      socialTemplate.current.style.width = "";
      socialTemplate.current.style.height = "";
      const link = document.createElement("a");
      link.download = `${jName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      if (error instanceof Event) {
        console.error("Error during image generation. Ignoring event object:", error);
      } else {
        console.error("Error during image generation:", error);
      }
    }
  };
  //test
  const [authorIndex, setauthorIndex] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto mt-10 mb-5 px-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-3 sm:grid-cols-1 gap-y-3">
          <div className="bg-base-100 shadow-md rounded-md p-10">
            <h3 className="text-xl border-b pb-4 ">Information</h3>
            <div className="py-5 flex flex-col gap-y-2">
              <input onChange={ChangeJournal} type="text" placeholder="Journal/Conference/Book Chapter Name" className="input input-bordered focus:input-primary" />
              <input onChange={ChangeTitle} type="text" placeholder="Paper Title" className="input input-bordered focus:input-primary" />
              <input onChange={changeDP} type="file" className="file-input input-bordered focus:input-primary" accept="image/*" />
              <div className="">
                <div className="flex flex-row gap-x-2">
                  <input placeholder="Author Name" type="text" className={!noAuthor ? "input flex-1 w-3/5 input-bordered focus:input-primary " : "input flex-1 w-1/5 input-error focus:input-primary"} value={currentAuthorName} onChange={(e) => setcurrentAuthorName(e.target.value)} />
                  <button className="flex-2 w-2/5 btn bg-green-600  hover:bg-black text-white" onClick={addAuthor}>
                    Add
                  </button>
                </div>
                {noAuthor && (
                  <div>
                    <div role="alert" className="alert my-2 alert-error">
                      <FeatherIcon icon="alert-circle" size={19} />
                      <span>An author should not have a blank name!</span>
                    </div>
                  </div>
                )}
                <div>
                  <ul className="mt-3">
                    {authorNames.map((text, index) => (
                      <li className="mb-2 flex flex-row gap-x-2" key={index}>
                        <p className="shadow-md border rounded-lg px-4 py-3 flex-1 w-3/4">{text}</p>
                        <button className="btn bg-red-600 text-white hover:bg-black text-white" onClick={() => deleteAuthor(index)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-x-3">
                <input type="checkbox" checked={authorIndex} onChange={() => setauthorIndex(!authorIndex)} className="toggle toggle-primary" /> Show Author Index
              </div>
            </div>
            {/* <div className="col-md-6 col-12 text-center">{authorDp && <img id="image-preview" alt="Preview" className="object-fit-cover rounded-circle" style={{ width: "200px", height: "200px", marginTop: "10px" }} />}</div> */}
          </div>
          <div>
            <div ref={socialTemplate} className="shadow-md p-10 generated-image-wrap">
              <div className="wave"></div>
              <div className="generated-content">
                <div className="amirlab-title">
                  <img src={logoCircle} width={80} alt="" />
                  <p className="text-white font-bold text-2xl ml-3">Advanced Machine Intelligence Research Lab - AMIR Lab</p>
                </div>
                <div className="success-in mt-3">
                  <div className="success-text border-b pb-2">Success In</div>
                  <div className="journal-name mt-2">{jName ? jName : "Journal Name"}</div>
                </div>
                <div className="flex flex-row items-center justify-center content-center gap-x-5 mt-6">
                  <div className="flex-1 author-dp w-2/5">
                    <div className="avatar">
                      <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">{authorDp ? <img width={120} id="image-preview" /> : <img width={120} src={defaultAvatar} />}</div>
                    </div>
                  </div>
                  <div className="flex-2 w-3/5">
                    <div className="paper-title">
                      <div className="icon">
                        <FeatherIcon icon="file-text" size={19} className="text-white" />
                      </div>
                      <p className="text-white">{title ? title : "The title of the paper is prominently featured in this designated section for easy identification and reference"}</p>
                    </div>
                    <div className="paper-authors mt-4">
                      <div className="icon">
                        <FeatherIcon className="text-white" size={19} icon="users" />
                      </div>
                      <p className="gap">
                        {authorNames && authorNames.length > 0
                          ? authorNames.map((author, index) => (
                              <div className="badge badge-ghost mr-1" key={index}>
                                {author}
                                {authorIndex && <sup className="ml-1">{index + 1}</sup>}
                              </div>
                            ))
                          : dummyauthorNames.map((dauthor, index) => (
                              <div className="badge badge-ghost mr-1" key={index}>
                                {dauthor}
                                {authorIndex && <sup className="ml-1">{index + 1}</sup>}
                              </div>
                            ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 text-end">
              <button onClick={downloadImage} className="btn btn-primary">
                Download as PNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Generator;

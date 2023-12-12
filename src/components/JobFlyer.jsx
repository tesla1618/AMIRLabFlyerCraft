import React, { useState } from "react";
import Layout from "./Layout";
import "../css/JobFlyer.css";
import logoCircle from "../assets/logo-circle.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import * as htmlToImage from "html-to-image";

import defaultAvatar from "../assets/avatar.png";

import { useRef } from "react";

const JobFlyer = () => {
  const ResearchDepartments = [
    {
      name: "Data Science and Federated Learning",
      color: "#32a852",
    },
    {
      name: "Artificial Intelligence in Security and Healthcare",
      color: "#32a852",
    },
    {
      name: "Internet of Things and Block Chain",
      color: "#32a852",
    },
    {
      name: "Natural Language Processing and Computational Linguistics",
      color: "#32a852",
    },
    {
      name: "Deep Learning and Computer Vision",
      color: "#32a852",
    },
    {
      name: "Artificial Intelligence and Biomedical Imaging",
      color: "#32a852",
    },
  ];
  const DesignationButtons = [
    {
      name: "Head of the Department",
      color: "#2c0243",
    },
    {
      name: "Advisor",
      color: "#29666e",
    },
    {
      name: "Lead Researcher",
      color: "#612e35",
    },
    {
      name: "Researcher",
      color: "#2a7045",
    },
    {
      name: "Research Assistant",
      color: "#132E35",
    },
    {
      name: "Research Intern",
      color: "#1b3059",
    },
  ];
  // Defining Background colors for the template based on Designations
  const [bgColor, setbgColor] = useState("#00000");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dbgColor, setdbgColor] = useState("");

  function addDepartment(name, color) {
    setDepartment(name);
    setdbgColor(color);
  }

  function addDesignation(name, color) {
    setDesignation(name);
    console.log(name);
    setbgColor(color);
    // if (name === "Lead Researcher") {
    //   setbgColor(color);
    // } else if (name === "Researcher") {
    //   setbgColor(color);
    // } else if (name === "Research Assistant") {
    //   setbgColor(color);
    // } else if (name === "Research Intern") {
    //   setbgColor(color);
    // }
    console.log(bgColor);
  }

  const socialTemplate = useRef(null);
  const [authorDp, setDP] = useState(null);
  const [title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [authorNames, setauthorNames] = useState([]);
  const dummyauthorNames = ["Albert Einstein", "Marie Curie", "Isaac Newton", "Richard Feynman", "Stephen Hawking"];
  const [currentAuthorName, setcurrentAuthorName] = useState("");
  const [noAuthor, setnoAuthor] = useState(false);

  function ChangeName(e) {
    setName(e.target.value);
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
      socialTemplate.current.style.width = "550px";
      socialTemplate.current.style.height = "650px";
      const dataUrl = await htmlToImage.toPng(socialTemplate.current, { quality: 1.9 });

      socialTemplate.current.style.width = "";
      socialTemplate.current.style.height = "";
      const link = document.createElement("a");
      link.download = `${Name}.png`;
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
            <div className="alert alert-info text-justify mt-6">If you are assigned to more than one department, select the assigned department highest designation</div>
            <h3 className="mt-7  text-xl">Select Your Designation</h3>
            <div className="py-5 flex flex-col gap-y-2 ">
              <div className="flex gap-x-1 flex-wrap gap-y-2">
                {DesignationButtons.map((button, index) => (
                  <button onClick={() => addDesignation(button.name, button.color)} className={designation === button.name ? "btn text-white" : `btn btn-outline btn-ghost`} style={{ background: designation === button.name && button.color }} key={index}>
                    {button.name}
                  </button>
                ))}
              </div>
              <h3 className="mt-7  text-xl">Select Department</h3>
              <div className="flex gap-x-1 flex-wrap gap-y-2">
                {ResearchDepartments.map((button, index) => (
                  <button onClick={() => addDepartment(button.name, button.color)} className={department === button.name ? "btn dbtn text-white btn-sm" : `btn dbtn btn-sm btn-outline btn-ghost`} style={{ background: department === button.name && button.color }} key={index}>
                    {button.name}
                  </button>
                ))}
              </div>
              <input onChange={ChangeName} type="text" placeholder="Full Name" className="input input-bordered focus:input-primary" />
              <input onChange={changeDP} type="file" className="file-input input-bordered focus:input-primary" accept="image/*" />
            </div>
          </div>
          <div>
            <div ref={socialTemplate} className="shadow-md p-10 generated-image-wrap" style={{ background: bgColor }}>
              <div className="wave"></div>
              <div className="generated-content">
                <div className="amirlab-title job">
                  <img src={logoCircle} width={80} alt="" />
                  <p className="text-white font-bold text-2xl ml-3">Advanced Machine Intelligence Research Lab - AMIR Lab</p>
                </div>
                <div className="success-in mt-10">
                  <div className=" max-w-xs">
                    <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">{authorDp ? <img id="image-preview" width={220} height={220} className="rounded-full aspect-square object-cover" /> : <img width={190} className="rounded-full" src={defaultAvatar} />}</div>
                  </div>
                  <div className="nameAnddesg mt-6 border-l-2 border-l-primary">
                    <div className="journal-name mt-2 mb-0 ml-5">
                      {Name ? (
                        <span>
                          {Name.split(" ").map((part, index, array) => (
                            <span key={index}>
                              {index === array.length - 1 ? <b>{part}</b> : part}
                              {index < array.length - 1 && " "} {/* Add space between parts */}
                            </span>
                          ))}
                        </span>
                      ) : (
                        <>
                          <span>Nikola</span> <b>Tesla</b>
                        </>
                      )}
                    </div>
                    <div className="designation text-white mt-1 ml-5">
                      {designation ? (
                        <span>
                          {designation.split(" ").map((part, index, array) => (
                            <span key={index}>
                              {index === array.length - 1 ? <b>{part}</b> : part}
                              {index < array.length - 1 && " "} {/* Add space between parts */}
                            </span>
                          ))}
                        </span>
                      ) : (
                        "Designation"
                      )}
                    </div>
                    <div className="department text-white mt-1 text-sm ml-5">{department ? <span>{department}</span> : "Designation"}</div>
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

export default JobFlyer;

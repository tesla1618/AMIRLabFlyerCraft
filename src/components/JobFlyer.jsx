import React, { useState } from "react";
import Layout from "./Layout";
import "../css/JobFlyer.css";
import logoCircle from "../assets/logo-circle.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import * as htmlToImage from "html-to-image";

import defaultAvatar from "../assets/avatar.png";

import { useRef } from "react";
import { CheckCircle } from "feather-icons-react/build/IconComponents";

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
    try {
      reader.onload = (event) => {
        document.getElementById("image-preview").src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);

      setDP(e.target.files[0]);
    } catch (error) {
      //   console.log(error);
    }
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
            <div className="alert alert-warning text-justify mt-6">
              <div>
                <p className="mb-3 font-light">
                  If you have assignments in <b>multiple</b> departments, <b>choose</b> the department associated with the <b>highest designation</b>.
                </p>
                <p className="font font-light">
                  If the generated image does not look appealing in mobile/web view, don't worry. It will be <b>resized after download</b>.
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-row content-center align-middle">
              <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Select Your Designation</h3>{" "}
              {designation && (
                <>
                  <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" /> <span className="text-green-300">1/4</span>
                </>
              )}
            </div>
            <div className="py-5 flex flex-col gap-y-2 ">
              <div className="flex gap-x-2 flex-wrap flex-row gap-y-2">
                {DesignationButtons.map((button, index) => (
                  <button onClick={() => addDesignation(button.name, button.color)} className={designation === button.name ? "btn btn-sm text-white" : `btn btn-sm btn-outline btn-ghost`} style={{ background: designation === button.name && button.color }} key={index}>
                    {button.name}
                  </button>
                ))}
              </div>
              <div className="mt-7 mb-3 flex flex-row content-center align-middle">
                <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Select Department</h3>{" "}
                {department && (
                  <>
                    <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" /> <span className="text-green-400">2/4</span>
                  </>
                )}
              </div>
              <div className="flex gap-x-1 flex-wrap gap-y-2">
                {ResearchDepartments.map((button, index) => (
                  <button onClick={() => addDepartment(button.name, button.color)} className={department === button.name ? "btn dbtn text-white btn-sm" : `btn dbtn btn-sm btn-outline btn-ghost`} style={{ background: department === button.name && button.color }} key={index}>
                    {button.name}
                  </button>
                ))}
              </div>
              <div className="mt-7 flex flex-row content-center align-middle">
                <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Name</h3>
                {Name && (
                  <>
                    <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" /> <span className="text-green-500">3/4</span>
                  </>
                )}
              </div>
              <input onChange={ChangeName} type="text" placeholder="Full Name" className="mt-5 input input-bordered focus:input-primary" />
              <div className="mt-7 flex flex-row content-center align-middle">
                <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Feature Photo</h3>
                {authorDp && (
                  <>
                    <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" /> <span className="text-green-600">Done!</span>
                  </>
                )}
              </div>
              <div className="alert alert-warning text-justify mt-2 mb-3">
                <div>
                  <p className="font-light">
                    Consider uploading a <b>square</b> image for best results, and <b>minimum 800x800 pixels</b> resolution.
                  </p>
                </div>
              </div>
              <input onChange={changeDP} type="file" className="file-input input-bordered focus:input-primary" accept="image/*" />
            </div>
          </div>
          <div>
            <div ref={socialTemplate} className="shadow-md p-10 generated-image-wrap2" style={{ background: bgColor }}>
              <div className="wave"></div>
              <div className="generated-content">
                <div className="amirlab-title2 job">
                  <img src={logoCircle} width={80} alt="" />
                  <p className="text-white font-bold text-2xl ml-3">
                    <span className="text-3xl font-lovelo">Advanced Machine</span>
                    <br />
                    <span className="text-xl font-lovelo">Intelligence Research Lab</span>
                    <br />
                    <span className="text-xl font-jost">AMIR Lab</span>
                  </p>
                </div>
                <div className="success-in mt-10">
                  <div className=" ">
                    <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">{authorDp ? <img id="image-preview" width={220} height={220} className="rounded-full aspect-square object-cover" /> : <img width={190} className="rounded-full aspect-square object-cover" src={defaultAvatar} />}</div>
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
                        <>
                          <span>Applied</span> <b>Physicist</b>
                        </>
                      )}
                    </div>
                    <div className="department text-white mt-1 text-sm ml-5">
                      {department ? (
                        <span>
                          Department of <b>{department}</b>
                        </span>
                      ) : (
                        "Electrical Engineering"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 text-end">
              <button onClick={downloadImage} disabled={!(department && Name && designation && authorDp)} className="btn btn-primary">
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

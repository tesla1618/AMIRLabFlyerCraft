import React, { useState } from "react";
import Layout from "./Layout";
import "../css/JobFlyer.css";
import logoCircle from "../assets/logo-circle.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import * as htmlToImage from "html-to-image";
import internBG from "../assets/intern.png";
import arrows from "../assets/arrows.png";
import assistantBG from "../assets/assistant.png";
import researcherBG from "../assets/researcher.png";
import leadBG from "../assets/lead.png";
import advisorBG from "../assets/advisor.png";
import headBG from "../assets/head.png";
import flare from "../assets/flare.png";
import dpring from "../assets/dpring.png";
import networks from "../assets/networks.png";
import volunteerBG from "../assets/volunteer.png";

import defaultAvatar from "../assets/avatar.png";

import { useRef } from "react";
import { CheckCircle } from "feather-icons-react/build/IconComponents";

const JobFlyer = () => {
  const [stepCount, setstepCount] = useState(0);
  const [hasFinishedWriting, setHasFinishedWriting] = useState(false);
  const [bgColor, setbgColor] = useState("#00000");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dbgColor, setdbgColor] = useState("");
  const socialTemplate = useRef(null);
  const [authorDp, setDP] = useState(null);
  const [title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [authorNames, setauthorNames] = useState([]);
  const dummyauthorNames = ["Albert Einstein", "Marie Curie", "Isaac Newton", "Richard Feynman", "Stephen Hawking"];
  const [currentAuthorName, setcurrentAuthorName] = useState("");
  const [noAuthor, setnoAuthor] = useState(false);
  const [hasClicked, sethasClicked] = useState(true);

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
      color: "#430772",
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
      color: "#2b3575",
    },
    {
      name: "Volunteer",
      color: "#1b3059",
    },
  ];
  // Defining Background colors for the template based on Designations

  function addDepartment(name, color) {
    setDepartment(name);
    setdbgColor(color);
    sethasClicked(!hasClicked);
    if (hasClicked) {
      setstepCount(stepCount + 1);
      sethasClicked(!hasClicked);
    }
  }

  function addDesignation(name, color) {
    setDesignation(name);
    console.log(name);
    setbgColor(color);
    sethasClicked(!hasClicked);
    if (hasClicked) {
      setstepCount(stepCount + 1);
      sethasClicked(!hasClicked);
    }
  }

  function addCount() {
    if (Name.trim() !== "" && hasFinishedWriting) {
      setHasFinishedWriting(true);
      sethasClicked(!hasClicked);
      if (hasClicked) {
        setstepCount(stepCount + 1);
        sethasClicked(!hasClicked);
      }
    }
  }

  function ChangeName(e) {
    setName(e.target.value);
    setHasFinishedWriting(false);
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
      setstepCount(stepCount + 1);
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

  const [isIntern, setisIntern] = useState(false);
  const [isAssistant, setisAssistant] = useState(false);
  const [isHead, setisHead] = useState(false);
  const [isAdvisor, setisAdvisor] = useState(false);
  const [isLead, setisLead] = useState(false);
  const [isResearcher, setisResearcher] = useState(false);

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
                  <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" />
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

              <div className="fl">
                {designation !== "Volunteer" && (
                  <>
                    <div>
                      <div className="mt-7 mb-3 flex flex-row content-center align-middle">
                        <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Select Department</h3>{" "}
                        {department && (
                          <>
                            <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" />
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      {ResearchDepartments.map((button, index) => (
                        <button onClick={() => addDepartment(button.name, button.color)} className={department === button.name ? "btn dbtn text-white btn-sm mb-2" : `mb-2 btn dbtn btn-sm btn-outline btn-ghost`} style={{ background: department === button.name && button.color }} key={index}>
                          {button.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="mt-7 flex flex-row content-center align-middle">
                <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Name</h3>
                {Name && (
                  <>
                    <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" />
                  </>
                )}
              </div>
              <input onChange={ChangeName} onBlur={addCount} type="text" value={Name} placeholder="Full Name" className="mt-5 input input-bordered focus:input-primary" />
              <div className="mt-7 flex flex-row content-center align-middle">
                <h3 className="lg:text-xl sm:text-md flex-1 w-3/4">Feature Photo</h3>
                {department && Name && designation && authorDp ? <span className="flex-2 w-1/4 text-green-600">Done!</span> : authorDp ? <FeatherIcon className="flex-2 w-1/4 text-green-600" icon="check-circle" /> : ""}
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
              {designation === "Research Intern" ? <div className="internel" style={{ backgroundImage: `url(${internBG})` }}></div> : null}
              {designation === "Research Assistant" ? <div className="assistantel" style={{ backgroundImage: `url(${assistantBG})` }}></div> : null}
              {designation === "Researcher" ? <div className="researcherel" style={{ backgroundImage: `url(${researcherBG})` }}></div> : null}
              {designation === "Volunteer" ? <div className="volunteerel" style={{ backgroundImage: `url(${volunteerBG})` }}></div> : null}
              {designation === "Lead Researcher" ? <div className="leadel" style={{ backgroundImage: `url(${leadBG})` }}></div> : null}
              {designation === "Advisor" ? <div className="advisorel" style={{ backgroundImage: `url(${advisorBG})` }}></div> : null}
              {designation === "Head of the Department" ? (
                <>
                  <div className="flare" style={{ backgroundImage: `url(${flare})` }}></div>
                  <div className="headel" style={{ backgroundImage: `url(${headBG})` }}></div>
                  <div className="headdp" style={{ backgroundImage: `url(${dpring})` }}></div>
                </>
              ) : null}
              <div className="arrows" style={{ backgroundImage: `url(${arrows})` }}></div>
              <div className="networks" style={{ backgroundImage: `url(${networks})` }}></div>
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
                    <div className={designation === "Researcher" ? "rounded-full ring ring-success ring-offset-base-100 ring-offset-2" : designation === "Head of the Department" ? "rounded-full ring ring-purple-950 ring-offset-base-100 ring-offset-2" : designation === "Advisor" ? "rounded-full ring ring-cyan-600 ring-offset-base-100 ring-offset-2" : designation === "Research Assistant" ? "rounded-full ring ring-offset-base-100 ring-offset-2" : designation === "Lead Researcher" ? "rounded-full ring ring-yellow-600 ring-offset-base-100 ring-offset-2" : "rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"}>{authorDp ? <img id="image-preview" width={220} height={220} className="rounded-full aspect-square object-cover" /> : <img width={190} className="rounded-full aspect-square object-cover" src={defaultAvatar} />}</div>
                  </div>
                  <div className={designation === "Lead Researcher" ? "nameAnddesg mt-6 border-l-2 border-purple-500" : designation === "Advisor" ? "nameAnddesg mt-6 border-l-2 border-teal-400" : designation === "Researcher" ? "nameAnddesg mt-6 border-l-2 border-emerald-500" : "nameAnddesg mt-6 border-l-2 border-l-primary"}>
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
                      {department && designation !== "Volunteer" ? (
                        <span>
                          Department of <b>{department}</b>
                        </span>
                      ) : designation === "Volunteer" ? (
                        ""
                      ) : (
                        "Electrical Engineering"
                      )}
                    </div>
                  </div>
                  <div className="text-white text-xs mt-20 drop-shadow-2xl flex flex-row gap-x-3 flex-wrap align-middle justify-center content-center">
                    <div className="flex flex-row gap-x-1">
                      <FeatherIcon icon="facebook" size={15} /> amirlabbd
                    </div>
                    <div className="flex flex-row gap-x-1">
                      <FeatherIcon icon="linkedin" size={15} /> amirlabbd
                    </div>
                    <div className="flex flex-row gap-x-1">
                      <FeatherIcon icon="twitter" size={15} /> amirlabbd
                    </div>
                    <div className="flex flex-row gap-x-1">
                      <FeatherIcon icon="github" size={15} /> AMIR-Lab-Bangladesh
                    </div>
                    <div className="flex flex-row gap-x-1">
                      <FeatherIcon icon="globe" size={15} /> amirl.org
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

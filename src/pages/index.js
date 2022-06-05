import React, { useEffect, useRef, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Wave from "react-wavify";
import emailjs from "@emailjs/browser";
import Card from "../components/Card";
import AboutMeCard from "../components/AboutMeCard";

// markup
const IndexPage = () => {
  const [user, setUser] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "assets" }
        }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  `);
  const uber = data.allFile.edges[1].node.childImageSharp.fluid;
  const discord = data.allFile.edges[7].node.childImageSharp.fluid;
  const shield = data.allFile.edges[8].node.childImageSharp.fluid;
  const instagram = data.allFile.edges[9].node.childImageSharp.fluid;
  const uberEats = data.allFile.edges[10].node.childImageSharp.fluid;
  const defaultState = [
    {
      description:
        " I have done some projects but my recent is this one, Uber Clone. ",
      tags: ["React Native", "Firebase", "Redux", "Google APIs"],
      githubLink: "https://github.com/danielmorais123/uber",
      image: uber,
    },
    {
      description:
        "A clone from Discord without Back-End, just the Front-End Design and Firebase Authentication with Google.",
      tags: ["React", "Firebase"],
      githubLink: "https://github.com/danielmorais123/discord-clone",
      image: discord,
    },
    {
      description:
        "A videogame with Unity, C# that basically its a defense game where you have a shield and have got to protect himself from the CPU.",
      tags: ["Unity", "C#"],
      githubLink: "https://github.com/neurodraft/the-best-defense",
      image: shield,
    },
    {
      description:
        "Another project is my Instagram Clone with React Native, and Firebase.",
      tags: ["React Native", "Firebase"],
      githubLink: "https://github.com/danielmorais123/instagram-clone",
      image: instagram,
    },
    {
      description:
        "And for the last, I've got the clone of Uber Eats every single step with React Native and Firebase ",
      tags: ["React Native", "Firebase"],
      githubLink: "https://github.com/danielmorais123/uber-eats-clone",
      image: uberEats,
    },
  ];

  const [posts, setPosts] = useState(defaultState);
  const [selectTag, setSelectTag] = useState("Firebase");
  const aboutme = data.allFile.edges[0].node.childImageSharp.fluid;

  const programmer = data.allFile.edges[2].node.childImageSharp.fluid;
  const daniel = data.allFile.edges[3].node.childImageSharp.fluid;
  const githubIcon = data.allFile.edges[4].node.childImageSharp.fluid;
  const facebookIcon = data.allFile.edges[5].node.childImageSharp.fluid;
  const twitterIcon = data.allFile.edges[6].node.childImageSharp.fluid;
  const icons = [githubIcon, facebookIcon, twitterIcon];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rhm0jap",
        "template_5woosbj",
        form.current,
        "rVV6XdT2kbgp0HUZy"
      )
      .then(
        (result) => {
          alert("Notifications Activated!");
        },
        (error) => {
          alert("Something went Wrong");
        }
      );
  };

  useEffect(() => {
    setPosts(defaultState.filter((post) => post.tags.includes(selectTag)));
  }, [selectTag]);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        setUser(user);

        // ...
      } else {
        // User is signed out
        // ...

        setUser(null);
      }
    });

    return () => unSub();
  }, []);

  useEffect(() => {
    setPosts(defaultState);
  }, []);

  const handleSignInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const closeOpenModal = () => {
    setOpenNav(!openNav);
  };

  const closeModal = () => {
    setOpenNav(false);
  };

  /* const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm("service_rhm0jap", "template_5woosbj", e.target).then(
      (result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
      },
      (error) => {
        alert("An error occurred, Please try again", error.text);
      }
    );
  };
*/
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-bgcolor overflow-hidden">
        <div className="flex justify-between items-center font-family bg-bgcolor  lg:w-3/4 lg:mx-auto my-5 shadow-navbar sm:w-full">
          <div>
            <img
              className="w-16 h-14 ml-2  "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              style={{ position: openNav ? "absolute" : "static", top: 25 }}
            />
          </div>
          <div className="relative">
            <ul className=" m-3 p-2 xs:hidden sm:flex">
              <a href="#portefolio">
                <li className="p-2 text-md text-white  duration-700 hover:scale-125 ">
                  Portefolio
                </li>
              </a>

              <a href="#aboutme">
                <li className="p-2 text-md text-white  duration-700 hover:scale-125">
                  About Me
                </li>
              </a>
              <a href="#sub">
                <li className="p-2 text-white text-md duration-700 hover:scale-125">
                  Subscribe
                </li>
              </a>
              {user ? (
                <button
                  className="text-white bg-googleBg rounded-full p-2 text-md duration-700 hover:opacity-90 hover:scale-110"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  className="text-white bg-googleBg rounded-full p-2 mx-1 text-md duration-700 hover:opacity-90 hover:scale-110"
                  onClick={handleSignInGoogle}
                >
                  Sign In Google
                </button>
              )}
            </ul>
            <button
              onClick={closeOpenModal}
              className="block sm:hidden rounded focus:outline-none hover:bg-gray-200 p-3 m-1"
            >
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            </button>
            {openNav ? (
              <div className="sm:hidden">
                <ul className="m-3 p-2 flex-col flex z-[1] ">
                  <a href="#portefolio" onClick={closeModal}>
                    <li className="p-2 text-md text-white  duration-700 hover:scale-125 ">
                      Portefolio
                    </li>
                  </a>
                  <a href="#aboutme" onClick={closeModal}>
                    <li className="p-2 text-md text-white  duration-700 hover:scale-125">
                      About Me
                    </li>
                  </a>
                  <a href="#sub" onClick={closeModal}>
                    <li className="p-2 text-white text-md duration-700 hover:scale-125">
                      Subscribe
                    </li>
                  </a>
                  {user ? (
                    <button
                      className="text-white bg-googleBg rounded-full p-2 text-md duration-700 hover:opacity-90 hover:scale-110"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  ) : (
                    <button
                      className="text-white bg-googleBg rounded-full p-2 mx-1 text-md duration-700 hover:opacity-90 hover:scale-110"
                      onClick={handleSignInGoogle}
                    >
                      Sign In Google
                    </button>
                  )}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="grow bg-bgcolor items-center ">
          <div className="flex items-center justify-evenly xs:flex-col sm:flex-row xs:h-full sm:p-8 ">
            <div className="flex flex-col p-5">
              <h1 className="text-4xl text-center text-white font-bold my-5">
                Welcome to My Portefolio
              </h1>
              <button
                className="bg-white px-3 py-2 rounded-full self-center hover:bg-googleBg hover:text-white duration-700"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "#portefolio";
                }}
              >
                Check it Out
              </button>
            </div>
            <Img className="w-96 h-72" fluid={programmer} />
          </div>
          <Wave
            fill="white"
            paused={false}
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.15,
              points: 3,
            }}
            style={{ position: "absolute", bottom: 0 }}
          />
        </div>
      </div>
      <div className="min-h-screen bg-white relative" id="portefolio">
        <div className="flex xs:flex-col md:flex-row justify-center items-center md:mx-2 xs:my-2">
          <h1 className="flex justify-center text-4xl font-bold ">
            My Projects
          </h1>
          <button
            className="h-10 text-white bg-rose-400 rounded-full px-3 py-1 mx-1 text-md duration-700 hover:bg-bgcolor "
            onClick={() => setPosts(defaultState)}
          >
            Show All
          </button>
        </div>

        <div className="flex justify-evenly xs:mx-3 xs:flex-col sm:flex-row flex-wrap p-3">
          {posts.map((post, index) => (
            <Card
              post={post}
              key={index}
              githubIcon={githubIcon}
              setSelectTag={setSelectTag}
            />
          ))}
        </div>
        <Wave
          fill="#6C63FF"
          paused={false}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.15,
            points: 3,
          }}
          style={{ position: "absolute", bottom: 0 }}
        />
      </div>
      <div className=" bg-purpleColor " id="aboutme">
        <h1 className="flex justify-center font-bold xs:text-3xl md:text-5xl">
          About Me
        </h1>
        <div className="flex xs:flex-col p-4 md:flex-row xs:items-center  md:justify-evenly  ">
          <Img className="xs:w-72 sm:w-96" fluid={aboutme} />
          <AboutMeCard fluid={daniel} icons={icons} />
        </div>
        <div className="flex justify-center flex-col items-center " id="sub">
          <h3 className="font-bold text-center p-2">
            Subscribe my Notifications, so you can be notificated when I have
            something new to show you!
          </h3>
          <form
            ref={form}
            className="w-full flex justify-center p-2 mb-2 xs:flex-col sm:flex-row"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Insert your Email"
              className="px-8 py-1 sm:w-1/2 rounded-full xs:w-full"
              value={user ? user.email : ""}
            />

            <textarea
              name="message"
              value={" Daniel Morais's notifications alert subscribed "}
              className="hidden"
            />
            <button
              type="submit"
              onClick={sendEmail}
              className="bg-googleBg px-2 ml-1 rounded-full text-white xs:mt-1 sm:mt-0 xs:w-1/4 sm:w-auto py-2  self-center"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

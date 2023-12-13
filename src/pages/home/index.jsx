import React, { useState } from "react";
import { IconArrowRight, IconBadge, IconFileFilled } from "@tabler/icons-react";
import jsonData from "../../data/data.json";
import CardProject from "../../components/card/cardProject";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase";
import Loading from "../../features/loading";
import { IconDownload } from "@tabler/icons-react";

export default function Home() {
  const [data, setData] = useState({});
  const [newData, setNewData] = useState({});
  const [loading, setLoading] = useState(false);
  const database = collection(db, "form");

  const nav = useNavigate();

  function toResume() {
    nav("/resume");
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    centerPadding: "24px",
    slidesToShow: 3,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getForm = async () => {
    try {
      const res = await getDocs(collection(db, "form"));
      const list = res.docs.map((doc) => setData(doc.data()));
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    await addDoc(database, newData);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 2500);
  }

  return (
    <>
      <div className="w-full min-h-screen sm:min-h-[478px] lg:min-h-screen flex justify-center md:items-center flex-col md:flex-row gap-4 lg:gap-8 pt-16 p-6 sm:px-12 sm:pb-12">
        <div className="md:flex-1 order-last md:order-first">
          <h5 className="text--linear text-2xl mb-4">
            Hallo, Saya Rakha Putra
          </h5>
          <h6 className="text-xl font-bold mb-4">
            Junior Front-End Web Developer
          </h6>
          <p className="text-justify mb-4">
            Seorang Junior Front End Web Developer dengan semangat tinggi untuk
            menciptakan pengalaman pengguna yang menakjubkan.
          </p>
          <div className="flex items-center gap-2">
            <button className="cssbuttons-io-button">
              Resume saya
              <span className="icon" onClick={toResume}>
                <IconArrowRight />
              </span>{" "}
            </button>
            <a
              href="cv-rakha-putra-ramadhan-syahlan.pdf"
              download={"CV Rakha Putra Ramadhan Syahlan"}
              target="_blank"
              rel="noreferrer"
              className="h-fit text-white rounded-full p-2 my-auto"
              style={{
                background: "linear-gradient(135deg, #9955e8 0%, #7bffaf 100%)",
              }}
            >
              <IconDownload />
            </a>
          </div>
        </div>
        <div className="md:flex-1">
          <img
            src="vector-one.svg"
            alt="first-vector"
            className="md:max-w-none md:w-full object-cover mx-auto"
          />
        </div>
      </div>
      <div className="p-6 sm:p-12">
        <div
          className="w-full grid sm:grid-cols-2 justify-center items-center gap-4 rounded-3xl p-6 lg:p-8 lg:px-16"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="mb-4 sm:mb-0">
            <img
              src="vector-two.svg"
              alt="profile picture"
              className="w-full object-cover aspect-square m-auto"
            />
          </div>
          <div id="profile">
            <div className="flex overflow-x-scroll gap-2 mb-4 py-4 custom__scroll">
              {jsonData.iconTools.map((icon, i) => (
                <img
                  key={i}
                  src={`${icon.url}.svg`}
                  alt={icon.name}
                  className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                />
              ))}
            </div>
            <p className="text--linear">Tentang saya</p>
            <h5 className="text-2xl font-bold mb-4">
              Rakha Putra Ramadhan Syahlan
            </h5>
            <p className="text-justify mb-4">
              Saya adalah Junior Front-End Web Developer yang penuh semangat dan
              memiliki hasrat untuk menciptakan pengalaman pengguna yang menarik
              dan responsif di dunia web.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-12" id="project">
        <div className="mb-8 text-center">
          <p className="text--linear">Pengalaman proyek</p>
          <h5 className="text-2xl font-medium">Proyek yang telah saya buat</h5>
        </div>
        <Slider {...settings}>
          <div className="px-2">
            <CardProject />
          </div>
          <div className="px-2">
            <CardProject />
          </div>
          <div className="px-2">
            <CardProject />
          </div>
          <div className="px-2">
            <CardProject />
          </div>
        </Slider>
      </div>
      <div className="sm:p-12 mb-4" id="contact">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 sm:rounded-3xl p-6"
          style={{ backgroundColor: "#eee" }}
        >
          <div>
            <div className="mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="profile image"
                className="w-32 rounded-full m-auto sm:m-0"
              />
            </div>
            <div>
              <p className="text--linear mb-2">Contact</p>
              <p className="text-2xl font-medium mb-4">
                Menikmati pekerjaan saya? Ayo bekerja sama
              </p>
              <p className="text-sm text-justify mb-4">
                Saya selalu siap untuk ngobrol. Kirimi saya email di
                rakaaputtra1@gmail.com atau hubungi saya di media sosial.
              </p>
              <div className="flex items-center gap-2">
                {jsonData.iconContact.map((icon, i) => (
                  <div
                    key={i}
                    className="bg-gray-300 hover:bg-gray-400 transition-all duration-500 rounded-2xl cursor-pointer p-2"
                  >
                    <a href={icon.url}>
                      <img
                        src={`${icon.svg}.svg`}
                        alt={icon.name}
                        className="w-8 aspect-square"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            className="flex justify-center items-center flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="nama"
              className="input-custom"
              placeholder="Nama"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className="input-custom"
              placeholder="E-mail"
              required
              onChange={handleChange}
            />
            <textarea
              cols="30"
              rows="5"
              className="input-custom"
              placeholder="Pesan anda"
              name="pesan"
              required
              onChange={handleChange}
            ></textarea>
            {loading ? (
              <Loading />
            ) : (
              <button className="cssbuttons-io-button" type="submit">
                Kirim sekarang{" "}
                <span className="icon">
                  <IconArrowRight />
                </span>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

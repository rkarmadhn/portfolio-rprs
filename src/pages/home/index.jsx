import React from "react";
import ButtonCustom from "../../components/button";
import { IconArrowRight, IconBadge, IconFileFilled } from "@tabler/icons-react";
import jsonData from "../../data/data.json";
import CardProject from "../../components/card/cardProject";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function SectionSatu() {
  const nav = useNavigate();

  function toResume() {
    nav("/resume");
  }
  return (
    <div className="w-full min-h-screen sm:min-h-[478px] lg:min-h-screen flex justify-center md:items-center flex-col md:flex-row gap-4 lg:gap-8 pt-16 p-6 sm:px-12 sm:pb-12">
      <div className="md:flex-1 order-last md:order-first">
        <h5 className="text--linear text-2xl mb-4">Hallo, Saya Rakha Putra</h5>
        <h6 className="text-xl font-bold mb-4">
          Junior Front-End Web Developer
        </h6>
        <p className="text-justify mb-4">
          Seorang Junior Front End Web Developer dengan semangat tinggi untuk
          menciptakan pengalaman pengguna yang menakjubkan.
        </p>
        <ButtonCustom>
          Resume saya
          <span className="icon" onClick={toResume}>
            <IconArrowRight />
          </span>{" "}
        </ButtonCustom>
      </div>
      <div className="md:flex-1">
        <img
          src="vector-one.svg"
          alt="first-vector"
          className="md:max-w-none md:w-full object-cover mx-auto"
        />
      </div>
    </div>
  );
}

function SectionDua() {
  return (
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
        <div>
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
          <ButtonCustom>
            Tentang saya{" "}
            <span className="icon">
              <IconArrowRight />
            </span>
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

function SectionTiga() {
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
          slidesToScroll: 3,
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
  return (
    <div className="p-6 sm:p-12">
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
  );
}

function SectionEmpat() {
  return (
    <div className="sm:p-12 mb-4">
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
                  className="bg-gray-300 hover:bg-gray-400 transition-all duration-500 rounded-2xl p-2"
                >
                  <img
                    src={`${icon.url}.svg`}
                    alt={icon.name}
                    className="w-8 aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <form className="flex justify-center items-center flex-col gap-4">
          <input type="text" className="input-custom" placeholder="Nama" />
          <input type="text" className="input-custom" placeholder="E-mail" />
          <textarea
            cols="30"
            rows="5"
            className="input-custom"
            placeholder="Pesan anda"
          ></textarea>
          <ButtonCustom>
            Kirim sekarang{" "}
            <span className="icon">
              <IconArrowRight />
            </span>
          </ButtonCustom>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SectionSatu />
      <SectionDua />
      <SectionTiga />
      <SectionEmpat />
    </>
  );
}

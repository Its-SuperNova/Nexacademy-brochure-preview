import React from "react";
import styles from "./styles.module.css";
import Hero from "./components/Hero";
import Header from "@/app/components/common/Header";
import Syllabus from "./components/Syllabus";
import CertificateSection from "../common copy/CertificateSection";
import CertificateProcess from "./components/CertificationProcess";



const CoursePage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <Hero />
          <Syllabus />
          <CertificateSection />
          <CertificateProcess />
        </div>
      </div>
    </>
  );
};

export default CoursePage;

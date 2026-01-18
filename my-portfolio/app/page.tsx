import Hero from "@/components/sections/Hero";
import About from "./about/page";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const resume_download = async () => {
    try {
      const response = await fetch("/assets/Resume_Prasanth_Kumar_V.pdf");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Prasanth_Kumar_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Cleanup

      // toast.success("Resume downloaded successfully!");
    } catch (error) {
      // toast.error("Failed to download resume.");
    }
  };
  return (
    <>
      <Hero />
    </>
  );
}

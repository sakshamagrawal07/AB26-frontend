import ComingSoon from "../components/common/ComingSoon/ComingSoon";
import DevelopersHero from "../components/developers/DevelopersHero";
import DevelopersTierSection from "../components/developers/DevelopersTierSection";

const DevelopersPage = () => {
  const leads = [
    { name: "Saksham Agrawal", logo: "https://assets.2026.abhivyaktifest.in/myprofile.png", github: "https://github.com/sakshamagrawal07/", linkedin: "https://www.linkedin.com/in/agsaksham07/", twitter: "", insta: "https://www.instagram.com/saksham_ag07/" },
    { name: "Yash Verma", logo: "https://assets.2026.abhivyaktifest.in/images/developers/yash.jpeg", github: "https://github.com/YashVerma-code", linkedin: "https://www.linkedin.com/in/yash-verma/", twitter: "", insta: "https://www.instagram.com/y_a_s_h__v_e_r_m_a_" },
    { name: "Yogesh V. Bhivsane", logo: "https://assets.2026.abhivyaktifest.in/images/developers/yogesh.jpg", github: "https://github.com/Yogesh2318", linkedin: "https://www.linkedin.com/in/yogesh-bhivasane-131905289", twitter: "", insta: "" }
  ];

  const designer = [
    { name: "Piyush Pal", logo: "https://assets.2026.abhivyaktifest.in/images/developers/piyush.webp", github: "https://github.com/hello-world141", linkedin: "https://www.linkedin.com/in/piyush-pal-1676b0309/", twitter: "https://x.com/PiyushPal199877", insta: "https://www.instagram.com/piyush.141_/" },
  ];

  const members = [
    { name: "Amulya Yadav", logo: "https://assets.2026.abhivyaktifest.in/myprofile.png", github: "https://github.com/amyverse", linkedin: "https://www.linkedin.com/in/amyverse", twitter: "", insta: "https://www.instagram.com/thepricelessyadav" },
    { name: "Sambodhi Bhowal", logo: "https://assets.2026.abhivyaktifest.in/myprofile.png", github: "", linkedin: "", twitter: "", insta: "" },
    { name: "Ojas Wane", logo: "https://assets.2026.abhivyaktifest.in/myprofile.png", github: "https://github.com/ojaswane", linkedin: "https://www.linkedin.com/in/ojas-wane-35a072323/", twitter: "https://x.com/OjasWane", insta: "https://www.instagram.com/ojassss.w/" },
    { name: "Ojaswi Joshi", logo: "https://assets.2026.abhivyaktifest.in/images/developers/ojaswi.jpg", github: "https://github.com/ojaswijoshi13", linkedin: "https://www.linkedin.com/in/ojaswijoshi13/", twitter: "https://x.com/Ojaswi_Joshi13", insta: "https://www.instagram.com/w._.ojaswi?igsh=MmRlc3A4NGF1bHJ6" },
    { name: "Arnab Mistry", logo: "https://assets.2026.abhivyaktifest.in/images/developers/arnab.jpg", github: "https://github.com/ArnabMistry", linkedin: "https://www.linkedin.com/in/arnabmistry", twitter: "https://x.com/arnabcore", insta: "https://www.instagram.com/beolzss?utm_source=qr&igsh=MTdzOHozY2x5c3hyMw==" },
    { name: "Sparsh Gupta", logo: "https://assets.2026.abhivyaktifest.in/images/developers/sparsh.jpg", github: "https://github.com/SparshGupta78", linkedin: "https://www.linkedin.com/in/sparshgupta78/", twitter: "https://x.com/The_sparshgupta", insta: "https://www.instagram.com/theguptasparsh/" },
    { name: "Arnav Timble", logo: "https://assets.2026.abhivyaktifest.in/images/developers/arnav.jpg", github: "https://github.com/Arnz18/", linkedin:"https://www.linkedin.com/in/arnav-timble" , twitter:" https://x.com/Arrnnzz" , insta:" https://www.instagram.com/lil_arnz/" },
    { name: "Kartik Magar", logo: "https://assets.2026.abhivyaktifest.in/images/developers/kartik.webp", github: "https://github.com/Kartik-Magar", linkedin: "https://www.linkedin.com/in/kartik-magar-222126333/", twitter: "", insta: "https://www.instagram.com/kartikmagar_03?igsh=MTJxZmU4cHBsZWF5Zw==" },
    { name: "Satvik Rastogi", logo: "https://assets.2026.abhivyaktifest.in/images/developers/satvik.jpeg", github: "https://github.com/Satvik-art-creator", linkedin: "https://www.linkedin.com/in/satvikrastogi077/", twitter: "", insta: "https://www.instagram.com/satvik.verse/" },
  ];

  return (
    <main className="sponsorsPage bg-black">
      <DevelopersHero />
      <DevelopersTierSection title="Leads" sponsors={leads} />
      <DevelopersTierSection title="Designer" sponsors={designer} />
      <DevelopersTierSection title="Members" sponsors={members} />
      {/* <ComingSoon /> */}
    </main>
  );
};

export default DevelopersPage;

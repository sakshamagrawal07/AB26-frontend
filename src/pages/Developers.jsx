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
import { useState } from "react";
import MinimalPayButton from "../components/payment/MinimalPayButton";

export default function Developers() {
  const [amount, setAmount] = useState(500);
  const [eventId, setEventId] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-gray-900 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-8 text-purple-400">
          Payment Testing
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Event ID (optional)
            </label>
            <input
              type="text"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Leave empty for general payment"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contact Number (optional)
            </label>
            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter contact number"
            />
          </div>

          <div className="pt-4">
            <MinimalPayButton
              amount={amount}
              eventId={eventId || null}
              contact={contact || null}
              title="AB26 Test Payment"
              description="Testing payment integration"
              className="w-full text-lg font-semibold"
            >
              Pay ₹{amount}
            </MinimalPayButton>
          </div>

          <div className="mt-6 p-4 bg-gray-800 rounded-md">
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Test Details:
            </h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Amount: ₹{amount}</li>
              <li>• Event ID: {eventId || "None"}</li>
              <li>• Contact: {contact || "None"}</li>
              <li>• Uses documented payment API</li>
              <li>• Requires authentication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

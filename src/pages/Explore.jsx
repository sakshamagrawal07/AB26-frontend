// src/pages/Explore.jsx

import { useState } from "react";

import ExploreTabs from "../components/explore/ExploreTabs";
import ExploreSection from "../components/explore/ExploreSection";

import { exploreData } from "../data/exploreData";

const Explore = () => {
    const [activeTab, setActiveTab] = useState("proShows");

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    };

    return (
        <main style={{ background: "#000", minHeight: "100vh" }}>
            {/* Top Tabs */}
            <ExploreTabs
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            {/* Content Section */}
            <ExploreSection
                items={exploreData[activeTab]}
            />
        </main>
    );
};

export default Explore;

// src/components/explore/ExploreTabs.jsx

import styles from "./explore.module.css";

const TABS = [
    { key: "proShows", label: "Pro Shows" },
    { key: "competitions", label: "Competitions" },
    { key: "streetActivity", label: "Street Activity" },
];

const ExploreTabs = ({ activeTab, onTabChange }) => {
    return (
        <nav className={styles.tabsWrapper}>
            {TABS.map((tab) => (
                <button
                    key={tab.key}
                    type="button"
                    className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ""
                        }`}
                    onClick={() => onTabChange(tab.key)}
                    aria-pressed={activeTab === tab.key}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
};

export default ExploreTabs;

import React from "react";
import HeroSection from "./../../components/aboutus/herosection/HeroSection";
import MissionSection from "./../../components/aboutus/missionsection/MissionSection";
import StorySection from "../../components/aboutus/storysection/StorySection";
import ValuesSection from "../../components/aboutus/valuessection/ValuesSection";
import CommunitySection from "../../components/aboutus/communitysection/CommunitySection"
import CTASection from "../../components/aboutus/ctasecction/CTASection"

const AboutUs = () => {
    return (
        <div>
            <HeroSection />
            <MissionSection />
            <StorySection />
            <ValuesSection />
            <CommunitySection />
            <CTASection/>
        </div>
    );
};

export default AboutUs;

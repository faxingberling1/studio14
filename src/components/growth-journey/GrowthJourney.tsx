"use client";

import React, { useState, useRef } from "react";
import { growthStagesData } from "@/data/growthJourney";
import { JourneyIntro } from "./JourneyIntro";
import { JourneyProgress } from "./JourneyProgress";
import { JourneyRoadmap } from "./JourneyRoadmap";
import { StageDetailPanel } from "./StageDetailPanel";
import { JourneyConclusion } from "./JourneyConclusion";

export const GrowthJourney: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelectStage = (index: number) => {
    setCurrentStageIndex(index);
    // Smoothly scroll to the detail section when a stage is selected
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextStage = () => {
    if (currentStageIndex < growthStagesData.length - 1) {
      handleSelectStage(currentStageIndex + 1);
    }
  };

  const handlePrevStage = () => {
    if (currentStageIndex > 0) {
      handleSelectStage(currentStageIndex - 1);
    }
  };

  const handleStartJourney = () => {
    const roadmapElem = document.getElementById("journey-roadmap");
    if (roadmapElem) {
      roadmapElem.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactClick = () => {
    const contactElem =
      document.getElementById("contact") ||
      document.getElementById("studio14-inquiry-form");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section id="growth-journey" className="relative bg-[#FAF9F6] scroll-mt-20">
      {/* 1. Introduction Banner */}
      <JourneyIntro
        onStartJourney={handleStartJourney}
        onContactClick={handleContactClick}
      />

      {/* 2. Interactive Roadmap & Highway */}
      <JourneyRoadmap
        currentStageIndex={currentStageIndex}
        onSelectStage={handleSelectStage}
      />

      {/* 3. Sticky Progress Bar */}
      <JourneyProgress
        currentStageIndex={currentStageIndex}
        onSelectStage={handleSelectStage}
      />

      {/* 4. Active Stage Detail Panel & Interactive Showcase Component */}
      <div ref={detailRef} className="scroll-mt-36">
        <StageDetailPanel
          stage={growthStagesData[currentStageIndex]}
          currentIndex={currentStageIndex}
          totalStages={growthStagesData.length}
          onPrev={handlePrevStage}
          onNext={handleNextStage}
          onSelectStage={handleSelectStage}
        />
      </div>

      {/* 5. Conclusion & Action Pathways */}
      <JourneyConclusion />
    </section>
  );
};


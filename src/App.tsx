import './App.css'
import Box from '@mui/material/Box';
import { Section } from './components/HeroSection';
import { useEffect, useRef, useState } from 'react';
import { PatchData } from './PatchData';
import { Grid } from '@mui/material';
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, SectionDefinition, ITEM_DEFINITIONS } from './SectionDefinitions';
import { SectionStepper } from './components/SectionStepper';
import { SectionScroller } from './components/SectionScroller';
import { SectionData } from './SectionTypes';
// import { GeneralSectionData, HeroSectionData, ItemSectionData, SectionDataUnion } from './SectionTypes';

function getHeroPatches(hero: string, jsonData: PatchData[]): Record<string, string[]> {
  let heroPatches: Record<string, string[]> = {};
  jsonData.forEach(patch => {
    heroPatches[patch.date] = patch.characters[hero];
  });
  return heroPatches;
}

function getGeneralPatches(category: string, jsonData: PatchData[]): Record<string, string[]> {
  let categoryPatches: Record<string, string[]> = {};
  jsonData.forEach(patch => {
    categoryPatches[patch.date] = patch.general[category];
  });
  return categoryPatches;
}

function getItemPatches(category: string, jsonData: PatchData[]): Record<string, string[]> {
  let itemPatches: Record<string, string[]> = {};
  jsonData.forEach(patch => {
    itemPatches[patch.date] = patch.items[category];
  });
  return itemPatches;
}

function App() {
  // const [heroSectionData, setHeroSectionData] = useState<HeroSectionData[]>([]);
  // const [generalSectionData, setGeneralSectionData] = useState<GeneralSectionData[]>([]);
  // const [itemSectionData, setItemSectionData] = useState<ItemSectionData[]>([]);

  const [sectionData, setSectionData] = useState<SectionData[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/json/index.json');
        const files = await res.json();

        const allData = await Promise.all(
          files.map((file: string) =>
            fetch(`/data/json/${file}`).then(res => res.json())
          )
        );

        const tempSectionData: SectionData[] = [];

        Object.keys(GENERAL_DEFINITIONS).forEach(key => {
          tempSectionData.push({
            id: key,
            type: "general",
            definition: GENERAL_DEFINITIONS[key],
            patches: getGeneralPatches(key, allData)
          });
        });

        Object.keys(HERO_DEFINITIONS).forEach(key => {
          tempSectionData.push({
            id: key,
            type: "hero",
            definition: HERO_DEFINITIONS[key],
            patches: getHeroPatches(key, allData)
          });
        });

        Object.keys(ITEM_DEFINITIONS).forEach(key => {
          tempSectionData.push({
            id: key,
            type: "item",
            definition: ITEM_DEFINITIONS[key],
            patches: getItemPatches(key, allData)
          });
        });
        setSectionData(tempSectionData);

        if (tempSectionData.length > 0) {
          setActiveSectionId(tempSectionData[0].id);
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSectionId(entry.target.id);
            }
          });
        }, {
          root: containerRef.current,
          threshold: 0.5,
        });

        setTimeout(() => {
          const sections = containerRef.current?.querySelectorAll('section') ?? [];
          sections.forEach((section) => observer.observe(section));
        }, 0);

        return () => observer.disconnect();

      } catch (error) {
        console.error('Failed to fetch JSON data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Grid container>
      <Grid size={11.5} height={"100vh"}>
        <SectionScroller sectionData={sectionData} containerRef={containerRef} activeSection={activeSectionId} />
      </Grid>
      <Grid size={0.5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          paddingTop: 2,
          paddingBottom: 2,

        }}
      >
        <SectionStepper
          sectionData={sectionData}
          activeSection={activeSectionId}
        />
      </Grid>
    </Grid>
  )
}

export default App

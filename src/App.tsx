import './App.css'
import Box from '@mui/material/Box';
import { HeroSection } from './components/HeroSection';
import { useEffect, useRef, useState } from 'react';
import { PatchData } from './PatchData';
import { Grid, Step, StepButton, StepLabel, Stepper, StepperContext } from '@mui/material';
import { GENERAL_DEFINITIONS, HERO_DEFINITIONS, HeroDefinition, ITEM_DEFINITIONS } from './HeroDefinitions';
import { HeroStepIcon } from './components/HeroStepIcon';

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
  const [sectionData, setSectionData] = useState<{ id: string, hero: HeroDefinition, patches: Record<string, string[]> }[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("");

  const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const stepperContainerRef = useRef<HTMLDivElement | null>(null);

  const [activePatch, setActivePatch] = useState("");

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

        // Now that jsonData is available, build sectionData
        const sectionsDatas: { id: string, hero: HeroDefinition, patches: Record<string, string[]> }[] = [];


        Object.keys(HERO_DEFINITIONS).forEach(key => {
          sectionsDatas.push({
            id: key,
            hero: HERO_DEFINITIONS[key],
            patches: getHeroPatches(key, allData)
          });
        });

        setSectionData(sectionsDatas);
        if (sectionsDatas.length > 0) {
          setActiveSection(sectionsDatas[0].id);
        }

        // Set up observer AFTER the DOM elements will exist
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, {
          root: containerRef.current,
          threshold: 0.5,
        });

        // Wait for DOM to paint
        setTimeout(() => {
          const sections = containerRef.current?.querySelectorAll('section') ?? [];
          sections.forEach((section) => observer.observe(section));
        }, 0); // Delay ensures elements are in DOM

        return () => observer.disconnect();

      } catch (error) {
        console.error('Failed to fetch JSON data:', error);
      }
    };

    fetchData();
    console.log(sectionData);
  }, []);

  useEffect(() => {
    const container = stepperContainerRef.current;
    const target = stepRefs.current[activeSection];

    if (container && target) {
      const containerHeight = container.getBoundingClientRect().height;
      const targetTop = target.offsetTop;
      const targetHeight = target.getBoundingClientRect().height;

      const scrollTo = targetTop - (containerHeight / 2) + (targetHeight / 2);

      container.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  const activeSectionData = sectionData.find((section) => section.id === activeSection);

  return (
    <Grid container>
      <Grid size={11.5} height={"100vh"}>
        <Box className="container" ref={containerRef}
          sx={{
            backgroundImage: activeSectionData?.hero.background,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            // transition: 'background-image 0.5s ease-in-out'
          }} >
          {
            sectionData.map((section) => {
              if (section.patches["2025-09-04"].length != 0)
                return (
                  <HeroSection key={section.id} id={section.id} heroDefinition={section.hero} heroData={section.patches["2025-09-04"] ?? []} />
                );
            })
          }
        </ Box>
      </Grid>
      <Grid size={0.5}
        ref={stepperContainerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          overflowY: 'auto',
          paddingTop: 2,
          paddingBottom: 2,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Stepper
          orientation="vertical"
          nonLinear
          activeStep={sectionData.findIndex(section => section.id === activeSection)}
          connector={null}
        >
          {sectionData.map((section, index) => {
            if (section.patches["2025-09-04"].length != 0)
              return (
                <Step key={section.id}>
                  <div ref={(el) => stepRefs.current[section.id] = el}>
                    <StepButton
                      icon={
                        <HeroStepIcon
                          name={section.hero.name}
                          iconUrl={section.hero.icon}
                          active={index === sectionData.findIndex(s => s.id === activeSection)}
                          completed={false} // or your logic here
                          icon={undefined}
                        />
                      }
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{ padding: 0, minWidth: 'auto' }} // Remove extra padding to keep buttons tight
                    />
                  </div>

                </Step>
              );
          })}
        </Stepper>
      </Grid>
    </Grid>


  )
}

export default App

# PORTFOLIO MASTER DOCUMENTATION

This document is the single source of truth for the entire portfolio project. It contains the technical handoff, the raw text content for the pages, and the complete master guide for generating the seamless video environments.

---

## PART 1: PROJECT HANDOFF & ARCHITECTURE

This section details the technical stack, design philosophy, constraints, and custom systems implemented.

### Project Identity & Constraints
*   **Role:** Portfolio for a Principal Software Architect / CTO (10-15+ years experience).
*   **Aesthetic:** High-end editorial design + contemporary physical architecture. Premium, calm, confident, and highly intentional. 
*   **Strict Constraints:** 
    *   **NO Tailwind CSS.** We are using vanilla CSS (`globals.css`) for maximum control over typography and spacing.
    *   **NO Gimmicks:** No WebGL, cyberpunk UI, glowing data streams, complex particle systems, floating code, or sci-fi HUDs.
    *   **Tone:** "Apple-like restraint." Motion must be slow, smooth, and deliberate.

### Tech Stack & Design System
*   **Framework:** Next.js (App Router), TypeScript
*   **Styling:** Vanilla CSS (`src/app/globals.css`). 
    *   **Typography:** `Neuton` (Google Fonts). Display classes (`.display-1`, etc.) for large impactful headings.
    *   **Layout:** Standard `.container`, `.grid-editorial` (2-col asymmetric), `.grid-asymmetric`.
*   **Motion & Animation:** Framer Motion. 
    *   Unified staggered system via `RevealGroup`, `RevealItem`. 
*   **Smooth Scrolling:** Lenis (`@studio-freight/react-lenis`).
*   **Interaction Layer:**
    *   `Cursor.tsx`: Custom Framer Motion cursor (default, link, project). Automatically disabled on touch devices.
    *   `Wayfinding.tsx`: Fixed left navigation with active path tracking via Framer layout animations.
    *   `ParallaxHero.tsx`: 2.5D scroll-depth prototype used to simulate architectural depth via DOM manipulation without WebGL.

---

## PART 2: PAGE CONTENT

This section outlines the raw text and content structure for the main pages of the portfolio.

### 0. HOME (Landing Page)
*   **Hero / Entry:**
    *   **Headline:** Agentic infra & distributed systems.
    *   **Intro:** I focus on the hard distributed-systems problem underneath multi-agent products: getting many agents to plan, act, verify, and learn as one coherent system.
    *   **Bio Text:** Varun Handa | Principal Architect | 15 Years Experience
    *   **CTA:** Read engineering philosophy
*   **Selected Experience:**
    *   **Joxy.ai:** Architecting the agent OS for an autonomous marketing workforce. Moving beyond chat into reliable, verified execution.
    *   **Boostit:** Building an AI-powered performance-creative production pipeline. Turning creative strategy into a deterministic, high-volume async system.
*   **Technical Journal:** Reliability Over Illusion, Big Models Plan, Small Models Execute.

### 1. JOXY (Experience / Case Study)
*   **Hero:** Joxy.ai / An autonomous AI marketing workforce replacing specialized silos with a "one-person giant."
*   **The Problem:** AI chatbots provide advice; businesses need reliable execution. Advice isn't the bottleneck in marketing—execution is.
*   **Architecture:**
    *   *Agentic Memory:* Scoped stores with consolidation, supersession, and controlled forgetting. 
    *   *The Watcher Pattern:* Long tasks use a Worker/Watcher split. Workers emit periodic heartbeats; Watchers monitor for staleness and explicit exit criteria.
    *   *Model Routing:* "Big models plan. Small models execute." Reducing token costs by 90%.
*   **The Roster:** Kat (Meta Ads), Rex (Google Ads), Scout (Research), Atlas (SEO), Scribble (Copy), Pulse (Automation).

### 2. BOOSTIT (Experience / Case Study)
*   **Hero:** Boostit / An AI-powered performance-creative production system for DTC brands.
*   **The Problem:** Creative Velocity is the bottleneck for scale. Traditional ad creative production is too slow and expensive to keep up with creative fatigue.
*   **Infrastructure:**
    *   *The Deterministic Pipeline:* Context → Strategy → Script → AI Production → Editing → Variations → Launch.
    *   *Asynchronous Workers:* BullMQ, Redis, FFmpeg fallback rendering to handle high-volume async video generation without blocking.
    *   *Dynamic Asset Systems:* Managing collections, B-roll, avatars, and style presets.
*   **Outcomes:** Successfully operationalized a system where AI acts as a production multiplier, not just a generative gimmick. (100+ Videos/month capacity).

### 3. WRITING (Technical Journal)
*   **Articles:**
    *   *Reliability Over Illusion (Agentic Infra):* Generating plausible output is easy. Reliable execution is hard.
    *   *Agentic Memory: Beyond Chat History (Architecture):* Chat history is not memory. Old facts must be superseded.
    *   *Big Models Plan, Small Models Execute (Economics):* A framework for intelligently routing inference based on task complexity.
    *   *Creative Velocity (Pipelines):* Treating creative ad production as a deterministic software pipeline.

### 4. CONTACT
*   **Hero:** Start a Conversation / Available for architectural consulting, fractional CTO roles, and high-leverage systems design.
*   **Links:** Email Address, LinkedIn, GitHub, Twitter/X.

---

## PART 3: MASTER VIDEO GENERATION GUIDE

To generate the cinematic 8-second video assets for the website (without the worlds warping or changing materials), you must use a **First-Frame Conditioning (Image-to-Video)** loop. 

**The Workflow:**
1. Generate the first clip in the sequence (e.g., H01) using Text-to-Video.
2. Export the **very last frame** (7.9s) of that video as a static image.
3. Upload that image into Higgsfield/Runway Gen-3 and set it as the **Start Frame**.
4. Generate the next clip (e.g., H02) using that Start Frame and the corresponding prompt.
5. Repeat this chain until the sequence is complete.

Here are the prompts for the three worlds.

### WORLD 1: THE HOME ARCHIVE (Warm ivory concrete, diffused skylight)

*   **H01 (Text-to-Video):** Cinematic architectural photography. A slow, perfectly smooth forward dolly shot moving down a massive, minimalist corridor made of warm ivory concrete and travertine stone. Soft, highly diffused natural daylight spills downward from unseen skylights. The camera moves forward at human height with no panning or tilting. The shot ends as the camera approaches a large, dark rectangular threshold opening in the concrete wall ahead. 8 seconds, 24fps, photorealistic, 35mm lens.
*   **H02 (Image-to-Video):** The camera emerges from the dark rectangular threshold, moving slowly forward into a vast, high-ceilinged atrium with intersecting geometric planes of warm concrete. Deep in the center of the atrium rests a massive, monolithic dark stone block. The shot ends as the camera draws extremely close to the dark stone block. 8 seconds, 24fps.
*   **H03 (Image-to-Video):** A slow, smooth forward tracking shot. As the camera glides forward past the dark stone, a new gallery space is revealed ahead. The lighting is slightly moodier. The shot ends with the camera centered perfectly looking down a long, straight corridor lined with rhythmic, minimalist architectural columns. 8 seconds, 24fps.
*   **H04 (Image-to-Video):** A perfectly smooth forward dolly shot centered down a long corridor. The walls on both sides are made of stacked, paper-like architectural louvers. Soft, diffused warm light catches the edges of the louvers. Far ahead, at the end of the corridor, is a bright rectangular opening. The shot ends as the camera approaches the bright opening. 8 seconds, 24fps.
*   **H05 (Image-to-Video):** The camera pushes slowly through a bright rectangular opening, emerging into a minimalist, warm concrete pavilion. The pavilion opens out toward a serene, abstract horizon bathed in soft, diffused, ethereal light with no distinct landscape features. The camera comes to a gentle, gradual stop, resting entirely still on the serene horizon. 8 seconds, 24fps.

### WORLD 2: BOOSTIT (Polished steel, smoked glass, industrial tracking)

*   **B01 (Text-to-Video):** High-end industrial macro cinematography. A fast, perfectly linear lateral tracking shot moving low over a sleek, kinetic rail system made of brushed aluminum and polished steel. Precision metallic components blur slightly in the foreground. The lighting is moody, high-contrast, with warm industrial spotlights catching the metallic edges. The shot ends as the camera slides perfectly behind a thick, dark pane of smoked glass, blacking out the frame. 8 seconds, 24fps.
*   **B02 (Image-to-Video):** The camera emerges from behind a dark pane of smoked glass, continuing a perfectly smooth lateral tracking shot to the right. The camera glides alongside a series of repetitive, perfectly aligned vertical glass partitions. A physical pulse of warm amber light moves flawlessly through the center of the glass partitions. The shot ends as the camera pushes forward, turning 90 degrees to slide through a gap in the glass partitions. 8 seconds, 24fps.
*   **B03 (Image-to-Video):** The camera pushes through a narrow glass gap, emerging into a massive, cathedral-like mechanical space. The camera executes a slow, majestic forward push, revealing a vast ceiling grid of hundreds of identical, perfectly arranged metallic spools spinning silently in perfect unison. Moody architectural lighting with high-contrast shadows. The camera slowly decelerates to a stop. 8 seconds, 24fps.

### WORLD 3: JOXY (Machined brass, dark slate, glowing pathways)

*   **J01 (Text-to-Video):** Macroscopic cinematography, shallow depth of field. An extremely slow, deliberate camera push into a dark, highly complex array of suspended physical nodes made of dark slate and machined brass. Intricate mechanical connections shift slightly in the background. The camera pushes continuously forward, ending by pushing directly into a glowing, translucent amber resin node that fills the entire frame with warm light. 8 seconds, 24fps.
*   **J02 (Image-to-Video):** The camera pulls back slowly from a glowing amber translucent node, revealing a pristine geometric brass track. The camera tracks slowly alongside a physical pulse of warm, glowing light traveling down the brass track. The light pulse approaches a mechanical junction; a dark slate gate smoothly shifts open, routing the glowing light down a new path. The camera tilts down smoothly as the light pulse drops into a vertical chasm. 8 seconds, 24fps.
*   **J03 (Image-to-Video):** The camera descends smoothly into a dark, vertical slate chasm, arriving at a massive central mechanical router. Extremely heavy, interlocking brass rings slowly rotate and align, physically directing dozens of small, warm light pulses into perfectly separated outer channels. The camera pushes slowly forward, passing entirely through the center of the brass rings into a vast, dark, open void. 8 seconds, 24fps.
*   **J04 (Image-to-Video):** The camera emerges from a dark void, slowly pulling back to reveal a breathtaking, massive three-dimensional grid of thousands of physical brass tracks and dark slate nodes. The entire grid is pulsing with warm, amber light, operating in perfect, silent mechanical harmony. The depth of field expands to show the vast scale of the self-organizing machine. The camera slowly decelerates to a complete stop. 8 seconds, 24fps.

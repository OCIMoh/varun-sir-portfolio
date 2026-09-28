# Visual Asset Prompt Specification: Editorial + Cinematic Experimental 3D

This document specifies the master prompt library for generating production-grade visual assets for the **Varun Handa Portfolio**. 

All prompts are precision-engineered for **Midjourney v6.1**, **Flux.1 [pro]**, and **Runway Gen-3 Alpha (First-Frame conditioning)**.

---

## 1. Visual DNA & Art Direction Constraints

| Attribute | Specification |
|---|---|
| **Palette** | Warm Ivory (`#F4F2EA`), Near Black (`#11110F`), Graphite (`#353532`), Cobalt Blue (`#2448FF` — used sparingly as a laser/luminescent hairline) |
| **Lighting** | Diffused museum atrium skylight, raking architectural grazing light, soft studio softbox with deep negative fill, no harsh blown-out specular highlights |
| **Tactile Materials** | Honed travertine stone, warm matte ivory cast concrete, brushed aerospace aluminum, cold-rolled steel rods, smoked optical glass, translucent amber resin |
| **Composition** | Golden ratio balance, vast negative space (minimum 40% empty space for typography overlay), clean orthogonal or isometric angles, zero clutter |
| **Strict Anti-Patterns** | **NO** cyberpunk, **NO** neon matrices, **NO** floating binary code, **NO** sci-fi HUDs, **NO** generic AI human avatars, **NO** cartoonish 3D |

---

## 2. Master Prompt Library

### Category A: Hero Environments (3 Primary Worlds)

#### Asset: `HERO_ATRIUM_01` (Landing Atrium / Spatial Anchor)
*   **Context:** Used in `<ParallaxHero />` as the deep architectural background behind the headline "Agentic infra & distributed systems".
*   **Prompt (Midjourney v6.1):**
    ```text
    Architectural photography of an ultra-minimalist brutalist art foundation atrium, monolithic warm ivory concrete walls with subtle formwork tie-holes, polished honed travertine stone flooring. A solitary, perfectly cleaved rectangular dark basalt monolith resting silently in the center of the vast gallery. Soft natural daylight cascades downward from unseen recessed skylights above, casting delicate, gradual graphite shadows. Immense negative space, calm museum atmosphere, zero people, medium format Hasselblad H6D-100c, 35mm f/5.6 lens, architectural digest editorial, tactile stone grain, ultra-high resolution --ar 16:9 --style raw --c 2 --s 250
    ```
*   **Flux.1 [pro] Prompt:**
    ```text
    A high-end editorial architectural photograph of a vast, tranquil museum hall. The walls are smooth warm ivory cast concrete, and the floor is pale travertine stone. In the middle sits a low, dark charcoal stone sculpture with a flat top. Warm diffused morning skylight illuminates the scene with soft graphite shadows. Minimalist, sculptural, serene, expansive empty space.
    ```

#### Asset: `HERO_ATRIUM_02` (Threshold to Autonomous Systems)
*   **Context:** Alternate wide perspective for About & Engineering Philosophy hero section.
*   **Prompt (Midjourney v6.1):**
    ```text
    Cinematic architectural perspective looking down a rhythmic, colossal corridor of monolithic ivory concrete columns. The right side features rhythmic vertical louvers slicing diffused morning light into soft angled bars along the floor. In the far distance, a single sharp vertical aperture glows with an ultra-subtle, razor-thin line of electric cobalt blue light. Pristine geometric symmetry, monumental scale, museum silence, Kodak Portra 160 color profile, 50mm lens --ar 16:9 --style raw --s 300
    ```

#### Asset: `HERO_ATRIUM_03` (Horizon Pavilion / Terminal State)
*   **Context:** Contact & Inquiries footer immersion scene.
*   **Prompt (Midjourney v6.1):**
    ```text
    Quiet architectural terrace pavilion at twilight. Framed by two heavy brushed aluminum pillars and an ivory travertine stone ceiling. Looking outward toward an abstract, infinite calm horizon veiled in warm mist and diffused amber dusk light. A solitary low bench of smoked glass and cast bronze sits silently. Extreme stillness, contemplative, sophisticated, master architectural engineering --ar 16:9 --style raw --s 200
    ```

---

### Category B: Project & Experience Scenes (6 Targeted Systems)

#### Asset: `JOXY_ORCHESTRATOR_01` (The Multi-Agent Routing Engine)
*   **Context:** Feature visual for Joxy.ai Case Study — "The Watcher Pattern & Multi-Agent OS".
*   **Prompt (Midjourney v6.1):**
    ```text
    Macrophotography of an intricate kinetic computing sculpture on a gallery pedestal. Precision-machined solid brass linear tracks interlocked with matte dark slate geometric blocks. Suspended within the core is a glowing cylindrical module of warm translucent cast amber resin with microscopic internal optical conduits. Gallery exhibition softbox lighting, muted warm ivory background, rich graphite shadows, Leica SL2 with APO-Summicron-M 75mm f/2 lens, tactile mechanical luxury, Dieter Rams precision, no loose wires --ar 16:9 --style raw --s 250
    ```

#### Asset: `JOXY_MEMORY_02` (Scoped Memory & Supersession)
*   **Context:** Section graphic for "Agentic Memory: Scoped Stores & Controlled Forgetting".
*   **Prompt (Midjourney v6.1):**
    ```text
    Minimalist physical computing installation representing data storage. A horizontal rack of thin, vertical sheets of smoked optical glass and machined dark magnesium plates. Several plates show faint laser-engraved algorithmic glyphs in graphite tone. One central glass pane catches a delicate, precise cobalt blue refraction at its beveled edge. Warm ivory studio backdrop, shallow depth of field, high-end industrial design prototype, calm, cerebral --ar 16:9 --style raw --s 200
    ```

#### Asset: `BOOSTIT_PIPELINE_01` (The Deterministic Video Assembly Line)
*   **Context:** Feature visual for Boostit Case Study — "Creative Velocity as a Deterministic Software Pipeline".
*   **Prompt (Midjourney v6.1):**
    ```text
    Kinetic industrial design photography. A dual-rail linear motion track forged from brushed aerospace aluminum and mirror-polished stainless steel shafts. Riding the rail is a precision CNC carriage mounting a monolithic slab of dark smoked glass. Along the lower guide rail runs an ultra-thin, razor-sharp cobalt blue optical illumination strip. Studio lighting with warm ivory wall reflection, pristine clean mechanical engineering, macro detail of ball bearings and linear bushings, 35mm architectural composition --ar 16:9 --style raw --s 280
    ```

#### Asset: `BOOSTIT_WORKERS_02` (Async Distributed Render Fleet)
*   **Context:** Section graphic for "Asynchronous Workers, BullMQ & Video Queues".
*   **Prompt (Midjourney v6.1):**
    ```text
    Monumental industrial studio composition. An array of thirty identical, vertically stacked cylindrical reels milled from dark graphite anodized aluminum, rotating in silent mechanical synchrony along a curved travertine stone wall. Faint amber internal backlighting glowing through micro-perforations. Moody architectural lighting, high contrast, clean negative space, engineering masterwork --ar 16:9 --style raw --s 220
    ```

#### Asset: `INFRA_VERIFICATION_01` (Done vs. Verified)
*   **Context:** Visual accompaniment for Principle 01: "Done is a claim. Verified is a fact."
*   **Prompt (Midjourney v6.1):**
    ```text
    Conceptual material still life. A heavy cube of raw fractured black obsidian placed inside a precision-milled open cage of brushed satin brass with micrometer calibration markings. The brass cage locks the stone in strict mathematical alignment. Warm ivory background, razor-sharp focus on the intersection of the raw natural stone and the millimeter-perfect metal joints, museum artifact documentation, 90mm macro lens --ar 16:9 --style raw --s 320
    ```

#### Asset: `ECONOMICS_ROUTING_02` (Planner vs Worker Allocation)
*   **Context:** Visual accompaniment for Principle 02: "Big Models Plan. Small Models Execute."
*   **Prompt (Midjourney v6.1):**
    ```text
    Abstract kinetic balance installation. A massive, cantilevered beam of honed ivory travertine suspended over a series of twelve tiny, precision-turned brass counterweights arranged along a smoked glass rail. Perfect physical equilibrium, breathtaking architectural balance, soft diffused top light, quiet intellectual depth, editorial sculpture --ar 16:9 --style raw --s 260
    ```

---

### Category C: Abstract Transitions & Detail Shots (6 Cinematic Plates)

#### Asset: `DETAIL_LOUVER_01` (Rhythmic Travertine Grazing)
*   **Context:** Card background texture and transition mask.
*   **Prompt:**
    ```text
    Extreme close-up macro architectural photography. Rhythmically stacked horizontal louvers of dark matte slate inset into warm ivory porous travertine stone. Low-angle raking sunlight reveals the tactile grain, microscopic fossil pockets, and precise 2mm reveal joints. Warm, tactile, calm, monochromatic, 8k resolution, Leica Q3 --ar 16:9 --style raw --s 180
    ```

#### Asset: `DETAIL_PRISM_02` (Cobalt Optical Refraction)
*   **Context:** Subtle interaction feedback state when hovering on key project milestones.
*   **Prompt:**
    ```text
    Macro studio still life of a thick rectangular block of smoked optical glass resting on raw warm concrete. A single needle-thin beam of pure cobalt blue light passes through the glass, subtly dispersing and refracting along the internal polished bevels. Deep graphite shadow, vast ivory negative space, quiet luxury, minimal --ar 16:9 --style raw --s 200
    ```

#### Asset: `DETAIL_BRASS_JOINERY_03` (Precision Machined Tolerance)
*   **Context:** Section dividers and technical journal cards.
*   **Prompt:**
    ```text
    Macro photography of an interlocking mortise-and-tenon mechanical joint connecting cold-rolled steel and brushed naval brass. 0.05mm tolerance gap visible with oil sheen. Soft studio ambient lighting against warm sandstone, tactile industrial craftsmanship --ar 16:9 --style raw --s 220
    ```

#### Asset: `DETAIL_RESIN_CORE_04` (Internal State Engine)
*   **Context:** Technical journal article header: "Agentic Memory: Beyond Chat History".
*   **Prompt:**
    ```text
    Macro photograph looking deep inside a block of solid amber translucent casting resin. Suspended inside is a microscopic geometric grid of dark carbon fiber threads. Diffused warm light glowing through the amber volume, mysterious, intellectual, tactile computing concept --ar 16:9 --style raw --s 240
    ```

#### Asset: `DETAIL_CONCRETE_APERTURE_05` (Light Through Geometry)
*   **Context:** Background for Technical Journal index page.
*   **Prompt:**
    ```text
    Architectural abstraction. A sharp circular aperture carved through a 30cm thick slab of warm ivory concrete, revealing a pure dark graphite void behind it. Soft directional daylight catching the curved interior rim of the concrete. Poetic minimalism, Tadao Ando inspiration, sculptural purity --ar 16:9 --style raw --s 300
    ```

#### Asset: `DETAIL_STEEL_CABLE_06` (Tension & Orchestration)
*   **Context:** Footer background transition.
*   **Prompt:**
    ```text
    Macro shot of three ultra-fine braided stainless steel tension cables stretching across a gap between two monolithic travertine blocks. The cables are locked with miniature machined brass turnbuckles. Crisp focus, soft out-of-focus warm gallery background, tension and structural integrity --ar 16:9 --style raw --s 210
    ```

---

### Category D: Small Supporting Textures & Objects (4 Tactile Anchors)

1.  **`TEXTURE_TRAVERTINE_PAPER`**: Tactile flat-lay macro of rough-cut handmade cotton watercolor paper resting on a slab of honed Roman travertine stone. Ivory and bone white palette with deep graphite fibers. `--ar 1:1 --style raw`
2.  **`OBJECT_BRASS_TOKEN`**: A solid machined brass cylindrical counterweight with knurled grip edges, resting on a dark slate coaster. Studio lighting with warm reflection. `--ar 1:1 --style raw`
3.  **`OBJECT_SMOKED_LENS`**: A thick circular glass optical plano-convex lens with dark smoked tint, resting on warm architectural concrete. Refracting soft diffused ivory light. `--ar 1:1 --style raw`
4.  **`TEXTURE_GRAPHITE_WEAVE`**: Macro shot of structural carbon-composite graphite cloth under a clear satin lacquer coat, displaying orthogonal micro-grid weave. Zero gloss, completely matte finish. `--ar 1:1 --style raw`

---

## 3. Video Runway Gen-3 Alpha Conditioning Protocol

To animate these assets into the seamless 8-second continuous tracking environments:
1.  **Base Image:** Use `HERO_ATRIUM_01` as the Start Frame in Runway Gen-3 Alpha.
2.  **Motion Control Settings:**
    *   **Camera:** Forward Dolly (Speed: 1.5), Pan: 0, Tilt: 0, Roll: 0.
    *   **Motion Amount:** 2 (Strictly subdued, rigid physical materials).
3.  **Prompt:**
    ```text
    Cinematic architectural photography. Perfectly smooth forward dolly tracking shot down the center of a minimalist ivory concrete gallery hall toward the dark basalt stone block. Diffused natural daylight from above remains constant. Zero camera shake, zero warping, photorealistic 24fps.
    ```
4.  **Export:** Extract frame `00:07.9` (last frame) and re-feed as Start Frame for `HERO_ATRIUM_02`.

# Wooby Brand Guidelines

## Purpose of this document

This document translates Wooby's branding book into practical guidance for the website, content, and AI-assisted development.

For mission, product, ecosystem, and strategic context, see:

`docs/WOOBY_CONTEXT.md`

For technical workflow and repo process, see:

`docs/WEBSITE_UPDATE_WORKFLOW.md`

## Brand essence

Wooby is a playful, optimistic, and tech-forward brand working to combat child malnutrition through accessible, high-precision weight monitoring tools.

The brand should feel warm, fun, inspiring, and practical, while remaining credible for healthcare workers, NGOs, donors, communities, and technical contributors.

## Brand personality

Wooby's personality is:

- playful
- positive
- optimistic
- techy
- geeky
- enthusiastic
- inspiring
- approachable

Wooby should never feel cold, overly corporate, overly medical, or pity-based.

## Tone and voice

Wooby's tone is:

- positive
- enthusiastic
- inspiring

In communication, Wooby should use language that is:

- simple
- easy to understand
- informal when appropriate
- fun
- engaging
- optimistic
- action-oriented
- human

Good example:

> Tons of smiles start with better tools to monitor children's growth.

Good example:

> Wooby helps healthcare workers and communities monitor children's growth with accessible, open-source technology.

Good example:

> Built with care, tested in the field, and designed for communities to adapt.

Avoid:

> We revolutionize pediatric anthropometric diagnostics through disruptive scalable innovation.

Avoid:

> Poor children need our help to survive.

The first bad example is too corporate and abstract. The second is pity-based and does not respect the dignity of the people Wooby serves.

## Brand values

### Innovation

Use technology and creative problem-solving to address global health challenges.

### Collaboration

Work across communities, sectors, and borders to create lasting change.

### Accessibility

Make tools, knowledge, and solutions available regardless of geography or resources.

### Transparency

Share knowledge, progress, and challenges openly.

### Optimism for impact

Believe positive change is possible and focus on measurable, meaningful outcomes in children's health.

## Technical source of truth for colors and fonts

The technical source of truth for Wooby's website colors and typography is:

`src/app.css`

The brand tokens are defined inside the `@theme` block.

Current tokens:

```css
@theme {
  --color-blue: #00AAEE;
  --color-red: #FF595E;
  --color-yellow: #FFCA3A;
  --color-green: #8AC926;
  --color-purple: #6A4C93;
  --bg-default: rgb(255, 251, 244);
  --bg-yellow: rgb(253, 243, 174);
  --bg-blue: rgb(200, 240, 237);
  --font-title: 'Baby Doll', sans-serif;
  --font-base: 'Avenir', sans-serif;
}
```

Any new website color should first be added to `src/app.css`, then referenced through tokens.

Avoid hardcoding colors directly inside Svelte components unless there is a clear temporary reason.

## Brand color palette

### Baby Blue

- HEX: `#00AAEE`
- RGB: `0, 170, 238`
- CMYK: `100, 029, 000, 007`

Suggested use:

- primary brand moments
- headings
- buttons
- highlights
- links
- playful visual elements

### Red Salsa

- HEX: `#FF595E`
- RGB: `255, 089, 094`
- CMYK: `000, 065, 063, 000`

Suggested use:

- accents
- calls to action
- emphasis
- playful details

### Sunglow

- HEX: `#FFCA3A`
- RGB: `255, 202, 058`
- CMYK: `000, 021, 077, 000`

Suggested use:

- warm highlights
- backgrounds
- playful sections
- optimistic visual moments

### Yellow Green

- HEX: `#8AC926`
- RGB: `138, 201, 038`
- CMYK: `031, 000, 081, 021`

Suggested use:

- positive indicators
- growth-related visuals
- health and progress moments
- icons

### Royal Purple

- HEX: `#6A4C93`
- RGB: `106, 076, 147`
- CMYK: `028, 048, 000, 042`

Suggested use:

- contrast
- character details
- secondary accents
- depth in illustrations

## Background colors

Current website background tokens:

- `--bg-default: rgb(255, 251, 244)`
- `--bg-yellow: rgb(253, 243, 174)`
- `--bg-blue: rgb(200, 240, 237)`

Use these to preserve Wooby's warm, playful, child-friendly visual identity.

## Typography

### Logo typography

The Wooby logotype uses Jazz Ball.

The slogan uses Baby Doll and should always appear in capital letters when used with the logotype.

### Principal typography

Use:

- Baby Doll for headlines
- Avenir for body text

### Secondary digital typography

When Baby Doll and Avenir are not available, acceptable digital alternatives are:

- Chewy for headlines
- Lato for body text

## Logo usage

The logo has three components:

- isotype
- logotype
- slogan

These may be used together or separately depending on context.

### Clearance

The logo should have clear space around it. The minimum clear space should be based on the dimensions of the letter "O" in the logo.

### Minimum size

- Print: do not use smaller than 1.5 inches
- Screen: do not use smaller than 110 pixels wide

## Illustration style

Wooby's illustration style is playful, colorful, and friendly.

Approved visual elements include:

- Woo and Boo characters
- Baby Woo and Baby Boo
- playful forms
- brand patterns
- childlike icons
- colorful line icons
- technology and learning-inspired elements

Illustrations should support the optimistic and accessible nature of the brand.

## Iconography

Icons should feel:

- playful
- simple
- friendly
- colorful
- child-centered
- connected to learning, childhood, health, or technology

Avoid icons that feel:

- overly clinical
- generic corporate
- cold
- complex
- intimidating

## Photography principles

Photography should:

- focus on the positive impact of Wooby
- show how Wooby makes a difference in the lives of children and families
- emphasize human connection
- use natural light whenever possible
- feel warm and inviting
- stay clean and simple
- avoid clutter and distractions
- showcase the technology
- represent diversity

Photography should reflect Wooby's playful, optimistic, and enthusiastic tone.

## Website visual direction

The website should feel:

- playful
- bright
- colorful
- optimistic
- easy to understand
- clean
- human-centered
- technology-forward
- credible

The website should make the mission immediately clear and support action from visitors.

## Copywriting rules

- Use short and clear sentences.
- Keep the energy positive and enthusiastic.
- Explain technology in simple language.
- Use playful expressions where appropriate.
- Keep dignity and respect at the center.
- Avoid pity-based storytelling.
- Avoid exaggerated impact claims.
- Be clear about what exists now and what is planned.
- Use “children,” “infants,” “families,” “communities,” “healthcare workers,” and “NGOs” with care and respect.
- Use “malnutrition” accurately and seriously, while keeping the tone hopeful.
- Use field results and pilot data carefully, without implying certification or guaranteed health outcomes.

## Words and phrases to use

Preferred language:

- tons of smiles
- children's growth
- infant weight monitoring
- high-precision weight monitoring
- early detection
- prevent malnutrition
- accessible technology
- open-source
- healthcare workers
- communities
- NGOs
- affordable tools
- positive impact
- technology for child health
- collaborative innovation
- field-tested prototype
- local adaptation
- inclusive technology

## Words and phrases to use carefully

Use carefully:

- eradicate malnutrition
- diagnose
- medical device
- clinical
- clinical-grade
- vulnerable children
- beneficiaries
- life-saving
- revolutionary
- disruptive
- proven
- validated
- certified

These words may be appropriate in some contexts, but they should not be used without evidence or care.

## Claim discipline

When writing website copy, distinguish clearly between:

### Already demonstrated

- Wooby was born in the Airbus Humanity Lab.
- Wooby was developed by a multidisciplinary volunteer team.
- Wooby uses 3D-printed parts and off-the-shelf electronics.
- Wooby has been piloted in South Sudan and Colombia.
- Wooby has been used with 60 infants in pilot contexts.
- Health workers gave positive feedback on ease of use and workflow integration.
- The project is preparing open-source publication and further improvements.

### Current product characteristics

- low-cost infant scale
- 20 kg capacity
- 5 gram precision up to 10 kg
- estimated production cost around USD 50 to 70 in the current volunteer-led configuration
- software-enhanced measurement through calibration, signal processing, and machine learning possibilities

### Planned or under development

- public open-source build
- real-time data transmission
- broader replication by external organizations
- connected software and data analytics capabilities
- long-term governance and quality assurance structures

Do not present planned features as finished.

## Accessibility guidelines

The website should:

- use readable font sizes
- preserve strong color contrast
- include alt text for meaningful images
- use semantic HTML
- preserve keyboard navigation
- avoid excessive motion
- use clear buttons and links
- use a logical heading structure
- make calls to action easy to understand

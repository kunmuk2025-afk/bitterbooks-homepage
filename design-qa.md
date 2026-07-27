# BitterBooks landing page design QA

- Source visual truth: `upload/72ca239b-42d3-4b8f-83c7-2ce6cf666710.png`, `upload/c02f85a2-9948-4cd5-9a9f-bf85b004fab2.png`
- Implementation: local Vite preview
- Intended desktop viewport: 1280 × 720 CSS px
- Intended mobile viewport: 390 × 844 CSS px
- State: Korean default; English, Chinese and Japanese language-switch states
- Source pixel dimensions: mixed reference screenshots
- Implementation pixel dimensions: unavailable
- Density normalization: not applicable because browser capture was blocked

## Findings

- [Blocked] Browser-rendered implementation evidence remains unavailable.
  - Location: full landing page.
  - Evidence: the local preview started successfully, but the cloud browser rejected the preview URL with `ERR_BLOCKED_BY_CLIENT`.
  - Impact: typography, spacing, responsive crop, hover/focus states, and the Korean/English toggle cannot receive a valid visual comparison pass.
  - Fix: reopen the running preview in an available cloud-browser session, capture desktop and mobile states, and compare them with the source references.

## Required fidelity surfaces

- Fonts and typography: source code checked; browser-rendered comparison blocked.
- Spacing and layout rhythm: the desktop FAQ grid stretches both columns to the same row height; rendered comparison blocked.
- Colors and visual tokens: the FAQ uses warm ivory, coral, mustard and sage surfaces from the existing palette; rendered comparison blocked.
- Image quality and asset fidelity: the supplied BitterINK logo is preserved at its original ratio and placed in a restrained, rounded paper-label frame within the intro's left column.
- Copy and content: all 100 translatable selectors have complete English, Chinese and Japanese copy.

## Interaction checks

- Local production build: passed.
- Primary CTA/link markup: passed by source validation.
- Language switch: passed in a DOM interaction test across Korean, English, Chinese and Japanese.
- FAQ disclosure: passed in a DOM interaction test.
- Certificate dialog: JavaScript syntax passed; browser interaction test blocked.
- Console errors: unavailable because browser navigation was blocked.

## Full-view comparison evidence

Blocked: no browser-rendered screenshot was produced.

## Focused region comparison evidence

Blocked for the same reason. The A4 certificate cards, FAQ disclosure states and mobile FAQ layout require focused browser captures.

## Comparison history

- Pass 1: browser capture attempt blocked before a visual comparison could be made; no visual iteration was possible.

## Implementation checklist

- [x] Preserve the complete FAQ illustration without cropping.
- [x] Fill the desktop top and bottom letterbox areas with a softened extension of the same artwork.
- [x] Preserve the original 3:2 presentation when the layout becomes one column.
- [x] Add complete Chinese and Japanese translations.
- [x] Translate certificate modal titles and language-control labels.
- [x] Add CJK-specific wrapping and responsive hero sizing.
- [x] Label Chinese as `中文` and add circular country flags to all language options.
- [x] Add the supplied BitterINK logo to the technology intro without competing with the main headline.
- [x] Use a warm paper-label treatment and scale the logo down responsively on tablet and mobile.
- [x] Preserve Kong as the dog’s name in the English, Chinese and Japanese book titles.
- [x] Remove the logo card’s rotation and use symmetrical corners and centered shadows.
- [ ] Complete browser-rendered desktop and mobile comparison.

final result: blocked

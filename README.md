# AcubeSAT Website

Official website for the SpaceDot team, built to support its open-source
mission and public presence.

---
## Setup

1. Clone the repository

2. Install dependencies:
> Requires Node.js v18 or higher. You can check with `node -v`.

```bash
npm install
```
3. Start the dev server:
```bash
npm run dev
```
4. Open your browser at:

http://localhost:3000/

## Common operations

### Adding new members

To add a new member, create a file in src/pages/Members-page/members. You can use the layout from other
already existing members as a starting point.
Portrait shots of members should be added in public/images/Members.

### Adding new positions

To add a new position, create a file in src/pages/Join/positions. After adding the file in the positions folder, add the position in src/pages/Join/Join.jsx, in the corresponding category. You can use the layout from other already existing positions from your subsystem as a starting point.

### Adding new sponsors

To add a new sponsor, create a file in the corresponding folder in src/pages/Sponsors-page/sponsors. You can use the layout from other already existing sponsors of the same category as a starting point.
Logos of sponsors should be added in public/images/Sponsors.

### Adding new publications

To add a new publication, edit the src/pages/Academia/Academia.jsx file and add a new entry under the appropriate
category. Make sure to keep the chronological sorting that already exists in the file.

## Description
This project is a React-based website built from the ground up with a focus on:

- Maintainability

- Clear project structure

- Open-source collaboration

- Modern frontend tooling

The codebase is intended to be easy to extend and approachable for future
contributors.

## Tech Stack
This project uses:
- React
- Vite
- Tailwind CSS
- Framer Motion
- Three.js/React Three Fiber

## Credits

Initial architecture and implementation by  
**Evangelia Patsatzaki**

This project was built from the ground up to support the open-source
mission of the SpaceDot team, with long-term maintainability and
community contribution in mind.

- GitHub: https://github.com/Epatsatzaki

## License
This project is licensed under the MIT License.
See the LICENSE file for details.

<MainGrid>

<HeaderTitle>
  
# My Portfolio Website <br/> w/ Next.js & TypeScript
<TitleAction href="https://github.com/stefanosAgelastos/stefanosAgelastos.github.io" label="Go to github repo" />
  
<TitleAction href="https://www.stefworks.ml" disabled label="This is the demo" />
</HeaderTitle>

<InfoGrid>

<InfoPaper>

## About the project
This project is about my personal portfolio at www.stefworks.ml. The webpage is statically exported and hosted for free on Github pages.
Behind the scenes, for each of my projects the site is fetching the README.md markdown content from github. The markdown is sprinkled with a little bit of HTML and renders a user friendlier layout, using custom themed Material UI components.

The site doesnt run on a server. On the contrary it takes advantage of fast static hosting, and seamless page to page navigation because of Next.js & React.

</InfoPaper>

<InfoPaper>
<MyChip label="Typescript"/>
<MyChip label="Javascript"/>
<MyChip label="Next.js"/>
<MyChip label="React 16.9"/>
<MyChip label="Material-UI"/>
<MyChip label="CSS-in-JS"/>
<MyChip label="CSS"/>
<MyChip label="HTML"/>
<MyChip label="Markdown-to-jsx"/>
<MyChip label="SSR"/>
<MyChip label="Github API"/>
<MyChip label="Github Pages"/>
<MyChip label="Design Thinking"/>
</InfoPaper>

</InfoGrid>

<PanelGrid>
<Panel id="1" heading="What?" secondaryHeading="About the technologies I used" >

### The Stack:
- Typescript
- Next.js
- React 16.9
- Webpack
- Markdown-to-JSX
- Css-in-JS
- Material-UI
</Panel>

<Panel id="2" heading="Why?" secondaryHeading="About the choice of technologies" >

### Argumenting the stack
I coded this website in order to have a personal portfolio where I could show details about my projects, and also to do it in a way that displays my current skill's level. **My goal was to have a website that loads fast and feels fluid.** I also had a few more requirements:

- I needed a link for each of my projects that I could share e.g. in my CV. Aka [deep-linking.](https://en.wikipedia.org/wiki/Deep_linking)
- Responsive and User Friendly Design.
- No server costs and hassle.
- I also wanted to evolve my skills on the super popular React framework and to experiment with Typescript.

I chose [Next.js](https://github.com/zeit/next.js) as a framework (which kind of wraps around React), because I wanted to combine traits typical to Single Page Applications, like automatic code-splitting, dynamic imports, and page prefetching, and also to be able to export to static files so that I can host it cheap and serve it fast at the same time.

Regarding the UI component library, I chose Material UI because, well it's based on solid and recongnisable design principles, it has great documentstion, supports Typescript development and is pretty easy to use and customise.
 
</Panel>

<Panel id="3" heading="How?" secondaryHeading="About my process" >

### Here there should be a "diary" of my process

</Panel>

<Panel id="4" heading="For Devs" secondaryHeading="Clone and install" >

## How to use

Download or clone the repo

```sh
git clone https://github.com/stefanosAgelastos/stefanosAgelastos.github.io
cd stefanosAgelastos.github.io
```

Install it and run:

```sh
npm install
npm run dev
```  

</Panel>

<Panel id="5" heading="For Devs" secondaryHeading="Make your own version of this site" >

## Getting Started

These instructions here should be explaining which parts of the code you should change in display to host your own projects in development and production. WILL UPDATE SOON.

### Prerequisites

**Note : npm6** is required to install dependencies properly.

## Available Commands

1. `npm run dev` - starts the development server with hot reloading enabled

2. `npm run build` - [builds](https://nextjs.org/docs#production-deployment) for production ahead of time

3. `npm run start` - starts the production server

4. `npm run export` - [exports the website as static files](https://nextjs.org/docs#static-html-export)

5. `npm run serve` - serves the static files on localhost (you need [serve](https://www.npmjs.com/package/serve) installed)

6. `npm run publish` - for pushing code to github pages branch: runs a series of commands, that keep in /out your CNAME and .nojekyl files and pushes /out as a subtree to your master branch

7. `npm run fast` - runs `build & export & publish` in a sequence for fast deployment to github pages

</Panel>

</PanelGrid>


</MainGrid>

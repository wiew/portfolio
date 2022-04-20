import { useRef } from 'react'

import Header from './components/Header'

function App() {
  const homeSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  
  return (
    <>
      <Header refProps={
        [
          {
            reference: homeSection,
            title: 'Home',
          },
          {
            reference: projectsSection,
            title: 'Projects',
          },
          {
            reference: contactSection,
            title: 'Contact',
          },
      ]
      } />
      <section ref={homeSection} className="grid h-screen font-bold text-slate-200 text-7xl place-items-center">
        home
      </section>
      <section ref={projectsSection} className="grid h-screen font-bold text-slate-200 text-7xl place-items-center">
        projects
      </section>
      <section ref={contactSection} className="grid h-screen font-bold text-slate-200 text-7xl place-items-center">
        contact
      </section>
    </>
  );
}

export default App;

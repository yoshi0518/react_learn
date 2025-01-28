import { useState } from 'react';
import Panel from './Panel';

const contents = [
  {
    title: 'About',
    content:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
  },
  {
    title: 'Etymology',
    content: 'The name comes from a unique local rock formation that is often likened to a mushroom.',
  },
  {
    title: 'History',
    content:
      'Almaty was founded in 1854 by Vladimir Dzhanibekov, a Russian general who named it after his hometown of Almaty, in present-day Kazakhstan.',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {contents.map((content, index) => (
        <Panel
          key={content.content}
          title={content.title}
          isActive={index === activeIndex}
          onShow={() => setActiveIndex(index)}
        >
          {content.content}
        </Panel>
      ))}
    </>
  );
};

export default Accordion;

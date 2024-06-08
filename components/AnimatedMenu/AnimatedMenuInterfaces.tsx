export interface Item {
  id: string;
  title: string;
  text?: string;
  imageUrl: string;
  theme?: string
}

export const items: Item[] = [
  {
    id: '01',
    title: 'Classical art',
    text: 'ANCIENT GREEK art stands out among that of other ancient cultures ' +
      'for its development of naturalistic but idealized depictions of the human body, ' +
      'in which largely nude male figures were generally the focus of innovation. ' +
      'ROMAN art was influenced by Greece and can in part be taken as a descendant ' +
      'of ancient Greek painting and sculpture, but was also strongly influenced by the' +
      ' more local Etruscan art of Italy. ',
    imageUrl: '/animatedMenu/Achilles_Right_Compressed.jpg',
    theme: 'Pink',
  },
  {
    id: '02',
    title: 'Medieval art',
    text: 'Medieval art can be broadly categorized into the Byzantine art of the Eastern Roman Empire,' +
      ' and the Gothic art that emerged in Western Europe over the same period.' +
      ' Romanesque art and Gothic art dominated Western and Central Europe from approximately 1000 AD ' +
      'to the rise of the Renaissance style in the 15th century or later, depending on the region',
    imageUrl: '/animatedMenu/Gothic_New.jpg',
  },
  {
    id: '03',
    title: 'Renaissance art',
    text: 'Renaissance art emerged as a distinct style in northern Italy from around 1420, ' +
      'in parallel with developments which occurred in philosophy, literature, music, and science.' +
      ' It took as its foundation the art of Classical antiquity, but was also influenced by the art of Northern Europe ' +
      'and contemporary scientific knowledge. Renaissance artists painted a wide variety of themes.',
    imageUrl: '/animatedMenu/Pieta_New.jpg',
  },
  {
    id: '04',
    title: 'Mannerism, Baroque and Rococo',
    text: 'Renaissance Classicism spawned two different movements—Mannerism and the Baroque. ' +
      'Mannerism, a reaction against the idealist perfection of Classicism, employed distortion of light ' +
      'and spatial frameworks in order to emphasize the emotional content of a painting and the emotions of the painter.',
    imageUrl: '/animatedMenu/Trevi_New.jpg',

  },
]

export interface AnimatedMenuProps {
  className?: string;
}
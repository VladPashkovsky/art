import { ReactNode } from 'react'

export interface ModalInfo {
  title: string;
  titleUrl: string;
  content: ReactNode;
  coverImage: string;
  listImages: {
    name: string;
    src: string;
    type: 'color' | 'dark';
    info?: string
  }[]
  // listImages: string[]
  itemModalBackground?: string;
}

export interface ArtMenuLinks {
  id: number;
  href: string;
  title: string;
  image: string;
  active: boolean;
  modalInfo: ModalInfo;
}

export const links: ArtMenuLinks[] = [
  {
    id: 1,
    href: '/british_museum',
    title: 'THE BRITISH MUSEUM',
    image: '/images/British_Museum/BM_Card.jpeg',
    active: true,
    modalInfo: {
      title: 'Badlands',
      content: (
        <>
          <p>The British Museum is a public museum dedicated to human history, art and culture located in the Bloomsbury
            area of London</p>
          <p> Its permanent collection of eight million works is the largest in the world.
            It documents the story of human culture from its beginnings to the present.</p>
          <p> The British Museum was the first public national museum to cover all fields of knowledge. </p>
          <p> In 2023 the museum received 5,820,860 visitors, an increase of 42% from 2022. </p>
          <p> It was the most popular attraction in the United Kingdom according to ALVA, the Association of Leading
            Visitor Attractions. </p>
        </>
      ),
      titleUrl: '/images/British_Museum/british-museum-logo.svg',
      coverImage: '/images/British_Museum/Br_Museum.jpg',
      listImages: [
        {
          name: 'Man_Bust',
          src: '/images/British_Museum/items/Man_Bust.png',
          type: 'color',
          info: `
          Inscriptions
Inscription type: inscription
Inscription language: Latin
Inscription content: L · AEMILIVS · FORTVNATVS · AMICO · OPTIMO · S · P · F ·
Inscription transliteration: L(ucius) Aemilius Fortunatus amico optimo (de) s(ua) p(ecunia) f(ecit)
Inscription translation: Lucius Aemilius Fortunatus made (this) for his best friend, with his own money.
Inscription note: AMICO OPTIMO may be a modern addition. The lettering of the rest of the text looks genuine, and the placement of S P F underneath the name makes sense spatially. AMICO OPTIMO may have been added at the back of the pedestal by a later hand (possibly after Hamilton’s excavation?) – the lettering is less good and cut much deeper in places (the T of OPTIMO in particular). The formula amico optimo is more typical of funerary epitaph than the inscriptions usually found on honorific busts, as per the cinerary urn also in Townley’s collections, 1805,0703.164. See Williams (Williams, C. Reading Roman Friendship (CUP 2012), 297ff) for further information regarding the language of ‘friendship’ and individual commemorations.
Curator's comments
For the Villa of Sete Bassi and Gavin Hamilton's excavation there, see:

R. Neudecker, Die Skulpturenausstattung roemischer Villen in Italien (Mainz 1988), 207-209 cat no. 50.2.

I. Bignamini and C. Hornsby, Digging and Dealing in Eighteenth-Century Rome (London 2010), 134-140 [this sculpture p. 136-7 no. 2].

Five other marbles from this site…
View moreabout curator's comments
Cook 2013, nr. 139:
‘A Bust of a middle aged man; the hair of the head and the beard is short and frizled; the left shoulder bears part of the Chlamys [fastened] with a round buckle, and on the base is the following inscription. L • AEMILIVS • FORTVNATVS • AMICO • OPTIMO • S • P • F • It was found 1775 amongst the same ruins mentioned in No 36 of the dining room’ [sc. the sleeping Endymion (1805,0703.23), found at Roma Vecchia] (TY 12/3, street drawing room 5). Townley evidently misremembered the date of discovery, since the bust was found by October 1774 with 1805,0703.109 and was mentioned in all the same letters: perhaps he was thinking of the year that the bust arrived in London. The statement in ST 2 (street drawing room 14) and GR 2 (street drawing room 15) that the bust was found in 1776 on the property of the Cesarea family near Genzano is, as noted by Smith, also erroneous.
The bust was charged at £65 in Hamilton’s account dated 23 January 1775 (TY 8/109), but the price was recorded by Townley as £60 in TY 10/5-7, TY 12/1, TY 10/3 (fo. 32), and ST 1 (fo. 21r). The bust was shipped in no. 2 of a consignment of six cases (letter dated 15 February 1775, TY 7/581).

The authenticity of the inscription has been doubted [Walker], but it was mentioned by Hamilton in a letter dated 22 November 1774, and there seems no reason to suppose that it had been added so soon after the discovery of the bust.

An error in T. inv. [sc. GR 2] caused the bust to be assigned to Genzano [Smith], and was so published by Dallaway, Anecdotes 325; hence it appears in the wrong volume of CIL.
          `,
        },
        {
          name: 'Caryatid',
          src: '/images/British_Museum/items/caryatid.png',
          type: 'color',
          info: `
            Curator's comments
In a style adapted from Athenian work of the 5th century BC. One of a group of five surviving caryatids found at the site, arranged to form a colonnade in a religious sanctuary, probably of Demeter. The sanctuary was built on land owned by Regilla, wife of the Greek magnate and philosopher Herodes Atticus. One fragmentary caryatid, now in the Villa Albani, Rome, is signed by the Athenian sculptors Kriton and Nikolaos.
View lessabout curator's comments
Cook 2013, nr. 264:

Townley's description; ‘A Statue of Isis, six feet six inches high; upon the head is the calyx of the Lotus, the symbol of this deity; The rose, chaplets, and other emblems of production are placed on other parts of the head; It is draped in a similar manner to the statue of Libera [1805,0703.22 ], and was found two miles beyond the tomb of Cæcilia Metella near the Appian road during the pontificate of Sixtus the fifth, who placed it in his villa, inherited by the Negroni family, and from whence it was lately brought to England.’ (TY 12/3; Chambers, dining room 19; the last five words emended in the Towneley Hall version in Townley’s hand as ‘passed into this collection 1787’. The error in the date was perhaps derived from the date of payment for expenses incurred in shipping, 21 January 1787, TY 8/5/1).

Perhaps from the Triopion of Herodes Atticus, as conjectured by Brunn.

Although Townley at first accepted the common view that the statue is a caryatid (see below, TY 7/427/2), by 30 June 1786, he had become convinced that this description was wrong since the figure had no basket, preferring instead ‘Greek Isidis or female Bacchus’ (TY 7/437/1).

When Jenkins announced his purchase of the Negroni collection, Townley replied by return with a list of desiderata, adding ‘the object I wish for most, if I could compas the purchase is the finest of the two Cariatides near the higher Pallace, the one on the right hand as you face the pallace. I beg to its price and to have the refusal of it, if it is not engaged’ (TY 7/427/2, 21 October 1785). Although Visconti objected to the export, Jenkins thought it could be arranged, and he offered the statues to Townley at £400 for one or £600 for the pair (TY 7/431, 7 January 1786). Townley opted for one (TY 7/432, 3 February 1786). By 26 April 1786, Jenkins had overcome the difficulties (TY 7/435); a drawing that he sent on 10 June (enclosed in TY 7/436) met with Townley’s approval (TY 7/437/1, 30 June), and the statue was shipped for London in July (TY 7/440). It seems to have arrived in London towards the end of 1786, since Jenkins knew by 10 January 1787 that it had arrived safely (TY 7/448/1).

Jenkins wrote to Townley on 28 September 1785 that he had acquired ‘all the Antiquities in the Villa Negroni’ (TY 7/427/1), and over the course of the following year, Townley purchased five items (1805,0703.119; 1805,0703.44; 1805,0703.123; 1805,0703.88; and three pieces of the same sarcophagus 1805,0703.125; 1805,0703.126; 1805,0703.130). Four more (1805,0703.140; 1805,0703.120; 1805,0703.180; 1805,0703.182) were to follow in 1777-8.

          `,
        }, {
          name: 'Figure',
          src: '/images/British_Museum/items/figure.png',
          type: 'color',
          info: `
            Limestone seated figure of Horus wearing Roman military costume; 
            traces of paint; arms lost. The figure originally wore a crown, probably of another material, 
            inserted into the top of the head. The falcon head is rendered with careful attention to the feathering around the face; 
            the eyes are human and the pupils are incised. The feathers of the falcon god double as the scales of a mail shirt
             (described by the modern term lorica plumata), the sleeves of which end below the shoulders. 
             A knotted cingulum encircles the waist, dropping to the hips in contrast to the more typically depicted position 
             at a soldier's natural waist. A cloak fastened at the right shoulder by a round plate fibula is pushed back over the shoulders.
              A separate garment covers the legs. The attitude is one of casual repose, common to images of senior Graeco-Roman deities.
              Exhibition history
2006-2007, Frankfurt, Museum Alter Plastic, Egypt, Greece and Rome
2013, - 2014 21 Sep - 05 Jan, Bristol Museum + Art Gallery, Roman Empire: Power + People
2014, 25 Jan - 27 Apr, Norwich Castle, Roman Empire + People
2014, 15 May - 31 Aug, Coventry, Herbert Museum, Roman Empire + People
2014 -2015, 20 Sep - 4 Jan, Manchester, Roman Empire + People
2015, 24 Jan - 10 May, Dundee, Roman Empire + People
2015, 30 May - 13 Sep, Tyne & Wear, Roman Empire + People
2015-2016, Oct 29-Feb 7, London, BM, G35, Egypt: Faith after the Pharaohs.
2018 23 Feb – 22 Apr, Nashville, Frist Art Museum, 'Rome; City &Empire'
2018-2019 20 Sep-04 Feb, Canberra, National Museum of Australia, 'Rome; City &Empire'
2021 13 Feb-15 Aug, Belgium, Tongeren, Gallo-Romeins Museum, 'Rome; City & Empire'
2021-2022 25 Sep – 08 Oct, China, Suzhou Museum, 'Rome: City & Empire'
          `,
        }, {
          name: 'Portrait',
          src: '/images/British_Museum/items/portrait_bust.png',
          type: 'color',
          info: `
            Probably marked the birth of her son Titus Aelius Antoninus in AD152.
Cook 2011, nr. 210:
‘A head of Faustina the younger, with an ancient polish; purchased in a private house at Pozzuolo 1777’ (TY 12/3, street drawing room 22).

Purchased from ‘a Canonico’ at Pozzuolo on 22 March 1777 for 160 Ducats (‘Union Catalogue’, fo. 52r), with a gratuity of 27 Ducats, calculated by Townley to be the equivalent of 149.85 Scudi (TY 8/51) and therefore £35 (TY 10/5; TY 12/1; TY 10/3, fo. 7) or £34 (TY 10/7). A charge of £6.10s.9d. for shipping two cases from Naples was paid on 23 October 1777 (‘Union Catalogue’, fo. 56r).

Date:
Faustina the younger, made ca. AD 152-60 (museum label).

Drawings:
* Townley drawing 2010,5006.184, attributed to Brown (I. D. Jenkins).

Bibliography:
- Synopsis of the Contents of the British Museum (1808), VI.40;
- Ancient Marbles of the British Museum, X, pl. 10;
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities, 2 vols. (London, 1874 [1892] and 1876), I, no. 28;
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 161, no. 1905;
- R. P. Hinks, Greek and Roman Portrait Sculpture (London, 1935), pl. 42b;
- S. Howard, Bartolomeo Cavaceppi, eighteenth-century restorer (PhD thesis 1958; Chicago, 1980), 264, no. 14.
Exhibition history
2018 23 Feb – 22 Apr, Nashville, Frist Art Museum, 'Rome; City &Empire'
2018-2019 20 Sep-04 Feb, Canberra, National Museum of Australia, 'Rome; City &Empire'
2021 13 Feb-15 Aug, Belgium, Tongeren, Gallo-Romeins Museum, 'Rome; City & Empire'
2021-2022 25 Sep – 08 Oct, China, Suzhou Museum, 'Rome: City & Empire'
          `,
        },
        {
          name: 'Lucius',
          src: '/images/British_Museum/items/Lucius_Verus.png',
          type: 'color',
          info: `
            This portrait appears to have marked the joint rule of Lucius Verus with Marcus Aurelius.
Cook 2011, nr. 85:
‘A Bust of Lucius Verus with the military coat, covered with the Paludamentum; formerly in the Mattei Villa, and is engraved in the Museum Matteianum’ (TY 12/3, library 25).
Bought from Hamilton for £70 (TY 8/4; TY 10/2, fo. 25r; TY 10/3, fo.29; ST 1, fo. 17r).

The portraits of M. Aurelius ad L. Verus (1805.7-3.100 and 1805.7-3.103 = Sculptures 1907 and 1911), both formerly in the Mattei collection, were acquired from Hamilton in March 1773, the record of the payment being in Townley’s accounts (TY 8/4) under 22 April. Both were paid for by drafts rather than in cash.

Drawings:
* Townley drawings 2010,5006.198, tentatively attributed to Pacetti [I. D. Jenkins]; and 2010,5006.145.
* Zoffany: B. F. Cook, \`The Townley Marbles in Westminster and Bloomsbury', The British Museum Yearbook, 2 (1977), 36-37, figs. 19-20, no. 32.

Bibliography:
- A. Venuti, Vetera Monumenta Matthaeiorum (Rome 1779), II, pl. 24,1.
- Synopsis of the Contents of the British Museum (1808) IV.10.
- Ancient Marbles of the British Museum, III, pl. 10.
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities (Synopsis of the Contents of the British Museum) (2 vols., London 1874 [2nd ed. 1879] and 1876), I, no. 130.
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 164, no. 1911.
- R. P. Hinks, Greek and Roman Portrait Sculpture (London 1935), 31, pl. 41b.
- B. F. Cook, The Townley Marbles (London 1985), 16-7, fig. 13.

          `,
        },
        {
          name: 'Sarcophagus',
          src: '/images/British_Museum/items/sarcophagus.png',
          type: 'color',
          info: `
            Fragment from the front of a sarcophagus; relief in blue-veined marble with large crystals (probably Proconnesian),
             showing a Roman marriage ceremony (dextratrum iunctio, literally joining of hands). 
             Between the bride and groom was a figure (now missing) of the god Hymenaeus, who carried the torch used in wedding processions, 
             the flame of which remains against the bride's robes.
             Walker, Susan, 1990, Catalogue of Roman Sarcophagi in the British Museum:

B. Cavaceppi, Raccolta d'antiche Statue ... I (1768), no. 35; A. Rossbach, Römische Hochzeits und Ehedenkmäler (Leipzig 1871), 18; Smith, III, 318-9 no. 2307; Reinach, RepRel II 496 no. 2; G. von Lucken, Das Altertum 2 (1956), 35, unnum. fig. (cast); L. Reekmans, BlnstHistBelgRom 31 (1958), 22; Cook, Townley 20; Walker, Memorials 48-9, fig. 39.

In the engraving published by Cavaceppi, the missing figures of Hymenaeus and the female attendant are fancifully restored, as are the heads of the figures in the main group. The engraving may reflect Cavaceppi's intentions, rather than the restorations that were actually carried out (see below). Similarly, in the caption Cavaceppi describes the relief as 'esistente in Inghilterra', when it is clear that the relief was at the time of publication still in Rome. The misleading restorations and the caption may have been intended to impress prospective clients.(1)
Before Townley acquired the relief, the head of the male attendant was completely restored, as were substantial parts of the heads of the bride and bridegroom and of the allegorical figure, most likely a personification of Concordia, who stands between them with her hands on their shoulders. The base of the relief is entirely restored to calf level. Hymenaeus and the female attendant, whose left hand supports the bride, are missing. There are minor breaks in the drapery and fingers of the bride and groom.
The relief probably belongs to the right end of the front of a sarcophagus. The composition of the group is very similar to that of a completely preserved sarcophagus in San Lorenzo fuori le Mura, Rome,(2) and the London relief may be similarly interpreted.
The relief in San Lorenzo shows a procession of allegorical figures and attendants associated with the Roman ceremony of marriage, converging upon a scene of sacrifice of a sheep and a pig.(3) There is, however, no literary evidence for animal sacrifice at Roman marriages.(4) It is likely that the San Lorenzo sarcophagus, and by analogy the fragmentary relief in London, allude to the idealised personal qualities to which the deceased aspired.(5) The classicising restorations make it difficult to date the London fragment, but the style of the drapery and the decorative work on the torch suggest an early to mid-Antonine date for the original. Professor Koch suggests a later date of c. AD 170-80 (pers.comm.).

1. Suggested by Dr C. A. Picon.
2. I, S. Ryberg, 'Rites of the State Religion in Roman Art'. MAAR XXII (1955), fig. 95; Reekmans, op. at. (above), fig. 10.
3. Ryberg, op. at. (n. 2), 166 7.
4. C. Reinsberg, jW 99 (1984), 292 3.
5. K. Fittschen, AA 1971, 117 9. For others in the series, see
G. Rodenwaldt, Abb PreussAkadWissPhilKlass. 3 (1935) and Koch-Sichtermann, 97 102.
          `,
        }, {
          name: 'Statue',
          src: '/images/British_Museum/items/statue.png',
          type: 'color',
          info: `
            The head, arms and lyre were restored by the Italian sculptor Cavaceppi.
Cook 2013, nr. 294:

Townley's description; ‘A small Statue of Isis, or Ceres, sitting on a rock and holding a lyre in her character of directing the harmony of the universe, the epithet of EYMOYCIA, which signifies Harmony, or the giver of Harmony, being inscribed upon the plinth in the above noted greek characters’ (1804 Parlour Catalogue, library 1).

Bought from Nollekens for £10.10s. (Wigan Accounts, 3 July 1793). Its previous history is unknown: Smith’s statement that it came from the Barberini Palace is an error, caused by confusion with 38.

Drawings:
* Townley drawing 2010,5006.99.

Bibliography:
- Synopsis of the Contents of the British Museum (1808), VI.30;
- Ancient Marbles of the British Museum, X, pl. 41, fig. 2;
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities, 2 vols. (London, 1874 [1892] and 1876), II, no. 48;
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 72, no. 1687.

          `,
        }, {
          name: 'Sarg_Two',
          src: '/images/British_Museum/items/sarcophagus_two.png',
          type: 'color',
          info: `
           Part of the front of a columnar sarcophagus made of Phrygian marble: 
           a seated man reads from a scroll to Thalia, the Muse of comedy. 
           The seated figure most likely occupies the central niche of the front of the sarcophagus. 
           The partially preserved niche right of the Muse may mark the right end of the front; 
           this and the other missing niches probably held representatives of the other Muses, depicted surrounding the 'Man of Culture.'
           Walker, Susan, 1990, Catalogue of Roman Sarcophagi in the British Museum:

For a full bibliography, see below. Smith, III, 322-3 no. 2312; Morey, 37: Rome A (ill. 52); G Rodenwaldt, Jdl 51 (1936), 100; Wiegartz, 164: London C (bibl.); Wegner, ASR, V.3, 24 no. 44 (bibl.); Faedo, ANRW II. 12.2 (1981), 101-2 (bibl. n. 104); G Koch, BJ 182 (1982, 171); Koch-Sichtermann, 273, n. 3; Waelkens, 90 no. 132; Cook, Townley 25, fig. 24 p. 24.

The seated figure most likely occupies the central niche of the front of the sarcophagus. The partially preserved niche right of the Muse may mark the right end of the front; this and the other missing niches probably held representatives of the other Muses, depicted surrounding the 'Man of Culture.'(1) The interpretation of this and other similar scenes is discussed by Marrou.(2) Estimates of the date of this relief have ranged from the late Antonine period to the reign of Gallienus.(3) Wiegartz dated the relief to AD 225—35, and identified it as one of a group of twenty-six columnar sarcophagi representing the same scene, but with some variation in the pose of the figures.(4)
Clearly Wiegartz's association of this relief with the standard type ('Haupttypus' or 'geläufiger' Typ) of Asiatic sarcophagus is correct, but Wegner's late second-century date merits serious reconsideration.(5) His observation of the close relationship between the treatment of the head of the poet and that of male heads on monumental relief sculpture in late Antonine Rome is valid, and may be further supported by the dissimilarity between this head and the male heads in the other members of Wiegartz's group.(6) Moreover, the elongated forms of the ovolo, Lesbian cymatium and dentils suggest a second-century date.
In the light of the results of isotopic analysis of marble from this sarcophagus, it may be considered a Phrygian import to Rome, and one of the earliest examples of Phrygian Muse sarcophagi.(7) Moreover, the similarity with local relief sculpture implies that the head, at least, was exported from Phrygia unfinished, and was surely intended as a portrait.(8) The inclusion of a portrait at this period is typical of metropolitan taste (compare Walker, no. 2 – 1951.3-6.1). The other members of Wiegartz's group would then represent (if their dating is correct) the spread of this type of sarcophagus to a wider spectrum of clients, a characteristic development of the early third century AD.

          `,
        },
      ],
    },
  },
  {
    id: 2,
    href: '/louvre',
    title: 'LOUVRE',
    image: '/images/Louvre/louvre.jpg',

    active: false,
    modalInfo: {
      title: 'Glacial Frontier',
      titleUrl: '/images/Louvre/Louvre_logo.png',
      content: (
        <>
          <p>The Louvre is a national art museum in Paris, France. </p>
          <p>The building was extended many times to form the present Louvre Palace.
            In 1682, Louis XIV chose the Palace of Versailles for his household,
            leaving the Louvre primarily as a place to display the royal collection, including, from 1692,
            a collection of ancient Greek and Roman sculpture</p>
        </>
      ),
      coverImage: '/images/Louvre/gallery-apollon.jpg',
      listImages: [
        {
          name: 'Gau',
          src: '/images/Louvre/items/Gaulois.jpg',
          type: 'color',
          info: `
          Inscriptions
Inscription type: inscription
Inscription language: Latin
Inscription content: L · AEMILIVS · FORTVNATVS · AMICO · OPTIMO · S · P · F ·
Inscription transliteration: L(ucius) Aemilius Fortunatus amico optimo (de) s(ua) p(ecunia) f(ecit)
Inscription translation: Lucius Aemilius Fortunatus made (this) for his best friend, with his own money.
Inscription note: AMICO OPTIMO may be a modern addition. The lettering of the rest of the text looks genuine, and the placement of S P F underneath the name makes sense spatially. AMICO OPTIMO may have been added at the back of the pedestal by a later hand (possibly after Hamilton’s excavation?) – the lettering is less good and cut much deeper in places (the T of OPTIMO in particular). The formula amico optimo is more typical of funerary epitaph than the inscriptions usually found on honorific busts, as per the cinerary urn also in Townley’s collections, 1805,0703.164. See Williams (Williams, C. Reading Roman Friendship (CUP 2012), 297ff) for further information regarding the language of ‘friendship’ and individual commemorations.
Curator's comments
For the Villa of Sete Bassi and Gavin Hamilton's excavation there, see:

R. Neudecker, Die Skulpturenausstattung roemischer Villen in Italien (Mainz 1988), 207-209 cat no. 50.2.

I. Bignamini and C. Hornsby, Digging and Dealing in Eighteenth-Century Rome (London 2010), 134-140 [this sculpture p. 136-7 no. 2].

Five other marbles from this site…
View moreabout curator's comments
Cook 2013, nr. 139:
‘A Bust of a middle aged man; the hair of the head and the beard is short and frizled; the left shoulder bears part of the Chlamys [fastened] with a round buckle, and on the base is the following inscription. L • AEMILIVS • FORTVNATVS • AMICO • OPTIMO • S • P • F • It was found 1775 amongst the same ruins mentioned in No 36 of the dining room’ [sc. the sleeping Endymion (1805,0703.23), found at Roma Vecchia] (TY 12/3, street drawing room 5). Townley evidently misremembered the date of discovery, since the bust was found by October 1774 with 1805,0703.109 and was mentioned in all the same letters: perhaps he was thinking of the year that the bust arrived in London. The statement in ST 2 (street drawing room 14) and GR 2 (street drawing room 15) that the bust was found in 1776 on the property of the Cesarea family near Genzano is, as noted by Smith, also erroneous.
The bust was charged at £65 in Hamilton’s account dated 23 January 1775 (TY 8/109), but the price was recorded by Townley as £60 in TY 10/5-7, TY 12/1, TY 10/3 (fo. 32), and ST 1 (fo. 21r). The bust was shipped in no. 2 of a consignment of six cases (letter dated 15 February 1775, TY 7/581).

The authenticity of the inscription has been doubted [Walker], but it was mentioned by Hamilton in a letter dated 22 November 1774, and there seems no reason to suppose that it had been added so soon after the discovery of the bust.

An error in T. inv. [sc. GR 2] caused the bust to be assigned to Genzano [Smith], and was so published by Dallaway, Anecdotes 325; hence it appears in the wrong volume of CIL.
          `,
        },
        {
          name: 'Relief',
          src: '/images/Louvre/items/relief_architectural.jpg',
          type: 'color',
          info: `
            Curator's comments
In a style adapted from Athenian work of the 5th century BC. One of a group of five surviving caryatids found at the site, arranged to form a colonnade in a religious sanctuary, probably of Demeter. The sanctuary was built on land owned by Regilla, wife of the Greek magnate and philosopher Herodes Atticus. One fragmentary caryatid, now in the Villa Albani, Rome, is signed by the Athenian sculptors Kriton and Nikolaos.
View lessabout curator's comments
Cook 2013, nr. 264:

Townley's description; ‘A Statue of Isis, six feet six inches high; upon the head is the calyx of the Lotus, the symbol of this deity; The rose, chaplets, and other emblems of production are placed on other parts of the head; It is draped in a similar manner to the statue of Libera [1805,0703.22 ], and was found two miles beyond the tomb of Cæcilia Metella near the Appian road during the pontificate of Sixtus the fifth, who placed it in his villa, inherited by the Negroni family, and from whence it was lately brought to England.’ (TY 12/3; Chambers, dining room 19; the last five words emended in the Towneley Hall version in Townley’s hand as ‘passed into this collection 1787’. The error in the date was perhaps derived from the date of payment for expenses incurred in shipping, 21 January 1787, TY 8/5/1).

Perhaps from the Triopion of Herodes Atticus, as conjectured by Brunn.

Although Townley at first accepted the common view that the statue is a caryatid (see below, TY 7/427/2), by 30 June 1786, he had become convinced that this description was wrong since the figure had no basket, preferring instead ‘Greek Isidis or female Bacchus’ (TY 7/437/1).

When Jenkins announced his purchase of the Negroni collection, Townley replied by return with a list of desiderata, adding ‘the object I wish for most, if I could compas the purchase is the finest of the two Cariatides near the higher Pallace, the one on the right hand as you face the pallace. I beg to its price and to have the refusal of it, if it is not engaged’ (TY 7/427/2, 21 October 1785). Although Visconti objected to the export, Jenkins thought it could be arranged, and he offered the statues to Townley at £400 for one or £600 for the pair (TY 7/431, 7 January 1786). Townley opted for one (TY 7/432, 3 February 1786). By 26 April 1786, Jenkins had overcome the difficulties (TY 7/435); a drawing that he sent on 10 June (enclosed in TY 7/436) met with Townley’s approval (TY 7/437/1, 30 June), and the statue was shipped for London in July (TY 7/440). It seems to have arrived in London towards the end of 1786, since Jenkins knew by 10 January 1787 that it had arrived safely (TY 7/448/1).

Jenkins wrote to Townley on 28 September 1785 that he had acquired ‘all the Antiquities in the Villa Negroni’ (TY 7/427/1), and over the course of the following year, Townley purchased five items (1805,0703.119; 1805,0703.44; 1805,0703.123; 1805,0703.88; and three pieces of the same sarcophagus 1805,0703.125; 1805,0703.126; 1805,0703.130). Four more (1805,0703.140; 1805,0703.120; 1805,0703.180; 1805,0703.182) were to follow in 1777-8.

          `,
        }, {
          name: 'Group',
          src: '/images/Louvre/items/Groupe.jpg',
          type: 'color',
          info: `
            Limestone seated figure of Horus wearing Roman military costume; 
            traces of paint; arms lost. The figure originally wore a crown, probably of another material, 
            inserted into the top of the head. The falcon head is rendered with careful attention to the feathering around the face; 
            the eyes are human and the pupils are incised. The feathers of the falcon god double as the scales of a mail shirt
             (described by the modern term lorica plumata), the sleeves of which end below the shoulders. 
             A knotted cingulum encircles the waist, dropping to the hips in contrast to the more typically depicted position 
             at a soldier's natural waist. A cloak fastened at the right shoulder by a round plate fibula is pushed back over the shoulders.
              A separate garment covers the legs. The attitude is one of casual repose, common to images of senior Graeco-Roman deities.
              Exhibition history
2006-2007, Frankfurt, Museum Alter Plastic, Egypt, Greece and Rome
2013, - 2014 21 Sep - 05 Jan, Bristol Museum + Art Gallery, Roman Empire: Power + People
2014, 25 Jan - 27 Apr, Norwich Castle, Roman Empire + People
2014, 15 May - 31 Aug, Coventry, Herbert Museum, Roman Empire + People
2014 -2015, 20 Sep - 4 Jan, Manchester, Roman Empire + People
2015, 24 Jan - 10 May, Dundee, Roman Empire + People
2015, 30 May - 13 Sep, Tyne & Wear, Roman Empire + People
2015-2016, Oct 29-Feb 7, London, BM, G35, Egypt: Faith after the Pharaohs.
2018 23 Feb – 22 Apr, Nashville, Frist Art Museum, 'Rome; City &Empire'
2018-2019 20 Sep-04 Feb, Canberra, National Museum of Australia, 'Rome; City &Empire'
2021 13 Feb-15 Aug, Belgium, Tongeren, Gallo-Romeins Museum, 'Rome; City & Empire'
2021-2022 25 Sep – 08 Oct, China, Suzhou Museum, 'Rome: City & Empire'
          `,
        }, {
          name: 'Statue_Louvre',
          src: '/images/Louvre/items/Stat.jpg',
          type: 'color',
          info: `
            Probably marked the birth of her son Titus Aelius Antoninus in AD152.
Cook 2011, nr. 210:
‘A head of Faustina the younger, with an ancient polish; purchased in a private house at Pozzuolo 1777’ (TY 12/3, street drawing room 22).

Purchased from ‘a Canonico’ at Pozzuolo on 22 March 1777 for 160 Ducats (‘Union Catalogue’, fo. 52r), with a gratuity of 27 Ducats, calculated by Townley to be the equivalent of 149.85 Scudi (TY 8/51) and therefore £35 (TY 10/5; TY 12/1; TY 10/3, fo. 7) or £34 (TY 10/7). A charge of £6.10s.9d. for shipping two cases from Naples was paid on 23 October 1777 (‘Union Catalogue’, fo. 56r).

Date:
Faustina the younger, made ca. AD 152-60 (museum label).

Drawings:
* Townley drawing 2010,5006.184, attributed to Brown (I. D. Jenkins).

Bibliography:
- Synopsis of the Contents of the British Museum (1808), VI.40;
- Ancient Marbles of the British Museum, X, pl. 10;
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities, 2 vols. (London, 1874 [1892] and 1876), I, no. 28;
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 161, no. 1905;
- R. P. Hinks, Greek and Roman Portrait Sculpture (London, 1935), pl. 42b;
- S. Howard, Bartolomeo Cavaceppi, eighteenth-century restorer (PhD thesis 1958; Chicago, 1980), 264, no. 14.
Exhibition history
2018 23 Feb – 22 Apr, Nashville, Frist Art Museum, 'Rome; City &Empire'
2018-2019 20 Sep-04 Feb, Canberra, National Museum of Australia, 'Rome; City &Empire'
2021 13 Feb-15 Aug, Belgium, Tongeren, Gallo-Romeins Museum, 'Rome; City & Empire'
2021-2022 25 Sep – 08 Oct, China, Suzhou Museum, 'Rome: City & Empire'
          `,
        },
        {
          name: 'Emperor',
          src: '/images/Louvre/items/Emper.jpg',
          type: 'color',
          info: `
            This portrait appears to have marked the joint rule of Lucius Verus with Marcus Aurelius.
Cook 2011, nr. 85:
‘A Bust of Lucius Verus with the military coat, covered with the Paludamentum; formerly in the Mattei Villa, and is engraved in the Museum Matteianum’ (TY 12/3, library 25).
Bought from Hamilton for £70 (TY 8/4; TY 10/2, fo. 25r; TY 10/3, fo.29; ST 1, fo. 17r).

The portraits of M. Aurelius ad L. Verus (1805.7-3.100 and 1805.7-3.103 = Sculptures 1907 and 1911), both formerly in the Mattei collection, were acquired from Hamilton in March 1773, the record of the payment being in Townley’s accounts (TY 8/4) under 22 April. Both were paid for by drafts rather than in cash.

Drawings:
* Townley drawings 2010,5006.198, tentatively attributed to Pacetti [I. D. Jenkins]; and 2010,5006.145.
* Zoffany: B. F. Cook, \`The Townley Marbles in Westminster and Bloomsbury', The British Museum Yearbook, 2 (1977), 36-37, figs. 19-20, no. 32.

Bibliography:
- A. Venuti, Vetera Monumenta Matthaeiorum (Rome 1779), II, pl. 24,1.
- Synopsis of the Contents of the British Museum (1808) IV.10.
- Ancient Marbles of the British Museum, III, pl. 10.
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities (Synopsis of the Contents of the British Museum) (2 vols., London 1874 [2nd ed. 1879] and 1876), I, no. 130.
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 164, no. 1911.
- R. P. Hinks, Greek and Roman Portrait Sculpture (London 1935), 31, pl. 41b.
- B. F. Cook, The Townley Marbles (London 1985), 16-7, fig. 13.

          `,
        },
        {
          name: 'Sargoph',
          src: '/images/British_Museum/items/sarcophagus.png',
          type: 'color',
          info: `
            Fragment from the front of a sarcophagus; relief in blue-veined marble with large crystals (probably Proconnesian),
             showing a Roman marriage ceremony (dextratrum iunctio, literally joining of hands). 
             Between the bride and groom was a figure (now missing) of the god Hymenaeus, who carried the torch used in wedding processions, 
             the flame of which remains against the bride's robes.
             Walker, Susan, 1990, Catalogue of Roman Sarcophagi in the British Museum:

B. Cavaceppi, Raccolta d'antiche Statue ... I (1768), no. 35; A. Rossbach, Römische Hochzeits und Ehedenkmäler (Leipzig 1871), 18; Smith, III, 318-9 no. 2307; Reinach, RepRel II 496 no. 2; G. von Lucken, Das Altertum 2 (1956), 35, unnum. fig. (cast); L. Reekmans, BlnstHistBelgRom 31 (1958), 22; Cook, Townley 20; Walker, Memorials 48-9, fig. 39.

In the engraving published by Cavaceppi, the missing figures of Hymenaeus and the female attendant are fancifully restored, as are the heads of the figures in the main group. The engraving may reflect Cavaceppi's intentions, rather than the restorations that were actually carried out (see below). Similarly, in the caption Cavaceppi describes the relief as 'esistente in Inghilterra', when it is clear that the relief was at the time of publication still in Rome. The misleading restorations and the caption may have been intended to impress prospective clients.(1)
Before Townley acquired the relief, the head of the male attendant was completely restored, as were substantial parts of the heads of the bride and bridegroom and of the allegorical figure, most likely a personification of Concordia, who stands between them with her hands on their shoulders. The base of the relief is entirely restored to calf level. Hymenaeus and the female attendant, whose left hand supports the bride, are missing. There are minor breaks in the drapery and fingers of the bride and groom.
The relief probably belongs to the right end of the front of a sarcophagus. The composition of the group is very similar to that of a completely preserved sarcophagus in San Lorenzo fuori le Mura, Rome,(2) and the London relief may be similarly interpreted.
The relief in San Lorenzo shows a procession of allegorical figures and attendants associated with the Roman ceremony of marriage, converging upon a scene of sacrifice of a sheep and a pig.(3) There is, however, no literary evidence for animal sacrifice at Roman marriages.(4) It is likely that the San Lorenzo sarcophagus, and by analogy the fragmentary relief in London, allude to the idealised personal qualities to which the deceased aspired.(5) The classicising restorations make it difficult to date the London fragment, but the style of the drapery and the decorative work on the torch suggest an early to mid-Antonine date for the original. Professor Koch suggests a later date of c. AD 170-80 (pers.comm.).

1. Suggested by Dr C. A. Picon.
2. I, S. Ryberg, 'Rites of the State Religion in Roman Art'. MAAR XXII (1955), fig. 95; Reekmans, op. at. (above), fig. 10.
3. Ryberg, op. at. (n. 2), 166 7.
4. C. Reinsberg, jW 99 (1984), 292 3.
5. K. Fittschen, AA 1971, 117 9. For others in the series, see
G. Rodenwaldt, Abb PreussAkadWissPhilKlass. 3 (1935) and Koch-Sichtermann, 97 102.
          `,
        }, {
          name: 'Bust_Two',
          src: '/images/Louvre/items/buste.jpg',
          type: 'color',
          info: `
            The head, arms and lyre were restored by the Italian sculptor Cavaceppi.
Cook 2013, nr. 294:

Townley's description; ‘A small Statue of Isis, or Ceres, sitting on a rock and holding a lyre in her character of directing the harmony of the universe, the epithet of EYMOYCIA, which signifies Harmony, or the giver of Harmony, being inscribed upon the plinth in the above noted greek characters’ (1804 Parlour Catalogue, library 1).

Bought from Nollekens for £10.10s. (Wigan Accounts, 3 July 1793). Its previous history is unknown: Smith’s statement that it came from the Barberini Palace is an error, caused by confusion with 38.

Drawings:
* Townley drawing 2010,5006.99.

Bibliography:
- Synopsis of the Contents of the British Museum (1808), VI.30;
- Ancient Marbles of the British Museum, X, pl. 41, fig. 2;
- A Guide to the Graeco-Roman Sculptures in the Department of Greek and Roman Antiquities, 2 vols. (London, 1874 [1892] and 1876), II, no. 48;
- A. H. Smith, A Catalogue of Sculpture in the Department of Greek and Roman Antiquities, British Museum, Vol. III (London 1904), 72, no. 1687.

          `,
        }, {
          name: 'Stat_Red',
          src: '/images/Louvre/items/statue_red.jpg',
          type: 'color',
          info: `
           Part of the front of a columnar sarcophagus made of Phrygian marble: 
           a seated man reads from a scroll to Thalia, the Muse of comedy. 
           The seated figure most likely occupies the central niche of the front of the sarcophagus. 
           The partially preserved niche right of the Muse may mark the right end of the front; 
           this and the other missing niches probably held representatives of the other Muses, depicted surrounding the 'Man of Culture.'
           Walker, Susan, 1990, Catalogue of Roman Sarcophagi in the British Museum:

For a full bibliography, see below. Smith, III, 322-3 no. 2312; Morey, 37: Rome A (ill. 52); G Rodenwaldt, Jdl 51 (1936), 100; Wiegartz, 164: London C (bibl.); Wegner, ASR, V.3, 24 no. 44 (bibl.); Faedo, ANRW II. 12.2 (1981), 101-2 (bibl. n. 104); G Koch, BJ 182 (1982, 171); Koch-Sichtermann, 273, n. 3; Waelkens, 90 no. 132; Cook, Townley 25, fig. 24 p. 24.

The seated figure most likely occupies the central niche of the front of the sarcophagus. The partially preserved niche right of the Muse may mark the right end of the front; this and the other missing niches probably held representatives of the other Muses, depicted surrounding the 'Man of Culture.'(1) The interpretation of this and other similar scenes is discussed by Marrou.(2) Estimates of the date of this relief have ranged from the late Antonine period to the reign of Gallienus.(3) Wiegartz dated the relief to AD 225—35, and identified it as one of a group of twenty-six columnar sarcophagi representing the same scene, but with some variation in the pose of the figures.(4)
Clearly Wiegartz's association of this relief with the standard type ('Haupttypus' or 'geläufiger' Typ) of Asiatic sarcophagus is correct, but Wegner's late second-century date merits serious reconsideration.(5) His observation of the close relationship between the treatment of the head of the poet and that of male heads on monumental relief sculpture in late Antonine Rome is valid, and may be further supported by the dissimilarity between this head and the male heads in the other members of Wiegartz's group.(6) Moreover, the elongated forms of the ovolo, Lesbian cymatium and dentils suggest a second-century date.
In the light of the results of isotopic analysis of marble from this sarcophagus, it may be considered a Phrygian import to Rome, and one of the earliest examples of Phrygian Muse sarcophagi.(7) Moreover, the similarity with local relief sculpture implies that the head, at least, was exported from Phrygia unfinished, and was surely intended as a portrait.(8) The inclusion of a portrait at this period is typical of metropolitan taste (compare Walker, no. 2 – 1951.3-6.1). The other members of Wiegartz's group would then represent (if their dating is correct) the spread of this type of sarcophagus to a wider spectrum of clients, a characteristic development of the early third century AD.
          `,
        },
      ],
    },
  },
  {
    id: 3,
    href: '/galleria_borghese',
    title: 'GALLERIA BORGHESE',
    image: '/images/Borghese/Borghese.jpg',
    active: false,
    modalInfo: {
      title: 'Sundered Grove',
      titleUrl: '/images/Borghese/borghese_logo.svg',
      content: (
        <>
          <p>The Galleria Borghese is an art gallery in Rome, Italy, housed in the former Villa Borghese Pinciana</p>
          <p>At the outset, the gallery building was integrated with its gardens,
            but nowadays the Villa Borghese gardens are considered a separate tourist attraction.</p>
          <p>The Galleria Borghese houses a substantial part of the Borghese Collection of paintings,
            sculpture and antiquities, begun by Cardinal Scipione Borghese, the nephew of Pope Paul V (reign
            1605–1621).</p>
        </>
      ),
      coverImage: '/images/Borghese/Borghese_compressed.jpg',
      listImages: [
        {
          name: 'ATHENA',
          src: '/images/Borghese/items/ATHENA.jpg',
          type: 'color',
          info: `
          The sculpture can easily be identified as Athena-Minerva, goddess of wisdom, the arts and war, 
          thanks to the aegis - the cloak made from the skin of the goat Amalthea, which had protected and nourished 
          Zeus - worn transversally over a broad, long, unbelted peplos. The goddess wields a spear in her right hand, 
          while her left hand holds a shield, supported on an anthemion (a decorative motif of palmettes and lotus flowers),
           around which the serpent sacred to her is coiled. The ancient head, which is chronologically contemporary with the body, 
           is not however related. The left eye, smaller than the right, suggests that the head originally turned to the right.
            The iconography of the Borghese sculpture shows similarities with several works created between the 5th and 4th century BCE; 
            based on technical and stylistic observations, the sculpture could have been created in the 2nd century BCE.
          The sculpture is remembered from the mid-17th century onwards as having been in the theatre-shaped piazza 
          in front of the main entrance to the Palazzina Borghese on Via Pinciana. Previously,
           the work was displayed as an ornament in the garden, the Giardino dell’Olmo della Vigna on the Quirinale,
            belonging to Rodolfo Pio da Carpi.
            The sculpture is remembered, from the mid-17th century onwards, among the six works adorning the 
            theatre-shaped piazza in front of the main entrance to the Palazzina Borghese on Via Pinciana. 
            It is not known when it became part of the family collection; previously, the work was on display as a decoration in the garden, 
            the Giardino dell’Olmo della Vigna on the Quirinale, belonging to Rodolfo Pio da Carpi (Hülsen 1917, p. 56, no. 13). 
            After the cardinal’s death in 1564, the works in the collection found their way into various private collections and some, 
            such as the one we are examining here, arrived later in the Borghese collection (Moreno, Viacava 2003, p. 61). 
            During the 19th century, the work was restored and placed inside the Casino, exhibited in the Gladiator Room (today Room VI) 
            where Antonio Nibby described it and where it still stands today.
          `,
        },
        {
          name: 'PAOLINA',
          src: '/images/Borghese/items/PAOLINA.jpg',
          type: 'color',
          info: `
            Portrayed by Antonio Canova in the guise Venus victorious in the Judgement of Paris, 
            Pauline Borghese Bonaparte (1780-1825) is depicted bare-breasted as she reclines on two cushions 
            and a soft mattress, with her right hand touching her head and her left holding the apple. 
            According to the well-known episode in Greek mythology, Paris granted Venus the golden apple 
            to signify the primacy of her beauty over the virtues of Juno and Minerva. Executed in Rome 
            between 1804 and 1810, the sculpture caused quite a stir among contemporaries: the work combines ancient 
            grace and artifice with a naturalistic rendering – almost pictorial – of the soft flesh and delicate veils
             that cover Pauline’s lower body, creating an extremely seductive image.
            The ‘Agrippina-style’ chaise lounge is decorated with a drape with fringes, beads, plant volutes and anthropomorphic
             figures on the sides and the backrest. The drape further serves to conceal the mechanism which allows the sculpture to rotate 360°.
            The preparatory sketches of the work are held at the Museo Civico in Bassano, 
            while the plaster model is conserved at the Gipsoteca in Possagno.
            The iconic masterpiece of the Galleria, the portrait sculpture of Pauline Bonaparte as Venus Victrix 
            was commissioned by Prince Camillo Borghese to Antonio Canova in 1804; the sum of 6,000 scudi was paid to the sculptor
             for the work on 15 May 1808 (Faldi 1954, p. 47; Pupillo 2019, pp. 248, 335 no. 131).
            Camillo Borghese married Pauline Bonaparte, Napoleon’s beautiful, vivacious sister, 
            in Paris in 1803. The First Consul, who would become Emperor a year later, was pleased to join his family
             to one of the Roman aristocracy. Pauline was 23 and was already the widow of General Leclerc. 
             She married Camillo without even waiting for the completion of her one-year mourning; together they moved to Palazzo Borghese
              in Rome, where Pauline was able to devote herself to the life of pleasure that she so much cherished.
            Although the marriage was not particularly happy, Camillo commissioned the most famous artist of the day 
            to portray his beautiful wife. Rumours abounded regarding her nudity and the possibility that she may have 
            posed naked for the artist (she herself mischievously said that ‘one may let every veil fall in front of Canova’). 
            In any case, the portrait is an ideal one, forming part of the ‘graceful’ genre of Canova’s oeuvre. Pauline is depicted as Venus, 
            winner of the Judgement of Paris over her rivals Juno and Minerva, as indicated by the apple in her hand:
             she is the most beautiful among the goddesses.
          `,
        }, {
          name: 'APOLLO_AND_DAPHNE',
          src: '/images/Borghese/items/APOLLO_AND_DAPHNE.jpg',
          type: 'color',
          info: `
            Apollo here is depicted in the act of running, with his right foot touching the ground 
            and his left raised; the garment which covers his sides and left shoulder accompanies his movement.
             Having attained the goal of his chase, he places his left hand on Daphne’s body. At the god’s touch, 
             the nymph immediately gives up her flight and with her raised arms and face attempts to turn around; 
             yet her feet have already become roots and her hands and hair have been transformed into laurel branches and leaves.
          The subject of the sculpture group is the tale told by Ovid in the Metamorphoses:
           taking vengeance on Apollo, Cupid strikes him with a golden arrow that causes him to fall in love
            with the nymph Daphne, a follower of Diana. At the same time, Cupid shoots a dart of lead at the maiden, 
            inducing her to reject the love of the god. Daphne begs her father Peneus, a river god, to change her appearance. 
            The sculpture captures the culminating moment of her metamorphosis into a laurel tree. 
            Bernini gives the subject the air of a theatrical performance, allowing the viewer to follow the transformation.
            The sculpture was originally placed on one side of the room adjacent to the chapel, where it rested on a lower 
            pedestal than the current one: this arrangement increased the scenographic effect of the work and hence 
            the emotional involvement of the observer.
            The subject of the sculpture group comes from Ovid’s Metamorphoses (I, 450-567): 
            taking vengeance on Apollo, Cupid strikes him with an arrow of gold – the noblest of metals – 
            which causes him to fall in love with the nymph Daphne, a follower of Diana. At the same time, 
            Cupid shoots a dart of lead at her, inducing her to reject the love of the god. Daphne begs her father Peneus,
             a river god, to change her appearance, the cause of so much passion.
            The sculpture captures the culminating moment of the maiden’s metamorphosis into a laurel tree. 
            Bernini gives the subject the air of a theatrical performance, allowing the viewer to follow the transformation:
             having finally attained the goal of his chase, who is already undergoing the transformation of her feet 
             into roots and her hands and hair into laurel branches and leaves. Apollo tries to grasp her, but his fingers find the bark
              of the tree rather than her body. From that moment, the tree became dear to the god, who wore a crown of its leaves
               around his head; the laurel wreath would in fact be considered an attribute of artists and poets.
          `,
        }, {
          name: 'HECATE',
          src: '/images/Borghese/items/HECATE.jpg',
          type: 'color',
          info: `
            Restored in about 1828 by Antonio d’Este, only the bodies of the figures are ancient.
             The three women are standing against a basket-shaped pillar called a kalathos, topped by a restored vegetal element. 
             The women are wearing a long chiton with a peplos cinched under the breasts with a knot. 
             The sculpture is an exemplar of the three-bodied Hecate type. The numerous ancient sources relative to the goddess 
             point to her ambivalent nature, with both a negative connotation, linked to the dark aspects of the religion 
             and nocturnal magical rituals, and a benevolent one, as the protector of the home and benefactor of men.
            The sculpture is a Roman replica, dating to the second century CE, of an archetype attributed to the sculptor Alcamenes, 
            who was active in Athens in the fifth century BCE.
            The three female figures are standing on a basket-shaped capital called a kalathos (restored). 
            The upper part of this element is above their heads, expanding in two splayed components topped by a flower. 
            The women are wearing a long chiton that falls to their feet and a peplos with an apoptygma, cinched with a knot beneath the breasts.
             Only the bodies are ancient, while the heads, almost all of the arms, the kalathos and the vegetal element above them are modern. 
             The faces depict the three ages of the goddess.
          The sculpture is listed in the Inventario della Villa Pinciana e del Casino del Graziano of 1762 as a ‘gruppo di tre statue di marmo, 
          che rappresentano tre dee con braccia stese, nelle quali mancano alcune dita’ 
          (‘group of three marble statues, representing three goddesses with their arms extended, some of the fingers are missing’; 
          AAV, Archivio Borghese, Busta 1007). In 1828, it was described as a ‘Diana Triforme a guisa di candelabro’ 
          (‘Tri-form Diana in the form of a candelabra’) in the Quarta Nota, sent by Giuseppe Gozzani to Prince Camillo Borghese, 
          listing the works selected to be restored by Antonio D’Este (Moreno, Sforzini 1987, p. 360). 
          In 1832, Antonio Nibby mentioned it in Room VIII: ‘gruppo di tre figure muliebri, stanti, una addossata all’altra e rivestite 
          di tunica talare, nelle quali sembra essersi volute rappresentare le tre età, siccome ne’ lineamenti nel volto di ciascuna ravvisatesi,
           cioè la gioventù, la età media, e la vecchiezza’ (‘group of three female figures, standing, one next to the other and wearing 
           a priestly tunic, they seem to represent the three ages, since one can recognise in the features of the faces youth, 
           middle age and old age’; Nibby 1832, pp. 122–123). In the Indicazione of 1840, the group is mentioned in its current location, 
           in Room VI (p. 21, no. 7).
          `,
        },
        {
          name: 'ARTEMIS',
          src: '/images/Borghese/items/ARTEMIS.jpg',
          type: 'color',
          info: `
           Documented in an eighteenth-century engraving in the garden of the Borghese
            family’s city residence, the sculpture was mentioned inside the Villa in 1832.
          This statue of a woman portrays Artemis the Huntress and is an exemplar of the Copenhagen-Ostia type. 
          The transparent garment, a mass of dense, soft folds, is knotted under the breasts and on the hips. 
          A deerskin called a nebris, which was worn by participants of Dionysian processions, 
          is arranged diagonally across her chest, coming down the left side of her body. 
          The tall leather boots, called mullei, are typical of Dionysus and evoke the same setting.
          The sculpture, which is datable to the second century CE, is a copy of late Hellenistic models.
          In about 1691, based on an engraving by Venturini, the sculpture was in the garden of the Borghese 
          family’s city residence, set in a niche in the wall decorated by Carlo Rainaldi to the side of a 
          fountain near the theatre (Falda, pl. 11). In 1832, Nibby mentioned it in the first intercolumn 
          in Room IV of the Villa Borghese, in a niche. He described it as a ‘Diana succinta tenente l’arco […]
           scolpita in marmo lunense da buon scalpello’ (‘small Diana holding a bow … carved in Luni marble by a good sculptor’; p. 91).
          The figure is wearing a short chiton with sleeves, knotted below the breasts and on the hips, 
          where the drapery blouses out in elegant folds. There is a nebris knotted on her right shoulder and pulled
           diagonally across her chest, coming down the left side of her body. 
           She is wearing tall boots called mullei that were typically worn by members of the circle of Dionysus. 
           The boots, which reveal the toes, are decorated with a leaf at the bottom and an animal skin hanging from the upper edge.
            The term mullus refers to a type of mullet, which was red like the boots. The figure’s head is slightly 
            turned to the right and crowned by a moon-shaped diadem. Her hair falls in long wavy locks,
             parted in the middle above the forehead and gathered in the back. The face is oval shaped with soft, full features. 
             The almond-shaped eyes are topped by linear, barely noted brows. The mouth is closed, with small full lips.
          In the eighteenth-century representations, the statue has the same appearance as it does today, 
          the missing parts having already been filled in, with the exception of the plinth, which is instead rectangular. 
          The statue portrays Artemis while hunting and is an exemplar of the Copenhagen-Ostia type, 
          which takes its name from two replicas in the late-Hellenistic style
           (Poulsen 1951 pp. 86–87, no. 89; De Chirico, 1941, pp. 241–245, figs. 17–18).


          `,
        },
        {
          name: 'SARCOPHAGUS_Borg',
          src: '/images/Borghese/items/SARCOPHAGUS.jpg',
          type: 'color',
          info: `
            This slab depicts Minos, king of Crete, sacrificing before the temple of Poseidon with a female figure behind him.
             This is the right-hand side of a sarcophagus partially preserved at the Louvre depicting the myth of Pasiphaë. 
             Pasiphaë, Minos’s wife, was overcome by mad passion for the bull, a gift from Poseidon who had later wanted to take 
             revenge on the king. She then asked Dedalus to build her a hollow wooden heifer inside which she could hide. 
             The result of the union of queen and bull was the Minotaur. In the mid sixteenth century, this sarcophagus appeared
              in a drawing attributed to Girolamo Ferrari or Antonio Dosio, depicted in the Vatican Belvedere. According to the reports, 
              in 1615 the sculpture was cut into three slabs intended to decorate the newly completed Villa Borghese.
              This relief was the short, right-hand side of a sarcophagus that displayed the myth of Pasiphaë, the long, front side and the short, left-hand side of which are now housed at the Louvre (Martinez 2004, nos. 0815, 0681; Papadopoulos 1994, p. 197, pl. 131, no. 23). The first depicts various moments of the myth: the commissioning from Dedalus of the wooden simulacrum, its production and its delivery to Pasiphaë; the short, left-hand side shows three male figures which have been interpreted to be the sons of Minos and Pasiphaë (Charbonneaux 1963, p. 229, no. 1933); on the right-hand side, the Borghese piece, we may observe Minos’s sacrifice to Poseidon. In the fourth century BCE, Euripides was the first to tell Pasiphaë’s story in the tragedy The Cretans, of which unfortunately only two fragments have been handed down to us. Between the mid-first and the early second century CE, Apollodorus of Damascus fully detailed the myth: craving the throne of Crete, Minos declares the gods are on his side and to prove this he asks Poseidon to give him a bull; in exchange, he promises to sacrifice the animal. Poseidon grants the man’s prayer and a magnificent bull emerges from the waves, but Minos reneges on his promise. The god is furious and punishes the royal house by instilling Pasiphaë with a mad lust for the bull. To satiate her passion, the queen commissions the Athenian architect Dedalus with the construction of a simulacra of a heifer large enough for her to hide inside of it. From the union of bull and woman, the terrible Minotaur is born (Apollodorus, The Library III, 1).  
              The Borghese relief, enclosed in a modern frame, depicts Minos’s sacrifice, which precedes the event described on the main face.
               The scene takes place in front of the temple of Poseidon, evoked in the decoration of the tympanum by the figure 
               of a Triton whom the king of Crete addresses, followed by a veiled female figure carrying a platter of fruit. 
               The bearded man’s head is bare and he is wearing a long tunic. His left arm is bent; the tunic has slipped down his right arm, 
               which is raised in sign of greeting or avowal. Six steps lead up to the temple, at the entrance of which is a column 
               adorned with a small statue of the child Eros. The figure is holding a small palm branch in its right hand.
                A tall pine tree closes the scene on the right-hand side.  
          `,
        }, {
          name: 'POPE_PAUL',
          src: '/images/Borghese/items/POPE_PAUL_V.jpg',
          type: 'color',
          info: `
            Pope Paul V Borghese is wearing the papal mantle, embroidered with images of the apostles Peter and Paul a
            nd fastened on the chest by a precious clasp, over the rich smock edged with lace and the amice around his neck. 
            The formal attire, together with the severe expression, make it a portrait with an official purpose, despite its small size. 
            For a long time, the small bust was thought to be a youthful work by Gian Lorenzo Bernini,
             made between 1617 and 1618 on commission by Scipione Borghese, nephew of the pope. 
             Subsequently, following the rereading of some payment documents, a proposal was made to move the date of its execution
              to immediately after the pope's death, between 1622 and 1623, but the question is still under debate.
          Thanks to the varied ways in which the sculptor worked the marble, the bust creates tactile sensations for the viewer, 
          as if one could stroke Camillo Borghese's skin and the fabrics of his garments, and fully grasp the facial expressiveness.
        The reference model for this work by Bernini has been identified in a portrait of the pontiff by Nicolas Cordier,
         preserved today in a private collection.
         This small bust of Paul V was long considered a work of Gian Lorenzo Bernini’s youth, executed upon a commission by Scipione
          Borghese between 1617 and 1618, when the pope was still alive. This date seemed supported by the posthumous biography 
          of the sculptor written by his son Domenico (1713, p.17), which reported the well-known anecdote that the pope kept the bust 
          on his desk until his death. Subsequent re-examination of several payment documents led some scholars to propose moving
           the execution of the work to a later period, namely 1622-23, shortly after Paul V’s death. At the same time,
            these writers believed that Domenico’s story was just another of the many imprecisions regarding his narration 
            of his father’s early career (Bacchi, in Bernini and the Birth, 2008, p. 103). In any case, the question of the exact date 
            of the work is still open.
          The bust is certainly documented in the 1765 inventory of the works at the Casino del Graziano, 
          a small building on the edge of the sycamore valley purchased by Cardinal Borghese in 1616 and 
          converted into a resting place during hunting parties. In 1833, it was included in the fideicommissum 
          drawn up by Marcantonio V. It was then taken to the Palazzo di Campo Marzio before being definitively
           brought back to the Villa sometime before 1889. Prior to the reopening of the museum to the public in 1997,
            it was kept in the entrance hall of the Villa. When Galleria Borghese opened again it was placed in room 14 upon 
            its original pedestal in giallo antico marble, which had been found in the museum storerooms.
          `,
        }, {
          name: 'CLAUDIUS',
          src: '/images/Borghese/items/CLAUDIUS.jpg',
          type: 'color',
          info: `
           This sculpture portrays the divinised Emperor Claudius in the guise of Jupiter. 
           The portrait head of Tiberius and the eagle to the figure’s right were added during a restoration. 
           The portrait type seems to date to Tiberius’s early reign, in the first half of the first century CE. 
        The statue was unearthed in the Lucidi vineyard on the Borghese estate, between Monte Porzio and Frascati, 
        in 1820 and was restored by the sculptor Massimiliano Laboureur. In 1832, it was on view in the Salone.
        This sculpture was unearthed in 1820 during excavations commissioned by Prince Camillo Borghese in a vineyard owned by the family 
        in Santa Croce, between Monte Porzio and Frascati, given in emphyteusis to Cesare Lucidi.
         It was described as ‘a statue thought to be a Domitian, but missing the head, part of the arms and part of the feet and the base’ 
         (Valenti 2003, p. 188, note 14; Archivio Apostolico Vaticano, Archivio Borghese, B. 8096, p. 43, no. 195: Moreno, Sforzini 1987, pp. 
         348–350). In August of that same year, Massimiliano Laboureur was hired to restore the sculpture, at which time it was described 
         as ‘an ancient statue in Greek marble, larger than life size, the attributes of which suggest a Domitian. Missing part
          of the arms and legs, lacking a head and some of the pleating and its base’. The work order specified that the added parts
           had to be in ancient marble. In August 1822, an isolated payment attests to the addition of the eagle: ‘To Sir Fran(ces)co 
           Massimiliano Laboureur Sculptor 10 s(cudi) for a Marble Eagle added to the Statue […] of a Domitian’
            (Archivio Apostolico Vaticano, Archivio Borghese, B. 8096, p. 219, no. 225). Inside the Palazzina Borghese, Nibby 
            reported that the sculpture was in its current location in the salone. Based on the clothing and presence of the eagle,
             he interpreted it as a statue of Jupiter with a head of Tiberius attached. He held that ‘it should be assigned 
             to the Antonine period’ (p. 43).  Bernoulli described it simply as a heroic statue, but doubted the antiquity of the head 
             (1886, p. 148, no. 14). Venturi also observed: ‘It is likely that it represents an emperor, but the absence 
             of a head does not allow us to establish which one’ (1893 p. 14). In 1925, Lippold carried out a close examination
              of the sculpture and determined that the following were added: the head, the right arm from the base up, the left forearm,
               the top of the right foot and part of the ankle, the left calf and the part of the mantle behind it and the eagle. 
               He considered the ends of the taeniae on the shoulders antique. He proposed comparing the statue with the Marcellus
                in Naples (1925, p. 3, no. 2713). Calza held that it was a ‘divinised emperor of the Olympia type’, 
                probably Claudius, with a modern head (1957, p. 14, no. 122). In 1976, Moreno identified the head as modern, 
                ‘set on a statue of an emperor as Jupiter, which was in all probability Claudius’, considering it an elegant copy
                 of the youthful Tiberius portrait type. Based this observation and noting similarities with a portrait of the emperor 
                 unearthed in Gabi in 1792 and moved to the Louvre in 1807, the scholar mistakenly imagined that the Gabi statue had served 
                 as the model for the modern Borghese sculpture before the former was moved (1975–1976, p. 139). 
          `,
        },
      ],
    },
  },
  {
    id: 4,
    href: '/hermitage',
    title: 'HERMITAGE',
    image: '/images/Hermitage/Hermitage.jpg',
    active: false,
    modalInfo: {
      title: 'Sky Citadel',
      titleUrl: '/images/Hermitage/Hermitage_logo.png',
      content: (
        <>
          <p>The State Hermitage Museum is a museum of art and culture in Saint Petersburg, Russia</p>
          <p>It was founded in 1764 when Empress Catherine the Great acquired a collection of paintings
            from the Berlin merchant Johann Ernst Gotzkowsky.</p>
          <p>Its collections, of which only a small part is on permanent display,
            comprise over three million items (the numismatic collection accounts for about one-third of them)</p>
        </>
      ),
      coverImage: '/images/Hermitage/Hermitage_three.jpg',
      listImages: [
        {
          name: 'Armour',
          src: '/images/Hermitage/items/Armour.jpg',
          type: 'color',
          info: `
          Ancient Rome, first half of the 2nd century
          In terms of artistic execution this torso of an emperor is one of the best of its type. 
          It combines monumentality with the typical Roman love of detail. The sculpture is worked up on 
          all sides and was clearly placed in a square or in the centre of a large room. Such depictions usually
           had a portrait head, while the other parts of the body were produced according to a standard,
            although the composition and symbolism of the images on the armour might change.
             In the upper part of the armour we see a Gorgon mask, while on the chest are two gryphons and palmettes 
             with luxurious scrolls. On the thigh-guards (leather thongs with metal plates attached) repetitive motifs 
             of protomes of elephants and rams and masks of lions and Achelous alternate with palmettes and rosettes. 
             The ornamentation of the armour and thigh-guards coincides with that on sculptures of the Emperor Trajan (97-117 AD), 
             while the "classical" nature of the sculptures is closer to the works produced in the reign of Hadrian (117-138). 
             The Hermitage torso is an example of Antique "pasticcio" or pastiche, a combination in one monument
              of fragments dating from different times.
          `,
        }, {
          name: 'Pope_Clement',
          src: '/images/Hermitage/items/Pope_Clement.jpg',
          type: 'color',
          info: `
            Italy, circa 1713-1714
          Despite the small size of this statuette, we can see quite clearly the portrait features of Clement XI
           (Giovanni Francesco Albani, 1649–1721), who was elected pope in the year 1700. 
           The enlightened pontiff patronized science and the arts. During his reign, the work of decorating the 
           colonnades on St Peter’s Square with statues was completed and colossal sculptures of the apostles were
            created for the Cathedral of St John Lateran. Many churches in Rome acquired their present exterior
             appearance in the early 18th century. This statuette is a reminder of an important motif in Roman Baroque sculpture – 
             statues of popes seated on the throne in full ceremonial regalia with one hand raised in blessing.
              Sculptures of that sort were set up in public places (libraries, universities and sometimes monasteries)
               in honour of pontiffs who had helped them to flourish.
          `,
        }, {
          name: 'Cupid',
          src: '/images/Hermitage/items/Cupid.jpg',
          type: 'color',
          info: `
            France, 1808
          Neoclassicism became a formally recognized movement in French art from the early 19th century, 
          when the bourgeois monarchy, the Empire of Napoleon I, was established.
           The Academy of Fine Arts in Paris stood for maintaining the canons of Neoclassicism. 
           While creating the statue “Cupid with a Bow”, François Joseph Bosio faithfully followed 
           the artistic rules developed by the Academy. Cupid, the son of the love and beauty goddess Venus, 
           is portrayed as a slender youth. He seems to be running and makes a sharp turn in order to shoot an arrow. 
           The clarity of the composition, the well-defined silhouette and the smooth treatment of the marble surface,
            makes this work look similar to the sculptures of the famous Italian sculptor Antonio Canova,
             universally regarded as the leading exponent of the Neoclassical style, whose sculptures became widely known 
             in France and had a strong influence on Bosio’s work.
            `,
        }, {
          name: 'Horse',
          src: '/images/Hermitage/items/Horse.jpg',
          type: 'color',
          info: `
            France, between 1750 and 1785
            Coustou the Elder was an outstanding French sculptor who worked on park and palace decoration at Versailles, Marly,
             the Tuileries Gardens and the Trianon. In 1740-45 he produced two marble groups of horse tamers, 
             known as The Marly Horses, for the terraces of the Marly Palace. These were to replace the works by his uncle and teacher,
              Antoine Coysevox, moved in 1719 to the centre of Paris, to Place de la Concorde. The Hermitage small 
              bronze models are the altered versions of the celebrated marble statues.Coustou's sculptures were seen by contemporaries
               as the personification of Europe and America. The young man holding the rampant horse symbolizes Europe. 
               The dynamic composition combines virtuoso skill in bronze casting and a realistic depiction of the figure. 
               In this work Coustou departed from the principles of official art of his teacher Coysevox.
          `,
        },
        {
          name: 'Isis',
          src: '/images/Hermitage/items/Isis.jpg',
          type: 'color',
          info: `
            Italy, Rome, 1760s
          The statue was entered in the Hermitage inventory as a work ‘ Standing Woman’ by Albacini. 
          In fact, as well as most master’s works, it represents a reduced copy of the antique statue 
          kept at the Capitoline Museums in Rome and is traditionally considered to be the representation of the Egyptian goddess Isis..
          Based upon the list of sculptures brought from Petersburg in 1769, we can identify it with the statue 
          acquired together with ‘Flora’ (cat. 73) from Albacini by I.I. Shuvalov and valued at 300 ecus. 
          Probably previously it was also part of the Imperial collection but was withdrawn in unclear circumstances,
           supposedly as far back as the 18th.
          `,
        },
        {
          name: 'Head',
          src: '/images/Hermitage/items/Head.jpg',
          type: 'color',
          info: `
            Created: Ancient Greece. 3rd century BC Found:
            This part of a chariot is decorated with the relief head of a youth wearing a helmet. 
            His curly hair protrudes in large bunches from beneath the helmet but does not conceal his high forehead, 
            across which a fold runs horizontally. The pronounced tops of the sockets arch over the eyes. 
            A circle separates the irises from the whites, while the lower lids are heavy. The nose is straight.
             The full lips are slightly open.
          This head of a warrior repeats a pattern typical for the work of Lysippos, 
          the court sculptor of Alexander the Great whose favourite material was bronze. 
          He produced quite a few portraits and did much work on the reconstruction of Alexander’s image. 
          The conqueror would allow no-one else to depict him. Lysippos effectively became the founding father 
          of portrait sculpture in Ancient Greece. All the known sculptures that derive from Lysippos’ originals are Roman 
          copies since bronze was often melted down to produce other things.
          `,
        }, {
          name: 'Cupid_Sharpening',
          src: '/images/Hermitage/items/Cupid_Sharpening.jpg',
          type: 'color',
          info: `
            France, 1811-1813
            The exhibition includes two little figures of Cupid made at the Dihl et Guérhard Factory in Paris. 
            The technique of making biscuit (unglazed porcelain) sculpture was first used at the factory in Vincennes 
            (which moved to Sèvres in 1756). The snow-white material resembling marble very quickly became popular with sculptors,
             who acquired the opportunity to have their works reproduced in considerable numbers, and with the general public.
              Biscuit was not supposed to imitate marble: it was supposed to not be visually inferior to the natural stone.
               The biscuit sculptures produced by the Dihl et Guérhard Factory in the 1780s are marked by splendid modelling, 
               superb quality of execution and a soft matte white sheen. Life, however, rarely runs smoothly and the shift 
               to articles intended to deceive the senses can be prompted by all sorts of circumstances, including politics.
                In 1811–13 the factory produced a dessert service for former Empress Josephine. The Empire style called for gold everywhere, 
                from the decoration of furniture to the braid trim on uniforms. That is why the around 200 items making up the service
                 were gilded inside and out. The little figures of Cupids, personages from the bygone era before the revolution,
                  were intended to soften the sternness of the classical shapes in the luxurious porcelain ensemble. 
                  The flight from the gallant 18th century into the “iron” 19th did not affect Cupid and his arrow at all.
                   He just turned golden. The complaints of some at the time that the biscuit porcelain, valued for its whiteness, 
                   had now been unsympathetically gilded over were justified, but the power of fashion proved stronger.
                Porcelain from the famous factories in Paris began to present serious competition to the ceramics industry in Russia 
                and in 1806 Alexander I issued a decree banning the import of French porcelain. The Dihl et Guérhard Factory’s ability
                 to create decoration imitating a variety of metals, including gilded bronze, made it possible to evade
                  the watchfulness of the Russian customs who failed to detect the true nature of the articles
                   (Plinval de Guillebon 1983. P. 194).
          `,
        }, {
          name: 'Octavian_Augustus',
          src: '/images/Hermitage/items/Octavian_Augustus.jpg',
          type: 'color',
          info: `
           Ancient Rome, first half of the 1st century
            Under Octavian Augustus (63 BC - 14 AD) the Roman state became in effect a monarchy, 
            whilst preserving all the appearance of a republic. Augustus was officially known as princeps, 
            i.e. the first in the list of senators, and the citizens erected numerous statues of him. 
            Suetonius wrote, however, that "temples in his honour he did not allow to be raised in the provinces,
             save those with a dual dedication to himself and the goddess Roma. And in Rome itself he rejected the honour
              outright". After his death Augustus was deified. In the Hermitage statue, created during the reign of
               one of Augustus's followers in the first half of the 1st century, Augustus is shown seated on the throne as Jupiter,
                highest of all the Roman gods. The model for the composition was a statue of Zeus the Olympian by Phidias,
                 a 5th-century BC Greek sculptor. In the idealized features of the young face we can easily see the likeness of Augustus. 
                 "Divine nakedness" was used only for images of the immortals, while portrait sculptures of Romans had to
                  include either a toga or military attire. The statue of Octavian Augustus is a marvellous example of Augustan Classicism,
                   a trend seen in the early Empire period, combining the Roman realistic tradition with Greek Classicism.
                    The piece is also a typical example of 19th-century restoration: the statue, found in pieces in the town of Cumae, 
                    was restored by an Italian sculptor using both old and new pieces. In his reconstruction he did, however, 
                    rely on images of the Emperor as Jupiter enthroned, which could be seen on ancient coins and carved gems.
          `,
        },
      ],
    },
  },
  {
    id: 5,
    href: '/vatican_museums',
    title: 'VATICAN MUSEUMS',
    image: '/images/Vatican_Museums/Galerie_Chiaramonti_color.jpg',
    active: false,
    modalInfo: {
      title: 'Sky Citadel',
      titleUrl: '/images/Vatican_Museums/Vatican_logo_small.png',
      content: (
        <>
          <p>The Vatican Museums (Italian: Musei Vaticani; Latin: Musea Vaticana) are the public museums of Vatican
            City.</p>
          <p>They display works from the immense collection amassed by the Catholic Church
            and the papacy throughout the centuries, including several of the most well-known Roman sculptures
            and most important masterpieces of Renaissance art in the world.</p>
          <p>Pope Julius II founded the museums in the early 16th century.</p>
        </>
      ),
      coverImage: '/images/Vatican_Museums/Vatican_four.jpg',
      listImages: [
        {
          name: '',
          src: '/images/Vatican_Museums/items/SATYR.jpg',
          type: 'color',
          info: `
          This satyr, which has an equine tail, is portrayed dancing, 
          raised up on the balls of his feet. His animal nature is primarily expressed through his unruly hair,
           arranged in thick locks that escape his ivy crown, long, luxuriant beard and pointed ears.  
           The figure’s nudity highlights the torsion of the pose, heightening the muscular tension. 
           The left foot is moved forward, while the right is in line with the crossing of the legs. 
           He appears to be mid-movement, his torso and face static and turned towards the left. 
           His arms are raised and he holds cymbals (from a restoration) in his hands. 
           Studying the traces of the original points of attachment for the arms suggests that the figure originally held a wind instrument,
            probably an aulós. The satyr is supported by a tree trunk draped with a leopard skin called a pardalis, an attribute typical
             of komastic processions. The work overall was clearly influenced by a Hellenistic model produced 
             in connection with the school at Sicyon. Specifically, the meticulous rendering of details and figure’s vigorous 
             tension point to the work of Lysippos. The sculpture was unearthed during excavations
              of the Villa of the Bruttii Praesentes at Monte Calvo in Sabina, in 1824. 
              It was restored in about 1830 by Bertel Thorvaldsen and acquired by the Borghese family in 1834.
              This sculpture was unearthed during the excavation of a vast residential complex believed to have 
              belonged to the family of the Bruttii Praesentes, at Monte Calvo in Sabina, in 1824. 
              Restored in about 1830 by Bertel Thorvaldsen and acquired by the Borghese family in 1834, 
              the statue was installed in the space that had hosted Silenus with the Infant Bacchus, now in the Louvre, 
              prior to the forced sale to Napoleon in 1807. This location was well suited to the work, due to the Dionysian 
              frescoes decorating the room, which had been commissioned by Marcantonio Borghese in view of the Silenus group.
              The present work depicts a dancing nude satyr with an equine tail. His body rotates on the balls of his feet,
               wrapped around the vertical axis, bringing the left foot forward and leaving the right foot in alignment with
                the crossing of the legs. The torso and face, turned to the left, do not participate in the torsion. 
                The tense, meticulously described musculature emphasises the tension of the movement.
                 The outstretched arms do not follow the original spiral construction of the body, and the hands hold cymbals. 
                 The animal nature of the figure is clearly expressed by the luxuriant beard that frames the face, 
                 its twisted locks hanging down to the chest, and the pointed ears that stick out from the dishevelled curls. 
                 His hair is bound by a tainia, from which it escapes in a mass that falls onto his neck, while
                  a few stray curls frame his low forehead. The tree trunk that serves as support for the figure is draped with a 
                  pardalis, the ferine skin worn by participants in Dionysian processions.
          `,
        },
        {
          name: 'MELEAGER',
          src: '/images/Vatican_Museums/items/MELEAGER.jpg',
          type: 'color',
          info: `
            In this statue, Meleager is portrayed nude, except for a mantle called a chlamys.
             The figure is leaning against a tree trunk and supported by a spear. 
             There is a dog to his right and the head of a wild boar, pinned by the spear, to his left. In the Iliad, Homer wrote 
             that the Calydon hunter killed the animal, which had been sent by Artemis.
            The sculpture is one of numerous known copies of a bronze original attributed to the sculptor Scopas,
             who was active in the fourth century BCE. Recorded in Palazzo Borghese in Borgo in 1613, it was already 
             in a niche in the Galleria del Casino in 1650 (now Room IV). At the end of the eighteenth century, 
             it was moved to the Palazzo in Campo Marzio, and returned to the Villa Borghese (also known as the Villa Pinciana 
             due to its location outside the Pincian Gate), permanently in 1828.
             This statue was described in 1613 in a poem by Scipione Francucci in the Palazzo Borghese in Borgo 
             as a ‘marble Adonis with a wild boar next to him’ (Archivio Apostolico Vaticano, Fondo Borghese,
              serie IV, no. 108, folio 128r, strofe 442). In 1650, it was reported by Manilli in a niche in the Galleria del Casino.
               which is now Room IV (p. 75). Montelatici confirmed this location and interpreted the work as an Adonis or a Meleager,
                leaning towards the latter (1700, pp. 229–230). At the end of the eighteenth century, Francesco Caucig 
                (active in Rome from 1781 to 1787) made a drawing of the statue, showing it still in the Casino 
                (Kupferstichkabinett der Akademie der Bildenden Künste, Vienna, no. 286). In 1828, one of the two lists enclosed with
                 the quarta nota on the works selected to be restored and displayed in the galleries after they were stripped 
                 by the sale to Napoleon, described the statue, by now labelled as Meleager, as having been in the Portico on the second
                  floor of the Palazzo, noting that the sculptor Antonio d’Este had been hired to restore it. From this we know 
                  that the statue had been previously taken to the family’s city residence, probably after the renovation 
                  led by Antonio Asprucci for Marcantonio Borghese. Indeed, the work does not appear among those 
                  in the description of the sculptures in the Villa drawn up in 1796 by Lamberti and Visconti 
                  (Sculture del palazzo della Villa Borghese detta Pinciana). From there, it was brought to Antonio D’Este’s workshop 
                  to be restored, in view of filling the Villa with new works, after it was emptied by the sale to Napoleon. 
                  The work done on the statue was described in the quinta nota on the restoration: ‘Standing statue of Meleager in 
                  transparent Greek marble, with a modern head, legs and right arm, restored many years ago. This monument is clearly a 
                  Meleager, indeed, what remains from antiquity is so precious that it rivals the one in the Vatican Museum, 
                  as much for the nude as for the drapery and other elements’ (Archivio Apostolico Vaticano, Archivio Borghese, busta 1007, fasc.
                   301, no. 3; Moreno, Sforzini 1987, pp. 260–262).
          `,
        }, {
          name: 'GREEK_WARRIORS',
          src: '/images/Vatican_Museums/items/GREEK_WARRIORS.jpg',
          type: 'color',
          info: `
            This sculpture group portrays a fight between an Amazon, wearing a short chlamys that reveals her right breast 
            and a crested helmet, and two men. The men, overwhelmed by the powerful force of the warrior’s horse, are on the ground.
            Unearthed, probably, in 1610 in Nero’s villa at Anzio, it was already documented in Palazzo Borghese di Borgo in 1613.
             It was documented at the Villa, displayed in enclosure two in the area of the holm oak wood, in 1650. 
             A second group of similar subject was found at the same imperial site in 1932. Now in the Museo Nazionale Romano,
              Palazzo Massimo alle Terme, it would have been a pendant to the Borghese group.
              The numerous studies on the group agree that it is a copy from the Antonine age of a Hellenistic archetype
               from the area of Pergamon.
              This sculpture group was, probably, found in 1610 during the excavation of Nero’s villa at Anzio
               (Moreno 1975-1976, pp. 126–127, pl. XX, fig. 1). Giovanni Demisiani reports the discovery in a treatise dedicated
                to Scipione Borghese, Discorso sopra quattro statue dell'Ill.mo Sig.r Cardinale Borghese, 
                interpreting the figures as Penthesilea fighting the Greeks Lernos and Podarkes
                 (Archivio Apostolico Vaticano, Fondo Borghese II, s.d., 468, fol. 43–66). 
                 De Lachenal identified the group in the inventories of the Della Porta family, dated about 1607, 
                 in which it is described as ‘un cauallo ed una femina sopra: di una amanzona con un morto sotto al cauallo.
                  alt. p. 7 1/2’ (‘a horse ridden by a woman; an Amazon with a dead man under the horse. P. 7 1/2 high’; 
                  Appendice, V a, n. 233) and ‘Cavallo con femina amazzone ed uno sotto il cavallo, p. 7 1/4’ 
                  (‘Horse with female Amazon and a male under the horse’; Appendice , V b, no. 196).
                   According to the author, it is also listed in the inventory of antiquities that Pope Paul V had drawn up 
                   in 1610 upon the death of his brother Giovambattista Borghese, at number 67: ‘Tomiri Regina de’ Massagati 
                   a cavallo con il Tiranno sotto’ (‘Tomyris, queen of the Massagetae on horseback with the Tyrant below’; 
                   De Lachenal 1982, pp. 67–68).  In 1613, it is mentioned in a poem by Scipione Francucci as on 
                   view in Palazzo Borghese di Borgo (folio 124v-126r, strofe 431–437) and, in 1650,
                    Manilli wrote that it was in enclosure two of the Villa near the holm oak wood, 
                    describing it as ‘una Amazone, in atto di combattere; & hà sotto ‘l corpo del cavallo un Soldato;
                     e trà le zampe dinanzi un altro, che le stà chiedendo mercede’ (‘An Amazon in battle, and a soldier under 
                     the body of the horse and another one between the front legs, begging for mercy’; p. 123).
                      Montelatici specified that it was located between the stables and the barn (1700, p. 66).
          `,
        }, {
          name: 'SALONINA',
          src: '/images/Vatican_Museums/items/SALONINA.jpg',
          type: 'color',
          info: `
            Statue of a woman, larger than life size, with a portrait head of Empress Salonina, 
            wife of Gallienus, that was probably originally a portrait of Faustina the Younger.
          The standing figure is wrapped in drapery and places her weight on her right leg. 
          She is wearing a long chiton, gathered tight beneath her breasts with a knotted ribbon, 
          and a voluminous mantle called a himation. She is holding a patera in her left hand. 
          The sculpture was carved in an urban imperial workshop in the second half of the second century CE.
          The head and face were reworked during the rule of Gallienus. The composition and iconography 
          of the work are based on a Hellenistic model dating to the end of the fourth century BCE.
          This iconic sculpture, larger than life size, represents a woman wrapped in drapery who can be identified as an empress.
           The work entered the Villa Borghese’s antiquities collection in 1819, when various marble objects and statues were moved 
           there from the Villa Mondragone and Palazzo in Campo Marzio (AAV, Arch. Borghese 8096, no. 145; Moreno, Sforzini 1987, p. 346).
          When it first entered the Villa Pinciana, it was mistakenly identified as Juno. When the display in Room I was updated, 
          the work was restored by Felice Festa, an expert sculptor active during the same period as Francesco Massimiliano Laboureur. 
          Festa completed the arms, hands, attribute, nose, corners of the base and toes. The sculptor also filled some missing areas
           in the drapery folds. The standing figure puts her weight on her right leg, while the left leg
            is slightly bent and moved back. The right arm and hand are restored, while the left is ancient. 
            The left hand is holding a patera, a liturgical object used for liberations during religious ceremonies. 
            This attribute might refer to imperial pietas. Festa added the patera, but the original sculpture would have had
             one as well, and the restorations were carried out ‘in keeping with the ancient manner’ (AAV, Arch. Borghese 1005,
              no. 158; Moreno, Sforzini 1987, p. 346). The more recent restoration involved the deep cleaning of the marble surface, 
              which had become yellow due to the ageing of the patina, removal of the plaster that had been used to fill cracks, 
              lacunae and joins between added material and elimination of encrustations.
          `,
        },
        {
          name: 'CLAUDIUS',
          src: '/images/Vatican_Museums/items/CLAUDIUS.jpg',
          type: 'color',
          info: `
            Ancient sources have given us ample accounts of the defects of the Emperor Claudius, 
            and not only physical ones. This bust faithfully reflects some of the physiognomic 
            traits of those descriptions, in particular the furrowed brow and protruding ears.
             Executed by an anonymous sculptor, this work in porphyry and alabaster forms part of a series of 16 portraits of
              Roman emperors. Beginning in the last quarter of the 17th century, they were displayed in the Gallery of Mirrors
               in Palazzo Borghese in Campo Marzio; from at least 1832, they occupy Room 4 of Villa Pinciana, 
               where polychrome sculptures from the Collection were brought together, according to the taste of the times. 
               Critics agree that the works were executed in the 17th century.
               The bust depicts Emperor Tiberius Claudius Caesar Augustus Germanicus (r. 41-54), 
               essentially respecting descriptions of him which have come down from antiquity, which foregrounded his numerous physical defects.
                He is shown here at a mature age, in accordance with the fact that he was 51 years old when he came 
                to the throne: we note in particular the deep wrinkles that groove his forehead, the sides of his nose 
                and his mouth; the bags under his eyes; and a conspicuous divot at the top of his nose.
                 Although not well defined, his hair is clearly parted in the centre in the typical ‘pincer’ style; above all, 
                 at the highest point and at the back of his head the effect is that of a skull cap, which exalts the protrusion
                  of his ears. All of these features are present in surviving ancient portraits of the emperor.
                  The alabaster bust shows a broad paludamentum buttoned on his right shoulder with a round fibula, 
                  beneath which the lorica (short cuirass) and tunic are just visible. A second inventory number (704) 
                  can be seen on the right hem of the bust. The work forms part of a series of 16 busts in porphyry 
                  from Palazzo Borghese in Campo Marzio: they reproduce the Twelve Caesars narrated by Suetonius, 
                  with the addition of Nerva and Trajan and second versions of Vitellius and Titus. 
                  They were formerly placed in recesses in the gallery and framed by an arrangement of plaster reliefs depicting key 
                  episodes in the life of each and personifications of their respective virtues; this decoration was executed by 
                  Cosimo Fancelli between 1674 and 1676 (Hibbard 1962). The busts remained here until roughly 1830 
                  (Nibby, p. 360): two years later, they are documented as forming part of the display of Room 4 of Villa
                   Pinciana (Nibby 1832, p. 96). To the series was now added a second bust of Vespasian, 
                   sculpted by Tommaso Fedeli in 1619, which had been in the Gladiator Room.
          `,
        },
        {
          name: 'SWAN',
          src: '/images/Vatican_Museums/items/SWAN.jpg',
          type: 'color',
          info: `
           This sculpture depicts Leda as she reclines on the banks of the river Eurotas.
            The figure is only partially covered by drapery, while a swan is perched on top of her, 
            lightly touching her right breast. Behind her, cherub is leaning sweetly on her left arm.
            The group was considered modern until recent conservation interventions that have ascertained 
            the antiquity of the original nucleus, the missing parts of which were added in the nineteenth century. 
            The head is unrelated, thought to be a portrait of Antonia Minor, niece of Augustus and mother of the emperor Claudius.
            This sculpture is mentioned in the Gardens of Villa Borghese in a letter addressed by Minister Evasio Gozzani
             to Prince Camillo Borghese in 1826. In the register Statue e Oggetti di Scultura esistenti a Villa Borghese, 
             e giudicati degni di Ristauro (Statues and Sculptural Objects Present in Villa Borghese and Deemed Worthy of Restoration), 
             it was mentioned among the works destined to adorn the halls emptied by the Napoleonic appropriation of 1809;
              the cost of the conservation was estimated at ‘225 scudi’ (Archivio Segreto Vaticano, 
              AB, b. 7457: Moreno, Sforzini 1987, pp. 350, 353). In 1832, Nibby recalled it in its present location in Room 1 
              (Nibby 1832, p. 61).
              Young Leda is partially reclined, propped up on her left elbow against a rock on the banks of the river Eurotas. 
              The figure is naked, except for a cloth draped on the ground and covering her left arm and right leg.
               The latter is partially bent to support the swan. The left arm is adorned with an armilla, 
               or bracelet, and in her hand is a floral garland. Behind her stands a cherub who is reaching out to her,
                his eyes looking up at the female figure that he is gently stroking with his right hand. The swan, 
                its wings spread and its neck bent, lightly grazes her right breast with its beak. 
                As tradition would have it, Zeus was taken with Leda and turned into a swan so he could make love to her on the banks of the river Eurotas. The unwitting woman concealed the swan under her mantle to protect it from the attack of an eagle and after their union she laid an egg from which Pollux and Helen were born.
              In the past, this group was thought to be mostly modern, except for the head, considered an Imperial age portrait 
              (Venturi 1893, p. 20; De Rinaldis 1935, p. 8; Calza 1957, p. 11, no. 82; Moreno 1980, p. 11). 
              During the conservation carried out in 1996, part of the rock, the legs, the torso, a portion of drapery, 
              the armilla on the left arm, the floral garland, the base of the vertical shaft planted in the right leg to support
               the swan as well as the latter’s left wing were all considered antique, as was the torso of the Erotes 
               (Moreno 1997, pp. 76, 85–86).
          `,
        }, {
          name: 'CASSANDRA',
          src: '/images/Vatican_Museums/items/CASSANDRA.jpg',
          type: 'color',
          info: `
            Il bassorilievo è decorato con la scena del “ratto di Cassandra”, 
            l’oltraggioso stupro della principessa troiana compiuto da Aiace presso 
            il santuario di Atena a Troia, qui evocato dal pilastro sulla sinistra e dal simulacro della dea, 
            il Palladio, eretto su un piedistallo a gradini. Sulla sinistra l’eroe, nudo a eccezione del 
            mantello aperto a ventaglio dietro le spalle, trascina a sé Cassandra, identificata anche dall’iscrizione [Cas]SA[ndra]. 
            Nel tentativo disperato di opporsi alla presa dell’antagonista la donna, aggrappata al simulacro con la sinistra,
             lascia scivolare mantello e chitone lungo la spalla destra, scoprendo un seno.
          Parte di un più ampio fregio architettonico raffigurante probabilmente l’Iliupersis, il rilievo è
           un prodotto di una officina neoattica eseguito su modelli tarantini.
          Menzionato da Winckelmann nei sotterranei della Villa nel 1797, dal 1832 è segnalato nella sala I.
            Il “bellissimo bassorilievo” visto da J. J. Winckelmann nei sotterranei della Villa nel 1797 
            venne probabilmente spostato nella sala I nell’ambito del nuovo riallestimento della palazzina promosso 
            da Camillo Borghese tra il 1819 e il 1832, là dove è ricordato nelle guide del 1832-1838 da Antonio Nibby,
             utilizzato per la decorazione parietale e inserito in una cornice moderna.  La scena raffigurata è 
             solo parte di un più ampio fregio, inquadrata fra un pilastro sulla sinistra e, all’estremità opposta, 
             il simulacro divino di Atena – riconoscibile dall’egida stilizzata e dall’asta (ora perduta) nella 
             destra – eretto su una base a gradini che evocano un ambiente templare. Le due figure, una maschile e 
             l’altra femminile, sono rappresentate secondo uno schema divergente: a sinistra l’uomo, con indosso 
             solo il mantello fermato al collo da una fibula e aperto a ventaglio dietro le spalle dal movimento concitato, 
             fa perno sulla gamba sinistra mentre con entrambe le mani trascina a sé la figura femminile. La donna,
              con il ginocchio sinistro puntato sui gradini del piedistallo dell’idolo e il piede destro sovrapposto a 
              quello dell’uomo, si protende disperatamente a destra, verso la statua, che cinge saldamente con il braccio sinistro, 
              mentre con l’altro arto tenta di opporsi alla presa dell’antagonista.
          `,
        }, {
          name: 'AFRODITE',
          src: '/images/Vatican_Museums/items/AFRODITE.jpg',
          type: 'color',
          info: `
           La statua di Venere, dea dell’amore e simbolo della forza vitale, è stante sulla gamba sinistra 
           e sfiora il suolo con la punta del piede destro retrostante; mentre il braccio corrispondente è 
           sollevato e sorregge un lembo del mantello, il sinistro è piegato in avanti ad angolo retto, 
           porgendo un attributo oggi mancante. La figura è impostata frontalmente: al fianco sinistro inarcato
            corrisponde la spalla sinistra abbassata. Un chitone sottile avvolge il corpo muliebre, le cui morbide
             forme sono enfatizzate dalla trasparenza del tessuto, che scivolando lungo il braccio sinistro scopre il seno e la spalla.
          Nella replica di età giulio-claudia del celebre tipo statuario dell’“Afrodite Louvre-Napoli” si ravvisa 
          il chiaro influsso di un archetipo della fine del V sec. a.C. ascrivibile, per trattamento del panneggio 
          e ponderazione, alla cerchia fidiaca o policletea.
          Nel 1828 la statua della “Venere velata, simile ad altra, che esiste al Museo Vaticano, con piedistallo 
          con bassorilievo istoriato” è menzionata fra quelle poste nella “Sala della Bella Cerere” o “Sala della Leda” 
          nel piano generale per il “Nuovo Museo Borghese”, allestito da Camillo Borghese tra il 1819 e il 1832 nel Casino 
          depauperato dalla vendita delle opere della collezione al cognato Napoleone Bonaparte (Moreno 1997, p. 106); nel tentativo 
          di sottolineare i nessi tematici fra le sculture della collezione, la statua è intenzionalmente accostata ad un’altra Afrodite, 
          variante dello tipo (Gasparri 2011, p. 84). Antonio Nibby nel 1832 la menziona nella “Camera I”, corrispondente all’attuale sala I,
           descrivendola come “Venere o una ninfa nell’atto di lasciarsi cadere il peplo e disciogliersi la tunica per bagnarsi”, 
           posta sopra un'ara rotonda decorata da Menadi danzanti; è ancora Nibby, nel 1838, a citarla, sempre nella sua attuale sistemazione,
            denominandola questa volta “Venere genitrice”.    La figura insiste sulla gamba sinistra, mentre la destra flessa è portata indietro
             e aderisce al suolo con la punta del piede; il braccio corrispondente è sollevato nell’atto di tenere un lembo del mantello, 
             mentre l’altro è piegato in avanti ad angolo retto e doveva reggere un attributo – variamente identificato con una brocca,
              un lembo del mantello o un pomo – qui mancante. Il corpo è avvolto da un leggero chitone senza maniche, movimentato 
              da sottili plissettature, così trasparente da simulare un effetto bagnato, che lascia intravvedere le forme e, 
              scivolando lungo il braccio sinistro, scopre il seno e la spalla.  
          `,
        },
      ],
    },
  },
]

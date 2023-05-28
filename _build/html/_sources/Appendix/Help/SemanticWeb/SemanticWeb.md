# Semantic Web



## Introduction

:::::{div} full-width

::::{grid} 2

:::{grid-item}
:columns: 8


<div class="embedresize">
<iframe width="100%" height="56.25%" src="https://www.youtube.com/embed/V6BR9DrmUQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>





**Links**

- [Youtube links](https://www.youtube.com/watch?v=nxnaD9WGJiI&list=PL6NlzTkKezhitR1TkfFzy1tC62iES_hJL&index=2)

- [Schema.org](https://schema.org/)
    - [Getting started](https://schema.org/docs/gs.html)
    
- [Swartz article](http://blogspace.com/rdf/SwartzHendler)


[RDFa for html authors](https://www.w3.org/MarkUp/2009/rdfa-for-html-authors)


:::

:::{grid-item-card}
:class-header: bg-light
:columns: 4
**Vocabulary**
^^^


<br>

- <span class="hovertext" data-hover="Resource Description Framework">RDF </span>: Data model for metadata

<br>

- <span class="hovertext" data-hover="Def"> XML </span>

<br>

- <span class="hovertext" data-hover="Def"> Ontology </span>

<br>


- <span class="hovertext" data-hover="Def"> JSON </span>

<br>


- <span class="hovertext" data-hover="Def"> Knowledge graph</span>


- JATS: Journal Article Tag Suite [Source](https://jats.nlm.nih.gov/) - xml for scientif articles / publications


:::

::::

:::::

### <strong> &#x2023; <u> Semantic Web and Science </u></strong>

- {cite:p}`Merrill2011`
- {cite:p}`Im2016`

- {cite:p}`Ruiz-Iniesta2008`

**Softwares**


- {cite:p}`DeAlmeida2007`

#### <strong> &#x2023; &#x2023; Example: </strong> Life Sciences

- {cite:p}`Panzarella2023`

```{note}

Good example with overview of softwares etc ... **To read!**

```

#### <strong> &#x2023; &#x2023; Example: </strong> SciData

SciData is a data model for scientific data (JSON-LD implementation) that provides a ontologically defined framework for organizing both the data and metadata from scientific experiments, calculations, and theories

- {cite:p}`Chalk2016`
- [WebSite](http://stuchalk.github.io/scidata/)

## From RAW HTML To Metadata

- [Simple HTML Ontology Extensions](Simple HTML Ontology Extensions)

to check: Microformat

### <strong> &#x2023; <u> Microdata </u></strong>


Sometimes, it is desirable to annotate content with specific machine-readable labels, e.g. to allow generic scripts to provide services that are customized to the page, or to enable content from a variety of cooperating authors to be processed by a single script in a consistent manner. For this purpose, authors can use the microdata features described in this section. Microdata allows nested groups of name-value pairs to be added to documents, in parallel with the existing content.

```{note}

Is it semantic ? Good first step

Compatible with [schema.org](https://schema.org/) ?

```


- [Info](https://html.spec.whatwg.org/multipage/microdata.html#microdata)


- **itemscope**
- **itemtype**
- **itemid**
- **itemprop**
- **itemref**
- **datetime**



I don't really use html tags (ie it is the point of JupyterBook to releive you from using use by building html from markdown files).
However there is a few exception to this rule:

To explain complicated words I use <kbd>span</kbd> tags.

- <span class="hovertext" data-hover="Def"> Ontology </span>

```{note}

Should I start putting span divs with microdata tags to be able to make my data linkable ?

**Ask Alessio**

```


#### <strong> &#x2023; &#x2023; Example </strong>  

```html

<div itemscope itemtype ="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <div itemprop="director" itemscope itemtype="https://schema.org/Person">
  Director: <span itemprop="name">James Cameron</span> (born <span itemprop="birthDate">August 16, 1954</span>)
  </div>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>

```

<p class="emphase">Microdata vocabularies do not provide the semantics, or meaning of an item</p>

use vocabularies available on the web -> Schema.org


### <strong> &#x2023; <u> Scientific Articles Metadata </u></strong>

#### <strong> &#x2023; &#x2023; JATS </strong>
 

- JATS: Journal Article Tag Suite [Source](https://jats.nlm.nih.gov/) - xml for scientif articles / publications

```{tips}

Compatible with MystJS [Link](https://myst-tools.org/docs/mystjs/creating-jats-xml)


```


## From Metadata in HTML to RDF


- [Different approaches](https://www.w3.org/2001/sw/RDFCore/20031212-rdfinhtml/) - Good but pretty outdated (2001)


```html

<head>
<title>My Document</title>
<link rel="meta" type="application/rdf+xml" href="meta.rdf"/>
</head>


```




## Ontologies


{cite:p}`Munir2018`


### <strong> &#x2023; <u> Definition </u></strong>

$
{\displaystyle i=\langle C_{i},R_{i},I_{i},T_{i},V_{i}\rangle }
$

 
- C is the set of classes, 

- R is the set of relations, 

- I is the set of individuals, 

- T is the set of data types, 

- V is the set of values,

Ontologies come in different serialisations, formalisms, and variants For example, their are a 9 different release files associated with an ontology.

- OWL
- RDF(s)
- OBO


- [Tools](https://oboacademy.github.io/obook/reference/glossary/)

I would like to:
- ?



- [Article](https://enterprise-knowledge.com/from-taxonomy-to-ontology/) - from taxonomy to ontology








### <strong> &#x2023; <u> Build a simple ontologie </u></strong>


:::::{div} full-width

::::{grid} 3

:::{grid-item-card}
:class-header: bg-light
:columns: 4
**Protégé**
^^^

Open Source


+++
Link

:::

:::{grid-item-card}
:class-header: bg-light
:columns: 4
**WebVOWL**
^^^

+++
Link

:::

:::{grid-item-card}
:class-header: bg-light
:columns: 4
**Else**
^^^

+++
Link

:::

::::
:::::






**Tutorial serie**:
- [Youtube_1](https://www.youtube.com/watch?v=mIh6KY0X4IU&list=PLSXoLBYuvBblPoSVWZHRdMe3XDlUJ2nte&index=4)

**Software**: Protege

- Class / Subclass
    - The different foler / subfolder

- Object properties can be given sense by adding **Characteristic

    - isMarkdown
    - is Folder

```{note}
Relation from ensemble theory
- Fuctional
- Transitive
- Symetric
- Reflexive

**To check**
```

### <strong> &#x2023; <u> Online tutorials </u></strong>


- [YARRRML](https://rml.io/yarrrml/tutorial/getting-started/#existing-data-sources)

- [From CSV to RDF via python](https://enterprise-knowledge.com/transforming-tabular-data-into-personalized-componentized-content-using-knowledge-graphs-in-python/)

### <strong> &#x2023; <u> Ontology matching </u></strong>

{cite:p}`Otero-Cerdeira2015`

## To do


```{admonition} To do

- Think about what is important in the project
    - Define specific type of content within websiteand allocate proper description
    - look in [Schema.org](https://schema.org/) for specific tag
```

- embed RDF into web-page

[JSON](https://json-ld.org/playground/)

```{admonition} To do
- Check how to implement into JupyterBook
    - Github issue ?
```

### <strong> &#x2023; <u> What do I need to do </u></strong>


- Have a look at the preexisting ontologies (?) and select the one that are of interest

- Think about what is important and need highlighting 

## Knowledge graphs

[OU Open knowledge graph](https://data.open.ac.uk/)

**Other examples**

- [from Angelo](https://aida.kmi.open.ac.uk/dashboard/conference/Neural%20Information%20Processing%20Systems%20(NeurIPS)) - This data is extracted from knowledge graph. (is it ?) - How?

```{admonition} Question

- Should I embed my own work (thesis) there ?

- Better to generate my own parent website to create a publication plateform linking different work
```

- [Blog article I](https://enterprise-knowledge.com/transforming-tabular-data-into-personalized-componentized-content-using-knowledge-graphs-in-python/): Transforming Tabular Data into Personalized, Componentized Content using Knowledge Graphs in Python

- [Blog article II](https://enterprise-knowledge.com/content-personalization-with-knowledge-graphs-in-python/): Content Personalization with Knowledge Graphs in Python

<h3><strong>Web-site architecture mapping</strong></h3>

- [networkx](https://networkx.org/documentation/latest/tutorial.html#creating-a-graph): Python library to plot knowledge graphs

- **Notebook**
    - Semantic web workflow (?)
    - Thesaurus for tags ([Astro](https://vocabs.ardc.edu.au/viewById/119), [GH csv](https://github.com/astrothesaurus/UAT/blob/master/UAT.csv) )
- **Storage**
    - Files, folder mapping
    - Ontology ([Webvowl](https://service.tib.eu/webvowl/#sioc), [RDF from CSV](https://stackoverflow.com/questions/13147864/how-to-create-an-ontology-from-raw-data-csv))
    


## Sitemap

- [Sitemap and xml generator](https://www.xml-sitemaps.com/details-deugz.github.io-a2e845a8b.html)


**Convert xml to owl**:

[Link](https://xml2owl.sourceforge.net/)


## RSS ?

- RSS feed
- Atom

## Vrac links

- [yarrrml](https://rml.io/yarrrml/)




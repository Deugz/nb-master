# Semantic Web

``````{margin} 
`````{admonition} **Definitions**
:class: note

<br>

- <span class="hovertext" data-hover="Resource Description Framework">RDF </span>

<br>


- <span class="hovertext" data-hover="Def"> Ontology </span>

<br>


- <span class="hovertext" data-hover="Def"> JSON </span>

<br>


- <span class="hovertext" data-hover="Def"> Knowledge graph</span>

`````
``````

## Introduction

- [Schema.org](https://schema.org/)
    - [Getting started](https://schema.org/docs/gs.html)



## How to

### HTML

Embed semantic web tag into html documents

#### Example

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

- itemscope
- itemprop
- itemtype

#### Application

I don't really use html tags (ie it is the point of JupyterBook to releive you from using use by building html from markdown files).
However there is a few exception to this rule:

##### Definitions

To explain complicated words I use <kbd>span</kbd> tags.

- <span class="hovertext" data-hover="Def"> Ontology </span>

### Online tutorials

- [YARRRML](https://rml.io/yarrrml/tutorial/getting-started/#existing-data-sources)

- [From CSV to RDF via python](https://enterprise-knowledge.com/transforming-tabular-data-into-personalized-componentized-content-using-knowledge-graphs-in-python/)


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


### What do I need to do

- Have a look at the preexisting ontologies (?) and select the one that are of interest

- Think about what is important and need highlighting 


### Ontology

I would like to:
- ?


## Knowledge graphs

[OU Open knowledge graph](https://data.open.ac.uk/)

```{admonition} Question

- Should I embed my own work (thesis) there ?

- Better to generate my own parent website to create a publication plateform linking different work
```

<h3><strong>Web-site architecture mapping</strong></h3>

- **Notebook**
    - Semantic web workflow (?)
    - Thesaurus for tags ([Astro](https://vocabs.ardc.edu.au/viewById/119), [GH csv](https://github.com/astrothesaurus/UAT/blob/master/UAT.csv) )
- **Storage**
    - Files, folder mapping
    - Ontology ([Webvowl](https://service.tib.eu/webvowl/#sioc), [RDF from CSV](https://stackoverflow.com/questions/13147864/how-to-create-an-ontology-from-raw-data-csv))
    




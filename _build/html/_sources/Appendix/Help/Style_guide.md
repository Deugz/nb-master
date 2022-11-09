# Markdown cheatset

***
**Documentation**:
- Markdown
- Jupyter Book


***

## Comments

[/----------------------------------------------------------------------------------------------------------------------------------------------------------------------- Is it a comment ?/]: # 


Implement comments on top of big title to have a clear view of page subdivision (usefull when coding with vs code and having very long md files)



## Titles



## Buttons

### How to

Markdown give you the possibility to generate buttons.

2 main methods:
- [badgen](https://badgen.net/)
- [shield](https://shields.io/)

### Examples 

Present on this web site

- DOI
- Binder
- Link towards book (Teaching)

## Images / figures

```{image} 
```
    
```{figure} Docs/JWST_cloud1.jpg
:name: JWST1
James Web Space Telescope [JWST](https://deugz.github.io/nb-teaching/_build/html/Bitesize/Astronomy/JWST/JWST.html)
```

## Tables


## Notes

Explain what notes correspond to what (proper admonition)



```{note}
:class: dropdown
The note body will be hidden!
```

```{warning}
- Copy notes from PhD
```

:::{tip}
This text is **standard** _Markdown_
:::

## Grid

put example

### with adaptable column width

::::{grid}

:::{grid-item}
:outline:
:columns: 3
A
:::
:::{grid-item}
:outline:
:columns: 9
B
:::
:::{grid-item}
:outline:
:columns: 6
C
:::
:::{grid-item}
:outline:
:columns: 6
D
:::

::::


### Multiple row

:::::{div} full-width
::::{grid} 1 1 2 3
:class-container: text-center
:gutter: 3


:::{grid-item-card}
:class-header: bg-light

:::

:::{grid-item-card}
:class-header: bg-light

:::

:::{grid-item-card}
:class-header: bg-light

:::

:::{grid-item-card}
:class-header: bg-light

:::

:::{grid-item-card}
:class-header: bg-light

:::

:::{grid-item-card}
:class-header: bg-light

:::

::::
:::::

### Full width content

:::::{div} full-width

:::::


<h3><strong>&#187;  <u>Formatting </u></strong></h3>

formatting is mood dependant and likely to change.

<h4>Maths</h4>

Different methods to write equation, bith can be referred in the following equation list

<h5>Method 1</h5>

$$
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
$$

<h5>Method 2</h5>

```{math}
:label: my_label
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
```




## HTML Symbol

### Orga

- &#9989; - &#9989 -  ticked box
- &#x274C; - &#x274C - red cross
- &#x2192; - right arrow:
- &#127992; - magnifying glass
- &#128143; - Lovely couple
- &#128142; - Diamond
- &#128293; - Fire

- &#10024; - &#10024 - Stars

- &#128064; - &#128064 - Eyes

- &#128165; - Explosion

- &#128640; - &#128640 - Rocket 

- &#x26D4; - &#x26D4 - panneau stop
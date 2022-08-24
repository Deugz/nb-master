# The Jupyter ecosystem

From simple python Notebook to your own Web-Edition plateform.

## Jupyter Notebook

### Binder

- User interactivity

#### Tutorials

- [Zero-to-Binder](https://the-turing-way.netlify.app/communication/binder/zero-to-binder.html)


## Jupyter Lab

### Extensions

- [Guide](https://jupyterlab.readthedocs.io/en/stable/user/extensions.html)

Some extensions requires a rebuild of jupyter Lab, that need **Node.js**.

#### What exactly is Node.js

## Jupyter Book

### Example

give example w/ Jupyter as the example


```{warning}
Try to understand how the build work. 
- Can get a bit messy !
```

### Create your own admonition

Jupyter Book allow you to create your own admonition (which is pretty cool)
- [HTML admonition](https://myst-parser.readthedocs.io/en/latest/syntax/optional.html#syntax-html-admonition)

<div class="admonition" name="html-admonition" style="background: lightgreen; padding: 10px">
<p class="title">This is the **title**</p>
This is the *content*
</div>

This is how it comes out, direct from the provided example, but with a bit of code in the **custom.css** file in the _static folder :

```html
<div class="admonition_dialogue" name="html-admonition" style="background: lightgreen; padding: 10px">
<p class="title_dial"> <img src="Docs/Svg_icons/dark-dialogue-bubble-svgrepo-com.svg" class="picto" alt=">">This is the **title** <img src="Docs/Svg_icons/Docs/Svg_icons/flag-for-flag-france-svgrepo-com.svg" class="picto"></p>
This is the *content*
</div>
```
modify class name ...

add image via html - link towards html teaching

<div class="admonition_dialogue" name="html-admonition" style="background: lightgreen; padding: 10px">
<p class="title_dial"> <img src="../../Docs/Svg_icons/dark-dialogue-bubble-svgrepo-com.svg" class="picto" alt=">">This is the **title** <img src="../../Docs/Svg_icons/Docs/Svg_icons/flag-for-flag-france-svgrepo-com.svg" class="picto"></p>
This is the *content*
</div>

<div class="admonition">
<p>Some **content**</p>
  <div class="admonition tip">
  <div class="title">A *title*</div>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  </div>
</div>

```{admonition} Dialogue ![flag alt >](../../Docs/Svg_icons/dark-dialogue-bubble-svgrepo-com.svg) - ![flag alt >](../../Docs/Svg_icons/flag-for-flag-france-svgrepo-com.svg)
:class: dropdown
French Dialogue admonition Baby :)
```

Explain how I tried a solution with what I know (ie html), and a quick (how to walk around the problem) think through help to resolve the issue 

- [CSS admonition](https://jupyterbook.org/en/stable/advanced/html.html?highlight=javascript#custom-css-or-javascript)

### Insert your own Javascript

Link to picture example.

- Insert your .js script file into the static folder













### Extra feature

#### Slideshow

**RISE** ([Doc](https://rise.readthedocs.io/en/stable/))

- Only work with Jupyter Notebook (not lab)

Need to have a binder version to run (give link towards Binder Help)

##### Example

[Here](https://predictablynoisy.com/jupyter-multi-book/rise.html)



##### Documentation



 #### Multiple book embeded 

 Architecture

 [Github Repo](https://github.com/choldgraf/jupyter-multi-book)

[Demo](https://predictablynoisy.com/jupyter-multi-book/index.html)
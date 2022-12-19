# Github

GitHub is ...

## Upload JupyterBook on Github

**Few rules**

- you can't upload files bigger than 100 MB (Or you need to use git LFS system)

### Create your git repository





### Push your book online

```{warning} 
How about only pushing on github the _build folder ?

- What is best coding practise ?
```

```{note} 
Before to go through the procedure there is a few things I advise you to do:<br>
create the 2 following files
- .gitignore file - use this tool [gitignore-generator](https://www.toptal.com/developers/gitignore)
- .nojekyll file - will prevent github to rebuild your book with Jekyll (what is it actually)
```

First you need to open a terminal window and locate yourself in the repository you want to commit

Run the command 

``` 
git status
```

You should get the following message:

```
fatal: not a git repository (or any of the parent directories): .git
```

It's normal.

``` 
git init
```
will give you the following message
```
Initialized empty Git repository in G:/MAMP/htdocs/PhD-WS/PhD/.git/
```
Ok so now we have created an empty git repository within wich we can put all our content before to push it to Github.

If we run: (again)
``` 
git status
```

We will have a different message like (in my case):

```{git}
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        .nojekyll
        Appendix/
        Biblio/
        DATA/
        Dissemination/
        Documents/
        My_Space/
        Notes/
        OU_Logo.svg
        Science/
        Script/
        THESIS_Word/
        _build/
        _config.yml
        _static/
        _toc.yml
        intro.md
        references.bib
        requirements.txt

nothing added to commit but untracked files present (use "git add" to track)
```

So now you can see that we are in the branch master. In order to get to the branch **main**

```
git branch -M main
```
then (always do that)
``` 
git status
```

and we are on the branch main so we can go forward by running

``` 
git add *
```

/* means all.

````{note} 
If you need some files (folders to be ommited), just add them to your .gitignore file

```
notepad .gitignore
```
to modify this file

````

This will add all the files into your local git repository. 

Then what you need to do is run

```
git commit -m "first commit"
```

and then

```
git remote add origin git@github.com:Deugz/nb-phd.git
```
will link the two repos, Github (cloud ...) and the local git repo you have created

finally you push

```
git push -u origin main
```


#### Potential issues

```{figure} Docs/Github_issue1.png
:name: Github_issue1
19/12/2022
```

### Github pages

#### Specific features

##### Password your GH pages Book

- [Access control](Script/Bonus/productivity.ipynb)


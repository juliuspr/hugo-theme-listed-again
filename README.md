Theme is inspired by the [listed theme](https://github.com/ronv/listed )

## Menu

The theme expects a menu ".main".

Add the following to your config.yaml/toml file:

```
menu:
  main:
    - name: Posts
      url: /posts/
      weight: 1
    - name: About
      url: /about/
      weight: 2
```

## Views

### Timeline

Add the following in the _index.md file of a section:

```
view: timeline
```

### Listed

Use the following params in the _index.md file to hide the date or tags
```
params:
  no_tags: true
  no_date: true
```


# ToDo

- indicate draft (superscript as in papermod)
- off-canvas menu
- post_head partial
- pre_footer partial? check with papermod
- make an "important" tag/category/param to emphasise a post

## Add off-canvas

Use pure CSS

### Examples


https://madmurphy.github.io/takefive.css/
https://freefrontend.com/css-off-canvas-menus/

https://codepen.io/iamsaief/pen/ExPoNjm

### Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/:target



## Add table of contents
<aside>
    {{ .TableOfContents }}
</aside>
https://gohugo.io/content-management/toc/









## Done
- timeline view
- partial without dates for spørsmål and reflections

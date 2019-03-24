
# SEO and social tags SEO

If your dat.yaml is like this:

```yaml
title: MetaBake&trade; versus other Low-Code tools
image: slide-3.jpg
content_text: MetaBake&trade; is the open source extensible low-code productivity tool for programmers.
keywords: low-code, gulp, grunt, CMS, static gen
```

Then you can do social SEO like this - for example in your head.pug that you include in your pages or layouts:

```pug
   title #{title}
   meta(name='description', content=content_text)
   meta(name="google-site-verification", content="xyz")

   // Twitter Card data
   meta(name='twitter:card', content='summary_large_image')
   meta(name='twitter:title', content=title)
   meta(name='twitter:description', content=content_text)
   meta(name='twitter:image', content=image)

   // Open Graph data
   meta(property='og:title', content=title)
   meta(property='og:type', content='article')
   meta(property='og:image', content=image)
   meta(property='og:description', content=comment)
```


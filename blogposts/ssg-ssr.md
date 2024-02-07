---
title: 'When to Use Static Generation vs Server-side Rendering'
date: '2023-02-21'
---
![Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7qmNvoKRISESgCjwrfevr-SiuX2-xlqSnSGgL7Dgqg&s)

We recommend using **Static Generation** (with and without data) whenever possible because you page can be built once and served by CDN, which makes it much faster than having a server rendering the page on every request.

You can use Static Generation for many types of pages, including:
- Marketing pages
- Blog posts
- E-commerence product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.


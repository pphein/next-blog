---
title: HTML
date: 2024-03-06
---
# About HTML

## What is HTML

`HTML` ဟာ HyperText Markup Language ရဲ့အတိုကောက်ဖြစ်ပါတယ်။ Website တစ်ခုရဲ့ content တွေကို သတ်မှတ်ပေးဖို့ရာ အခြေခံကျတဲ့ နည်းပညာတခုပါ။ ကိုယ့်ရဲ့ webpage မှာ ဘယ်ဟာက ခေါင်းစဉ်စာသား title header ဘယ်ဟာက စာပိုဒ် ဘယ်ဟာက link ဘယ်ဟာက list ဘယ်ဟာက ဇယားကွက်တွေဖြစ်တယ်ဆိုတာကို ကွန်ပျူတာနားလည်အောင် ပြောပေးရေးပေးရတဲ့ Markup Langauage ဖြစ်ပါတယ်။ HTML ဖိုင်တခုမှာ အခြေခံအကျဆုံး elements တွေကတော့ အပေါ်မှာပြခဲ့တဲ့ `<html>`, `<head>` ,`<body>` ဖြစ်ပါတယ်။ ကိုယ့်ရဲ့ webpage မှာလိုအပ်တဲ့ style တွေ linkတွေ ကို `<head>`...`</head>` ထဲမှာ ထည့်ရေးပေးရပြီးတော့ ကိုယ်ပြချင်တဲ့ content တွေကိုတော့ `<body>...</body>` ထဲမှာ ထည့်ရေးပေးရပါတယ်။

## Structure
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Elements</title>
    </head>
    <body>
        <h1>This is Header</h1>
        <p>This is paragraph</p>
    </body>

</html>
```
## HTML Elements
Content တွေကို ခေါင်းစဉ်လား စာပိုဒ်လား ဇယားလား linkလားစသဖြင့် format မှန်မှန်ဖော်ပြနိုင်ဖို့ `element` တွေရဲ့ အဖွင့်အပိတ်ကြားမှာ ရေးသားဖော်ပြရပါတယ်။ ကိုယ်က ခေါင်းစဉ်လို့ သတ်မှတ်ထားတဲ့စာသားဆိုရင် `<h1>Header</h1>` ပေါ့။ အသုံးများတဲ့ html element တွေကို ဖော်ပြပေးပါမယ်။
 - For title
    - `h1` => <h1 style="display:inline">Header 1</h1>
    - `h2` => <h2 style="display:inline">Header 2</h2>
    - `h3` => <h3 style="display:inline">Header 3</h3>
    - `h4` => <h4 style="display:inline">Header 4</h4>
    - `h5` => <h5 style="display:inline">Header 5</h5>
    - `h6` => <h6 style="display:inline">Header 6</h6>
 - `p` => <p style="display:inline">This is paragraph</p>
 - `a` => <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" title="Learn HTML">anchor link</a>
 - `img` => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s" style="width:48; height:48;" alt="HTML" title="HTML"/>
 - `audio` => <audio controls><source  src="../Projects/project_0/audio.mp3" type="audio/mpeg"></audio>
 - `video` => <video controls style="width: 200px; height: 200px;"><source src="../Projects/project_0/video.mp4"></video>
 - `form`
 - `input`
    - type[text] => <input type="text" placeholder="Your Name">
    - type[email]  => <input type="text" placeholder="Your Email">
    - type[password]  => <input type="password" placeholder="Your Password">
    - type[number]  => <input type="number" placeholder="Your Age">
    - type[file]  => <input type="file">
    - type[hidden]  => <input type="hidden">
    - type[submit]  => <input type="submit">
    - type[image]  => <input type="image" src="../Projects/project_0/image.png" style="width:20px; height:20px">
    - type[reset]  => <input type="reset">
    - type[date]  => <input type="date" >
    - type[radio]  => <input type="radio" >
    - type[checkbox]  => <input type="checkbox" >
    - type[range]  => <input type="range" >
 - textarea => <textarea></textarea>
 - selection
 - button => <button>Buton</button>
 - ul/ol
    - li
 - table
    - thead
    - tbody
    - tr
    - td
 - div
 - span
 - hr
 - br
 - iframe
 - canvas
 - main
 - section
 - header
 - footer
 - nav
 
details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

# HTML: Learn what matters

We will use this page to compile all the necessary notes to get started with HTML. 

Learning from: [(613) HTML Crash Course: Master the Essentials in One Video! Start Your Front-End Journey Today! - YouTube](https://www.youtube.com/watch?v=4dprtEzunIk&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=2&ab_channel=SheryiansCodingSchool)

<aside>
👉🏼 HTML (Hyper Text Markup Language) is the standard markup language for Web pages. HTML is easy to learn - You will enjoy it!

</aside>

---

**INDEX**

1. Making HTML file
2. Tags
    1. Heading tags
    2. Paragraph & break tag
    3. Image tag
    4. Anchor tag

<aside>
⚠️ MOST IMPORTANT

1. div
2. id
3. class
</aside>

---

## 1. Making HTML file

html:5 is one of the boilerplates, the amount of code required for an HTML file. In your code just type `html:5` and press enter

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

## 2. Tags

Opening tag:`<example>`  

Closing tag: `</example>`

### 2.1 **Heading tags**

```html
    <h1>hi</h1> #big
    <h2>hi</h2>
    <h3>hi</h3>
    <h4>hi</h4>
    <h5>hi</h5>
    <h6>hi</h6> #small
```

### 2.2 Paragraph & break tag

```html
<p>Lorem ipsum, dolor sit <br> amet consectetur adipisicing.</p>
```

### 2.3 Image tag

```html
<img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" alt="image">
```

### 2.4 Anchor tag (hyperlink)

```html
<a href="https://krunalgamit.live" target="_blank" >My Website</a>
```

---

## 3. MOST IMPORTANT

### 3.1 div

![Just consider the box.](https://images.unsplash.com/photo-1604614440358-ed8c049ffdb4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)

Just consider the box.

- div is a rectangle box with full width and height **ZERO**. It means it appears to be nothing.
- div height depends on its children's height. (children's total height = div’s height)

### 3.2 id

- Applying attributes, defined by HTML.

<aside>
⚠️ Property: Properties are defined by the DOM, Document Object Model.

</aside>

```html
<p id="one">Lorem ipsum dolor sit amet.</p>
<p id="two">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
```

```css
#one{
      color:red;
    }
#two{
      color: blue;
		}
```

Output:

![Untitled](HTML%20Learn%20what%20matters%201e1088b116a947de8d7aa3cbdea3c3c7/Untitled.png)

### 3.3 Class

- id name cannot be repeated. It can, but not the right way.
- Therefore, class is introduced.

```html
<p>Lorem ipsum dolor sit.</p>
    <p class="a">Lorem.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p class="a">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    <p class="a">Lorem, ipsum dolor.</p>
```

```css
.a{
   color:red;
  }
```

Output:

![Untitled](HTML%20Learn%20what%20matters%201e1088b116a947de8d7aa3cbdea3c3c7/Untitled%201.png)
# CSS: What you should know to get started.

We will use this page to compile all the necessary CSS.

Learning from: [(613) CSS Crash Course: Master the Essentials in One Video! Elevate Your Front-End Skills Now! - YouTube](https://www.youtube.com/watch?v=K1naz9wBwKU&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=3&ab_channel=SheryiansCodingSchool)

<aside>
👉🏼 Cascading Style Sheet is the language we use in an HTML document to describe how the HTML elements should be displayed. CSS → Styling.

</aside>

---

# 1. Making a CSS file

Create a style.css file. Then link it just below the title tag inside the head tag. 

```html
<link rel="stylesheet" href="style.css">
```

## 1.1 CSS Boilerplate

Write code in style.css file

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body{
    width: 100%;
    height: 100%;
}
```

---

## 2. How to write CSS

```css
element{  #for any element 

}

tag{   #for tags 

}

#div{  #for divs

}

.class{  #for classes

}

```

---

## 3. Units px, %

```html
<div id="main"></div>
<div id="main2"></div>
```

```css
#main{
    width: 25%;
    height: 50%;
    background-color: blue;
}

#main2{
    width: 100px;
    height: 100px;
    background-color: red;
}
```

Output:

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled.png)

### 3.1 Percentage `%`

Considering the screen is full width which is $x$. So the half screen will be $x/2$. When we try to achieve that content should be half-screen or one-third or one-fourth in ratio. We use percentage %. 

Full width: `100%`

Half: `50%`

Quarter: `25%`

### 3.2 Pixel `px`

Small block. with respect to the pixel size.

---

## 4. Margin and Padding

 Margin is space between elements. `margin` gives space around the div on all sides by default. Other options are `margin-left`,`margin-right`,`margin-top` and `margin-bottom` for specific. 

`margin: 20px 100px 30px 15px;` 

<aside>
💡 Clockwise

top: 20px 

right: 100px

bottom: 30px

left: 15px 

</aside>

`margin: 20px 100px;`

<aside>
💡 top: 20px

bottom: 20px

left: 100px 

right: 100px

</aside>

**Padding** is just similar to margin which ****gives space or an imaginary border inside the element. i.e`padding: 20px;` Other options are `padding-top`, `padding-bottom`,`padding-left` and `padding-right`.

---

## 5. Image background

```css
background-image: url(https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
background-size:cover;
background-position: center;
```

---

## 6. Position: absolute and relative

By default value `position: static`

`position: absolute`

meaning the object comes above

![the middle phone is given an position absolute so it rises upwards ](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%201.png)

the middle phone is given an position absolute so it rises upwards 

Then the phone on the left, the blue one will slide into the middle

![So the blue phone will be hidden ](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%202.png)

So the blue phone will be hidden 

Then we can use to move the object in space using `top:10%`  `left:30%`

```css
#car1{
    position:absolute;
    width: 70px;
    height: 100px;
    background-color: red;
}

#car2{
    position: absolute;
    width: 50px;
    height: 70px;
    background-color: blue;
}

#car3{
    position: absolute;
    width: 150px;
    height: 50px;
    background-color: greenyellow;
}
```

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%203.png)

`position: relative`

Making an object confined to a particular object.

```css
#box{
    position: relative;
    width: 50%;
    height: 50%;
    background-color: pink;
}

#smallbox{
    position: absolute;
    top:40%;
    left: 40%;
    width: 50px;
    height: 50px;
    background-color: blue;
}
```

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%204.png)

---

## 7. Flexbox

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%205.png)

Suppose this green  board is a box containing elements phone, remote, and cube. By default it looks top to down. So I want to align in different orientation, side by side.

- Make parent box `display: flex`

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%206.png)

Flex also opens up two axis top-bottom and left to right.

- TOP-BOTTOM axis (Height) → align-items;
- LEFT-RIGHT axis (width) → justify-content;

In the parent element.

`justify-content: center`

`justify-content: end`

`justify-content: space-between`

`justify-content: space-around`

`align-items: center`

`align-items: end`

```css
#box{
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 500px;
    height: 500px;
    background-color: pink;
}

#box1{
    width: 70px;
    height: 70px;
    background-color: blue;
}

#box2{
    width: 80px;
    height: 80px;
    background-color: greenyellow;
}

#box3{
    width: 70px;
    height: 70px;
    background-color: red;
}
```

![Untitled](CSS%20What%20you%20should%20know%20to%20get%20started%20359d665d804c4f21873a9d9ad5902489/Untitled%207.png)
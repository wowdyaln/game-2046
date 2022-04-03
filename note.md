## CSS
[Simple Little Use Case for `vmin` | CSS-Tricks - CSS-Tricks](https://css-tricks.com/simple-little-use-case-vmin/)
不常使用的 Vmin。


```css

#game-board {
  /* 讓 tile 元素可以使用 absolute */
  position: relative; 
}
```



- tile 位置
```css
.tile {
  --x: 3;
  --y: 2;

  height: var(--cell-size);
  width: var(--cell-size);
  position: absolute;
  top: calc(var(--y) * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap));
  left: calc(var(--x) * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap));
}


- tile 可變化背景色
```css
.tile {
  --background-lightness: 80%;
  --text-lightness: 20%;
  background-color: hsl(200, 50%, var(--background-lightness));
  color: hsl(100, 15%, var(--text-lightness));
}


- tile 動畫
```css 
.tile {
  animation: show 200ms ease-in-out;
  transition: 100ms ease-in-out;
}

@keyframes show {
  0% {
    opacity: .5;
    transform: scale(0);
  }
}

```

## Grid
- 創建 4by4 grid



## script
# HTML ➕ CSS ➕ JS

## HTML - HyperText Markup Language 
## CSS - Cascading Style Sheets
## JS - JavaScript
<center>

| HTML      | CSS | JS        |
| ----------- | ----------- | ----------- |
| Obsah a štruktúra      | Výzor       | Správanie |
| Nadpisy, odseky, obrázky, tlačidlá... | Vyberieme si objekty a štýlujeme ich | Pridáme objektom funkcionalitu |



![Príklad](Zdroje/js_css_html.png)

</center>

## JavaScript
JavaScript je programovací jazyk, ktorý sa používa na vytváranie interaktívnych webových stránok.

- JavaScript môže zmeniť obsah HTML

- JavaScript môže zmeniť meniť štýly CSS

- JavaScript môže skryť HTML elementy

- JavaScript môže zobraziť HTML elementy

- JavaScript môže pridávať HTML elementy

## Premenné v JavaScripte
| Vlastnosť          | var                             | let                              | const                             |
|--------------------|---------------------------------|----------------------------------|-----------------------------------|
| **Rozsah (Scope)** | Funkčný rozsah                  | Blokový rozsah                   | Blokový rozsah                    |
| **Aktualizácia**   | Meniteľné (mutable)             | Meniteľné (mutable)              | Nemenné (immutable)               |
| **Redeklarácia**   | Môže byť redeklarované          | Nemôže byť redeklarované         | Nemôže byť redeklarované          |
| **Podpora**        | Podporované v starých prehliadačoch | Nepodporované v starých prehliadačoch | Nepodporované v starých prehliadačoch |

## Príklady
```javascript
var x = 10;
console.log(x); // 10

if (true) {
    var x = 20;
    console.log(x); // 20
}

console.log(x); // 20 (x je dostupné aj mimo bloku, kde bolo deklarované)
```

```javascript
let y = 10;
console.log(y); // 10

if (true) {
    let y = 20;
    console.log(y); // 20 (y je dostupné len v tomto bloku)
}

console.log(y); // 10 (pôvodná hodnota y mimo bloku)
```

```javascript
const z = 10;
console.log(z); // 10

if (true) {
    const z = 20;
    console.log(z); // 20 (z je dostupné len v tomto bloku)
}

console.log(z); // 10 (pôvodná hodnota z mimo bloku)

// z = 30; // Error: Assignment to constant variable (nie je možné zmeniť hodnotu)
```



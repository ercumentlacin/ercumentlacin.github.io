---
title: Pixel degerlerini rem degerlerine çevirme (px to rem)
author: Ercüment Laçın
date: 2022-05-28
tags: ['posts', 'scss']
description: Pixel degerlerini rem degerlerine çevirme (px to rem)
---

![Sass Logo](/assets/images/sass-logo.png 'Sass Logo')

SCSS, çok yaygın olarak kullanılan bir CSS ön işlemcisidir. Selector nesting, mixins, variables SCSS'nin en çok kullanılan özelliklerinden bazılarıdır. Bu özelliklerin yanı sıra değeri yeterince bilinmeyen bir SCSS özelliği var o da **[functions](https://sass-lang.com/documentation/at-rules/function)**.

## Neden SCSS fonksiyonları kullanılır ?

Fonksiyonlar, mixinlere çok benzer olsada yalnızca bir değer döndürürler ve yan etkilere(side effects) neden olmazlar. Başka bir değişle herhangi bir CSS özelliği değiştirmezler. Yani fonksiyonlar yalnızca değer alır biraz hesaplama yapar ve değer döndürürler.

Pek çok web sitesi `rem` birimini yalnızca yazı boyutlarını ayarlamak için değil aynı zamanda kutu (`div`) boyutlarını ayarlamak için kullanılır. Bu nedenden dolayı piksel (`px`) değerlerini `rem` değerlerine çevirmek için fonksiyonlar iyi bir adaydır. Kullanışlı fonksiyonlara sahip olmak, ondalık değerler ile uğraşmaktan daha kolaydır ve stil dosyanızın daha temiz olmasına yardımcı olur.

**Not:** Makalenin geri kalanında yer alacak olan snippetler `SASS` syntax'ını değil de `SCSS` syntax'ınında olacaktır.

![Pikselleri rem tipine çeviren fonksiyon](/assets/images/px-to-rem.png 'Pikselleri rem tipine çeviren fonksiyon')

Oldukça güzel gözüküyor değil mi ? Bence en güzel yanı boyutları `px` olarak düşünmemiz, _"yerçekimsiz ortamda çilek yiyim ama muz gibi olsun"_ gibi ama gerçe 😂. Bu sayeden figma yada benzeri araçlarda yer alan birimleri olduğu gibi yazıyoruz ve çıktısı `rem` olarak gözüküyor.

## Kod

Kodu tanımlayalım.

```scss
@use 'sass:math' as *;

$html-font-size: 16;

@function rem($px) {
  @return div($px, $html-font-size) + rem;
}
```

Bu şekilde kullanıyoruz:

```scss
.container {
  font-size: rem(14);
}
```

Bu **container**'ın `font-size`'ının değerini `0.875rem` yapar.

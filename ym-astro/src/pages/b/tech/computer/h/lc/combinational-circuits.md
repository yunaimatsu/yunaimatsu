---
layout: '@layout/Layout.astro'
# titleText: "My Custom Title"
---
# 組み合わせ回路Combinational circuits
## **回路ゲートLogic Gates**

根本的なNOT, AND, ORの三つ。その中でもとりわけNOTが特別な存在。NOTはANDとORにくっついて**N**ANDや**N**ORを形成する。

#### Symbolを覚えよう
||**NOT**|**YES**|**EXCLUSIVE**|
|---|---|---|---|
||![Logic Gate Not](/blog/tech/logic-gate-not.png)||
|**AND**|![Logic Gate Nand](/blog/tech/logic-gate-nand.png)|![Logic Gate And](/blog/tech/logic-gate-and.png)|
|**OR**|![Logic Gate Nor](/blog/tech/logic-gate-nor.png)|![Logic Gate Or](/blog/tech/logic-gate-or.png)|![Logic Gate Xor](/blog/tech/logic-gate-xor.png)|
    
上にあげたシンボルはMILという規格のものだ。それ以外にも、[**DIN-Norm**](https://de.m.wikipedia.org/wiki/DIN-Norm)や[**IEC**(International Electrotechnical Commission)](https://en.m.wikipedia.org/wiki/International_Electrotechnical_Commission)、[**ANSI**(American National Standards Institute)](https://en.m.wikipedia.org/wiki/American_National_Standards_Institute)など、沢山の規格がある。

#### 入力の数（ベン図の円の数）による分類
##### 1 input(ベン図の円)
- ベン図の円が一つのもの
		
| **NOT Gate** | A̅ = Y | A Y  0 1  1 0 | Complement of A |
| --- | --- | --- | --- |

##### 2 inputs (ベン図の円)
論理和・論理積とその逆

|||||
|---|---|---|---|
| **AND Gate** | A · B = Y | A B Y<br>0 0 0<br>0 1 0<br>1 0 0<br>1 1 1 | Intersection of A and B |
| **NAND Gate** | A̅ · B̅ = Y | A B Y  0 0 1  0 1 1  1 0 1  1 1 0 | Complement of AND |
| **OR Gate** | A + B = Y | A B Y  0 0 0  0 1 1  1 0 1  1 1 1 | Union of A and B |
| **NOR Gate** | A̅ + B̅ = Y | A B Y  0 0 1  0 1 0  1 0 0  1 1 0 | Complement of OR |

- 変わり種、ニューラルネットワークのキー
| **XOR Gate** | A ⊕ B = Y | A B Y  0 0 0  0 1 1  1 0 1  1 1 0 | Exclusive A or B |
| --- | --- | --- | --- |

##### 3 inputs (ベン図の円)
    
![](/blog/tech/3inputs-logic-chart.jpg)
    
- 実際の開発

電源につなぐ。

74HC04では7番ピン（GNDグラウンド0V, minus）と14番ピン(Vcc, 5V, plus)につなげる

![](/blog/tech/3inputs-top-view.jpg)

### Adder

2進数の加算は以下のようになる。

**Half adder(下位からの桁上がり考慮する)**    
![Half Adder Circuit](/blog/tech/half-adder.png)
![Half Adder Circuit](/blog/tech/half-adder-circuit.png)
    
| A | B | C(2nd degit) |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |
    
**AND**のTruth Tableと一致
    
| A | B | S(1st degit) |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**XOR**のTruth Tableと一致

$$ 1.\quad 0+0=00 $$
$$ 2.\quad 0+1=01 $$
$$ 3.\quad 1+0=01 $$
$$ 4.\quad 1+1=10 $$
    
**全加算器Full adder(下位からの桁上がり考慮なし)**
    
![Adder](/blog/tech/adder.png)
![Adder Circuit](/blog/tech/adder-circuit.png)
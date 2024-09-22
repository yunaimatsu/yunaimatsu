---
layout: '@layout/Layout.astro'
---
# 「ネットワーク」分野は「セキュリティ」分野と同時に学ぼう
多くのコンピュータサイエンスの専門書や情報技術関連の資格の参考書にいて、ネットワーク分野とセキュリティ分野は棲み分けがされています。
しかし、実際はこの2つの分野は密接に関わっており、分けて学習するのは本質的と言えません。
そこで、当サイトではこの2つを同時に学習します。

# 学ぶ順番
## まずインターネット層とトランスポート層から
### なぜ？
1. イメージがしやすいから。
2. ネットワークの本質だから。
3. インターネット層はノードの繋ぎ方を統一する。トランスポート層はそれらの情報のやり取り方法を統一する。
リンク層は、インターネット層で仮想的に扱えるようにするためにハード面を統一する。
アプリケーション層は「プログラミング」の領域で、サービスにおける通信の方法を統一する感じ。

## インターネット層
イーサネットに基づくリンク層(物理層/データリンク層)は単一のハブに繋がれたネットワーク(LAN)である。
ネットを跨ぐから、インターネット！インター(ネットワーク)。
The main difference between the intranet and the internet comes down to access. The internet is a global collection of computer networks. It's an open network, accessible to anyone with a device and an internet connection. In contrast, the intranet is a closed, online network, only accessible to company employees.

## トランスポート層

インターネット層とトランスポート層の行き来を行う
ARP/RARP

![Network](/blog/cs/network.png)

* [リンク層](/b/cs/a/nw/link)
* [インターネット層](/b/cs/a/nw/internet)
* [トランスポート層](/b/cs/a/nw/transport)
* [アプリケーション層](/b/cs/a/nw/application)

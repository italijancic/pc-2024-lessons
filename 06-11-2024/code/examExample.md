## 📋 2D Array Problema
Autor: Talijancic, Ivan

#### Problema 1
Suponga que usted es el estratega de un escuadron de aviones bombarderos y para cumplir con su rol tiene que desarollar un programa en `.js` que le permita generar:

- Una **matriz de bombardeo** de `M-filas x N-columnas`, donde cada fila representa un avión en particular y cada columna un objetivo. El contenido de cada celda de esta matriz, **números enteros aleatorios entre 0 y 10** indica la cantidad de bombas a arrojar en el `n-ésimo objetivo`. Para la generación aleatoría de esta matriz de bombardeo, tenga en cuenta que si una celda tiene un 0, esto indica que la `m-ésima` avión pegó la vuelta en él `(n-ésimo - 1)` objetivo sin arrojar ninguna bomba desde el `n-ésimo` objetivo en adelante. Por ende las restantes celdas de esta fila deberán completarse con cero. Se presenta a continuación un ejemplo de como podría verse esta matriz:

```zsh
┌─────────┬────┬────┬───┬───┬───┬────┬───┬───┬────┬───┐
│ (index) │ 0  │ 1  │ 2 │ 3 │ 4 │ 5  │ 6 │ 7 │ 8  │ 9 │
├─────────┼────┼────┼───┼───┼───┼────┼───┼───┼────┼───┤
│    0    │ 6  │ 9  │ 8 │ 9 │ 1 │ 10 │ 9 │ 3 │ 10 │ 6 │
│    1    │ 9  │ 10 │ 5 │ 2 │ 7 │ 4  │ 6 │ 4 │ 10 │ 7 │
│    2    │ 0  │ 0  │ 0 │ 0 │ 0 │ 0  │ 0 │ 0 │ 0  │ 0 │
│    3    │ 10 │ 6  │ 5 │ 8 │ 5 │ 5  │ 9 │ 9 │ 4  │ 2 │
│    4    │ 9  │ 6  │ 0 │ 0 │ 0 │ 0  │ 0 │ 0 │ 0  │ 0 │
│    5    │ 2  │ 0  │ 0 │ 0 │ 0 │ 0  │ 0 │ 0 │ 0  │ 0 │
│    6    │ 3  │ 7  │ 8 │ 3 │ 3 │ 10 │ 2 │ 2 │ 10 │ 9 │
│    7    │ 2  │ 2  │ 3 │ 3 │ 2 │ 2  │ 2 │ 5 │ 10 │ 9 │
│    8    │ 5  │ 3  │ 5 │ 5 │ 0 │ 0  │ 0 │ 0 │ 0  │ 0 │
│    9    │ 3  │ 10 │ 6 │ 7 │ 8 │ 7  │ 2 │ 8 │ 5  │ 5 │
└─────────┴────┴────┴───┴───┴───┴────┴───┴───┴────┴───┘
```

- Un **vector de distancias** que indique las distancias desde la base al 1er objetivo y entre objetivos consecutivos. El vuelo de los aviones es siempre desde la base al 1er objetivo y de ahí al siguiente hasta que regrese a la base. Este vector de distancias contedrá **enteros positivos entre 200 y 1000 Kms**. Se presenta a continuación, un ejemplo de como podría verse este vector de distancias:

```zsh
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  442   │
│    1    │  931   │
│    2    │  762   │
│    3    │  798   │
│    4    │  918   │
│    5    │  858   │
│    6    │  459   │
│    7    │  442   │
│    8    │  1000  │
│    9    │  975   │
└─────────┴────────┘
```

Generados la **matriz de bombardeo** y él **vector de distancias** calcular:

1) Un **vector** que indique la **distancia total recorrida por cada avión**. Tenga en cuenta que deberá sumarse solo las distancias por cada avión, hasta aquellos objetivos en donde arrojo bombas. Y no olvide que el avión debe ir y volver, recorriendo el mismo camino en ambos sentidos. **(10 %)**

2) Un **vector** que indica la cantidad de bombas arrojadas por cada avión. **(10 %)**

3) Un **vector** que indique la cantidad porcentual de bombas arrojada por cada avión con respecto a la cantidad total de bombas arrojadas. **(10 %)**

4) Una **matriz que muestre la cantidad porcentual** de bombas arrojadas en él **n-ésimo objetivo**, con respecto a la cantidad total de bombas arrojadas por él **m-ésimo avión**. **(35 %)**

5) Una **matriz que muestre la cantidad porcentual** de bombas arrojadas en él **n-ésimo objetivo**, con respecto a la cantidad **total de bombas arrojadas en el bombardeo**. **(35 %)**

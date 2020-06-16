import {
    AncientRuinsSpecifications,
    GroundMaterial,
    WaterColor,
    PlantColor,
    TreeTrunkColor,
    TreeLeafColor, 
    GridDictionary} from "../../../models/ancient-ruins-specifications";

const gridDictionary: GridDictionary = {
    // Ground & Grass
    2: { devDescription: 'Green Grass (whole tile) - Version 1', gameDescription: 'Lush green grass', spritePosition: [1, 1], hasVariation: true },
    3: { devDescription: 'Green Grass (whole tile) - Version 2', gameDescription: 'Lush green grass', spritePosition: [3, 3] },
    4: { devDescription: 'Green Grass (Dirt at top)', gameDescription: 'Lush green grass with dirt framing its northern edge', spritePosition: [1, 2] },
    5: { devDescription: 'Green Grass (Dirt at top & right)', gameDescription: 'Lush green grass with dirt framing its northern and eastern edges', spritePosition: [2, 2] },
    6: { devDescription: 'Green Grass (Dirt at right)', gameDescription: 'Lush green grass with dirt framing its eastern edge', spritePosition: [2, 1] },
    7: { devDescription: 'Green Grass (Dirt at right & bottom)', gameDescription: 'Lush green grass with dirt framing its southern and eastern edges', spritePosition: [2, 0] },
    8: { devDescription: 'Green Grass (Dirt at bottom)', gameDescription: 'Lush green grass with dirt framing its southern edge', spritePosition: [1, 0] },
    9: { devDescription: 'Green Grass (Dirt at bottom & left)', gameDescription: 'Lush green grass with dirt framing its southern and western edges', spritePosition: [0, 0] },
    10: { devDescription: 'Green Grass (Dirt at left)', gameDescription: 'Lush green grass with dirt framing its western edge', spritePosition: [0, 1] },
    11: { devDescription: 'Green Grass (Dirt at left & top)', gameDescription: 'Lush green grass with dirt framing its northern and western edges', spritePosition: [0, 2] },
    12: { devDescription: 'Green Grass (Dirt at left & top & right)', gameDescription: 'Lush green grass with dirt framing its northern, eastern and western edges', spritePosition: [3, 2] },
    13: { devDescription: 'Green Grass (Dirt at top & right & bottom)', gameDescription: 'Lush green grass with dirt framing its northern, southern and western edges', spritePosition: [2, 3] },
    14: { devDescription: 'Green Grass (Dirt at right & bottom & left)', gameDescription: 'Lush green grass with dirt framing its southern, eastern and western edges', spritePosition: [3, 0] },
    15: { devDescription: 'Green Grass (Dirt at bottom & left & top)', gameDescription: 'Lush green grass with dirt framing its northern, southern and eastern edges', spritePosition: [0, 3] },
    16: { devDescription: 'Green Grass (Dirt at top & bottom)', gameDescription: 'Lush green grass with dirt framing its northern and southern edges', spritePosition: [1, 3] },
    17: { devDescription: 'Green Grass (Dirt at left & right)', gameDescription: 'Lush green grass with dirt framing its eastern and western edges', spritePosition: [3, 1] },
    18: { devDescription: 'Green Grass (Dirt at sides only) - Version 1', gameDescription: 'Sparse green grass with dirt framing all of its edges', spritePosition: [4, 2], hasVariation: true },
    19: { devDescription: 'Green Grass (Dirt at sides only) - Version 2', gameDescription: 'Sparse green grass with dirt framing all of its edges', spritePosition: [5, 2] },
    20: { devDescription: 'Green Grass (Dirt at corners only) - Version 1', gameDescription: 'Green grass mixed with patches of dirt', spritePosition: [4, 1], hasVariation: true },
    21: { devDescription: 'Green Grass (Dirt at corners only) - Version 2', gameDescription: 'Green grass mixed with patches of dirt', spritePosition: [5, 1] },
    22: { devDescription: 'Green Grass (Dirt all around)', gameDescription: 'Lush green grass with dirt framing all of its edges', spritePosition: [4, 3] },
    23: { devDescription: 'Brown Dirt (whole tile) - Version 1', gameDescription: 'Ordinary dirt', spritePosition: [4, 0], hasVariation: true },
    24: { devDescription: 'Brown Dirt (whole tile) - Version 2', gameDescription: 'Ordinary dirt', spritePosition: [5, 0] },

    102: { devDescription: 'Green Grass (whole tile) - Version 1', gameDescription: 'Lush green grass', spritePosition: [7, 1], hasVariation: true },
    103: { devDescription: 'Green Grass (whole tile) - Version 2', gameDescription: 'Lush green grass', spritePosition: [9, 3] },
    104: { devDescription: 'Green Grass (Sand at top)', gameDescription: 'Lush green grass with sand framing its northern edge', spritePosition: [7, 2] },
    105: { devDescription: 'Green Grass (Sand at top & right)', gameDescription: 'Lush green grass with sand framing its northern and eastern edges', spritePosition: [8, 2] },
    106: { devDescription: 'Green Grass (Sand at right)', gameDescription: 'Lush green grass with sand framing its eastern edge', spritePosition: [8, 1] },
    107: { devDescription: 'Green Grass (Sand at right & bottom)', gameDescription: 'Lush green grass with sand framing its southern and eastern edges', spritePosition: [8, 0] },
    108: { devDescription: 'Green Grass (Sand at bottom)', gameDescription: 'Lush green grass with sand framing its southern edge', spritePosition: [7, 0] },
    109: { devDescription: 'Green Grass (Sand at bottom & left)', gameDescription: 'Lush green grass with sand framing its southern and western edges', spritePosition: [6, 0] },
    110: { devDescription: 'Green Grass (Sand at left)', gameDescription: 'Lush green grass with sand framing its western edge', spritePosition: [6, 1] },
    111: { devDescription: 'Green Grass (Sand at left & top)', gameDescription: 'Lush green grass with sand framing its northern and western edges', spritePosition: [6, 2] },
    112: { devDescription: 'Green Grass (Sand at left & top & right)', gameDescription: 'Lush green grass with sand framing its northern, eastern and western edges', spritePosition: [9, 2] },
    113: { devDescription: 'Green Grass (Sand at top & right & bottom)', gameDescription: 'Lush green grass with sand framing its northern, southern and western edges', spritePosition: [8, 3] },
    114: { devDescription: 'Green Grass (Sand at right & bottom & left)', gameDescription: 'Lush green grass with sand framing its southern, eastern and western edges', spritePosition: [9, 0] },
    115: { devDescription: 'Green Grass (Sand at bottom & left & top)', gameDescription: 'Lush green grass with sand framing its northern, southern and eastern edges', spritePosition: [6, 3] },
    116: { devDescription: 'Green Grass (Sand at top & bottom)', gameDescription: 'Lush green grass with sand framing its northern and southern edges', spritePosition: [7, 3] },
    117: { devDescription: 'Green Grass (Sand at left & right)', gameDescription: 'Lush green grass with sand framing its eastern and western edges', spritePosition: [9, 1] },
    118: { devDescription: 'Green Grass (Sand at sides only) - Version 1', gameDescription: 'Sparse green grass with sand framing all of its edges', spritePosition: [10, 2], hasVariation: true },
    119: { devDescription: 'Green Grass (Sand at sides only) - Version 2', gameDescription: 'Sparse green grass with sand framing all of its edges', spritePosition: [11, 2] },
    120: { devDescription: 'Green Grass (Sand at corners only) - Version 1', gameDescription: 'Green grass mixed with patches of sand', spritePosition: [10, 1], hasVariation: true },
    121: { devDescription: 'Green Grass (Sand at corners only) - Version 2', gameDescription: 'Green grass mixed with patches of sand', spritePosition: [11, 1] },
    122: { devDescription: 'Green Grass (Sand all around)', gameDescription: 'Lush green grass with sand framing all of its edges', spritePosition: [10, 3] },
    123: { devDescription: 'White Sand (whole tile) - Version 1', gameDescription: 'Ordinary sand', spritePosition: [10, 0], hasVariation: true },
    124: { devDescription: 'White Sand (whole tile) - Version 2', gameDescription: 'Ordinary sand', spritePosition: [11, 0] },

    202: { devDescription: 'Green Grass (whole tile) - Version 1', gameDescription: 'Lush green grass', spritePosition: [13, 1], hasVariation: true },
    203: { devDescription: 'Green Grass (whole tile) - Version 2', gameDescription: 'Lush green grass', spritePosition: [15, 3] },
    204: { devDescription: 'Green Grass (Gravel at top)', gameDescription: 'Lush green grass with gravel framing its northern edge', spritePosition: [13, 2] },
    205: { devDescription: 'Green Grass (Gravel at top & right)', gameDescription: 'Lush green grass with gravel framing its northern and eastern edges', spritePosition: [14, 2] },
    206: { devDescription: 'Green Grass (Gravel at right)', gameDescription: 'Lush green grass with gravel framing its eastern edge', spritePosition: [14, 1] },
    207: { devDescription: 'Green Grass (Gravel at right & bottom)', gameDescription: 'Lush green grass with gravel framing its southern and eastern edges', spritePosition: [14, 0] },
    208: { devDescription: 'Green Grass (Gravel at bottom)', gameDescription: 'Lush green grass with gravel framing its southern edge', spritePosition: [13, 0] },
    209: { devDescription: 'Green Grass (Gravel at bottom & left)', gameDescription: 'Lush green grass with gravel framing its southern and western edges', spritePosition: [12, 0] },
    210: { devDescription: 'Green Grass (Gravel at left)', gameDescription: 'Lush green grass with gravel framing its western edge', spritePosition: [12, 1] },
    211: { devDescription: 'Green Grass (Gravel at left & top)', gameDescription: 'Lush green grass with gravel framing its northern and western edges', spritePosition: [12, 2] },
    212: { devDescription: 'Green Grass (Gravel at left & top & right)', gameDescription: 'Lush green grass with gravel framing its northern, eastern and western edges', spritePosition: [15, 2] },
    213: { devDescription: 'Green Grass (Gravel at top & right & bottom)', gameDescription: 'Lush green grass with gravel framing its northern, southern and western edges', spritePosition: [14, 3] },
    214: { devDescription: 'Green Grass (Gravel at right & bottom & left)', gameDescription: 'Lush green grass with gravel framing its southern, eastern and western edges', spritePosition: [15, 0] },
    215: { devDescription: 'Green Grass (Gravel at bottom & left & top)', gameDescription: 'Lush green grass with gravel framing its northern, southern and eastern edges', spritePosition: [12, 3] },
    216: { devDescription: 'Green Grass (Gravel at top & bottom)', gameDescription: 'Lush green grass with gravel framing its northern and southern edges', spritePosition: [13, 3] },
    217: { devDescription: 'Green Grass (Gravel at left & right)', gameDescription: 'Lush green grass with gravel framing its eastern and western edges', spritePosition: [15, 1] },
    218: { devDescription: 'Green Grass (Gravel at sides only) - Version 1', gameDescription: 'Sparse green grass with gravel framing all of its edges', spritePosition: [16, 2], hasVariation: true },
    219: { devDescription: 'Green Grass (Gravel at sides only) - Version 2', gameDescription: 'Sparse green grass with gravel framing all of its edges', spritePosition: [17, 2] },
    220: { devDescription: 'Green Grass (Gravel at corners only) - Version 1', gameDescription: 'Green grass mixed with patches of gravel', spritePosition: [16, 1], hasVariation: true },
    221: { devDescription: 'Green Grass (Gravel at corners only) - Version 2', gameDescription: 'Green grass mixed with patches of gravel', spritePosition: [17, 1] },
    222: { devDescription: 'Green Grass (Gravel all around)', gameDescription: 'Lush green grass with gravel framing all of its edges', spritePosition: [16, 3] },
    223: { devDescription: 'Gravel (whole tile) - Version 1', gameDescription: 'Ordinary gravel', spritePosition: [16, 0], hasVariation: true },
    224: { devDescription: 'Gravel (whole tile) - Version 2', gameDescription: 'Ordinary gravel', spritePosition: [17, 0] },

    302: { devDescription: 'Yellow Grass (whole tile) - Version 1', gameDescription: 'Lush yellow grass', spritePosition: [19, 1], hasVariation: true },
    303: { devDescription: 'Yellow Grass (whole tile) - Version 2', gameDescription: 'Lush yellow grass', spritePosition: [21, 3] },
    304: { devDescription: 'Yellow Grass (Dirt at top)', gameDescription: 'Lush yellow grass with dirt framing its northern edge', spritePosition: [19, 2] },
    305: { devDescription: 'Yellow Grass (Dirt at top & right)', gameDescription: 'Lush yellow grass with dirt framing its northern and eastern edges', spritePosition: [20, 2] },
    306: { devDescription: 'Yellow Grass (Dirt at right)', gameDescription: 'Lush yellow grass with dirt framing its eastern edge', spritePosition: [20, 1] },
    307: { devDescription: 'Yellow Grass (Dirt at right & bottom)', gameDescription: 'Lush yellow grass with dirt framing its southern and eastern edges', spritePosition: [20, 0] },
    308: { devDescription: 'Yellow Grass (Dirt at bottom)', gameDescription: 'Lush yellow grass with dirt framing its southern edge', spritePosition: [19, 0] },
    309: { devDescription: 'Yellow Grass (Dirt at bottom & left)', gameDescription: 'Lush yellow grass with dirt framing its southern and western edges', spritePosition: [18, 0] },
    310: { devDescription: 'Yellow Grass (Dirt at left)', gameDescription: 'Lush yellow grass with dirt framing its western edge', spritePosition: [18, 1] },
    311: { devDescription: 'Yellow Grass (Dirt at left & top)', gameDescription: 'Lush yellow grass with dirt framing its northern and western edges', spritePosition: [18, 2] },
    312: { devDescription: 'Yellow Grass (Dirt at left & top & right)', gameDescription: 'Lush yellow grass with dirt framing its northern, eastern and western edges', spritePosition: [21, 2] },
    313: { devDescription: 'Yellow Grass (Dirt at top & right & bottom)', gameDescription: 'Lush yellow grass with dirt framing its northern, southern and western edges', spritePosition: [20, 3] },
    314: { devDescription: 'Yellow Grass (Dirt at right & bottom & left)', gameDescription: 'Lush yellow grass with dirt framing its southern, eastern and western edges', spritePosition: [21, 0] },
    315: { devDescription: 'Yellow Grass (Dirt at bottom & left & top)', gameDescription: 'Lush yellow grass with dirt framing its northern, southern and eastern edges', spritePosition: [18, 3] },
    316: { devDescription: 'Yellow Grass (Dirt at top & bottom)', gameDescription: 'Lush yellow grass with dirt framing its northern and southern edges', spritePosition: [19, 3] },
    317: { devDescription: 'Yellow Grass (Dirt at left & right)', gameDescription: 'Lush yellow grass with dirt framing its eastern and western edges', spritePosition: [21, 1] },
    318: { devDescription: 'Yellow Grass (Dirt at sides only) - Version 1', gameDescription: 'Sparse yellow grass with dirt framing all of its edges', spritePosition: [22, 2], hasVariation: true },
    319: { devDescription: 'Yellow Grass (Dirt at sides only) - Version 2', gameDescription: 'Sparse yellow grass with dirt framing all of its edges', spritePosition: [23, 2] },
    320: { devDescription: 'Yellow Grass (Dirt at corners only) - Version 1', gameDescription: 'Yellow grass mixed with patches of dirt', spritePosition: [22, 1], hasVariation: true },
    321: { devDescription: 'Yellow Grass (Dirt at corners only) - Version 2', gameDescription: 'Yellow grass mixed with patches of dirt', spritePosition: [23, 1] },
    322: { devDescription: 'Yellow Grass (Dirt all around)', gameDescription: 'Lush yellow grass with dirt framing all of its edges', spritePosition: [22, 3] },
    323: { devDescription: 'Brown Dirt (whole tile) - Version 1', gameDescription: 'Ordinary dirt', spritePosition: [22, 0], hasVariation: true },
    324: { devDescription: 'Brown Dirt (whole tile) - Version 2', gameDescription: 'Ordinary dirt', spritePosition: [23, 0] },

    402: { devDescription: 'Yellow Grass (whole tile) - Version 1', gameDescription: 'Lush yellow grass', spritePosition: [25, 1], hasVariation: true },
    403: { devDescription: 'Yellow Grass (whole tile) - Version 2', gameDescription: 'Lush yellow grass', spritePosition: [27, 3] },
    404: { devDescription: 'Yellow Grass (Sand at top)', gameDescription: 'Lush yellow grass with sand framing its northern edge', spritePosition: [25, 2] },
    405: { devDescription: 'Yellow Grass (Sand at top & right)', gameDescription: 'Lush yellow grass with sand framing its northern and eastern edges', spritePosition: [26, 2] },
    406: { devDescription: 'Yellow Grass (Sand at right)', gameDescription: 'Lush yellow grass with sand framing its eastern edge', spritePosition: [26, 1] },
    407: { devDescription: 'Yellow Grass (Sand at right & bottom)', gameDescription: 'Lush yellow grass with sand framing its southern and eastern edges', spritePosition: [26, 0] },
    408: { devDescription: 'Yellow Grass (Sand at bottom)', gameDescription: 'Lush yellow grass with sand framing its southern edge', spritePosition: [25, 0] },
    409: { devDescription: 'Yellow Grass (Sand at bottom & left)', gameDescription: 'Lush yellow grass with sand framing its southern and western edges', spritePosition: [24, 0] },
    410: { devDescription: 'Yellow Grass (Sand at left)', gameDescription: 'Lush yellow grass with sand framing its western edge', spritePosition: [24, 1] },
    411: { devDescription: 'Yellow Grass (Sand at left & top)', gameDescription: 'Lush yellow grass with sand framing its northern and western edges', spritePosition: [24, 2] },
    412: { devDescription: 'Yellow Grass (Sand at left & top & right)', gameDescription: 'Lush yellow grass with sand framing its northern, eastern and western edges', spritePosition: [27, 2] },
    413: { devDescription: 'Yellow Grass (Sand at top & right & bottom)', gameDescription: 'Lush yellow grass with sand framing its northern, southern and western edges', spritePosition: [26, 3] },
    414: { devDescription: 'Yellow Grass (Sand at right & bottom & left)', gameDescription: 'Lush yellow grass with sand framing its southern, eastern and western edges', spritePosition: [27, 0] },
    415: { devDescription: 'Yellow Grass (Sand at bottom & left & top)', gameDescription: 'Lush yellow grass with sand framing its northern, southern and eastern edges', spritePosition: [24, 3] },
    416: { devDescription: 'Yellow Grass (Sand at top & bottom)', gameDescription: 'Lush yellow grass with sand framing its northern and southern edges', spritePosition: [25, 3] },
    417: { devDescription: 'Yellow Grass (Sand at left & right)', gameDescription: 'Lush yellow grass with sand framing its eastern and western edges', spritePosition: [27, 1] },
    418: { devDescription: 'Yellow Grass (Sand at sides only) - Version 1', gameDescription: 'Sparse yellow grass with sand framing all of its edges', spritePosition: [28, 2], hasVariation: true },
    419: { devDescription: 'Yellow Grass (Sand at sides only) - Version 2', gameDescription: 'Sparse yellow grass with sand framing all of its edges', spritePosition: [29, 2] },
    420: { devDescription: 'Yellow Grass (Sand at corners only) - Version 1', gameDescription: 'Yellow grass mixed with patches of sand', spritePosition: [28, 1], hasVariation: true },
    421: { devDescription: 'Yellow Grass (Sand at corners only) - Version 2', gameDescription: 'Yellow grass mixed with patches of sand', spritePosition: [29, 1] },
    422: { devDescription: 'Yellow Grass (Sand all around)', gameDescription: 'Lush yellow grass with sand framing all of its edges', spritePosition: [28, 3] },
    423: { devDescription: 'White Sand (whole tile) - Version 1', gameDescription: 'Ordinary sand', spritePosition: [28, 0], hasVariation: true },
    424: { devDescription: 'White Sand (whole tile) - Version 2', gameDescription: 'Ordinary sand', spritePosition: [29, 0] },

    502: { devDescription: 'Yellow Grass (whole tile) - Version 1', gameDescription: 'Lush yellow grass', spritePosition: [1, 17], hasVariation: true },
    503: { devDescription: 'Yellow Grass (whole tile) - Version 2', gameDescription: 'Lush yellow grass', spritePosition: [3, 19] },
    504: { devDescription: 'Yellow Grass (Gravel at top)', gameDescription: 'Lush yellow grass with gravel framing its northern edge', spritePosition: [1, 18] },
    505: { devDescription: 'Yellow Grass (Gravel at top & right)', gameDescription: 'Lush yellow grass with gravel framing its northern and eastern edges', spritePosition: [2, 18] },
    506: { devDescription: 'Yellow Grass (Gravel at right)', gameDescription: 'Lush yellow grass with gravel framing its eastern edge', spritePosition: [2, 17] },
    507: { devDescription: 'Yellow Grass (Gravel at right & bottom)', gameDescription: 'Lush yellow grass with gravel framing its southern and eastern edges', spritePosition: [2, 16] },
    508: { devDescription: 'Yellow Grass (Gravel at bottom)', gameDescription: 'Lush yellow grass with gravel framing its southern edge', spritePosition: [1, 16] },
    509: { devDescription: 'Yellow Grass (Gravel at bottom & left)', gameDescription: 'Lush yellow grass with gravel framing its southern and western edges', spritePosition: [0, 16] },
    510: { devDescription: 'Yellow Grass (Gravel at left)', gameDescription: 'Lush yellow grass with gravel framing its western edge', spritePosition: [0, 17] },
    511: { devDescription: 'Yellow Grass (Gravel at left & top)', gameDescription: 'Lush yellow grass with gravel framing its northern and western edges', spritePosition: [0, 18] },
    512: { devDescription: 'Yellow Grass (Gravel at left & top & right)', gameDescription: 'Lush yellow grass with gravel framing its northern, eastern and western edges', spritePosition: [3, 18] },
    513: { devDescription: 'Yellow Grass (Gravel at top & right & bottom)', gameDescription: 'Lush yellow grass with gravel framing its northern, southern and western edges', spritePosition: [2, 19] },
    514: { devDescription: 'Yellow Grass (Gravel at right & bottom & left)', gameDescription: 'Lush yellow grass with gravel framing its southern, eastern and western edges', spritePosition: [3, 16] },
    515: { devDescription: 'Yellow Grass (Gravel at bottom & left & top)', gameDescription: 'Lush yellow grass with gravel framing its northern, southern and eastern edges', spritePosition: [0, 19] },
    516: { devDescription: 'Yellow Grass (Gravel at top & bottom)', gameDescription: 'Lush yellow grass with gravel framing its northern and southern edges', spritePosition: [1, 19] },
    517: { devDescription: 'Yellow Grass (Gravel at left & right)', gameDescription: 'Lush yellow grass with gravel framing its eastern and western edges', spritePosition: [3, 17] },
    518: { devDescription: 'Yellow Grass (Gravel at sides only) - Version 1', gameDescription: 'Sparse yellow grass with gravel framing all of its edges', spritePosition: [4, 18], hasVariation: true },
    519: { devDescription: 'Yellow Grass (Gravel at sides only) - Version 2', gameDescription: 'Sparse yellow grass with gravel framing all of its edges', spritePosition: [5, 18] },
    520: { devDescription: 'Yellow Grass (Gravel at corners only) - Version 1', gameDescription: 'Yellow grass mixed with patches of gravel', spritePosition: [4, 17], hasVariation: true },
    521: { devDescription: 'Yellow Grass (Gravel at corners only) - Version 2', gameDescription: 'Yellow grass mixed with patches of gravel', spritePosition: [5, 17] },
    522: { devDescription: 'Yellow Grass (Gravel all around)', gameDescription: 'Lush yellow grass with gravel framing all of its edges', spritePosition: [4, 19] },
    523: { devDescription: 'Gravel (whole tile) - Version 1', gameDescription: 'Ordinary gravel', spritePosition: [4, 16], hasVariation: true },
    524: { devDescription: 'Gravel (whole tile) - Version 2', gameDescription: 'Ordinary gravel', spritePosition: [5, 16] },

    602: { devDescription: 'Purple Grass (whole tile) - Version 1', gameDescription: 'Lush purple grass', spritePosition: [7, 17], hasVariation: true },
    603: { devDescription: 'Purple Grass (whole tile) - Version 2', gameDescription: 'Lush purple grass', spritePosition: [9, 19] },
    604: { devDescription: 'Purple Grass (Dirt at top)', gameDescription: 'Lush purple grass with dirt framing its northern edge', spritePosition: [7, 18] },
    605: { devDescription: 'Purple Grass (Dirt at top & right)', gameDescription: 'Lush purple grass with dirt framing its northern and eastern edges', spritePosition: [8, 18] },
    606: { devDescription: 'Purple Grass (Dirt at right)', gameDescription: 'Lush purple grass with dirt framing its eastern edge', spritePosition: [8, 17] },
    607: { devDescription: 'Purple Grass (Dirt at right & bottom)', gameDescription: 'Lush purple grass with dirt framing its southern and eastern edges', spritePosition: [8, 16] },
    608: { devDescription: 'Purple Grass (Dirt at bottom)', gameDescription: 'Lush purple grass with dirt framing its southern edge', spritePosition: [7, 16] },
    609: { devDescription: 'Purple Grass (Dirt at bottom & left)', gameDescription: 'Lush purple grass with dirt framing its southern and western edges', spritePosition: [6, 16] },
    610: { devDescription: 'Purple Grass (Dirt at left)', gameDescription: 'Lush purple grass with dirt framing its western edge', spritePosition: [6, 17] },
    611: { devDescription: 'Purple Grass (Dirt at left & top)', gameDescription: 'Lush purple grass with dirt framing its northern and western edges', spritePosition: [6, 18] },
    612: { devDescription: 'Purple Grass (Dirt at left & top & right)', gameDescription: 'Lush purple grass with dirt framing its northern, eastern and western edges', spritePosition: [9, 18] },
    613: { devDescription: 'Purple Grass (Dirt at top & right & bottom)', gameDescription: 'Lush purple grass with dirt framing its northern, southern and western edges', spritePosition: [8, 19] },
    614: { devDescription: 'Purple Grass (Dirt at right & bottom & left)', gameDescription: 'Lush purple grass with dirt framing its southern, eastern and western edges', spritePosition: [9, 16] },
    615: { devDescription: 'Purple Grass (Dirt at bottom & left & top)', gameDescription: 'Lush purple grass with dirt framing its northern, southern and eastern edges', spritePosition: [6, 19] },
    616: { devDescription: 'Purple Grass (Dirt at top & bottom)', gameDescription: 'Lush purple grass with dirt framing its northern and southern edges', spritePosition: [7, 19] },
    617: { devDescription: 'Purple Grass (Dirt at left & right)', gameDescription: 'Lush purple grass with dirt framing its eastern and western edges', spritePosition: [9, 17] },
    618: { devDescription: 'Purple Grass (Dirt at sides only) - Version 1', gameDescription: 'Sparse purple grass with dirt framing all of its edges', spritePosition: [10, 18], hasVariation: true },
    619: { devDescription: 'Purple Grass (Dirt at sides only) - Version 2', gameDescription: 'Sparse purple grass with dirt framing all of its edges', spritePosition: [11, 18] },
    620: { devDescription: 'Purple Grass (Dirt at corners only) - Version 1', gameDescription: 'Purple grass mixed with patches of dirt', spritePosition: [10, 17], hasVariation: true },
    621: { devDescription: 'Purple Grass (Dirt at corners only) - Version 2', gameDescription: 'Purple grass mixed with patches of dirt', spritePosition: [11, 17] },
    622: { devDescription: 'Purple Grass (Dirt all around)', gameDescription: 'Lush purple grass with dirt framing all of its edges', spritePosition: [10, 19] },
    623: { devDescription: 'Dirt (whole tile) - Version 1', gameDescription: 'Ordinary dirt', spritePosition: [10, 16], hasVariation: true },
    624: { devDescription: 'Dirt (whole tile) - Version 2', gameDescription: 'Ordinary dirt', spritePosition: [11, 16] },

    702: { devDescription: 'Purple Grass (whole tile) - Version 1', gameDescription: 'Lush purple grass', spritePosition: [13, 17], hasVariation: true },
    703: { devDescription: 'Purple Grass (whole tile) - Version 2', gameDescription: 'Lush purple grass', spritePosition: [15, 19] },
    704: { devDescription: 'Purple Grass (Sand at top)', gameDescription: 'Lush purple grass with sand framing its northern edge', spritePosition: [13, 18] },
    705: { devDescription: 'Purple Grass (Sand at top & right)', gameDescription: 'Lush purple grass with sand framing its northern and eastern edges', spritePosition: [14, 18] },
    706: { devDescription: 'Purple Grass (Sand at right)', gameDescription: 'Lush purple grass with sand framing its eastern edge', spritePosition: [14, 17] },
    707: { devDescription: 'Purple Grass (Sand at right & bottom)', gameDescription: 'Lush purple grass with sand framing its southern and eastern edges', spritePosition: [14, 16] },
    708: { devDescription: 'Purple Grass (Sand at bottom)', gameDescription: 'Lush purple grass with sand framing its southern edge', spritePosition: [13, 16] },
    709: { devDescription: 'Purple Grass (Sand at bottom & left)', gameDescription: 'Lush purple grass with sand framing its southern and western edges', spritePosition: [12, 16] },
    710: { devDescription: 'Purple Grass (Sand at left)', gameDescription: 'Lush purple grass with sand framing its western edge', spritePosition: [12, 17] },
    711: { devDescription: 'Purple Grass (Sand at left & top)', gameDescription: 'Lush purple grass with sand framing its northern and western edges', spritePosition: [12, 18] },
    712: { devDescription: 'Purple Grass (Sand at left & top & right)', gameDescription: 'Lush purple grass with sand framing its northern, eastern and western edges', spritePosition: [15, 18] },
    713: { devDescription: 'Purple Grass (Sand at top & right & bottom)', gameDescription: 'Lush purple grass with sand framing its northern, southern and western edges', spritePosition: [14, 19] },
    714: { devDescription: 'Purple Grass (Sand at right & bottom & left)', gameDescription: 'Lush purple grass with sand framing its southern, eastern and western edges', spritePosition: [15, 16] },
    715: { devDescription: 'Purple Grass (Sand at bottom & left & top)', gameDescription: 'Lush purple grass with sand framing its northern, southern and eastern edges', spritePosition: [12, 19] },
    716: { devDescription: 'Purple Grass (Sand at top & bottom)', gameDescription: 'Lush purple grass with sand framing its northern and southern edges', spritePosition: [13, 19] },
    717: { devDescription: 'Purple Grass (Sand at left & right)', gameDescription: 'Lush purple grass with sand framing its eastern and western edges', spritePosition: [15, 17] },
    718: { devDescription: 'Purple Grass (Sand at sides only) - Version 1', gameDescription: 'Sparse purple grass with sand framing all of its edges', spritePosition: [16, 18], hasVariation: true },
    719: { devDescription: 'Purple Grass (Sand at sides only) - Version 2', gameDescription: 'Sparse purple grass with sand framing all of its edges', spritePosition: [17, 18] },
    720: { devDescription: 'Purple Grass (Sand at corners only) - Version 1', gameDescription: 'Purple grass mixed with patches of sand', spritePosition: [16, 17], hasVariation: true },
    721: { devDescription: 'Purple Grass (Sand at corners only) - Version 2', gameDescription: 'Purple grass mixed with patches of sand', spritePosition: [17, 17] },
    722: { devDescription: 'Purple Grass (Sand all around)', gameDescription: 'Lush purple grass with sand framing all of its edges', spritePosition: [16, 19] },
    723: { devDescription: 'White sand (whole tile) - Version 1', gameDescription: 'Ordinary sand', spritePosition: [16, 16], hasVariation: true },
    724: { devDescription: 'White sand (whole tile) - Version 2', gameDescription: 'Ordinary sand', spritePosition: [17, 16] },

    802: { devDescription: 'Purple Grass (whole tile) - Version 1', gameDescription: 'Lush purple grass', spritePosition: [19, 17], hasVariation: true },
    803: { devDescription: 'Purple Grass (whole tile) - Version 2', gameDescription: 'Lush purple grass', spritePosition: [21, 19] },
    804: { devDescription: 'Purple Grass (Gravel at top)', gameDescription: 'Lush purple grass with gravel framing its northern edge', spritePosition: [19, 18] },
    805: { devDescription: 'Purple Grass (Gravel at top & right)', gameDescription: 'Lush purple grass with gravel framing its northern and eastern edges', spritePosition: [20, 18] },
    806: { devDescription: 'Purple Grass (Gravel at right)', gameDescription: 'Lush purple grass with gravel framing its eastern edge', spritePosition: [20, 17] },
    807: { devDescription: 'Purple Grass (Gravel at right & bottom)', gameDescription: 'Lush purple grass with gravel framing its southern and eastern edges', spritePosition: [20, 16] },
    808: { devDescription: 'Purple Grass (Gravel at bottom)', gameDescription: 'Lush purple grass with gravel framing its southern edge', spritePosition: [19, 16] },
    809: { devDescription: 'Purple Grass (Gravel at bottom & left)', gameDescription: 'Lush purple grass with gravel framing its southern and western edges', spritePosition: [18, 16] },
    810: { devDescription: 'Purple Grass (Gravel at left)', gameDescription: 'Lush purple grass with gravel framing its western edge', spritePosition: [18, 17] },
    811: { devDescription: 'Purple Grass (Gravel at left & top)', gameDescription: 'Lush purple grass with gravel framing its northern and western edges', spritePosition: [18, 18] },
    812: { devDescription: 'Purple Grass (Gravel at left & top & right)', gameDescription: 'Lush purple grass with gravel framing its northern, eastern and western edges', spritePosition: [21, 18] },
    813: { devDescription: 'Purple Grass (Gravel at top & right & bottom)', gameDescription: 'Lush purple grass with gravel framing its northern, southern and western edges', spritePosition: [20, 19] },
    814: { devDescription: 'Purple Grass (Gravel at right & bottom & left)', gameDescription: 'Lush purple grass with gravel framing its southern, eastern and western edges', spritePosition: [21, 16] },
    815: { devDescription: 'Purple Grass (Gravel at bottom & left & top)', gameDescription: 'Lush purple grass with gravel framing its northern, southern and eastern edges', spritePosition: [18, 19] },
    816: { devDescription: 'Purple Grass (Gravel at top & bottom)', gameDescription: 'Lush purple grass with gravel framing its northern and southern edges', spritePosition: [19, 19] },
    817: { devDescription: 'Purple Grass (Gravel at left & right)', gameDescription: 'Lush purple grass with gravel framing its eastern and western edges', spritePosition: [21, 17] },
    818: { devDescription: 'Purple Grass (Gravel at sides only) - Version 1', gameDescription: 'Sparse purple grass with gravel framing all of its edges', spritePosition: [22, 18], hasVariation: true },
    819: { devDescription: 'Purple Grass (Gravel at sides only) - Version 2', gameDescription: 'Sparse purple grass with gravel framing all of its edges', spritePosition: [23, 18] },
    820: { devDescription: 'Purple Grass (Gravel at corners only) - Version 1', gameDescription: 'Purple grass mixed with patches of gravel', spritePosition: [22, 17], hasVariation: true },
    821: { devDescription: 'Purple Grass (Gravel at corners only) - Version 2', gameDescription: 'Purple grass mixed with patches of gravel', spritePosition: [23, 17] },
    822: { devDescription: 'Purple Grass (Gravel all around)', gameDescription: 'Lush purple grass with gravel framing all of its edges', spritePosition: [22, 19] },
    823: { devDescription: 'Gravel (whole tile) - Version 1', gameDescription: 'Ordinary gravel', spritePosition: [22, 16], hasVariation: true },
    824: { devDescription: 'Gravel (whole tile) - Version 2', gameDescription: 'Ordinary gravel', spritePosition: [23, 16] },

    // Water
    1000: { devDescription: 'Blue Liquid (whole tile)', gameDescription: 'Blue liquid', spritePosition: [1, 5] },
    1001: { devDescription: 'Blue Liquid (Dirt at top)', gameDescription: 'Blue liquid with dirt framing its northern edge', spritePosition: [1, 6] },
    1002: { devDescription: 'Blue Liquid (Dirt at top & right)', gameDescription: 'Blue liquid with dirt framing its northern and eastern edges', spritePosition: [2, 6] },
    1003: { devDescription: 'Blue Liquid (Dirt at right)', gameDescription: 'Blue liquid with dirt framing its eastern edge', spritePosition: [2, 5] },
    1004: { devDescription: 'Blue Liquid (Dirt at right & bottom)', gameDescription: 'Blue liquid with dirt framing its southern and eastern edges', spritePosition: [2, 4] },
    1005: { devDescription: 'Blue Liquid (Dirt at bottom)', gameDescription: 'Blue liquid with dirt framing its southern edge', spritePosition: [1, 4] },
    1006: { devDescription: 'Blue Liquid (Dirt at bottom & left)', gameDescription: 'Blue liquid with dirt framing its southern and western edges', spritePosition: [0, 4] },
    1007: { devDescription: 'Blue Liquid (Dirt at left)', gameDescription: 'Blue liquid with dirt framing its western edge', spritePosition: [0, 5] },
    1008: { devDescription: 'Blue Liquid (Dirt at left & top)', gameDescription: 'Blue liquid with dirt framing its northern and western edges', spritePosition: [0, 6] },
    1009: { devDescription: 'Blue Liquid (Dirt at upper-left)', gameDescription: 'Blue liquid with dirt at its northwestern corner', spritePosition: [3, 4] },
    1010: { devDescription: 'Blue Liquid (Dirt at upper-right)', gameDescription: 'Blue liquid with dirt at its northeastern corner', spritePosition: [4, 4] },
    1011: { devDescription: 'Blue Liquid (Dirt at lower-left)', gameDescription: 'Blue liquid with dirt at its southwestern corner', spritePosition: [4, 5] },
    1012: { devDescription: 'Blue Liquid (Dirt at lower-right)', gameDescription: 'Blue liquid with dirt at its southeastern corner', spritePosition: [3, 5] },
    1013: { devDescription: 'Blue Liquid (Dirt at upper-left & lower-right)', gameDescription: 'Blue liquid with dirt at its northwestern & southeastern corners', spritePosition: [4, 6] },
    1014: { devDescription: 'Blue Liquid (Dirt at upper-right & lower-left)', gameDescription: 'Blue liquid with dirt at its northeastern & southwestern corners', spritePosition: [3, 6] },
    1015: { devDescription: 'Blue Liquid (Dirt at top & bottom, left & right)', gameDescription: 'Blue liquid with dirt framing all of its edges', spritePosition: [0, 7] },
    1016: { devDescription: 'Blue Liquid (Dirt at left & lower-right)', gameDescription: 'Blue liquid with dirt at its western edge and southeastern', spritePosition: [1, 7] },
    1017: { devDescription: 'Blue Liquid (Dirt at right & lower-left)', gameDescription: 'Blue liquid with dirt at its eastern edge and southwestern', spritePosition: [2, 7] },
    1018: { devDescription: 'Blue Liquid (Dirt at left & upper-right)', gameDescription: 'Blue liquid with dirt at its western edge and northeastern', spritePosition: [3, 7] },
    1019: { devDescription: 'Blue Liquid (Dirt at right & upper-left)', gameDescription: 'Blue liquid with dirt at its eastern edge and northwestern', spritePosition: [4, 7] },
    1020: { devDescription: 'Blue Liquid (Dirt at bottom & upper-left)', gameDescription: 'Blue liquid with dirt at its southern edge and northwestern', spritePosition: [0, 8] },
    1021: { devDescription: 'Blue Liquid (Dirt at bottom & upper-right)', gameDescription: 'Blue liquid with dirt at its southern edge and northeastern', spritePosition: [1, 8] },
    1022: { devDescription: 'Blue Liquid (Dirt at top & lower-left)', gameDescription: 'Blue liquid with dirt at its northern edge and southwestern', spritePosition: [2, 8] },
    1023: { devDescription: 'Blue Liquid (Dirt at top & lower-right)', gameDescription: 'Blue liquid with dirt at its northern edge and southeastern', spritePosition: [3, 8] },
    1024: { devDescription: 'Brown Boulder in Blue Liquid - Version 1', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [5, 4], blocker: true },
    1025: { devDescription: 'Brown Boulder in Blue Liquid - Version 2', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [5, 5], blocker: true },
    1026: { devDescription: 'Brown Boulder in Blue Liquid - Version 3', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [5, 6], blocker: true },
    1027: { devDescription: 'Grey Boulder in Blue Liquid - Version 1', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [5, 7], blocker: true },
    1028: { devDescription: 'Grey Boulder in Blue Liquid - Version 2', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [5, 8], blocker: true },
    1029: { devDescription: 'Grey Boulder in Blue Liquid - Version 3', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [4, 8], blocker: true },
    1030: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1100: { devDescription: 'Blue Liquid (whole tile)', gameDescription: 'Blue liquid', spritePosition: [7, 5] },
    1101: { devDescription: 'Blue Liquid (Sand at top)', gameDescription: 'Blue liquid with sand framing its northern edge', spritePosition: [7, 6] },
    1102: { devDescription: 'Blue Liquid (Sand at top & right)', gameDescription: 'Blue liquid with sand framing its northern and eastern edges', spritePosition: [8, 6] },
    1103: { devDescription: 'Blue Liquid (Sand at right)', gameDescription: 'Blue liquid with sand framing its eastern edge', spritePosition: [8, 5] },
    1104: { devDescription: 'Blue Liquid (Sand at right & bottom)', gameDescription: 'Blue liquid with sand framing its southern and eastern edges', spritePosition: [8, 4] },
    1105: { devDescription: 'Blue Liquid (Sand at bottom)', gameDescription: 'Blue liquid with sand framing its southern edge', spritePosition: [7, 4] },
    1106: { devDescription: 'Blue Liquid (Sand at bottom & left)', gameDescription: 'Blue liquid with sand framing its southern and western edges', spritePosition: [6, 4] },
    1107: { devDescription: 'Blue Liquid (Sand at left)', gameDescription: 'Blue liquid with sand framing its western edge', spritePosition: [6, 5] },
    1108: { devDescription: 'Blue Liquid (Sand at left & top)', gameDescription: 'Blue liquid with sand framing its northern and western edges', spritePosition: [6, 6] },
    1109: { devDescription: 'Blue Liquid (Sand at upper-left)', gameDescription: 'Blue liquid with sand at its northwestern corner', spritePosition: [9, 4] },
    1110: { devDescription: 'Blue Liquid (Sand at upper-right)', gameDescription: 'Blue liquid with sand at its northeastern corner', spritePosition: [10, 4] },
    1111: { devDescription: 'Blue Liquid (Sand at lower-left)', gameDescription: 'Blue liquid with sand at its southwestern corner', spritePosition: [10, 5] },
    1112: { devDescription: 'Blue Liquid (Sand at lower-right)', gameDescription: 'Blue liquid with sand at its southeastern corner', spritePosition: [9, 5] },
    1113: { devDescription: 'Blue Liquid (Sand at upper-left & lower-right)', gameDescription: 'Blue liquid with sand at its northwestern & southeastern corners', spritePosition: [10, 6] },
    1114: { devDescription: 'Blue Liquid (Sand at upper-right & lower-left)', gameDescription: 'Blue liquid with sand at its northeastern & southwestern corners', spritePosition: [9, 6] },
    1115: { devDescription: 'Blue Liquid (Sand at top & bottom, left & right)', gameDescription: 'Blue liquid with sand framing all of its edges', spritePosition: [6, 7] },
    1116: { devDescription: 'Blue Liquid (Sand at left & lower-right)', gameDescription: 'Blue liquid with sand at its western edge and southeastern', spritePosition: [7, 7] },
    1117: { devDescription: 'Blue Liquid (Sand at right & lower-left)', gameDescription: 'Blue liquid with sand at its eastern edge and southwestern', spritePosition: [8, 7] },
    1118: { devDescription: 'Blue Liquid (Sand at left & upper-right)', gameDescription: 'Blue liquid with sand at its western edge and northeastern', spritePosition: [9, 7] },
    1119: { devDescription: 'Blue Liquid (Sand at right & upper-left)', gameDescription: 'Blue liquid with sand at its eastern edge and northwestern', spritePosition: [10, 7] },
    1120: { devDescription: 'Blue Liquid (Sand at bottom & upper-left)', gameDescription: 'Blue liquid with sand at its southern edge and northwestern', spritePosition: [6, 8] },
    1121: { devDescription: 'Blue Liquid (Sand at bottom & upper-right)', gameDescription: 'Blue liquid with sand at its southern edge and northeastern', spritePosition: [7, 8] },
    1122: { devDescription: 'Blue Liquid (Sand at top & lower-left)', gameDescription: 'Blue liquid with sand at its northern edge and southwestern', spritePosition: [8, 8] },
    1123: { devDescription: 'Blue Liquid (Sand at top & lower-right)', gameDescription: 'Blue liquid with sand at its northern edge and southeastern', spritePosition: [9, 8] },
    1124: { devDescription: 'Beige Boulder in Blue Liquid - Version 1', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [11, 4], blocker: true },
    1125: { devDescription: 'Beige Boulder in Blue Liquid - Version 2', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [11, 5], blocker: true },
    1126: { devDescription: 'Beige Boulder in Blue Liquid - Version 3', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [11, 6], blocker: true },
    1127: { devDescription: 'Grey Boulder in Blue Liquid - Version 1', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [11, 7], blocker: true },
    1128: { devDescription: 'Grey Boulder in Blue Liquid - Version 2', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [11, 8], blocker: true },
    1129: { devDescription: 'Grey Boulder in Blue Liquid - Version 3', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [10, 8], blocker: true },
    1130: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1200: { devDescription: 'Blue Liquid (whole tile)', gameDescription: 'Blue liquid', spritePosition: [13, 5] },
    1201: { devDescription: 'Blue Liquid (Gravel at top)', gameDescription: 'Blue liquid with gravel framing its northern edge', spritePosition: [13, 6] },
    1202: { devDescription: 'Blue Liquid (Gravel at top & right)', gameDescription: 'Blue liquid with gravel framing its northern and eastern edges', spritePosition: [14, 6] },
    1203: { devDescription: 'Blue Liquid (Gravel at right)', gameDescription: 'Blue liquid with gravel framing its eastern edge', spritePosition: [14, 5] },
    1204: { devDescription: 'Blue Liquid (Gravel at right & bottom)', gameDescription: 'Blue liquid with gravel framing its southern and eastern edges', spritePosition: [14, 4] },
    1205: { devDescription: 'Blue Liquid (Gravel at bottom)', gameDescription: 'Blue liquid with gravel framing its southern edge', spritePosition: [13, 4] },
    1206: { devDescription: 'Blue Liquid (Gravel at bottom & left)', gameDescription: 'Blue liquid with gravel framing its southern and western edges', spritePosition: [12, 4] },
    1207: { devDescription: 'Blue Liquid (Gravel at left)', gameDescription: 'Blue liquid with gravel framing its western edge', spritePosition: [12, 5] },
    1208: { devDescription: 'Blue Liquid (Gravel at left & top)', gameDescription: 'Blue liquid with gravel framing its northern and western edges', spritePosition: [12, 6] },
    1209: { devDescription: 'Blue Liquid (Gravel at upper-left)', gameDescription: 'Blue liquid with gravel at its northwestern corner', spritePosition: [15, 4] },
    1210: { devDescription: 'Blue Liquid (Gravel at upper-right)', gameDescription: 'Blue liquid with gravel at its northeastern corner', spritePosition: [16, 4] },
    1211: { devDescription: 'Blue Liquid (Gravel at lower-left)', gameDescription: 'Blue liquid with gravel at its southwestern corner', spritePosition: [16, 5] },
    1212: { devDescription: 'Blue Liquid (Gravel at lower-right)', gameDescription: 'Blue liquid with gravel at its southeastern corner', spritePosition: [15, 5] },
    1213: { devDescription: 'Blue Liquid (Gravel at upper-left & lower-right)', gameDescription: 'Blue liquid with gravel at its northwestern & southeastern corners', spritePosition: [16, 6] },
    1214: { devDescription: 'Blue Liquid (Gravel at upper-right & lower-left)', gameDescription: 'Blue liquid with gravel at its northeastern & southwestern corners', spritePosition: [15, 6] },
    1215: { devDescription: 'Blue Liquid (Gravel at top & bottom, left & right)', gameDescription: 'Blue liquid with gravel framing all of its edges', spritePosition: [12, 7] },
    1216: { devDescription: 'Blue Liquid (Gravel at left & lower-right)', gameDescription: 'Blue liquid with gravel at its western edge and southeastern', spritePosition: [13, 7] },
    1217: { devDescription: 'Blue Liquid (Gravel at right & lower-left)', gameDescription: 'Blue liquid with gravel at its eastern edge and southwestern', spritePosition: [14, 7] },
    1218: { devDescription: 'Blue Liquid (Gravel at left & upper-right)', gameDescription: 'Blue liquid with gravel at its western edge and northeastern', spritePosition: [15, 7] },
    1219: { devDescription: 'Blue Liquid (Gravel at right & upper-left)', gameDescription: 'Blue liquid with gravel at its eastern edge and northwestern', spritePosition: [16, 7] },
    1220: { devDescription: 'Blue Liquid (Gravel at bottom & upper-left)', gameDescription: 'Blue liquid with gravel at its southern edge and northwestern', spritePosition: [12, 8] },
    1221: { devDescription: 'Blue Liquid (Gravel at bottom & upper-right)', gameDescription: 'Blue liquid with gravel at its southern edge and northeastern', spritePosition: [13, 8] },
    1222: { devDescription: 'Blue Liquid (Gravel at top & lower-left)', gameDescription: 'Blue liquid with gravel at its northern edge and southwestern', spritePosition: [14, 8] },
    1223: { devDescription: 'Blue Liquid (Gravel at top & lower-right)', gameDescription: 'Blue liquid with gravel at its northern edge and southeastern', spritePosition: [15, 8] },
    1224: { devDescription: 'Tan Boulder in Blue Liquid - Version 1', gameDescription: 'A massive tan boulder breaches the surface', spritePosition: [17, 4], blocker: true },
    1225: { devDescription: 'Tan Boulder in Blue Liquid - Version 2', gameDescription: 'A massive tan boulder breaches the surface', spritePosition: [17, 5], blocker: true },
    1226: { devDescription: 'Tan Boulder in Blue Liquid - Version 3', gameDescription: 'A massive tan boulder breaches the surface', spritePosition: [17, 6], blocker: true },
    1227: { devDescription: 'Burgundy Boulder in Blue Liquid - Version 1', gameDescription: 'A massive burgundy boulder breaches the surface', spritePosition: [17, 7], blocker: true },
    1228: { devDescription: 'Burgundy Boulder in Blue Liquid - Version 2', gameDescription: 'A massive burgundy boulder breaches the surface', spritePosition: [17, 8], blocker: true },
    1229: { devDescription: 'Burgundy Boulder in Blue Liquid - Version 3', gameDescription: 'A massive burgundy boulder breaches the surface', spritePosition: [16, 8], blocker: true },
    1230: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1300: { devDescription: 'Green Liquid (whole tile)', gameDescription: 'Green liquid', spritePosition: [7, 21] },
    1301: { devDescription: 'Green Liquid (Dirt at top)', gameDescription: 'Green liquid with dirt framing its northern edge', spritePosition: [7, 22] },
    1302: { devDescription: 'Green Liquid (Dirt at top & right)', gameDescription: 'Green liquid with dirt framing its northern and eastern edges', spritePosition: [8, 22] },
    1303: { devDescription: 'Green Liquid (Dirt at right)', gameDescription: 'Green liquid with dirt framing its eastern edge', spritePosition: [8, 21] },
    1304: { devDescription: 'Green Liquid (Dirt at right & bottom)', gameDescription: 'Green liquid with dirt framing its southern and eastern edges', spritePosition: [8, 20] },
    1305: { devDescription: 'Green Liquid (Dirt at bottom)', gameDescription: 'Green liquid with dirt framing its southern edge', spritePosition: [7, 20] },
    1306: { devDescription: 'Green Liquid (Dirt at bottom & left)', gameDescription: 'Green liquid with dirt framing its southern and western edges', spritePosition: [6, 20] },
    1307: { devDescription: 'Green Liquid (Dirt at left)', gameDescription: 'Green liquid with dirt framing its western edge', spritePosition: [6, 21] },
    1308: { devDescription: 'Green Liquid (Dirt at left & top)', gameDescription: 'Green liquid with dirt framing its northern and western edges', spritePosition: [6, 22] },
    1309: { devDescription: 'Green Liquid (Dirt at upper-left)', gameDescription: 'Green liquid with dirt at its northwestern corner', spritePosition: [9, 20] },
    1310: { devDescription: 'Green Liquid (Dirt at upper-right)', gameDescription: 'Green liquid with dirt at its northeastern corner', spritePosition: [10, 20] },
    1311: { devDescription: 'Green Liquid (Dirt at lower-left)', gameDescription: 'Green liquid with dirt at its southwestern corner', spritePosition: [10, 21] },
    1312: { devDescription: 'Green Liquid (Dirt at lower-right)', gameDescription: 'Green liquid with dirt at its southeastern corner', spritePosition: [9, 21] },
    1313: { devDescription: 'Green Liquid (Dirt at upper-left & lower-right)', gameDescription: 'Green liquid with dirt at its northwestern & southeastern corners', spritePosition: [10, 22] },
    1314: { devDescription: 'Green Liquid (Dirt at upper-right & lower-left)', gameDescription: 'Green liquid with dirt at its northeastern & southwestern corners', spritePosition: [9, 22] },
    1315: { devDescription: 'Green Liquid (Dirt at top & bottom, left & right)', gameDescription: 'Green liquid with dirt framing all of its edges', spritePosition: [6, 23] },
    1316: { devDescription: 'Green Liquid (Dirt at left & lower-right)', gameDescription: 'Green liquid with dirt at its western edge and southeastern', spritePosition: [7, 23] },
    1317: { devDescription: 'Green Liquid (Dirt at right & lower-left)', gameDescription: 'Green liquid with dirt at its eastern edge and southwestern', spritePosition: [8, 23] },
    1318: { devDescription: 'Green Liquid (Dirt at left & upper-right)', gameDescription: 'Green liquid with dirt at its western edge and northeastern', spritePosition: [9, 23] },
    1319: { devDescription: 'Green Liquid (Dirt at right & upper-left)', gameDescription: 'Green liquid with dirt at its eastern edge and northwestern', spritePosition: [10, 23] },
    1320: { devDescription: 'Green Liquid (Dirt at bottom & upper-left)', gameDescription: 'Green liquid with dirt at its southern edge and northwestern', spritePosition: [6, 24] },
    1321: { devDescription: 'Green Liquid (Dirt at bottom & upper-right)', gameDescription: 'Green liquid with dirt at its southern edge and northeastern', spritePosition: [7, 24] },
    1322: { devDescription: 'Green Liquid (Dirt at top & lower-left)', gameDescription: 'Green liquid with dirt at its northern edge and southwestern', spritePosition: [8, 24] },
    1323: { devDescription: 'Green Liquid (Dirt at top & lower-right)', gameDescription: 'Green liquid with dirt at its northern edge and southeastern', spritePosition: [9, 24] },
    1324: { devDescription: 'Green Boulder in Green Liquid - Version 1', gameDescription: 'A massive green boulder breaches the surface', spritePosition: [11, 20], blocker: true },
    1325: { devDescription: 'Green Boulder in Green Liquid - Version 2', gameDescription: 'A massive green boulder breaches the surface', spritePosition: [11, 21], blocker: true },
    1326: { devDescription: 'Green Boulder in Green Liquid - Version 3', gameDescription: 'A massive green boulder breaches the surface', spritePosition: [11, 22], blocker: true },
    1327: { devDescription: 'Lavender Boulder in Green Liquid - Version 1', gameDescription: 'A massive lavender boulder breaches the surface', spritePosition: [11, 23], blocker: true },
    1328: { devDescription: 'Lavender Boulder in Green Liquid - Version 2', gameDescription: 'A massive lavender boulder breaches the surface', spritePosition: [11, 24], blocker: true },
    1329: { devDescription: 'Lavender Boulder in Green Liquid - Version 3', gameDescription: 'A massive lavender boulder breaches the surface', spritePosition: [10, 24], blocker: true },
    1330: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1400: { devDescription: 'Green Liquid (whole tile)', gameDescription: 'Green liquid', spritePosition: [13, 21] },
    1401: { devDescription: 'Green Liquid (Sand at top)', gameDescription: 'Green liquid with sand framing its northern edge', spritePosition: [13, 22] },
    1402: { devDescription: 'Green Liquid (Sand at top & right)', gameDescription: 'Green liquid with sand framing its northern and eastern edges', spritePosition: [14, 22] },
    1403: { devDescription: 'Green Liquid (Sand at right)', gameDescription: 'Green liquid with sand framing its eastern edge', spritePosition: [14, 21] },
    1404: { devDescription: 'Green Liquid (Sand at right & bottom)', gameDescription: 'Green liquid with sand framing its southern and eastern edges', spritePosition: [14, 20] },
    1405: { devDescription: 'Green Liquid (Sand at bottom)', gameDescription: 'Green liquid with sand framing its southern edge', spritePosition: [13, 20] },
    1406: { devDescription: 'Green Liquid (Sand at bottom & left)', gameDescription: 'Green liquid with sand framing its southern and western edges', spritePosition: [12, 20] },
    1407: { devDescription: 'Green Liquid (Sand at left)', gameDescription: 'Green liquid with sand framing its western edge', spritePosition: [12, 21] },
    1408: { devDescription: 'Green Liquid (Sand at left & top)', gameDescription: 'Green liquid with sand framing its northern and western edges', spritePosition: [12, 22] },
    1409: { devDescription: 'Green Liquid (Sand at upper-left)', gameDescription: 'Green liquid with sand at its northwestern corner', spritePosition: [15, 20] },
    1410: { devDescription: 'Green Liquid (Sand at upper-right)', gameDescription: 'Green liquid with sand at its northeastern corner', spritePosition: [16, 20] },
    1411: { devDescription: 'Green Liquid (Sand at lower-left)', gameDescription: 'Green liquid with sand at its southwestern corner', spritePosition: [16, 21] },
    1412: { devDescription: 'Green Liquid (Sand at lower-right)', gameDescription: 'Green liquid with sand at its southeastern corner', spritePosition: [15, 21] },
    1413: { devDescription: 'Green Liquid (Sand at upper-left & lower-right)', gameDescription: 'Green liquid with sand at its northwestern & southeastern corners', spritePosition: [16, 22] },
    1414: { devDescription: 'Green Liquid (Sand at upper-right & lower-left)', gameDescription: 'Green liquid with sand at its northeastern & southwestern corners', spritePosition: [15, 22] },
    1415: { devDescription: 'Green Liquid (Sand at top & bottom, left & right)', gameDescription: 'Green liquid with sand framing all of its edges', spritePosition: [12, 23] },
    1416: { devDescription: 'Green Liquid (Sand at left & lower-right)', gameDescription: 'Green liquid with sand at its western edge and southeastern', spritePosition: [13, 23] },
    1417: { devDescription: 'Green Liquid (Sand at right & lower-left)', gameDescription: 'Green liquid with sand at its eastern edge and southwestern', spritePosition: [14, 23] },
    1418: { devDescription: 'Green Liquid (Sand at left & upper-right)', gameDescription: 'Green liquid with sand at its western edge and northeastern', spritePosition: [15, 23] },
    1419: { devDescription: 'Green Liquid (Sand at right & upper-left)', gameDescription: 'Green liquid with sand at its eastern edge and northwestern', spritePosition: [16, 23] },
    1420: { devDescription: 'Green Liquid (Sand at bottom & upper-left)', gameDescription: 'Green liquid with sand at its southern edge and northwestern', spritePosition: [12, 24] },
    1421: { devDescription: 'Green Liquid (Sand at bottom & upper-right)', gameDescription: 'Green liquid with sand at its southern edge and northeastern', spritePosition: [13, 24] },
    1422: { devDescription: 'Green Liquid (Sand at top & lower-left)', gameDescription: 'Green liquid with sand at its northern edge and southwestern', spritePosition: [14, 24] },
    1423: { devDescription: 'Green Liquid (Sand at top & lower-right)', gameDescription: 'Green liquid with sand at its northern edge and southeastern', spritePosition: [15, 24] },
    1424: { devDescription: 'Orange Boulder in Green Liquid - Version 1', gameDescription: 'A massive orange-tinted boulder breaches the surface', spritePosition: [17, 20], blocker: true },
    1425: { devDescription: 'Orange Boulder in Green Liquid - Version 2', gameDescription: 'A massive orange-tinted boulder breaches the surface', spritePosition: [17, 21], blocker: true },
    1426: { devDescription: 'Orange Boulder in Green Liquid - Version 3', gameDescription: 'A massive orange-tinted boulder breaches the surface', spritePosition: [17, 22], blocker: true },
    1427: { devDescription: 'Rose Boulder in Green Liquid - Version 1', gameDescription: 'A massive rose-colored boulder breaches the surface', spritePosition: [17, 23], blocker: true },
    1428: { devDescription: 'Rose Boulder in Green Liquid - Version 2', gameDescription: 'A massive rose-colored boulder breaches the surface', spritePosition: [17, 24], blocker: true },
    1429: { devDescription: 'Rose Boulder in Green Liquid - Version 3', gameDescription: 'A massive rose-colored boulder breaches the surface', spritePosition: [16, 24], blocker: true },
    1430: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1500: { devDescription: 'Green Liquid (whole tile)', gameDescription: 'Green liquid', spritePosition: [19, 21] },
    1501: { devDescription: 'Green Liquid (Gravel at top)', gameDescription: 'Green liquid with gravel framing its northern edge', spritePosition: [19, 22] },
    1502: { devDescription: 'Green Liquid (Gravel at top & right)', gameDescription: 'Green liquid with gravel framing its northern and eastern edges', spritePosition: [20, 22] },
    1503: { devDescription: 'Green Liquid (Gravel at right)', gameDescription: 'Green liquid with gravel framing its eastern edge', spritePosition: [20, 21] },
    1504: { devDescription: 'Green Liquid (Gravel at right & bottom)', gameDescription: 'Green liquid with gravel framing its southern and eastern edges', spritePosition: [20, 20] },
    1505: { devDescription: 'Green Liquid (Gravel at bottom)', gameDescription: 'Green liquid with gravel framing its southern edge', spritePosition: [19, 20] },
    1506: { devDescription: 'Green Liquid (Gravel at bottom & left)', gameDescription: 'Green liquid with gravel framing its southern and western edges', spritePosition: [18, 20] },
    1507: { devDescription: 'Green Liquid (Gravel at left)', gameDescription: 'Green liquid with gravel framing its western edge', spritePosition: [18, 21] },
    1508: { devDescription: 'Green Liquid (Gravel at left & top)', gameDescription: 'Green liquid with gravel framing its northern and western edges', spritePosition: [18, 22] },
    1509: { devDescription: 'Green Liquid (Gravel at upper-left)', gameDescription: 'Green liquid with gravel at its northwestern corner', spritePosition: [21, 20] },
    1510: { devDescription: 'Green Liquid (Gravel at upper-right)', gameDescription: 'Green liquid with gravel at its northeastern corner', spritePosition: [22, 20] },
    1511: { devDescription: 'Green Liquid (Gravel at lower-left)', gameDescription: 'Green liquid with gravel at its southwestern corner', spritePosition: [22, 21] },
    1512: { devDescription: 'Green Liquid (Gravel at lower-right)', gameDescription: 'Green liquid with gravel at its southeastern corner', spritePosition: [21, 21] },
    1513: { devDescription: 'Green Liquid (Gravel at upper-left & lower-right)', gameDescription: 'Green liquid with gravel at its northwestern & southeastern corners', spritePosition: [22, 22] },
    1514: { devDescription: 'Green Liquid (Gravel at upper-right & lower-left)', gameDescription: 'Green liquid with gravel at its northeastern & southwestern corners', spritePosition: [21, 22] },
    1515: { devDescription: 'Green Liquid (Gravel at top & bottom, left & right)', gameDescription: 'Green liquid with gravel framing all of its edges', spritePosition: [18, 23] },
    1516: { devDescription: 'Green Liquid (Gravel at left & lower-right)', gameDescription: 'Green liquid with gravel at its western edge and southeastern', spritePosition: [19, 23] },
    1517: { devDescription: 'Green Liquid (Gravel at right & lower-left)', gameDescription: 'Green liquid with gravel at its eastern edge and southwestern', spritePosition: [20, 23] },
    1518: { devDescription: 'Green Liquid (Gravel at left & upper-right)', gameDescription: 'Green liquid with gravel at its western edge and northeastern', spritePosition: [21, 23] },
    1519: { devDescription: 'Green Liquid (Gravel at right & upper-left)', gameDescription: 'Green liquid with gravel at its eastern edge and northwestern', spritePosition: [22, 23] },
    1520: { devDescription: 'Green Liquid (Gravel at bottom & upper-left)', gameDescription: 'Green liquid with gravel at its southern edge and northwestern', spritePosition: [18, 24] },
    1521: { devDescription: 'Green Liquid (Gravel at bottom & upper-right)', gameDescription: 'Green liquid with gravel at its southern edge and northeastern', spritePosition: [19, 24] },
    1522: { devDescription: 'Green Liquid (Gravel at top & lower-left)', gameDescription: 'Green liquid with gravel at its northern edge and southwestern', spritePosition: [20, 24] },
    1523: { devDescription: 'Green Liquid (Gravel at top & lower-right)', gameDescription: 'Green liquid with gravel at its northern edge and southeastern', spritePosition: [21, 24] },
    1524: { devDescription: 'Lime Boulder in Green Liquid - Version 1', gameDescription: 'A massive lime-tinted boulder breaches the surface', spritePosition: [23, 20], blocker: true },
    1525: { devDescription: 'Lime Boulder in Green Liquid - Version 2', gameDescription: 'A massive lime-tinted boulder breaches the surface', spritePosition: [23, 21], blocker: true },
    1526: { devDescription: 'Lime Boulder in Green Liquid - Version 3', gameDescription: 'A massive lime-tinted boulder breaches the surface', spritePosition: [23, 22], blocker: true },
    1527: { devDescription: 'Blue Boulder in Green Liquid - Version 1', gameDescription: 'A massive blue boulder breaches the surface', spritePosition: [23, 23], blocker: true },
    1528: { devDescription: 'Blue Boulder in Green Liquid - Version 2', gameDescription: 'A massive blue boulder breaches the surface', spritePosition: [23, 24], blocker: true },
    1529: { devDescription: 'Blue Boulder in Green Liquid - Version 3', gameDescription: 'A massive blue boulder breaches the surface', spritePosition: [22, 24], blocker: true },
    1530: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1600: { devDescription: 'Purple Liquid (whole tile)', gameDescription: 'Purple liquid', spritePosition: [19, 5] },
    1601: { devDescription: 'Purple Liquid (Dirt at top)', gameDescription: 'Purple liquid with dirt framing its northern edge', spritePosition: [19, 6] },
    1602: { devDescription: 'Purple Liquid (Dirt at top & right)', gameDescription: 'Purple liquid with dirt framing its northern and eastern edges', spritePosition: [20, 6] },
    1603: { devDescription: 'Purple Liquid (Dirt at right)', gameDescription: 'Purple liquid with dirt framing its eastern edge', spritePosition: [20, 5] },
    1604: { devDescription: 'Purple Liquid (Dirt at right & bottom)', gameDescription: 'Purple liquid with dirt framing its southern and eastern edges', spritePosition: [20, 4] },
    1605: { devDescription: 'Purple Liquid (Dirt at bottom)', gameDescription: 'Purple liquid with dirt framing its southern edge', spritePosition: [19, 4] },
    1606: { devDescription: 'Purple Liquid (Dirt at bottom & left)', gameDescription: 'Purple liquid with dirt framing its southern and western edges', spritePosition: [18, 4] },
    1607: { devDescription: 'Purple Liquid (Dirt at left)', gameDescription: 'Purple liquid with dirt framing its western edge', spritePosition: [18, 5] },
    1608: { devDescription: 'Purple Liquid (Dirt at left & top)', gameDescription: 'Purple liquid with dirt framing its northern and western edges', spritePosition: [18, 6] },
    1609: { devDescription: 'Purple Liquid (Dirt at upper-left)', gameDescription: 'Purple liquid with dirt at its northwestern corner', spritePosition: [21, 4] },
    1610: { devDescription: 'Purple Liquid (Dirt at upper-right)', gameDescription: 'Purple liquid with dirt at its northeastern corner', spritePosition: [22, 4] },
    1611: { devDescription: 'Purple Liquid (Dirt at lower-left)', gameDescription: 'Purple liquid with dirt at its southwestern corner', spritePosition: [22, 5] },
    1612: { devDescription: 'Purple Liquid (Dirt at lower-right)', gameDescription: 'Purple liquid with dirt at its southeastern corner', spritePosition: [21, 5] },
    1613: { devDescription: 'Purple Liquid (Dirt at upper-left & lower-right)', gameDescription: 'Purple liquid with dirt at its northwestern & southeastern corners', spritePosition: [22, 6] },
    1614: { devDescription: 'Purple Liquid (Dirt at upper-right & lower-left)', gameDescription: 'Purple liquid with dirt at its northeastern & southwestern corners', spritePosition: [21, 6] },
    1615: { devDescription: 'Purple Liquid (Dirt at top & bottom, left & right)', gameDescription: 'Purple liquid with dirt framing all of its edges', spritePosition: [18, 7] },
    1616: { devDescription: 'Purple Liquid (Dirt at left & lower-right)', gameDescription: 'Purple liquid with dirt at its western edge and southeastern', spritePosition: [19, 7] },
    1617: { devDescription: 'Purple Liquid (Dirt at right & lower-left)', gameDescription: 'Purple liquid with dirt at its eastern edge and southwestern', spritePosition: [20, 7] },
    1618: { devDescription: 'Purple Liquid (Dirt at left & upper-right)', gameDescription: 'Purple liquid with dirt at its western edge and northeastern', spritePosition: [21, 7] },
    1619: { devDescription: 'Purple Liquid (Dirt at right & upper-left)', gameDescription: 'Purple liquid with dirt at its eastern edge and northwestern', spritePosition: [22, 7] },
    1620: { devDescription: 'Purple Liquid (Dirt at bottom & upper-left)', gameDescription: 'Purple liquid with dirt at its southern edge and northwestern', spritePosition: [18, 8] },
    1621: { devDescription: 'Purple Liquid (Dirt at bottom & upper-right)', gameDescription: 'Purple liquid with dirt at its southern edge and northeastern', spritePosition: [19, 8] },
    1622: { devDescription: 'Purple Liquid (Dirt at top & lower-left)', gameDescription: 'Purple liquid with dirt at its northern edge and southwestern', spritePosition: [20, 8] },
    1623: { devDescription: 'Purple Liquid (Dirt at top & lower-right)', gameDescription: 'Purple liquid with dirt at its northern edge and southeastern', spritePosition: [21, 8] },
    1624: { devDescription: 'Brown Boulder in Purple Liquid - Version 1', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [23, 4], blocker: true },
    1625: { devDescription: 'Brown Boulder in Purple Liquid - Version 2', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [23, 5], blocker: true },
    1626: { devDescription: 'Brown Boulder in Purple Liquid - Version 3', gameDescription: 'A massive brown boulder breaches the surface', spritePosition: [23, 6], blocker: true },
    1627: { devDescription: 'Grey Boulder in Purple Liquid - Version 1', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [23, 7], blocker: true },
    1628: { devDescription: 'Grey Boulder in Purple Liquid - Version 2', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [23, 8], blocker: true },
    1629: { devDescription: 'Grey Boulder in Purple Liquid - Version 3', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [22, 8], blocker: true },
    1630: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1700: { devDescription: 'Purple Liquid (whole tile)', gameDescription: 'Purple liquid', spritePosition: [25, 5] },
    1701: { devDescription: 'Purple Liquid (Sand at top)', gameDescription: 'Purple liquid with sand framing its northern edge', spritePosition: [25, 6] },
    1702: { devDescription: 'Purple Liquid (Sand at top & right)', gameDescription: 'Purple liquid with sand framing its northern and eastern edges', spritePosition: [26, 6] },
    1703: { devDescription: 'Purple Liquid (Sand at right)', gameDescription: 'Purple liquid with sand framing its eastern edge', spritePosition: [26, 5] },
    1704: { devDescription: 'Purple Liquid (Sand at right & bottom)', gameDescription: 'Purple liquid with sand framing its southern and eastern edges', spritePosition: [26, 4] },
    1705: { devDescription: 'Purple Liquid (Sand at bottom)', gameDescription: 'Purple liquid with sand framing its southern edge', spritePosition: [25, 4] },
    1706: { devDescription: 'Purple Liquid (Sand at bottom & left)', gameDescription: 'Purple liquid with sand framing its southern and western edges', spritePosition: [24, 4] },
    1707: { devDescription: 'Purple Liquid (Sand at left)', gameDescription: 'Purple liquid with sand framing its western edge', spritePosition: [24, 5] },
    1708: { devDescription: 'Purple Liquid (Sand at left & top)', gameDescription: 'Purple liquid with sand framing its northern and western edges', spritePosition: [24, 6] },
    1709: { devDescription: 'Purple Liquid (Sand at upper-left)', gameDescription: 'Purple liquid with sand at its northwestern corner', spritePosition: [27, 4] },
    1710: { devDescription: 'Purple Liquid (Sand at upper-right)', gameDescription: 'Purple liquid with sand at its northeastern corner', spritePosition: [28, 4] },
    1711: { devDescription: 'Purple Liquid (Sand at lower-left)', gameDescription: 'Purple liquid with sand at its southwestern corner', spritePosition: [28, 5] },
    1712: { devDescription: 'Purple Liquid (Sand at lower-right)', gameDescription: 'Purple liquid with sand at its southeastern corner', spritePosition: [27, 5] },
    1713: { devDescription: 'Purple Liquid (Sand at upper-left & lower-right)', gameDescription: 'Purple liquid with sand at its northwestern & southeastern corners', spritePosition: [28, 6] },
    1714: { devDescription: 'Purple Liquid (Sand at upper-right & lower-left)', gameDescription: 'Purple liquid with sand at its northeastern & southwestern corners', spritePosition: [27, 6] },
    1715: { devDescription: 'Purple Liquid (Sand at top & bottom, left & right)', gameDescription: 'Purple liquid with sand framing all of its edges', spritePosition: [24, 7] },
    1716: { devDescription: 'Purple Liquid (Sand at left & lower-right)', gameDescription: 'Purple liquid with sand at its western edge and southeastern', spritePosition: [25, 7] },
    1717: { devDescription: 'Purple Liquid (Sand at right & lower-left)', gameDescription: 'Purple liquid with sand at its eastern edge and southwestern', spritePosition: [26, 7] },
    1718: { devDescription: 'Purple Liquid (Sand at left & upper-right)', gameDescription: 'Purple liquid with sand at its western edge and northeastern', spritePosition: [27, 7] },
    1719: { devDescription: 'Purple Liquid (Sand at right & upper-left)', gameDescription: 'Purple liquid with sand at its eastern edge and northwestern', spritePosition: [28, 7] },
    1720: { devDescription: 'Purple Liquid (Sand at bottom & upper-left)', gameDescription: 'Purple liquid with sand at its southern edge and northwestern', spritePosition: [24, 8] },
    1721: { devDescription: 'Purple Liquid (Sand at bottom & upper-right)', gameDescription: 'Purple liquid with sand at its southern edge and northeastern', spritePosition: [25, 8] },
    1722: { devDescription: 'Purple Liquid (Sand at top & lower-left)', gameDescription: 'Purple liquid with sand at its northern edge and southwestern', spritePosition: [26, 8] },
    1723: { devDescription: 'Purple Liquid (Sand at top & lower-right)', gameDescription: 'Purple liquid with sand at its northern edge and southeastern', spritePosition: [27, 8] },
    1724: { devDescription: 'Beige Boulder in Purple Liquid - Version 1', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [29, 4], blocker: true },
    1725: { devDescription: 'Beige Boulder in Purple Liquid - Version 2', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [29, 5], blocker: true },
    1726: { devDescription: 'Beige Boulder in Purple Liquid - Version 3', gameDescription: 'A massive beige boulder breaches the surface', spritePosition: [29, 6], blocker: true },
    1727: { devDescription: 'Grey Boulder in Purple Liquid - Version 1', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [29, 7], blocker: true },
    1728: { devDescription: 'Grey Boulder in Purple Liquid - Version 2', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [29, 8], blocker: true },
    1729: { devDescription: 'Grey Boulder in Purple Liquid - Version 3', gameDescription: 'A massive grey boulder breaches the surface', spritePosition: [28, 8], blocker: true },
    1730: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1800: { devDescription: 'Purple Liquid (whole tile)', gameDescription: 'Purple liquid', spritePosition: [1, 21] },
    1801: { devDescription: 'Purple Liquid (Gravel at top)', gameDescription: 'Purple liquid with gravel framing its northern edge', spritePosition: [1, 22] },
    1802: { devDescription: 'Purple Liquid (Gravel at top & right)', gameDescription: 'Purple liquid with gravel framing its northern and eastern edges', spritePosition: [2, 22] },
    1803: { devDescription: 'Purple Liquid (Gravel at right)', gameDescription: 'Purple liquid with gravel framing its eastern edge', spritePosition: [2, 21] },
    1804: { devDescription: 'Purple Liquid (Gravel at right & bottom)', gameDescription: 'Purple liquid with gravel framing its southern and eastern edges', spritePosition: [2, 20] },
    1805: { devDescription: 'Purple Liquid (Gravel at bottom)', gameDescription: 'Purple liquid with gravel framing its southern edge', spritePosition: [1, 20] },
    1806: { devDescription: 'Purple Liquid (Gravel at bottom & left)', gameDescription: 'Purple liquid with gravel framing its southern and western edges', spritePosition: [0, 20] },
    1807: { devDescription: 'Purple Liquid (Gravel at left)', gameDescription: 'Purple liquid with gravel framing its western edge', spritePosition: [0, 21] },
    1808: { devDescription: 'Purple Liquid (Gravel at left & top)', gameDescription: 'Purple liquid with gravel framing its northern and western edges', spritePosition: [0, 22] },
    1809: { devDescription: 'Purple Liquid (Gravel at upper-left)', gameDescription: 'Purple liquid with gravel at its northwestern corner', spritePosition: [3, 20] },
    1810: { devDescription: 'Purple Liquid (Gravel at upper-right)', gameDescription: 'Purple liquid with gravel at its northeastern corner', spritePosition: [4, 20] },
    1811: { devDescription: 'Purple Liquid (Gravel at lower-left)', gameDescription: 'Purple liquid with gravel at its southwestern corner', spritePosition: [4, 21] },
    1812: { devDescription: 'Purple Liquid (Gravel at lower-right)', gameDescription: 'Purple liquid with gravel at its southeastern corner', spritePosition: [3, 21] },
    1813: { devDescription: 'Purple Liquid (Gravel at upper-left & lower-right)', gameDescription: 'Purple liquid with gravel at its northwestern & southeastern corners', spritePosition: [4, 22] },
    1814: { devDescription: 'Purple Liquid (Gravel at upper-right & lower-left)', gameDescription: 'Purple liquid with gravel at its northeastern & southwestern corners', spritePosition: [3, 22] },
    1815: { devDescription: 'Purple Liquid (Gravel at top & bottom, left & right)', gameDescription: 'Purple liquid with gravel framing all of its edges', spritePosition: [0, 23] },
    1816: { devDescription: 'Purple Liquid (Gravel at left & lower-right)', gameDescription: 'Purple liquid with gravel at its western edge and southeastern', spritePosition: [1, 23] },
    1817: { devDescription: 'Purple Liquid (Gravel at right & lower-left)', gameDescription: 'Purple liquid with gravel at its eastern edge and southwestern', spritePosition: [2, 23] },
    1818: { devDescription: 'Purple Liquid (Gravel at left & upper-right)', gameDescription: 'Purple liquid with gravel at its western edge and northeastern', spritePosition: [3, 23] },
    1819: { devDescription: 'Purple Liquid (Gravel at right & upper-left)', gameDescription: 'Purple liquid with gravel at its eastern edge and northwestern', spritePosition: [4, 23] },
    1820: { devDescription: 'Purple Liquid (Gravel at bottom & upper-left)', gameDescription: 'Purple liquid with gravel at its southern edge and northwestern', spritePosition: [0, 24] },
    1821: { devDescription: 'Purple Liquid (Gravel at bottom & upper-right)', gameDescription: 'Purple liquid with gravel at its southern edge and northeastern', spritePosition: [1, 24] },
    1822: { devDescription: 'Purple Liquid (Gravel at top & lower-left)', gameDescription: 'Purple liquid with gravel at its northern edge and southwestern', spritePosition: [2, 24] },
    1823: { devDescription: 'Purple Liquid (Gravel at top & lower-right)', gameDescription: 'Purple liquid with gravel at its northern edge and southeastern', spritePosition: [3, 24] },
    1824: { devDescription: 'Peach Boulder in Purple Liquid - Version 1', gameDescription: 'A massive peach-colored boulder breaches the surface', spritePosition: [5, 20], blocker: true },
    1825: { devDescription: 'Peach Boulder in Purple Liquid - Version 2', gameDescription: 'A massive peach-colored boulder breaches the surface', spritePosition: [5, 21], blocker: true },
    1826: { devDescription: 'Peach Boulder in Purple Liquid - Version 3', gameDescription: 'A massive peach-colored boulder breaches the surface', spritePosition: [5, 22], blocker: true },
    1827: { devDescription: 'Turquoise Boulder in Purple Liquid - Version 1', gameDescription: 'A massive turquoise boulder breaches the surface', spritePosition: [5, 23], blocker: true },
    1828: { devDescription: 'Turquoise Boulder in Purple Liquid - Version 2', gameDescription: 'A massive turquoise boulder breaches the surface', spritePosition: [5, 24], blocker: true },
    1829: { devDescription: 'Turquoise Boulder in Purple Liquid - Version 3', gameDescription: 'A massive turquoise boulder breaches the surface', spritePosition: [4, 24], blocker: true },
    1830: { devDescription: 'Invisible barrier marking liquid too deep to cross', gameDescription: 'Liquid too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    // Trees Trunks
    2000: { devDescription: 'Grey Tree Trunk (Small) - Version 1', gameDescription: 'A small tree trunk with thick grey bark', spritePosition: [5, 3] },
    2001: { devDescription: 'Grey Tree Trunk (Small) - Version 2', gameDescription: 'A small tree trunk with thick grey bark', spritePosition: [11, 3] },
    2002: { devDescription: 'Grey Tree Trunk (Small) - Version 3', gameDescription: 'A small tree trunk with thick grey bark', spritePosition: [17, 3] },
    2003: { devDescription: 'Grey Tree Trunk (Small) - Version 4', gameDescription: 'A small tree trunk with thick grey bark', spritePosition: [23, 3] },
    2004: { devDescription: 'Grey Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 1] },
    2005: { devDescription: 'Grey Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 0] },
    2006: { devDescription: 'Grey Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 0] },
    2007: { devDescription: 'Grey Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 1] },
    2008: { devDescription: 'Grey Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 3] },
    2009: { devDescription: 'Grey Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 2] },
    2010: { devDescription: 'Grey Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 2] },
    2011: { devDescription: 'Grey Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 3] },
    2012: { devDescription: 'Grey Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 5] },
    2013: { devDescription: 'Grey Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 4] },
    2014: { devDescription: 'Grey Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 4] },
    2015: { devDescription: 'Grey Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 5] },
    2016: { devDescription: 'Grey Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 7] },
    2017: { devDescription: 'Grey Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [31, 6] },
    2018: { devDescription: 'Grey Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 6] },
    2019: { devDescription: 'Grey Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick grey bark', spritePosition: [30, 7] },
    2020: { devDescription: 'Yellow Tree Trunk (Small) - Version 1', gameDescription: 'A small tree trunk with thick yellow bark', spritePosition: [29, 3] },
    2021: { devDescription: 'Yellow Tree Trunk (Small) - Version 2', gameDescription: 'A small tree trunk with thick yellow bark', spritePosition: [5, 19] },
    2022: { devDescription: 'Yellow Tree Trunk (Small) - Version 3', gameDescription: 'A small tree trunk with thick yellow bark', spritePosition: [11, 19] },
    2023: { devDescription: 'Yellow Tree Trunk (Small) - Version 4', gameDescription: 'A small tree trunk with thick yellow bark', spritePosition: [17, 19] },
    2024: { devDescription: 'Yellow Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 9] },
    2025: { devDescription: 'Yellow Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 8] },
    2026: { devDescription: 'Yellow Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 8] },
    2027: { devDescription: 'Yellow Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 9] },
    2028: { devDescription: 'Yellow Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 11] },
    2029: { devDescription: 'Yellow Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 10] },
    2030: { devDescription: 'Yellow Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 10] },
    2031: { devDescription: 'Yellow Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 11] },
    2032: { devDescription: 'Yellow Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 13] },
    2033: { devDescription: 'Yellow Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 12] },
    2034: { devDescription: 'Yellow Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 12] },
    2035: { devDescription: 'Yellow Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 13] },
    2036: { devDescription: 'Yellow Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 15] },
    2037: { devDescription: 'Yellow Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [31, 14] },
    2038: { devDescription: 'Yellow Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 14] },
    2039: { devDescription: 'Yellow Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick yellow bark', spritePosition: [30, 15] },
    2040: { devDescription: 'Purple Tree Trunk (Small) - Version 1', gameDescription: 'A small tree trunk with thick purple bark', spritePosition: [23, 19] },
    2041: { devDescription: 'Purple Tree Trunk (Small) - Version 2', gameDescription: 'A small tree trunk with thick purple bark', spritePosition: [0, 13] },
    2042: { devDescription: 'Purple Tree Trunk (Small) - Version 3', gameDescription: 'A small tree trunk with thick purple bark', spritePosition: [0, 14] },
    2043: { devDescription: 'Purple Tree Trunk (Small) - Version 4', gameDescription: 'A small tree trunk with thick purple bark', spritePosition: [3, 15] },
    2044: { devDescription: 'Purple Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 17] },
    2045: { devDescription: 'Purple Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 16] },
    2046: { devDescription: 'Purple Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 16] },
    2047: { devDescription: 'Purple Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 17] },
    2048: { devDescription: 'Purple Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 19] },
    2049: { devDescription: 'Purple Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 18] },
    2050: { devDescription: 'Purple Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 18] },
    2051: { devDescription: 'Purple Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 19] },
    2052: { devDescription: 'Purple Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 21] },
    2053: { devDescription: 'Purple Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 20] },
    2054: { devDescription: 'Purple Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 20] },
    2055: { devDescription: 'Purple Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 21] },
    2056: { devDescription: 'Purple Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 23] },
    2057: { devDescription: 'Purple Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [31, 22] },
    2058: { devDescription: 'Purple Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 22] },
    2059: { devDescription: 'Purple Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick purple bark', spritePosition: [30, 23] },
    2060: { devDescription: 'Red Tree Trunk (Small) - Version 1', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [29, 10] },
    2061: { devDescription: 'Red Tree Trunk (Small) - Version 2', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [28, 10] },
    2062: { devDescription: 'Red Tree Trunk (Small) - Version 3', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [29, 9] },
    2063: { devDescription: 'Red Tree Trunk (Small) - Version 4', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [28, 9] },
    2064: { devDescription: 'Red Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 25] },
    2065: { devDescription: 'Red Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 24] },
    2066: { devDescription: 'Red Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 24] },
    2067: { devDescription: 'Red Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 25] },
    2068: { devDescription: 'Red Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 27] },
    2069: { devDescription: 'Red Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 26] },
    2070: { devDescription: 'Red Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 26] },
    2071: { devDescription: 'Red Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 27] },
    2072: { devDescription: 'Red Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 29] },
    2073: { devDescription: 'Red Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 28] },
    2074: { devDescription: 'Red Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 28] },
    2075: { devDescription: 'Red Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 29] },
    2076: { devDescription: 'Red Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 31] },
    2077: { devDescription: 'Red Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [31, 30] },
    2078: { devDescription: 'Red Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 30] },
    2079: { devDescription: 'Red Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick red bark', spritePosition: [30, 31] },
    2080: { devDescription: 'Blue Tree Trunk (Small) - Version 1', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 12] },
    2081: { devDescription: 'Blue Tree Trunk (Small) - Version 2', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 12] },
    2082: { devDescription: 'Blue Tree Trunk (Small) - Version 3', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 11] },
    2083: { devDescription: 'Blue Tree Trunk (Small) - Version 4', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 11] },
    2084: { devDescription: 'Blue Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 29] },
    2085: { devDescription: 'Blue Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 28] },
    2086: { devDescription: 'Blue Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 28] },
    2087: { devDescription: 'Blue Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 29] },
    2088: { devDescription: 'Blue Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 31] },
    2089: { devDescription: 'Blue Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [29, 30] },
    2090: { devDescription: 'Blue Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 30] },
    2091: { devDescription: 'Blue Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [28, 31] },
    2092: { devDescription: 'Blue Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [27, 29] },
    2093: { devDescription: 'Blue Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [27, 28] },
    2094: { devDescription: 'Blue Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [26, 28] },
    2095: { devDescription: 'Blue Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [26, 29] },
    2096: { devDescription: 'Blue Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [27, 31] },
    2097: { devDescription: 'Blue Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [27, 30] },
    2098: { devDescription: 'Blue Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [26, 30] },
    2099: { devDescription: 'Blue Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick blue bark', spritePosition: [26, 31] },
    2100: { devDescription: 'Brown Tree Trunk (Small) - Version 1', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [29, 13] },
    2101: { devDescription: 'Brown Tree Trunk (Small) - Version 2', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [28, 13] },
    2102: { devDescription: 'Brown Tree Trunk (Small) - Version 3', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 13] },
    2103: { devDescription: 'Brown Tree Trunk (Small) - Version 4', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 13] },
    2104: { devDescription: 'Brown Tree Trunk (Upper-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 10] },
    2105: { devDescription: 'Brown Tree Trunk (Lower-Right Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 9] },
    2106: { devDescription: 'Brown Tree Trunk (Lower-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 9] },
    2107: { devDescription: 'Brown Tree Trunk (Upper-Left Quadrant) - Version 1', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 10] },
    2108: { devDescription: 'Brown Tree Trunk (Upper-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 12] },
    2109: { devDescription: 'Brown Tree Trunk (Lower-Right Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 11] },
    2110: { devDescription: 'Brown Tree Trunk (Lower-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 11] },
    2111: { devDescription: 'Brown Tree Trunk (Upper-Left Quadrant) - Version 2', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 12] },
    2112: { devDescription: 'Brown Tree Trunk (Upper-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 15] },
    2113: { devDescription: 'Brown Tree Trunk (Lower-Right Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [27, 14] },
    2114: { devDescription: 'Brown Tree Trunk (Lower-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 14] },
    2115: { devDescription: 'Brown Tree Trunk (Upper-Left Quadrant) - Version 3', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [26, 15] },
    2116: { devDescription: 'Brown Tree Trunk (Upper-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [25, 15] },
    2117: { devDescription: 'Brown Tree Trunk (Lower-Right Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [25, 14] },
    2118: { devDescription: 'Brown Tree Trunk (Lower-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [24, 14] },
    2119: { devDescription: 'Brown Tree Trunk (Upper-Left Quadrant) - Version 4', gameDescription: 'Part of a massive tree trunk with thick brown bark', spritePosition: [24, 15] },

    // Trees Leaves
    2200: { devDescription: 'Green Tree Leaves (center)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [1, 26] },
    2201: { devDescription: 'Green Tree Leaves (top)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [1, 27] },
    2202: { devDescription: 'Green Tree Leaves (top-right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [2, 27] },
    2203: { devDescription: 'Green Tree Leaves (right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [2, 26] },
    2204: { devDescription: 'Green Tree Leaves (bottom-right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [2, 25] },
    2205: { devDescription: 'Green Tree Leaves (bottom)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [1, 25] },
    2206: { devDescription: 'Green Tree Leaves (bottom-left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [0, 25] },
    2207: { devDescription: 'Green Tree Leaves (left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [0, 26] },
    2208: { devDescription: 'Green Tree Leaves (top-left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [0, 27] },
    2209: { devDescription: 'Green Tree Leaves (empty top-right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [3, 25] },
    2210: { devDescription: 'Green Tree Leaves (empty bottom-right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [3, 26] },
    2211: { devDescription: 'Green Tree Leaves (empty bottom-left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [4, 26] },
    2212: { devDescription: 'Green Tree Leaves (empty top-left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [4, 25] },
    2213: { devDescription: 'Green Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [3, 28] },
    2214: { devDescription: 'Green Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted green leaves sprouting from a tree\'s branches', spritePosition: [4, 28] },
    2220: { devDescription: 'Red Tree Leaves (center)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [6, 26] },
    2221: { devDescription: 'Red Tree Leaves (top)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [6, 27] },
    2222: { devDescription: 'Red Tree Leaves (top-right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [7, 27] },
    2223: { devDescription: 'Red Tree Leaves (right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [7, 26] },
    2224: { devDescription: 'Red Tree Leaves (bottom-right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [7, 25] },
    2225: { devDescription: 'Red Tree Leaves (bottom)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [6, 25] },
    2226: { devDescription: 'Red Tree Leaves (bottom-left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [5, 25] },
    2227: { devDescription: 'Red Tree Leaves (left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [5, 26] },
    2228: { devDescription: 'Red Tree Leaves (top-left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [5, 27] },
    2229: { devDescription: 'Red Tree Leaves (empty top-right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [8, 25] },
    2230: { devDescription: 'Red Tree Leaves (empty bottom-right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [8, 26] },
    2231: { devDescription: 'Red Tree Leaves (empty bottom-left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [9, 26] },
    2232: { devDescription: 'Red Tree Leaves (empty top-left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [9, 25] },
    2233: { devDescription: 'Red Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [8, 28] },
    2234: { devDescription: 'Red Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted red leaves sprouting from a tree\'s branches', spritePosition: [9, 28] },
    2240: { devDescription: 'Yellow Tree Leaves (center)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [11, 26] },
    2241: { devDescription: 'Yellow Tree Leaves (top)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [11, 27] },
    2242: { devDescription: 'Yellow Tree Leaves (top-right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [12, 27] },
    2243: { devDescription: 'Yellow Tree Leaves (right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [12, 26] },
    2244: { devDescription: 'Yellow Tree Leaves (bottom-right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [12, 25] },
    2245: { devDescription: 'Yellow Tree Leaves (bottom)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [11, 25] },
    2246: { devDescription: 'Yellow Tree Leaves (bottom-left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [10, 25] },
    2247: { devDescription: 'Yellow Tree Leaves (left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [10, 26] },
    2248: { devDescription: 'Yellow Tree Leaves (top-left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [10, 27] },
    2249: { devDescription: 'Yellow Tree Leaves (empty top-right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [13, 25] },
    2250: { devDescription: 'Yellow Tree Leaves (empty bottom-right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [13, 26] },
    2251: { devDescription: 'Yellow Tree Leaves (empty bottom-left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [14, 26] },
    2252: { devDescription: 'Yellow Tree Leaves (empty top-left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [14, 25] },
    2253: { devDescription: 'Yellow Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [13, 28] },
    2254: { devDescription: 'Yellow Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted yellow leaves sprouting from a tree\'s branches', spritePosition: [14, 28] },
    2260: { devDescription: 'Grey Tree Leaves (center)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [16, 26] },
    2261: { devDescription: 'Grey Tree Leaves (top)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [16, 27] },
    2262: { devDescription: 'Grey Tree Leaves (top-right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [17, 27] },
    2263: { devDescription: 'Grey Tree Leaves (right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [17, 26] },
    2264: { devDescription: 'Grey Tree Leaves (bottom-right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [17, 25] },
    2265: { devDescription: 'Grey Tree Leaves (bottom)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [16, 25] },
    2266: { devDescription: 'Grey Tree Leaves (bottom-left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [15, 25] },
    2267: { devDescription: 'Grey Tree Leaves (left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [15, 26] },
    2268: { devDescription: 'Grey Tree Leaves (top-left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [15, 27] },
    2269: { devDescription: 'Grey Tree Leaves (empty top-right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [18, 25] },
    2270: { devDescription: 'Grey Tree Leaves (empty bottom-right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [18, 26] },
    2271: { devDescription: 'Grey Tree Leaves (empty bottom-left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [19, 26] },
    2272: { devDescription: 'Grey Tree Leaves (empty top-left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [19, 25] },
    2273: { devDescription: 'Grey Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [18, 28] },
    2274: { devDescription: 'Grey Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted grey leaves sprouting from a tree\'s branches', spritePosition: [19, 28] },
    2280: { devDescription: 'Purple Tree Leaves (center)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [21, 26] },
    2281: { devDescription: 'Purple Tree Leaves (top)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [21, 27] },
    2282: { devDescription: 'Purple Tree Leaves (top-right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [22, 27] },
    2283: { devDescription: 'Purple Tree Leaves (right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [22, 26] },
    2284: { devDescription: 'Purple Tree Leaves (bottom-right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [22, 25] },
    2285: { devDescription: 'Purple Tree Leaves (bottom)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [21, 25] },
    2286: { devDescription: 'Purple Tree Leaves (bottom-left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [20, 25] },
    2287: { devDescription: 'Purple Tree Leaves (left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [20, 26] },
    2288: { devDescription: 'Purple Tree Leaves (top-left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [20, 27] },
    2289: { devDescription: 'Purple Tree Leaves (empty top-right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [23, 25] },
    2290: { devDescription: 'Purple Tree Leaves (empty bottom-right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [23, 26] },
    2291: { devDescription: 'Purple Tree Leaves (empty bottom-left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [24, 26] },
    2292: { devDescription: 'Purple Tree Leaves (empty top-left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [24, 25] },
    2293: { devDescription: 'Purple Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [23, 28] },
    2294: { devDescription: 'Purple Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted purple leaves sprouting from a tree\'s branches', spritePosition: [24, 28] },
    2300: { devDescription: 'Blue Tree Leaves (center)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [26, 26] },
    2301: { devDescription: 'Blue Tree Leaves (top)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [26, 27] },
    2302: { devDescription: 'Blue Tree Leaves (top-right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [27, 27] },
    2303: { devDescription: 'Blue Tree Leaves (right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [27, 26] },
    2304: { devDescription: 'Blue Tree Leaves (bottom-right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [27, 25] },
    2305: { devDescription: 'Blue Tree Leaves (bottom)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [26, 25] },
    2306: { devDescription: 'Blue Tree Leaves (bottom-left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [25, 25] },
    2307: { devDescription: 'Blue Tree Leaves (left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [25, 26] },
    2308: { devDescription: 'Blue Tree Leaves (top-left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [25, 27] },
    2309: { devDescription: 'Blue Tree Leaves (empty top-right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [28, 25] },
    2310: { devDescription: 'Blue Tree Leaves (empty bottom-right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [28, 26] },
    2311: { devDescription: 'Blue Tree Leaves (empty bottom-left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [29, 26] },
    2312: { devDescription: 'Blue Tree Leaves (empty top-left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [29, 25] },
    2313: { devDescription: 'Blue Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [28, 28] },
    2314: { devDescription: 'Blue Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted blue leaves sprouting from a tree\'s branches', spritePosition: [29, 28] },
    2320: { devDescription: 'Brown Tree Leaves (center)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [25, 23] },
    2321: { devDescription: 'Brown Tree Leaves (top)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [25, 24] },
    2322: { devDescription: 'Brown Tree Leaves (top-right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [26, 24] },
    2323: { devDescription: 'Brown Tree Leaves (right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [26, 23] },
    2324: { devDescription: 'Brown Tree Leaves (bottom-right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [26, 22] },
    2325: { devDescription: 'Brown Tree Leaves (bottom)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [25, 22] },
    2326: { devDescription: 'Brown Tree Leaves (bottom-left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [24, 22] },
    2327: { devDescription: 'Brown Tree Leaves (left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [24, 23] },
    2328: { devDescription: 'Brown Tree Leaves (top-left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [24, 24] },
    2329: { devDescription: 'Brown Tree Leaves (empty top-right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [27, 22] },
    2330: { devDescription: 'Brown Tree Leaves (empty bottom-right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [27, 23] },
    2331: { devDescription: 'Brown Tree Leaves (empty bottom-left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [28, 23] },
    2332: { devDescription: 'Brown Tree Leaves (empty top-left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [28, 22] },
    2333: { devDescription: 'Brown Tree Leaves (empty top-left & bottom-right)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [27, 24] },
    2334: { devDescription: 'Brown Tree Leaves (empty top-right & bottom-left)', gameDescription: 'Assorted brown leaves sprouting from a tree\'s branches', spritePosition: [28, 24] },

    2500: { devDescription: 'Cloud - Version 1', gameDescription: 'Cloud', spritePosition: [12, 10], customSize: [16, 16] },
    2501: { devDescription: 'Cloud - Version 2', gameDescription: 'Cloud', spritePosition: [12, 9], customSize: [16, 16] },
    2502: { devDescription: 'Cloud - Version 3', gameDescription: 'Cloud', spritePosition: [12, 8], customSize: [16, 16] },
    2503: { devDescription: 'Cloud - Version 4', gameDescription: 'Cloud', spritePosition: [13, 10], customSize: [16, 16] },
    2504: { devDescription: 'Cloud - Version 5', gameDescription: 'Cloud', spritePosition: [13, 9], customSize: [16, 16] },
    2505: { devDescription: 'Cloud - Version 6', gameDescription: 'Cloud', spritePosition: [13, 8], customSize: [16, 16] },
    2506: { devDescription: 'Cloud - Version 7', gameDescription: 'Cloud', spritePosition: [14, 10], customSize: [16, 16] },
    2507: { devDescription: 'Cloud - Version 8', gameDescription: 'Cloud', spritePosition: [14, 9], customSize: [16, 16] },
    2508: { devDescription: 'Cloud - Version 9', gameDescription: 'Cloud', spritePosition: [14, 8], customSize: [16, 16] },
    2509: { devDescription: 'Cloud - Version 10', gameDescription: 'Cloud', spritePosition: [14, 7], customSize: [16, 16] },

    // Bridges & Piers
    3000: { devDescription: 'Bridge Start Horizontal (Wood)', gameDescription: 'Wooden ramp rising from west to east onto a bridge', spritePosition: [0, 12], xPosMod: -0.01, xScaleMod: 0.1 },
    3001: { devDescription: 'Bridge End Horizontal (Wood)', gameDescription: 'Wooden ramp rising from east to west onto a bridge', spritePosition: [0, 10], xPosMod: 0.01, xScaleMod: 0.1 },
    3002: { devDescription: 'Bridge Bottom Intact Horizontal (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 9] },
    3003: { devDescription: 'Bridge Bottom Damaged Horizontal (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [2, 9] },
    3004: { devDescription: 'Bridge Bottom Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 9], blocker: true },
    3005: { devDescription: 'Bridge Middle Intact Horizontal (Wood)', gameDescription: 'An intact section of a wooden bridge', spritePosition: [1, 10] },
    3006: { devDescription: 'Bridge Middle Damaged Horizontal (Wood)', gameDescription: 'A damaged section of a wooden bridge', spritePosition: [2, 10] },
    3007: { devDescription: 'Bridge Middle Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable section of a wooden bridge', spritePosition: [3, 10], blocker: true },
    3008: { devDescription: 'Bridge Top Intact Horizontal (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 11] },
    3009: { devDescription: 'Bridge Top Damaged Horizontal (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [2, 11] },
    3010: { devDescription: 'Bridge Top Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 11], blocker: true },
    3011: { devDescription: 'Bridge Start Vertical (Wood)', gameDescription: 'Wooden ramp rising from north to south onto a bridge', spritePosition: [0, 11], zPosMod: -0.02, zScaleMod: 0.12 },
    3012: { devDescription: 'Bridge End Vertical (Wood)', gameDescription: 'Wooden ramp rising from south to north onto a bridge', spritePosition: [0, 9], zPosMod: 0.02, zScaleMod: 0.12 },
    3013: { devDescription: 'Bridge Right Intact Vertical (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [3, 12] },
    3014: { devDescription: 'Bridge Right Damaged Vertical (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [3, 13] },
    3015: { devDescription: 'Bridge Right Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 14], blocker: true },
    3016: { devDescription: 'Bridge Middle Intact Vertical (Wood)', gameDescription: 'An intact section of a wooden bridge', spritePosition: [2, 12] },
    3017: { devDescription: 'Bridge Middle Damaged Vertical (Wood)', gameDescription: 'A damaged section of a wooden bridge', spritePosition: [2, 13] },
    3018: { devDescription: 'Bridge Middle Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable section of a wooden bridge', spritePosition: [2, 14], blocker: true },
    3019: { devDescription: 'Bridge Left Intact Vertical (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 12] },
    3020: { devDescription: 'Bridge Left Damaged Vertical (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [1, 13] },
    3021: { devDescription: 'Bridge Left Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [1, 14], blocker: true },
    3022: { devDescription: 'Pier - Ends on right (Wood)', gameDescription: 'Eastern edge of a disintegrating pier', spritePosition: [0, 15], blocker: true },
    3023: { devDescription: 'Pier - Open both sides (Wood)', gameDescription: 'Section of a disintegrating pier', spritePosition: [1, 15], blocker: true },
    3024: { devDescription: 'Pier - Ends on left (Wood)', gameDescription: 'Weastern edge of a disintegrating pier', spritePosition: [2, 15], blocker: true },
}

export class TileCtrl {
    private _ancientRuinsSpec: AncientRuinsSpecifications;
    private _bridgeBase: number;
    private _bridgeEnd: number;
    private _groundPlantBase: number;
    private _groundGrassEnd: number;
    // Lookup table for grass/plant tiles when assigning edge graphics.
    private _groundPlantLookupTable: { [key: string]: number };
    private _treeLeafBase: number;
    private _treeLeafEnd: number;
    private _treeLeafLookupTable: { [key: string]: number };
    private _treeTrunkBase: number;
    private _treeTrunkEnd: number;
    private _treeTrunkLookupTable: { [key: string]: number };
    private _waterBase: number;
    private _waterEnd: number;
    // Lookup table for water tiles when assigning edge graphics.
    private _waterLookupTable: { [key: string]: number };

    constructor(ancientRuinsSpec: AncientRuinsSpecifications) {
        this._ancientRuinsSpec = ancientRuinsSpec;
        const mod = this._setGroundStart(ancientRuinsSpec.groundMaterial);
        this._setPlantStart(ancientRuinsSpec.plantColor, this._groundPlantBase);
        this._setWaterStart(ancientRuinsSpec.waterColor, mod);
        this._setTreeLeafStart(ancientRuinsSpec.treeLeafColor);
        this._setTreeTrunkStart(ancientRuinsSpec.treeTrunkColor);

        this._groundGrassEnd = this._groundPlantBase + 20;
        this._waterEnd = this._waterBase + 99;
        this._treeLeafEnd = this._treeLeafBase + 19;
        this._treeTrunkEnd = this._treeTrunkBase + 19;
        this._bridgeBase = 3000;
        this._bridgeEnd = 3999;

        this._groundPlantLookupTable = {
            '0000': this._groundPlantBase,
            '1000': this._groundPlantBase + 2,
            '1100': this._groundPlantBase + 3,
            '0100': this._groundPlantBase + 4,
            '0110': this._groundPlantBase + 5,
            '0010': this._groundPlantBase + 6,
            '0011': this._groundPlantBase + 7,
            '0001': this._groundPlantBase + 8,
            '1001': this._groundPlantBase + 9,
            '1101': this._groundPlantBase + 10,
            '1110': this._groundPlantBase + 11,
            '0111': this._groundPlantBase + 12,
            '1011': this._groundPlantBase + 13,
            '1010': this._groundPlantBase + 14,
            '0101': this._groundPlantBase + 15,
            'sparse': this._groundPlantBase + 16,
            'mixed': this._groundPlantBase + 18,
            '1111': this._groundPlantBase + 20
        };

        this._treeLeafLookupTable = {
            '0000-0000': this._treeLeafBase,
            '1000-0000': this._treeLeafBase + 1,
            '1000-1001': this._treeLeafBase + 1,
            '1000-0001': this._treeLeafBase + 1,
            '1000-1000': this._treeLeafBase + 1,
            '1000-0101': this._treeLeafBase + 2,
            '0100-0101': this._treeLeafBase + 2,
            '1100-1101': this._treeLeafBase + 2,
            '1100-0101': this._treeLeafBase + 2,
            '1100-1001': this._treeLeafBase + 2,
            '1100-1100': this._treeLeafBase + 2,
            '1100-1000': this._treeLeafBase + 2,
            '1100-0100': this._treeLeafBase + 2,
            '1100-0001': this._treeLeafBase + 2,
            '1100-0000': this._treeLeafBase + 2,
            '1000-0100': this._treeLeafBase + 2,
            '0100-0001': this._treeLeafBase + 2,
            '0100-1100': this._treeLeafBase + 3,
            '0100-1000': this._treeLeafBase + 3,
            '0100-0100': this._treeLeafBase + 3,
            '0100-0000': this._treeLeafBase + 3,
            '0010-1010': this._treeLeafBase + 4,
            '0100-1010': this._treeLeafBase + 4,
            '0110-1110': this._treeLeafBase + 4,
            '0110-0110': this._treeLeafBase + 4,
            '0110-1010': this._treeLeafBase + 4,
            '0110-1100': this._treeLeafBase + 4,
            '0110-1000': this._treeLeafBase + 4,
            '0110-0100': this._treeLeafBase + 4,
            '0110-0010': this._treeLeafBase + 4,
            '0110-0000': this._treeLeafBase + 4,
            '0010-1000': this._treeLeafBase + 4,
            '0100-0010': this._treeLeafBase + 4,
            '0010-0110': this._treeLeafBase + 5,
            '0010-0010': this._treeLeafBase + 5,
            '0010-0100': this._treeLeafBase + 5,
            '0010-0000': this._treeLeafBase + 5,
            '0010-0101': this._treeLeafBase + 6,
            '0001-0101': this._treeLeafBase + 6,
            '0011-0111': this._treeLeafBase + 6,
            '0011-0011': this._treeLeafBase + 6,
            '0011-0101': this._treeLeafBase + 6,
            '0011-0110': this._treeLeafBase + 6,
            '0011-0100': this._treeLeafBase + 6,
            '0011-0001': this._treeLeafBase + 6,
            '0011-0010': this._treeLeafBase + 6,
            '0011-0000': this._treeLeafBase + 6,
            '0010-0001': this._treeLeafBase + 6,
            '0001-0100': this._treeLeafBase + 6,
            '0001-0011': this._treeLeafBase + 7,
            '0001-0001': this._treeLeafBase + 7,
            '0001-0010': this._treeLeafBase + 7,
            '0001-0000': this._treeLeafBase + 7,
            '1000-1010': this._treeLeafBase + 8,
            '0001-1010': this._treeLeafBase + 8,
            '1001-1011': this._treeLeafBase + 8,
            '1001-0011': this._treeLeafBase + 8,
            '1001-1001': this._treeLeafBase + 8,
            '1001-1010': this._treeLeafBase + 8,
            '1001-1000': this._treeLeafBase + 8,
            '1001-0010': this._treeLeafBase + 8,
            '1001-0001': this._treeLeafBase + 8,
            '1001-0000': this._treeLeafBase + 8,
            '0001-1000': this._treeLeafBase + 8,
            '1000-0010': this._treeLeafBase + 8,
            '0000-1000': this._treeLeafBase + 9,
            '0000-0100': this._treeLeafBase + 10,
            '0000-0010': this._treeLeafBase + 11,
            '0000-0001': this._treeLeafBase + 12,
            '0000-0101': this._treeLeafBase + 13,
            '0000-1010': this._treeLeafBase + 14,
        };

        this._waterLookupTable = {
            '0000-0000': this._waterBase,
            '1000-0000': this._waterBase + 1,
            '1000-1000': this._waterBase + 1,
            '1000-0001': this._waterBase + 1,
            '1000-1001': this._waterBase + 1,
            '1100-0000': this._waterBase + 2,
            '1100-1000': this._waterBase + 2,
            '1100-0100': this._waterBase + 2,
            '1100-0001': this._waterBase + 2,
            '1100-1001': this._waterBase + 2,
            '1100-0101': this._waterBase + 2,
            '1100-1101': this._waterBase + 2,
            '1100-1100': this._waterBase + 2,
            '0100-0000': this._waterBase + 3,
            '0100-1000': this._waterBase + 3,
            '0100-0100': this._waterBase + 3,
            '0100-1100': this._waterBase + 3,
            '0110-0000': this._waterBase + 4,
            '0110-0100': this._waterBase + 4,
            '0110-1000': this._waterBase + 4,
            '0110-0010': this._waterBase + 4,
            '0110-1100': this._waterBase + 4,
            '0110-0110': this._waterBase + 4,
            '0110-1010': this._waterBase + 4,
            '0110-1110': this._waterBase + 4,
            '0010-0000': this._waterBase + 5,
            '0010-0100': this._waterBase + 5,
            '0010-0010': this._waterBase + 5,
            '0010-0110': this._waterBase + 5,
            '0011-0000': this._waterBase + 6,
            '0011-0010': this._waterBase + 6,
            '0011-0100': this._waterBase + 6,
            '0011-0001': this._waterBase + 6,
            '0011-0110': this._waterBase + 6,
            '0011-0011': this._waterBase + 6,
            '0011-0101': this._waterBase + 6,
            '0011-0111': this._waterBase + 6,
            '0001-0000': this._waterBase + 7,
            '0001-0010': this._waterBase + 7,
            '0001-0001': this._waterBase + 7,
            '0001-0011': this._waterBase + 7,
            '1001-0000': this._waterBase + 8,
            '1001-0001': this._waterBase + 8,
            '1001-1000': this._waterBase + 8,
            '1001-0010': this._waterBase + 8,
            '1001-1010': this._waterBase + 8,
            '1001-0011': this._waterBase + 8,
            '1001-1001': this._waterBase + 8,
            '1001-1011': this._waterBase + 8,
            '0000-0001': this._waterBase + 9,
            '0000-1000': this._waterBase + 10,
            '0000-0100': this._waterBase + 11,
            '0000-0010': this._waterBase + 12,
            '0000-0101': this._waterBase + 13,
            '0000-1010': this._waterBase + 14,
            '1111-1111': this._waterBase + 15,
            '1111-0111': this._waterBase + 15,
            '1111-1011': this._waterBase + 15,
            '1111-1101': this._waterBase + 15,
            '1111-1110': this._waterBase + 15,
            '1111-1100': this._waterBase + 15,
            '1111-0110': this._waterBase + 15,
            '1111-0011': this._waterBase + 15,
            '1111-1001': this._waterBase + 15,
            '1111-1000': this._waterBase + 15,
            '1111-0100': this._waterBase + 15,
            '1111-0010': this._waterBase + 15,
            '1111-0001': this._waterBase + 15,
            '1111-0000': this._waterBase + 15,
            '1111-1010': this._waterBase + 15,
            '1111-0101': this._waterBase + 15,
            '0001-0100': this._waterBase + 16,
            '0001-0111': this._waterBase + 16,
            '0001-0101': this._waterBase + 16,
            '0001-0110': this._waterBase + 16,
            '0100-0010': this._waterBase + 17,
            '0100-1110': this._waterBase + 17,
            '0100-1010': this._waterBase + 17,
            '0100-0110': this._waterBase + 17,
            '0001-1000': this._waterBase + 18,
            '0001-1011': this._waterBase + 18,
            '0001-1001': this._waterBase + 18,
            '0001-1010': this._waterBase + 18,
            '0100-0001': this._waterBase + 19,
            '0100-1101': this._waterBase + 19,
            '0100-0101': this._waterBase + 19,
            '0100-1001': this._waterBase + 19,
            '0010-0001': this._waterBase + 20,
            '0010-0111': this._waterBase + 20,
            '0010-0011': this._waterBase + 20,
            '0010-0101': this._waterBase + 20,
            '0010-1000': this._waterBase + 21,
            '0010-1110': this._waterBase + 21,
            '0010-1010': this._waterBase + 21,
            '0010-1100': this._waterBase + 21,
            '1000-0010': this._waterBase + 22,
            '1000-1011': this._waterBase + 22,
            '1000-0011': this._waterBase + 22,
            '1000-1010': this._waterBase + 22,
            '1000-0100': this._waterBase + 23,
            '1000-1101': this._waterBase + 23,
            '1000-0101': this._waterBase + 23,
            '1000-1100': this._waterBase + 23
        };
    }

    private _setPlantStart(color: PlantColor, groundMod: number): void {
        switch(color) {
            case PlantColor.Green: {
                this._groundPlantBase = groundMod;
                return;
            }
            case PlantColor.Yellow: {
                this._groundPlantBase = 300 + groundMod;
                return;
            }
            case PlantColor.Purple: {
                this._groundPlantBase = 600 + groundMod;
                return;
            }
            default: {
                this._groundPlantBase = groundMod;
            }
        }
    }

    private _setGroundStart(mat: GroundMaterial): number {
        switch(mat) {
            case GroundMaterial.Dirt: {
                this._groundPlantBase = 2;
                return 0;
            }
            case GroundMaterial.Sand: {
                this._groundPlantBase = 102;
                return 100;
            }
            case GroundMaterial.Gravel: {
                this._groundPlantBase = 202;
                return 200;
            }
        }
    }

    private _setTreeLeafStart(color: TreeLeafColor): void {
        switch(color) {
            case TreeLeafColor.Green: {
                this._treeLeafBase = 2200;
                break;
            }
            case TreeLeafColor.Red: {
                this._treeLeafBase = 2220;
                break;
            }
            case TreeLeafColor.Yellow: {
                this._treeLeafBase = 2240;
                break;
            }
            case TreeLeafColor.Grey: {
                this._treeLeafBase = 2260;
                break;
            }
            case TreeLeafColor.Purple: {
                this._treeLeafBase = 2280;
                break;
            }
            case TreeLeafColor.Blue: {
                this._treeLeafBase = 2300;
                break;
            }
            case TreeLeafColor.Brown: {
                this._treeLeafBase = 2320;
                break;
            }
            default: {
                this._treeLeafBase = 2200;
            }
        }
    }

    private _setTreeTrunkStart(color: TreeTrunkColor): void {
        switch(color) {
            case TreeTrunkColor.Grey: {
                this._treeTrunkBase = 2000;
                break;
            }
            case TreeTrunkColor.Yellow: {
                this._treeTrunkBase = 2020;
                break;
            }
            case TreeTrunkColor.Purple: {
                this._treeTrunkBase = 2040;
                break;
            }
            case TreeTrunkColor.Red: {
                this._treeTrunkBase = 2060;
                break;
            }
            case TreeTrunkColor.Blue: {
                this._treeTrunkBase = 2080;
                break;
            }
            case TreeTrunkColor.Brown: {
                this._treeTrunkBase = 2100;
                break;
            }
            default: {
                this._treeTrunkBase = 2000;
            }
        }
    }

    private _setWaterStart(color: WaterColor, waterMod: number): void {
        switch(color) {
            case WaterColor.Blue: {
                this._waterBase = 1000 + waterMod;
                return;
            }
            case WaterColor.Green: {
                this._waterBase = 1300 + waterMod;
                return;
            }
            case WaterColor.Purple: {
                this._waterBase = 1600 + waterMod;
                return;
            }
            default: {
                this._waterBase = 1000 + waterMod;
            }
        }
    }

    public getBridgeBaseValue(): number {
        return this._bridgeBase;
    }

    public getBridgeEndValue(): number {
        return this._bridgeEnd;
    }

    public getBridgeTileValue(key: number): number {
        return this._bridgeBase + key;
    }

    public getGridDicCustomSize(key: number): [number, number] {
        return gridDictionary[key].customSize || null;
    }

    public getGridDicDescription(key: number): string {
        return (gridDictionary[key] && gridDictionary[key].gameDescription) || '';
    }

    public getGridDicKeys(): number[] {
        return Object.keys(gridDictionary).map(key => Number(key));
    }

    public getGridDicPosMod(key: number, z?: boolean): number {
        return z ? (gridDictionary[key].zPosMod || 0) : (gridDictionary[key].xPosMod || 0);
    }

    public getGridDicScaleMod(key: number, z?: boolean): number {
        return z ? (gridDictionary[key].zScaleMod || 0) : (gridDictionary[key].xScaleMod || 0);
    }

    public getGridDicSpritePos(key: number): [number, number] {
        return gridDictionary[key].spritePosition;
    }

    public getGridDicVariation(key: number): boolean {
        return gridDictionary[key].hasVariation || false;
    }

    public getGroundBaseValue(): number {
        return this._groundPlantBase;
    }

    public getGroundEndValue(): number {
        return this._groundGrassEnd;
    }

    public getGroundTileValue(key: string): number {
        return this._groundPlantLookupTable[key] || this._groundPlantBase;
    }

    public getTreeLeafBaseValue(): number {
        return this._ancientRuinsSpec.treeLeafColor !== TreeLeafColor.None ? this._treeLeafBase : 0;
    }

    public getTreeLeafEndValue(): number {
        return this._ancientRuinsSpec.treeLeafColor !== TreeLeafColor.None ? this._treeLeafEnd : 0;
    }

    public getTreeLeafTileValue(key: string): number {
        return this._ancientRuinsSpec.treeLeafColor !== TreeLeafColor.None ? (this._treeLeafLookupTable[key] || this._treeLeafBase) : 0;
    }

    public getTreeTrunkBaseValue(): number {
        return this._treeTrunkBase;
    }

    public getTreeTrunkEndValue(): number {
        return this._treeTrunkEnd;
    }

    public getTreeTrunkTileValue(key: string): number {
        return this._treeTrunkLookupTable[key] || this._treeTrunkBase;
    }

    public getWaterBaseValue(): number {
        return this._waterBase;
    }

    public getWaterEndValue(): number {
        return this._waterEnd;
    }

    public getWaterTileValue(key: string): number {
        return this._waterLookupTable[key] || this._waterBase;
    }
}
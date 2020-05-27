import { AncientRuinsSpecifications, GroundMaterial, WaterColor, PlantColor } from "../../../models/ancient-ruins-specifications";

export interface GridDictionaryValue {
    blocker?: boolean;
    devDescription: string;
    gameDescription: string;
    hasVariation?: boolean;
    spritePosition: [number, number];
    xPosMod?: number;
    xScaleMod?: number;
    zPosMod?: number;
    zScaleMod?: number;
}

export interface GridDictionary {
    [key: number]: GridDictionaryValue
}

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
    18: { devDescription: 'Green Grass (Dirt at sides only) - Version 1', gameDescription: 'Sparse green grass with dirt framing all of its edges', spritePosition: [4, 2] },
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
    118: { devDescription: 'Green Grass (Sand at sides only) - Version 1', gameDescription: 'Sparse green grass with sand framing all of its edges', spritePosition: [10, 2] },
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
    218: { devDescription: 'Green Grass (Gravel at sides only) - Version 1', gameDescription: 'Sparse green grass with gravel framing all of its edges', spritePosition: [16, 2] },
    219: { devDescription: 'Green Grass (Gravel at sides only) - Version 2', gameDescription: 'Sparse green grass with gravel framing all of its edges', spritePosition: [17, 2] },
    220: { devDescription: 'Green Grass (Gravel at corners only) - Version 1', gameDescription: 'Green grass mixed with patches of gravel', spritePosition: [16, 1], hasVariation: true },
    221: { devDescription: 'Green Grass (Gravel at corners only) - Version 2', gameDescription: 'Green grass mixed with patches of gravel', spritePosition: [17, 1] },
    222: { devDescription: 'Green Grass (Gravel all around)', gameDescription: 'Lush green grass with gravel framing all of its edges', spritePosition: [16, 3] },
    223: { devDescription: 'White Gravel (whole tile) - Version 1', gameDescription: 'Ordinary gravel', spritePosition: [16, 0], hasVariation: true },
    224: { devDescription: 'White Gravel (whole tile) - Version 2', gameDescription: 'Ordinary gravel', spritePosition: [17, 0] },

    // Water
    1000: { devDescription: 'Blue Water (whole tile)', gameDescription: 'Blue water', spritePosition: [1, 5] },
    1001: { devDescription: 'Blue Water (Dirt at top)', gameDescription: 'Blue water with dirt framing its northern edge', spritePosition: [1, 6] },
    1002: { devDescription: 'Blue Water (Dirt at top & right)', gameDescription: 'Blue water with dirt framing its northern and eastern edges', spritePosition: [2, 6] },
    1003: { devDescription: 'Blue Water (Dirt at right)', gameDescription: 'Blue water with dirt framing its eastern edge', spritePosition: [2, 5] },
    1004: { devDescription: 'Blue Water (Dirt at right & bottom)', gameDescription: 'Blue water with dirt framing its southern and eastern edges', spritePosition: [2, 4] },
    1005: { devDescription: 'Blue Water (Dirt at bottom)', gameDescription: 'Blue water with dirt framing its southern edge', spritePosition: [1, 4] },
    1006: { devDescription: 'Blue Water (Dirt at bottom & left)', gameDescription: 'Blue water with dirt framing its southern and western edges', spritePosition: [0, 4] },
    1007: { devDescription: 'Blue Water (Dirt at left)', gameDescription: 'Blue water with dirt framing its western edge', spritePosition: [0, 5] },
    1008: { devDescription: 'Blue Water (Dirt at left & top)', gameDescription: 'Blue water with dirt framing its northern and western edges', spritePosition: [0, 6] },
    1009: { devDescription: 'Blue Water (Dirt at upper-left)', gameDescription: 'Blue water with dirt at its northwestern corner', spritePosition: [3, 4] },
    1010: { devDescription: 'Blue Water (Dirt at upper-right)', gameDescription: 'Blue water with dirt at its northeastern corner', spritePosition: [4, 4] },
    1011: { devDescription: 'Blue Water (Dirt at lower-left)', gameDescription: 'Blue water with dirt at its southwestern corner', spritePosition: [4, 5] },
    1012: { devDescription: 'Blue Water (Dirt at lower-right)', gameDescription: 'Blue water with dirt at its southeastern corner', spritePosition: [3, 5] },
    1013: { devDescription: 'Blue Water (Dirt at upper-left & lower-right)', gameDescription: 'Blue water with dirt at its northwestern & southeastern corners', spritePosition: [4, 6] },
    1014: { devDescription: 'Blue Water (Dirt at upper-right & lower-left)', gameDescription: 'Blue water with dirt at its northeastern & southwestern corners', spritePosition: [3, 6] },
    1015: { devDescription: 'Blue Water (Dirt at top & bottom, left & right)', gameDescription: 'Blue water with dirt framing all of its edges', spritePosition: [0, 7] },
    1016: { devDescription: 'Blue Water (Dirt at left & lower-right)', gameDescription: 'Blue water with dirt at its western edge and southeastern', spritePosition: [1, 7] },
    1017: { devDescription: 'Blue Water (Dirt at right & lower-left)', gameDescription: 'Blue water with dirt at its eastern edge and southwestern', spritePosition: [2, 7] },
    1018: { devDescription: 'Blue Water (Dirt at left & upper-right)', gameDescription: 'Blue water with dirt at its western edge and northeastern', spritePosition: [3, 7] },
    1019: { devDescription: 'Blue Water (Dirt at right & upper-left)', gameDescription: 'Blue water with dirt at its eastern edge and northwestern', spritePosition: [4, 7] },
    1020: { devDescription: 'Blue Water (Dirt at bottom & upper-left)', gameDescription: 'Blue water with dirt at its southern edge and northwestern', spritePosition: [0, 8] },
    1021: { devDescription: 'Blue Water (Dirt at bottom & upper-right)', gameDescription: 'Blue water with dirt at its southern edge and northeastern', spritePosition: [1, 8] },
    1022: { devDescription: 'Blue Water (Dirt at top & lower-left)', gameDescription: 'Blue water with dirt at its northern edge and southwestern', spritePosition: [2, 8] },
    1023: { devDescription: 'Blue Water (Dirt at top & lower-right)', gameDescription: 'Blue water with dirt at its northern edge and southeastern', spritePosition: [3, 8] },
    1024: { devDescription: 'Brown Boulder in Blue Water - Version 1', gameDescription: 'A massive brown boulder breaches the surface of the deep blue waters', spritePosition: [5, 4], blocker: true },
    1025: { devDescription: 'Brown Boulder in Blue Water - Version 2', gameDescription: 'A massive brown boulder breaches the surface of the deep blue waters', spritePosition: [5, 5], blocker: true },
    1026: { devDescription: 'Brown Boulder in Blue Water - Version 3', gameDescription: 'A massive brown boulder breaches the surface of the deep blue waters', spritePosition: [5, 6], blocker: true },
    1027: { devDescription: 'Grey Boulder in Blue Water - Version 1', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [5, 7], blocker: true },
    1028: { devDescription: 'Grey Boulder in Blue Water - Version 2', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [5, 8], blocker: true },
    1029: { devDescription: 'Grey Boulder in Blue Water - Version 3', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [4, 8], blocker: true },
    1030: { devDescription: 'Invisible barrier marking water too deep to cross', gameDescription: 'Blue water too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1100: { devDescription: 'Blue Water (whole tile)', gameDescription: 'Blue water', spritePosition: [7, 5] },
    1101: { devDescription: 'Blue Water (Sand at top)', gameDescription: 'Blue water with sand framing its northern edge', spritePosition: [7, 6] },
    1102: { devDescription: 'Blue Water (Sand at top & right)', gameDescription: 'Blue water with sand framing its northern and eastern edges', spritePosition: [8, 6] },
    1103: { devDescription: 'Blue Water (Sand at right)', gameDescription: 'Blue water with sand framing its eastern edge', spritePosition: [8, 5] },
    1104: { devDescription: 'Blue Water (Sand at right & bottom)', gameDescription: 'Blue water with sand framing its southern and eastern edges', spritePosition: [8, 4] },
    1105: { devDescription: 'Blue Water (Sand at bottom)', gameDescription: 'Blue water with sand framing its southern edge', spritePosition: [7, 4] },
    1106: { devDescription: 'Blue Water (Sand at bottom & left)', gameDescription: 'Blue water with sand framing its southern and western edges', spritePosition: [6, 4] },
    1107: { devDescription: 'Blue Water (Sand at left)', gameDescription: 'Blue water with sand framing its western edge', spritePosition: [6, 5] },
    1108: { devDescription: 'Blue Water (Sand at left & top)', gameDescription: 'Blue water with sand framing its northern and western edges', spritePosition: [6, 6] },
    1109: { devDescription: 'Blue Water (Sand at upper-left)', gameDescription: 'Blue water with sand at its northwestern corner', spritePosition: [9, 4] },
    1110: { devDescription: 'Blue Water (Sand at upper-right)', gameDescription: 'Blue water with sand at its northeastern corner', spritePosition: [10, 4] },
    1111: { devDescription: 'Blue Water (Sand at lower-left)', gameDescription: 'Blue water with sand at its southwestern corner', spritePosition: [10, 5] },
    1112: { devDescription: 'Blue Water (Sand at lower-right)', gameDescription: 'Blue water with sand at its southeastern corner', spritePosition: [9, 5] },
    1113: { devDescription: 'Blue Water (Sand at upper-left & lower-right)', gameDescription: 'Blue water with sand at its northwestern & southeastern corners', spritePosition: [10, 6] },
    1114: { devDescription: 'Blue Water (Sand at upper-right & lower-left)', gameDescription: 'Blue water with sand at its northeastern & southwestern corners', spritePosition: [9, 6] },
    1115: { devDescription: 'Blue Water (Sand at top & bottom, left & right)', gameDescription: 'Blue water with sand framing all of its edges', spritePosition: [6, 7] },
    1116: { devDescription: 'Blue Water (Sand at left & lower-right)', gameDescription: 'Blue water with sand at its western edge and southeastern', spritePosition: [7, 7] },
    1117: { devDescription: 'Blue Water (Sand at right & lower-left)', gameDescription: 'Blue water with sand at its eastern edge and southwestern', spritePosition: [8, 7] },
    1118: { devDescription: 'Blue Water (Sand at left & upper-right)', gameDescription: 'Blue water with sand at its western edge and northeastern', spritePosition: [9, 7] },
    1119: { devDescription: 'Blue Water (Sand at right & upper-left)', gameDescription: 'Blue water with sand at its eastern edge and northwestern', spritePosition: [10, 7] },
    1120: { devDescription: 'Blue Water (Sand at bottom & upper-left)', gameDescription: 'Blue water with sand at its southern edge and northwestern', spritePosition: [6, 8] },
    1121: { devDescription: 'Blue Water (Sand at bottom & upper-right)', gameDescription: 'Blue water with sand at its southern edge and northeastern', spritePosition: [7, 8] },
    1122: { devDescription: 'Blue Water (Sand at top & lower-left)', gameDescription: 'Blue water with sand at its northern edge and southwestern', spritePosition: [8, 8] },
    1123: { devDescription: 'Blue Water (Sand at top & lower-right)', gameDescription: 'Blue water with sand at its northern edge and southeastern', spritePosition: [9, 8] },
    1124: { devDescription: 'Beige Boulder in Blue Water - Version 1', gameDescription: 'A massive beige boulder breaches the surface of the deep blue waters', spritePosition: [11, 4], blocker: true },
    1125: { devDescription: 'Beige Boulder in Blue Water - Version 2', gameDescription: 'A massive beige boulder breaches the surface of the deep blue waters', spritePosition: [11, 5], blocker: true },
    1126: { devDescription: 'Beige Boulder in Blue Water - Version 3', gameDescription: 'A massive beige boulder breaches the surface of the deep blue waters', spritePosition: [11, 6], blocker: true },
    1127: { devDescription: 'Grey Boulder in Blue Water - Version 1', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [11, 7], blocker: true },
    1128: { devDescription: 'Grey Boulder in Blue Water - Version 2', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [11, 8], blocker: true },
    1129: { devDescription: 'Grey Boulder in Blue Water - Version 3', gameDescription: 'A massive grey boulder breaches the surface of the deep blue waters', spritePosition: [10, 8], blocker: true },
    1130: { devDescription: 'Invisible barrier marking water too deep to cross', gameDescription: 'Blue water too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    1200: { devDescription: 'Blue Water (whole tile)', gameDescription: 'Blue water', spritePosition: [13, 5] },
    1201: { devDescription: 'Blue Water (Gravel at top)', gameDescription: 'Blue water with gravel framing its northern edge', spritePosition: [13, 6] },
    1202: { devDescription: 'Blue Water (Gravel at top & right)', gameDescription: 'Blue water with gravel framing its northern and eastern edges', spritePosition: [14, 6] },
    1203: { devDescription: 'Blue Water (Gravel at right)', gameDescription: 'Blue water with gravel framing its eastern edge', spritePosition: [14, 5] },
    1204: { devDescription: 'Blue Water (Gravel at right & bottom)', gameDescription: 'Blue water with gravel framing its southern and eastern edges', spritePosition: [14, 4] },
    1205: { devDescription: 'Blue Water (Gravel at bottom)', gameDescription: 'Blue water with gravel framing its southern edge', spritePosition: [13, 4] },
    1206: { devDescription: 'Blue Water (Gravel at bottom & left)', gameDescription: 'Blue water with gravel framing its southern and western edges', spritePosition: [12, 4] },
    1207: { devDescription: 'Blue Water (Gravel at left)', gameDescription: 'Blue water with gravel framing its western edge', spritePosition: [12, 5] },
    1208: { devDescription: 'Blue Water (Gravel at left & top)', gameDescription: 'Blue water with gravel framing its northern and western edges', spritePosition: [12, 6] },
    1209: { devDescription: 'Blue Water (Gravel at upper-left)', gameDescription: 'Blue water with gravel at its northwestern corner', spritePosition: [15, 4] },
    1210: { devDescription: 'Blue Water (Gravel at upper-right)', gameDescription: 'Blue water with gravel at its northeastern corner', spritePosition: [16, 4] },
    1211: { devDescription: 'Blue Water (Gravel at lower-left)', gameDescription: 'Blue water with gravel at its southwestern corner', spritePosition: [16, 5] },
    1212: { devDescription: 'Blue Water (Gravel at lower-right)', gameDescription: 'Blue water with gravel at its southeastern corner', spritePosition: [15, 5] },
    1213: { devDescription: 'Blue Water (Gravel at upper-left & lower-right)', gameDescription: 'Blue water with gravel at its northwestern & southeastern corners', spritePosition: [16, 6] },
    1214: { devDescription: 'Blue Water (Gravel at upper-right & lower-left)', gameDescription: 'Blue water with gravel at its northeastern & southwestern corners', spritePosition: [15, 6] },
    1215: { devDescription: 'Blue Water (Gravel at top & bottom, left & right)', gameDescription: 'Blue water with gravel framing all of its edges', spritePosition: [12, 7] },
    1216: { devDescription: 'Blue Water (Gravel at left & lower-right)', gameDescription: 'Blue water with gravel at its western edge and southeastern', spritePosition: [13, 7] },
    1217: { devDescription: 'Blue Water (Gravel at right & lower-left)', gameDescription: 'Blue water with gravel at its eastern edge and southwestern', spritePosition: [14, 7] },
    1218: { devDescription: 'Blue Water (Gravel at left & upper-right)', gameDescription: 'Blue water with gravel at its western edge and northeastern', spritePosition: [15, 7] },
    1219: { devDescription: 'Blue Water (Gravel at right & upper-left)', gameDescription: 'Blue water with gravel at its eastern edge and northwestern', spritePosition: [16, 7] },
    1220: { devDescription: 'Blue Water (Gravel at bottom & upper-left)', gameDescription: 'Blue water with gravel at its southern edge and northwestern', spritePosition: [12, 8] },
    1221: { devDescription: 'Blue Water (Gravel at bottom & upper-right)', gameDescription: 'Blue water with gravel at its southern edge and northeastern', spritePosition: [13, 8] },
    1222: { devDescription: 'Blue Water (Gravel at top & lower-left)', gameDescription: 'Blue water with gravel at its northern edge and southwestern', spritePosition: [14, 8] },
    1223: { devDescription: 'Blue Water (Gravel at top & lower-right)', gameDescription: 'Blue water with gravel at its northern edge and southeastern', spritePosition: [15, 8] },
    1224: { devDescription: 'Red Boulder in Blue Water - Version 1', gameDescription: 'A massive red boulder breaches the surface of the deep blue waters', spritePosition: [17, 4], blocker: true },
    1225: { devDescription: 'Red Boulder in Blue Water - Version 2', gameDescription: 'A massive red boulder breaches the surface of the deep blue waters', spritePosition: [17, 5], blocker: true },
    1226: { devDescription: 'Red Boulder in Blue Water - Version 3', gameDescription: 'A massive red boulder breaches the surface of the deep blue waters', spritePosition: [17, 6], blocker: true },
    1227: { devDescription: 'Burgundy Boulder in Blue Water - Version 1', gameDescription: 'A massive burgundy boulder breaches the surface of the deep blue waters', spritePosition: [17, 7], blocker: true },
    1228: { devDescription: 'Burgundy Boulder in Blue Water - Version 2', gameDescription: 'A massive burgundy boulder breaches the surface of the deep blue waters', spritePosition: [17, 8], blocker: true },
    1229: { devDescription: 'Burgundy Boulder in Blue Water - Version 3', gameDescription: 'A massive burgundy boulder breaches the surface of the deep blue waters', spritePosition: [16, 8], blocker: true },
    1230: { devDescription: 'Invisible barrier marking water too deep to cross', gameDescription: 'Blue water too deep to traverse on foot', spritePosition: [-1, -1], blocker: true },

    // Bridges & Piers
    2000: { devDescription: 'Bridge Start Horizontal (Wood)', gameDescription: 'Wooden ramp rising from west to east onto a bridge', spritePosition: [0, 12], xPosMod: -0.01, xScaleMod: 0.1 },
    2001: { devDescription: 'Bridge End Horizontal (Wood)', gameDescription: 'Wooden ramp rising from east to west onto a bridge', spritePosition: [0, 10], xPosMod: 0.01, xScaleMod: 0.1 },
    2002: { devDescription: 'Bridge Bottom Intact Horizontal (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 9] },
    2003: { devDescription: 'Bridge Bottom Damaged Horizontal (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [2, 9] },
    2004: { devDescription: 'Bridge Bottom Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 9], blocker: true },
    2005: { devDescription: 'Bridge Middle Intact Horizontal (Wood)', gameDescription: 'An intact section of a wooden bridge', spritePosition: [1, 10] },
    2006: { devDescription: 'Bridge Middle Damaged Horizontal (Wood)', gameDescription: 'A damaged section of a wooden bridge', spritePosition: [2, 10] },
    2007: { devDescription: 'Bridge Middle Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable section of a wooden bridge', spritePosition: [3, 10], blocker: true },
    2008: { devDescription: 'Bridge Top Intact Horizontal (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 11] },
    2009: { devDescription: 'Bridge Top Damaged Horizontal (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [2, 11] },
    2010: { devDescription: 'Bridge Top Destroyed Horizontal (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 11], blocker: true },
    2011: { devDescription: 'Bridge Start Vertical (Wood)', gameDescription: 'Wooden ramp rising from north to south onto a bridge', spritePosition: [0, 11], zPosMod: -0.02, zScaleMod: 0.12 },
    2012: { devDescription: 'Bridge End Vertical (Wood)', gameDescription: 'Wooden ramp rising from south to north onto a bridge', spritePosition: [0, 9], zPosMod: 0.02, zScaleMod: 0.12 },
    2013: { devDescription: 'Bridge Right Intact Vertical (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [3, 12] },
    2014: { devDescription: 'Bridge Right Damaged Vertical (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [3, 13] },
    2015: { devDescription: 'Bridge Right Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [3, 14], blocker: true },
    2016: { devDescription: 'Bridge Middle Intact Vertical (Wood)', gameDescription: 'An intact section of a wooden bridge', spritePosition: [2, 12] },
    2017: { devDescription: 'Bridge Middle Damaged Vertical (Wood)', gameDescription: 'A damaged section of a wooden bridge', spritePosition: [2, 13] },
    2018: { devDescription: 'Bridge Middle Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable section of a wooden bridge', spritePosition: [2, 14], blocker: true },
    2019: { devDescription: 'Bridge Left Intact Vertical (Wood)', gameDescription: 'An intact edge of a wooden bridge', spritePosition: [1, 12] },
    2020: { devDescription: 'Bridge Left Damaged Vertical (Wood)', gameDescription: 'A damaged edge of a wooden bridge', spritePosition: [1, 13] },
    2021: { devDescription: 'Bridge Left Destroyed Vertical (Wood)', gameDescription: 'The destroyed, impassable edge of a wooden bridge', spritePosition: [1, 14], blocker: true },
    2022: { devDescription: 'Pier - Ends on right (Wood)', gameDescription: 'Eastern edge of a disintegrating pier', spritePosition: [0, 15], blocker: true },
    2023: { devDescription: 'Pier - Open both sides (Wood)', gameDescription: 'Section of a disintegrating pier', spritePosition: [1, 15], blocker: true },
    2024: { devDescription: 'Pier - Ends on left (Wood)', gameDescription: 'Weastern edge of a disintegrating pier', spritePosition: [2, 15], blocker: true },
}

export class TileCtrl {
    private _bridgeBase: number;
    private _bridgeEnd: number;
    private _groundPlantBase: number;
    private _groundGrassEnd: number;
    // Lookup table for grass/plant tiles when assigning edge graphics.
    private _groundPlantLookupTable: { [key: string]: number };
    private _waterBase: number;
    private _waterEnd: number;
    // Lookup table for water tiles when assigning edge graphics.
    private _waterLookupTable: { [key: string]: number };    

    constructor(ancientRuinsSpec: AncientRuinsSpecifications) {
        const mod = this._setGroundStart(ancientRuinsSpec.groundMaterial);
        this._setPlantStart(ancientRuinsSpec.plantColor, this._groundPlantBase);
        this._setWaterStart(ancientRuinsSpec.waterColor, mod);
        
        this._groundGrassEnd = this._groundPlantBase + 20;
        this._waterEnd = this._waterBase + 99;
        this._bridgeBase = 2000;
        this._bridgeEnd = 2999;

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
            case PlantColor.Brown: {
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
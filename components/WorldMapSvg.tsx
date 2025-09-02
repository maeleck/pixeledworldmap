
import React, { useMemo } from 'react';

// The user-provided ASCII art map layout.
const mapLayout: string[] = [
"....................................................................................................",
".                                                                                                  .",
".                                                                                                  .",
".                                ...-=.-                                                           .",
".                       ..-**+*#+=##**#+..                               ..                        .",
".                       .++=#+:.++*#+*#*+:..                      .. .-***#*+....                  .",
".                        .:::..  .+#+*#*+#*.                   .=+:*-+#***#**#***-*+#*+...         .",
".      ......   .*==**-...--*++. .+#+*##+-        .-##+**:=:*++#*+:#**##*##**##**#**##**#*+**+.    .",
".    .-#**#***#**#*+*=-+=++*.-+#=:.#**#-.       .+*++++*#++##**#*+##**##*##**##**#**#***#**#**.    .",
".    .-=**#**##**#**##+*#*=..:-#-. .+*#      .-..#*+:+=*#*+##**#*+##**##*##**##**#**----:=--:..    .",
".    ..***:.=*#**#**##+*#:. .=*#=-           .+:.===##+*%*+##**##+##**##*##**##**#=::. .*:         .",
".     .+-.   .:=*#**##+*#***:+*#*+=.         .:=##*+##+*#*+##**#*+##**##*##**##**#*+#. ..          .",
".               :****#+*#***#+*#=:++        .**=*:=-*#-:::=#:+*#*+##**#*+*#**#***+....             .",
".               .#**##**#**##+*#*-...       .##:..=-.=+*#*+#++*##+##**##*##**##-*...               .",
".               ..**##+*#**##=:..           :##+##*++*-=+*+#+**#*+##**##**#**##:..                 .",
".                ..+##**#**#*..           :**##+#%*+##+##++##=--++##**##*##**#:.                   .",
".                 ..=-+*......            :*+##+#%*+##+*#-=#*=:...##*:.==##:...                    .",
".                    .-*#++:.             :**##+#%*+##+#%*--:    .:#:. .==*+.                      .",
".                        .:++.             .:::.:-*+##+*#*+*.           .:-..                      .",
".                          .#+#%=..              :*+%#+#%#:.              -:....*....              .",
".                         .-#+*##+#=             .=+##+*#+:..             .-+.-+#:=:++**-          .",
".                         .*#*###+##***.          =+%#+#%=.*+.             ..--.+-::..::+:         .",
".                          .*+*#*+*#+*+.          .=##+*=..+.                    .+*#*=*=          .",
".                           .-*%#*#%*#.            -%%++.                      -###*%#*##+.        .",
".                           .=*#*+**:.             .::..                       .*#*+****#*:        .",
".                           .=#%#**.                                           .*=....+##-..=-.    .",
".                           :+*#*:.                                                  ..... .=:.    .",
".                           .=#:..                                                        .:...    .",
".                           :++..                                                                  .",
".                           .:=.                                                                   .",
".                                                                                                  .",
".                                                                                                  .",
"....................................................................................................",
];

// Replaced Tailwind classes with hex codes for SVG fill
const getLandColor = (char: string): string => {
    switch (char) {
        case '#': return '#064e3b'; // emerald-900
        case '%': return '#065f46'; // emerald-800
        case '*': return '#047857'; // emerald-700
        case '+': return '#059669'; // emerald-600
        case '=': return '#10b981'; // emerald-500
        case '-': return '#34d399'; // emerald-400
        case ':': return '#6ee7b7'; // emerald-300
        case '.': return 'transparent'; // Was emerald-200, making ocean transparent
        default: return 'transparent';
    }
};


const generatePathsForColor = (colorChar: string, layout: string[]): string[] => {
    const height = layout.length;
    if (height === 0) return [];
    const width = layout[0].length;
    if (width === 0) return [];

    const pointToNeighbors = new Map<string, string[]>();
    const canonicalSegments = new Set<string>();

    const addEdge = (x1: number, y1: number, x2: number, y2: number) => {
        const key1 = `${x1},${y1}`;
        const key2 = `${x2},${y2}`;
        const canonical = key1 < key2 ? `${key1}:${key2}` : `${key2}:${key1}`;
        
        if (canonicalSegments.has(canonical)) return;
        canonicalSegments.add(canonical);

        if (!pointToNeighbors.has(key1)) pointToNeighbors.set(key1, []);
        if (!pointToNeighbors.has(key2)) pointToNeighbors.set(key2, []);
        pointToNeighbors.get(key1)!.push(key2);
        pointToNeighbors.get(key2)!.push(key1);
    };

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (layout[y][x] === colorChar) {
                // Top edge
                if (y === 0 || layout[y - 1][x] !== colorChar) addEdge(x, y, x + 1, y);
                // Bottom edge
                if (y === height - 1 || layout[y + 1][x] !== colorChar) addEdge(x, y + 1, x + 1, y + 1);
                // Left edge
                if (x === 0 || layout[y][x - 1] !== colorChar) addEdge(x, y, x, y + 1);
                // Right edge
                if (x === width - 1 || layout[y][x + 1] !== colorChar) addEdge(x + 1, y, x + 1, y + 1);
            }
        }
    }

    const paths: string[] = [];

    while (pointToNeighbors.size > 0) {
        const startPointKey = pointToNeighbors.keys().next().value;
        let currentPointKey = startPointKey;
        let path = `M ${startPointKey.replace(',', ' ')}`;

        while (pointToNeighbors.has(currentPointKey)) {
            const neighbors = pointToNeighbors.get(currentPointKey)!;
            if (neighbors.length === 0) {
                pointToNeighbors.delete(currentPointKey);
                break;
            }
            const nextPointKey = neighbors.shift()!;
            
            const nextPointNeighbors = pointToNeighbors.get(nextPointKey)!;
            const index = nextPointNeighbors.indexOf(currentPointKey);
            if (index > -1) nextPointNeighbors.splice(index, 1);

            if (neighbors.length === 0) pointToNeighbors.delete(currentPointKey);
            
            currentPointKey = nextPointKey;
            
            if (currentPointKey === startPointKey) {
                path += ' Z';
                break;
            } else {
                path += ` L ${currentPointKey.replace(',', ' ')}`;
            }
        }
        paths.push(path);
    }
    return paths;
};

export const WorldMapSvg = () => {
    const gridHeight = mapLayout.length;
    const gridWidth = mapLayout[0]?.length || 1;

    const landmasses = useMemo(() => {
        const allPaths: { color: string; d: string; }[] = [];
        const uniqueChars = new Set(mapLayout.join(''));

        uniqueChars.forEach(char => {
            const color = getLandColor(char);
            if (color !== 'transparent') {
                const paths = generatePathsForColor(char, mapLayout);
                paths.forEach(d => {
                    allPaths.push({ color: color, d: d });
                });
            }
        });

        return allPaths;
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
            <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox={`0 0 ${gridWidth} ${gridHeight}`}
            >
                {landmasses.map((path, index) => (
                    <path key={index} d={path.d} fill={path.color} />
                ))}
            </svg>
        </div>
    );
};

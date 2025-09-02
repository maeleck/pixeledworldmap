
import React, { useRef, useEffect, useMemo } from 'react';
import { worldAtlasData } from '../data/world-atlas';

declare const d3: any;
declare const topojson: any;

export const Globe: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);

  const countries = useMemo(() => {
    if (typeof topojson === 'undefined' || !worldAtlasData) return null;
    try {
        return topojson.feature(worldAtlasData, worldAtlasData.objects.countries);
    } catch (error) {
        console.error("Error processing TopoJSON data:", error);
        return null;
    }
  }, []);

  // Effect for initial setup of D3 elements
  useEffect(() => {
    if (!svgRef.current || !gRef.current || !countries || typeof d3 === 'undefined') return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);
    
    // Only setup the map once
    if (g.selectAll("path").empty()) {
        const { width, height } = svg.node().getBoundingClientRect();
        if (width === 0 || height === 0) return; // Wait for layout

        const projection = d3.geoMercator().fitSize([width, height], countries);
        const pathGenerator = d3.geoPath().projection(projection);

        g.selectAll("path")
          .data(countries.features)
          .enter().append("path")
            .attr("d", pathGenerator)
            .attr("class", "country")
            .style("stroke", "#1a202c")
            .style("stroke-width", 0.5)
            .style("fill", "#4a5568");

        const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", (event: any) => {
                g.attr("transform", event.transform);
            });
        
        svg.call(zoom);
    }
  }, [countries]);


  return (
    <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing">
      <g ref={gRef} />
    </svg>
  );
};
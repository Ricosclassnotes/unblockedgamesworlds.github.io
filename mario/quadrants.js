function resetQuadrants(){window.quads=[],quads.rows=5,quads.cols=6,setQuadDimensions(),createQuads()}function Quadrant(s,d){this.left=d,this.top=(s-1)*quads.height,this.right=this.left+quads.width,this.bottom=this.top+quads.height,this.things=[],this.numobjects=this.tolx=this.toly=0}function createQuadrants(){quads=[],quads.rows=5,quads.cols=6,setQuadDimensions(),createQuads()}function setQuadDimensions(){quads.width=quads.rightdiff=Math.round(window.innerWidth/(quads.cols-3)),quads.height=Math.round(window.innerHeight/(quads.rows-2)),quads.delx=-2*quads.width}function createQuads(){for(var s=0;s<quads.cols;++s)addQuadCol((s-2)*quads.width);quads.leftmost=quads[0]}function addQuadCol(s){for(var d=0;d<quads.rows;++d)quads.push(new Quadrant(d,s));quads.rightmost=quads[quads.length-1]}function shiftQuadCol(){var s=[];if(!map.nodeletequads)for(var d=quads.rows-1;d>=0;--d)s.push(deleteQuad(quads.shift()));quads.leftmost=quads[0],quads.rightdiff=quads.width}function deleteQuad(s){return s.element&&document.body.removeChild(s.element),s}function updateQuads(s){for(quads.rightdiff+=s||0;quads.leftmost.left<=quads.delx;)addQuadCol(quads.rightmost.right),shiftQuadCol(),spawnMap()}function determineAllQuadrants(){for(var s=0;s<quads.length;++s)quads[s].numthings=0;for(var d=0;d<solids.length;++d)0!=solids[d].moved&&determineThingQuadrants(solids[d])}function determineThingQuadrants(s){s.numquads=0;for(var d=0,t=quads.length;d<t&&!(objectInQuadrant(s,quads[d])&&(setThingInQuadrant(s,quads[d]),s.numquads>s.maxquads));++d);}function setThingInQuadrant(s,d){s.quads[s.numquads]=d,d.things[d.numthings]=s,++s.numquads,++d.numthings}
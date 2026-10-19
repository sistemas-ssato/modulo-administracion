import http from 'node:http';
import {readFile} from 'node:fs/promises';
const types={'.png':'image/png','.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const f=path==='/'?'index.html':path.slice(1);if(!['index.html','style.css','app.js','logo.png'].includes(f)){res.writeHead(404);res.end();return;}try{const b=await readFile('dist/'+f);res.setHeader('Content-Type',types['.'+f.split('.').pop()]||'text/plain');res.end(b);}catch{res.writeHead(404);res.end();}}).listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+(process.env.PORT||4173)));


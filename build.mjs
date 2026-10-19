import {stripTypeScriptTypes} from 'node:module';
import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
writeFileSync('dist/app.js',stripTypeScriptTypes(readFileSync('app.ts','utf8')));
for(const f of ['index.html','style.css','logo.png'])copyFileSync(f,'dist/'+f);
const standalone=readFileSync('index.html','utf8').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+readFileSync('style.css','utf8')+'</style>').replace('<script type="module" src="app.js"></script>',()=>'<script type="module">'+readFileSync('dist/app.js','utf8')+'</script>');
const bundled=standalone.replaceAll('logo.png','data:image/png;base64,'+readFileSync('logo.png').toString('base64'));
writeFileSync('dist/siges-demo.html',bundled);

console.log('Build TypeScript terminado.');

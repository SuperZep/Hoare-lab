s=open('src.html').read()
s=s.replace('/*ENGINE*/',open('core.js').read()+open('exercises.js').read()+open('exercises2.js').read()).replace('/*LANGENG*/',open('langengines.js').read()).replace('/*APP*/',open('app.js').read()).replace('/*WIKI*/',open('wiki.js').read()).replace('/*LX*/',open('vendor/qrcode.js').read()+open('daily.js').read()+open('weeks.js').read()+open('lx.js').read())
open('../index.html','w').write(s)

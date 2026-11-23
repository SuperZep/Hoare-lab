s=open('src.html').read()
s=s.replace('/*ENGINE*/',open('core.js').read()+open('exercises.js').read()+open('exercises2.js').read()).replace('/*APP*/',open('app.js').read())
open('../index.html','w').write(s)

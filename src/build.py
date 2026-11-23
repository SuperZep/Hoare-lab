s=open('src.html').read()
s=s.replace('/*ENGINE*/',open('core.js').read()+open('exercises.js').read()+open('exercises2.js').read()).replace('/*LANGENG*/',open('langengines.js').read()).replace('/*APP*/',open('app.js').read()).replace('/*WIKI*/',open('wiki.js').read()).replace('/*LX*/',open('vendor/qrcode.js').read()+open('diag.js').read()+open('diagtasks.js').read()+open('daily.js').read()+open('weeks.js').read()+open('tour.js').read()+open('glossary.js').read()+open('extras.js').read()+open('lx.js').read())
open('../index.html','w').write(s)

# PWA files for GitHub Pages (manifest, service worker with build version, icons)
import shutil, os, time
for f in os.listdir('pwa'):
    src = os.path.join('pwa', f)
    if f == 'sw.js': open('../sw.js', 'w').write(open(src).read().replace('__BUILD__', time.strftime('%Y%m%d%H%M%S')))
    else: shutil.copy(src, os.path.join('..', f))

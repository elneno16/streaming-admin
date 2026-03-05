fetch('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json').then(r => r.json()).then(d => {
    const names = ['Amazon Prime', 'Amazon', 'Amazon Prime Video', 'Disney', 'Disney+', 'HBO', 'HBO Max', 'Max', 'Prime Video', 'Prime'];
    d.icons.forEach(i => {
        if (i.title.toLowerCase().includes('prime') || i.title.toLowerCase().includes('disney') || i.title.toLowerCase().includes('hbo') || i.title.toLowerCase().includes('max')) {
            console.log(i.title, i.slug || i.title.toLowerCase().replace(/[^a-z0-9]/g, ''));
        }
    })
})

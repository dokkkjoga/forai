var e = document.getElementById(`play`)
  , t = document.getElementById(`pause`)
  , n = document.getElementById(`audio`)
  , r = document.getElementById(`main-text`)
  , i = await fetch(`/forai/legendas_geradas/c538jwbUTw5hN92MILQ6B9Efse6vzfe0moYVodpv.srt`).then(e => e.text()).catch(e => console.error(`Erro ao abrir o arquivo:`, e));

console.log(i);

function a(e) {
    return e.trim().split(/\n\s*\n/).map(e => {
        let t = e.split(`\n`);
        if (t.length < 3) return null;
        let n = t[0].trim()
          , [r,i] = t[1].split(` --> `)
          , a = t.slice(2).join(` `).trim();
        return {
            id: parseInt(n),
            inicio: o(r),
            fim: o(i),
            texto: a
        }
    }).filter(e => e !== null)
}

function o(e) {
    let[t,n] = e.trim().replace(`,`, `.`).split(`.`)
      , [r,i,a] = t.split(`:`).map(Number);
    return r * 3600 + i * 60 + a + (parseFloat(`0.` + n) || 0)
}

if (i) {
    let e = a(i);
    console.log(e)
}

document.getElementById(`gradient-red`),
document.getElementById(`gradient-blue`);

var s = []
  , c = -1
  , l = !1
  , u = !1;

i && (s = a(i),
console.log(`Legendas carregadas com sucesso:`, s)),

n.addEventListener(`timeupdate`, () => {
    let e = n.currentTime;
    document.querySelector(`.camera-wrapper`);
    let t = s.findIndex(t => e >= t.inicio && e <= t.fim);
    if (t !== c) {
        if (c = t,
        c === -1) {
            r.innerText = ``,
            r.className = ``,
            l = !1,
            u = !1;
            return
        }
        r.innerText = s[c].texto,
        l = !1,
        u = !1,
        d(2)
    }
    if (c !== -1) {
        let t = s[c]
          , n = t.fim - t.inicio
          , i = t.inicio + n * .85;
        e >= t.inicio && e < i && !l && (l = !0,
        u = !1,
        r.classList.remove(`text-exit`),
        r.offsetWidth,
        r.style.setProperty(`--duration`, `${n * .85}s`),
        r.classList.add(`text-anim`),
        r.classList.add(`text`),
        r.classList.add(`bright`)),
        e >= i && e <= t.fim && !u && (u = !0,
        r.classList.remove(`text-anim`),
        r.offsetWidth,
        r.style.setProperty(`--duration-exit`, `${n * .15}s`),
        r.classList.add(`text-exit`))
    }
});

e.addEventListener(`click`, r => {
    e.classList.add(`hidden`),
    t.classList.remove(`hidden`),
    n.play(),
    t.classList.add(`animation`),
    t.addEventListener(`animationend`, e => {
        t.classList.add(`hidden`)
    })
});

// FUNÇÃO CORRIGIDA CONTRA O BUG DO CELULAR
function d(quantidade) {
    let container = document.querySelector(`main`);
    for (let index = 0; index < quantidade; index++) {
        let elementoPai = document.createElement(`div`);
        let elementoFilho = document.createElement(`div`);
        
        elementoPai.classList.add(`behind`, `come-in`);
        elementoFilho.classList.add(`heart`);
        
        // Uso explícito de 'let' em cada variável para isolar o escopo no mobile
        let randomBottom = Math.floor(Math.random() * 16) + 35;
        let randomRight = Math.floor(Math.random() * 301) + -150; // Mudado para evitar conflito com 'i' das legendas
        let randomScale = Math.floor(Math.random() * 76) + 25;
        let durationFilho = Math.floor(Math.random() * 8) + 8;
        let durationPai = Math.floor(Math.random() * 76) + 25;
        
        // Aplicação dos estilos com unidades explícitas
        elementoPai.style.bottom = `${randomBottom}%`;
        elementoPai.style.right = `${randomRight}%`;
        
        elementoFilho.style.scale = `${randomScale}%`;

        // requestAnimationFrame ajuda o celular a processar as velocidades dinâmicas a tempo
        requestAnimationFrame(() => {
            elementoPai.style.animationDuration = `${durationPai}s`;
            elementoFilho.style.animationDuration = `${durationFilho}s`;
            elementoPai.style.webkitAnimationDuration = `${durationPai}s`; // Compatibilidade extra com Safari (iOS)
            elementoFilho.style.webkitAnimationDuration = `${durationFilho}s`;
        });
        
        elementoPai.appendChild(elementoFilho);
        container.appendChild(elementoPai);
    }
}

e.addEventListener(`mouseenter`, t => {
    e.classList.add(`bright`)
});

e.addEventListener(`mouseleave`, t => {
    e.classList.remove(`bright`)
});

n.addEventListener(`ended`, t => {
    e.classList.remove(`hidden`),
    document.querySelectorAll(`.behind`).forEach(e => {
        e.classList.add(`exit`)
    })
});

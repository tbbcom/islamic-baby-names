  (function(){
    "use strict";
    // ---------- Small curated dataset (expand via GitHub JSON later) ----------
    const data = [
      // Lelaki (M)
      {n:"Muhammad",g:"M",o:"Arabic",len:8,style:"classic",themes:["suci","mulia"],malay:true,mean_ms:"Yang Terpuji",mean_en:"The Praised"},
      {n:"Ahmad",g:"M",o:"Arabic",len:5,style:"classic",themes:["suci","mulia"],malay:true,mean_ms:"Yang Terpuji",mean_en:"Most Commendable"},
      {n:"Adam",g:"M",o:"Arabic",len:4,style:"classic",themes:["suci"],malay:true,mean_ms:"Manusia pertama",mean_en:"First man"},
      {n:"Zayd",g:"M",o:"Arabic",len:4,style:"classic",themes:["kuat"],malay:true,mean_ms:"Pertambahan, kemajuan",mean_en:"Growth, abundance"},
      {n:"Zaki",g:"M",o:"Arabic",len:4,style:"modern",themes:["suci","ilmu"],malay:true,mean_ms:"Suci, cerdik",mean_en:"Pure, intelligent"},
      {n:"Irfan",g:"M",o:"Arabic",len:5,style:"classic",themes:["ilmu"],malay:true,mean_ms:"Pengetahuan",mean_en:"Knowledge"},
      {n:"Hakim",g:"M",o:"Arabic",len:5,style:"classic",themes:["ilmu","mulia"],malay:true,mean_ms:"Bijaksana",mean_en:"Wise, judicious"},
      {n:"Hafiz",g:"M",o:"Arabic",len:5,style:"classic",themes:["suci","kuat"],malay:true,mean_ms:"Penjaga, penghafal (Al-Quran)",mean_en:"Guardian, memorizer (Quran)"},
      {n:"Rayyan",g:"M",o:"Arabic",len:6,style:"modern",themes:["rahmah"],malay:true,mean_ms:"Pintu syurga utk orang berpuasa",mean_en:"Gate of Paradise for the fasting"},
      {n:"Ammar",g:"M",o:"Arabic",len:5,style:"classic",themes:["kuat","mulia"],malay:true,mean_ms:"Yang tekun/berbudi",mean_en:"Long-lived, builder"},
      {n:"Khalid",g:"M",o:"Arabic",len:6,style:"classic",themes:["kuat"],malay:true,mean_ms:"Yang kekal/berani",mean_en:"Eternal, brave"},
      {n:"Imran",g:"M",o:"Arabic",len:5,style:"classic",themes:["mulia"],malay:true,mean_ms:"Kemakmuran",mean_en:"Prosperity"},
      {n:"Luqman",g:"M",o:"Arabic",len:6,style:"classic",themes:["ilmu"],malay:true,mean_ms:"Tokoh hikmah",mean_en:"Sage of wisdom"},
      {n:"Yusuf",g:"M",o:"Arabic",len:5,style:"classic",themes:["mulia"],malay:true,mean_ms:"Nabi Yusuf",mean_en:"Prophet Joseph"},
      {n:"Idris",g:"M",o:"Arabic",len:5,style:"classic",themes:["ilmu"],malay:true,mean_ms:"Nabi Idris (menulis)",mean_en:"Prophet Idris"},
      {n:"Nuh",g:"M",o:"Arabic",len:3,style:"classic",themes:["suci"],malay:true,mean_ms:"Nabi Nuh",mean_en:"Prophet Noah"},
      {n:"Salman",g:"M",o:"Arabic",len:6,style:"classic",themes:["suci","mulia"],malay:true,mean_ms:"Sejahtera",mean_en:"Secure, safe"},
      {n:"Zuhair",g:"M",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Berseri/bersinar",mean_en:"Radiant"},
      {n:"Aqil",g:"M",o:"Arabic",len:4,style:"classic",themes:["ilmu"],malay:true,mean_ms:"Cerdik/berakal",mean_en:"Intelligent"},
      {n:"Faris",g:"M",o:"Arabic",len:5,style:"classic",themes:["kuat","mulia"],malay:true,mean_ms:"Pahlawan, penunggang kuda",mean_en:"Knight"},
      {n:"Ihsan",g:"M",o:"Arabic",len:5,style:"classic",themes:["mulia","rahmah"],malay:true,mean_ms:"Kebaikan/ihsan",mean_en:"Excellence, benevolence"},
      {n:"Ridwan",g:"M",o:"Arabic",len:6,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Keredaaan",mean_en:"Pleasure (of Allah)"},
      {n:"Ayman",g:"M",o:"Arabic",len:5,style:"modern",themes:["mulia"],malay:true,mean_ms:"Yang diberkati/kanan",mean_en:"Blessed, right-hand"},
      {n:"Rauf",g:"M",o:"Arabic",len:4,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Pengasih",mean_en:"Kind, compassionate"},
      // Perempuan (F)
      {n:"Aaliyah",g:"F",o:"Arabic",len:7,style:"modern",themes:["mulia"],malay:true,mean_ms:"Tinggi/mulia",mean_en:"Exalted"},
      {n:"Aisyah",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Hidup, isteri Nabi",mean_en:"Alive; wife of the Prophet"},
      {n:"Maryam",g:"F",o:"Arabic",len:6,style:"classic",themes:["suci"],malay:true,mean_ms:"Maryam (ibunda Isa)",mean_en:"Mary (mother of Jesus)"},
      {n:"Hannah",g:"F",o:"Arabic",len:6,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Belas kasih",mean_en:"Grace, compassion"},
      {n:"Sofia",g:"F",o:"Arabic/Greek",len:5,style:"modern",themes:["ilmu"],malay:true,mean_ms:"Kebijaksanaan",mean_en:"Wisdom"},
      {n:"Inara",g:"F",o:"Arabic",len:5,style:"modern",themes:["mulia"],malay:true,mean_ms:"Cahaya/bersinar",mean_en:"Illumination"},
      {n:"Nur",g:"F",o:"Arabic",len:3,style:"classic",themes:["suci"],malay:true,mean_ms:"Cahaya",mean_en:"Light"},
      {n:"Safiya",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Yang tulus/bersih",mean_en:"Pure, best friend"},
      {n:"Zahra",g:"F",o:"Arabic",len:5,style:"classic",themes:["mulia"],malay:true,mean_ms:"Bunga, berseri",mean_en:"Flower, radiant"},
      {n:"Amara",g:"F",o:"Arabic",len:5,style:"modern",themes:["mulia"],malay:true,mean_ms:"Anggun, kekal",mean_en:"Graceful, everlasting"},
      {n:"Aleena",g:"F",o:"Arabic",len:6,style:"modern",themes:["rahmah"],malay:true,mean_ms:"Lembut, penyayang",mean_en:"Soft, kind"},
      {n:"Sumayyah",g:"F",o:"Arabic",len:7,style:"classic",themes:["kuat"],malay:true,mean_ms:"Syahidah pertama",mean_en:"First martyr"},
      {n:"Zainab",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Nama sahabiyah",mean_en:"Honored name"},
      {n:"Jannah",g:"F",o:"Arabic",len:6,style:"classic",themes:["suci","rahmah"],malay:true,mean_ms:"Syurga",mean_en:"Paradise"},
      {n:"Balqis",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia","ilmu"],malay:true,mean_ms:"Ratu Saba'",mean_en:"Queen of Sheba"},
      {n:"Khadeeja",g:"F",o:"Arabic",len:8,style:"classic",themes:["mulia"],malay:true,mean_ms:"Khadijah (isteri Nabi)",mean_en:"Khadijah"},
      {n:"Salma",g:"F",o:"Arabic",len:5,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Sejahtera",mean_en:"Peaceful"},
      {n:"Halimah",g:"F",o:"Arabic",len:7,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Penyayang, lemah lembut",mean_en:"Gentle, forbearing"},
      {n:"Imani",g:"F",o:"Arabic",len:5,style:"modern",themes:["suci"],malay:true,mean_ms:"Keimanan",mean_en:"Faith"},
      {n:"Yasmin",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Melur",mean_en:"Jasmine"},
      {n:"Wardah",g:"F",o:"Arabic",len:6,style:"classic",themes:["mulia"],malay:true,mean_ms:"Bunga mawar",mean_en:"Rose"},
      {n:"Raihana",g:"F",o:"Arabic",len:7,style:"classic",themes:["rahmah"],malay:true,mean_ms:"Sejenis bunga harum",mean_en:"Sweet basil"},
      {n:"Tayyiba",g:"F",o:"Arabic",len:7,style:"classic",themes:["suci","mulia"],malay:true,mean_ms:"Baik/suci",mean_en:"Good, pure"}
    ];

    // Huruf dropdown
    const letters = Array.from(new Set(data.map(x=>x.n[0].toUpperCase()))).sort();
    const $ = id=>document.getElementById(id);
    const letterSel = $("ib-letter"); letters.forEach(h=>{ const o=document.createElement("option"); o.value=h; o.textContent=h; letterSel.appendChild(o); });

    // Elements
    const el = {
      gender:$("ib-gender"), letter:$("ib-letter"), len:$("ib-length"),
      theme:$("ib-theme"), style:$("ib-style"), max:$("ib-max"),
      key:$("ib-key"), malay:$("ib-malay"),
      run:$("ib-run"), reset:$("ib-reset"), list:$("ib-list"), sum:$("ib-summary"),
      link:$("ib-permalink")
    };

    function lenBucket(n){ if(n<=4) return "short"; if(n<=7) return "med"; return "long"; }
    function matchTheme(x,t){
      if(t==="any") return true;
      return (x.themes||[]).includes(t);
    }

    function toParams(){
      const p = new URLSearchParams({
        g:el.gender.value, l:el.letter.value, le:el.len.value, t:el.theme.value,
        s:el.style.value, m:el.max.value, q:el.key.value.trim(), my:el.malay.value
      });
      return p.toString();
    }
    function fromParams(){
      const p = new URLSearchParams(location.search);
      if(!p.has("g")) return;
      el.gender.value = p.get("g")||"all";
      el.letter.value = p.get("l")||"all";
      el.len.value = p.get("le")||"any";
      el.theme.value = p.get("t")||"any";
      el.style.value = p.get("s")||"any";
      el.max.value = p.get("m")||"30";
      el.key.value = p.get("q")||"";
      el.malay.value = p.get("my")||"any";
    }

    function render(list){
      el.list.innerHTML = list.map(x=>`
        <article class="icard" tabindex="0" aria-label="${x.n}">
          <div class="iname">${x.n} <span class="imuted">(${x.g==="M"?"Lelaki":"Perempuan"})</span></div>
          <div class="imuted">${x.o} • ${x.style[0].toUpperCase()+x.style.slice(1)} • ${x.len} huruf</div>
          <p><strong>Maksud (BM):</strong> ${x.mean_ms}</p>
          <p><strong>Meaning (EN):</strong> ${x.mean_en}</p>
          <div>
            ${(x.themes||[]).map(t=>`<span class="itag">${t}</span>`).join("")}
            ${x.malay?`<span class="itag">Mesra ejaan MY</span>`:""}
          </div>
          <div class="isub" style="margin-top:8px">
            <button class="ibtn ibtn-outline icopy" data-copy="${x.n}">Salin Nama</button>
            ${suggestCombo(x)}
          </div>
        </article>
      `).join("");
      // Copy handlers
      el.list.querySelectorAll(".icopy").forEach(btn=>{
        btn.addEventListener("click",()=>{ navigator.clipboard.writeText(btn.dataset.copy); btn.textContent="Disalin!"; setTimeout(()=>btn.textContent="Salin Nama",1000); });
      });
    }

    function suggestCombo(x){
      // Asas gabungan: Muhammad/Ahmad untuk lelaki; Nur/Sri untuk perempuan; Abdul + Asma' (tema)
      if(x.g==="M"){
        const asm = {rahmah:"Rahman",ilmu:"Hakim",mulia:"Karim",kuat:"Qawiy",suci:"Salih"};
        const att = asm[(x.themes||[])[0]] || "Karim";
        return `<button class="ibtn ibtn-outline icopy" data-copy="Muhammad ${x.n}">Muhammad ${x.n}</button>
                <button class="ibtn ibtn-outline icopy" data-copy="Abdul ${att}">Abdul ${att}</button>`;
      } else {
        return `<button class="ibtn ibtn-outline icopy" data-copy="Nur ${x.n}">Nur ${x.n}</button>
                <button class="ibtn ibtn-outline icopy" data-copy="${x.n} Binti">Tambah “Binti”</button>`;
      }
    }

    function run(){
      const key = el.key.value.trim().toLowerCase();
      const list = data.filter(x=>{
        if(el.gender.value!=="all" && x.g!==el.gender.value) return false;
        if(el.letter.value!=="all" && x.n[0].toUpperCase()!==el.letter.value) return false;
        if(el.len.value!=="any" && lenBucket(x.len)!==el.len.value) return false;
        if(el.style.value!=="any" && x.style!==el.style.value) return false;
        if(el.malay.value==="malay" && !x.malay) return false;
        if(!matchTheme(x, el.theme.value)) return false;
        if(key && !(`${x.n} ${x.mean_ms} ${x.mean_en}`.toLowerCase().includes(key))) return false;
        return true;
      });
      // Shuffle
      for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}
      const max = parseInt(el.max.value,10)||30;
      const sliced = list.slice(0,max);
      render(sliced);
      el.sum.style.display="block";
      el.sum.innerHTML = `<strong>${sliced.length}</strong> nama dipaparkan • Tapisan: <span class="itag">${el.gender.options[el.gender.selectedIndex].text}</span><span class="itag">Huruf: ${el.letter.value==="all"?"Semua":el.letter.value}</span>`;
    }

    function reset(){
      ["ib-gender","ib-letter","ib-length","ib-theme","ib-style","ib-max","ib-key","ib-malay"].forEach(id=>{
        const node = $(id);
        if(node.tagName==="SELECT"){ node.selectedIndex = 0; } else { node.value=""; }
      });
      el.list.innerHTML=""; el.sum.style.display="none";
      history.replaceState({}, "", location.pathname);
    }

    // Permalink
    el.link.addEventListener("click",()=>{
      const q = toParams(); const url = location.origin + location.pathname + "?" + q;
      navigator.clipboard.writeText(url); el.link.textContent="Permalink Disalin"; setTimeout(()=>el.link.textContent="Permalink",900);
      history.replaceState({}, "", "?"+q);
    });

    el.run.addEventListener("click", run);
    el.reset.addEventListener("click", reset);

    // Init from URL
    fromParams(); if(location.search) run();
  })();

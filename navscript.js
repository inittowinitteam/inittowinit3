// Full Credit for this function goes to Joseph Merdrignac
// https://stackoverflow.com/a/37411738
function getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v) n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), v[p]);
    return n
}

document.getElementsByTagName("head")[0].insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="/css/navbar.css">');

// Everything Below this comment was created/thought of/written by Jeremy Bouchier
window.onload = function() {
    loadNavBar();
};

function toggleNavDrawer() {
    document.getElementById("top-nav").classList.toggle("mobile");
}

const tabs = ["Team Profile", "Group Processes", "Career Plans", "Tools", "Project Description", "Skill and Jobs"];

function loadNavBar() {
    const base = make("section", "top-bar", "top-nav");
    let working = document.createElement("a");
    working.href="/";
    
    let svg = getNode('svg');
    svg.setAttributeNS(null, "class", "icon");
    svg.setAttributeNS(null, "id", "logo");
    svg.setAttributeNS(null, "viewBox", "0 0 908.32276 474.58136");

    svg.appendChild(getNode('path', {d:"M856.2257,346.62449V310.45113a7.74181,7.74181,0,0,0-7.74181-7.74181H755.58055a7.74181,7.74181,0,0,0-7.74181,7.74181v36.17336a7.74181,7.74181,0,0,0,7.74181,7.74181h.00026a7.74182,7.74182,0,0,1,7.74182,7.74182v355.783a7.74182,7.74182,0,0,1-7.74182,7.74182h-.00026a7.74181,7.74181,0,0,0-7.74181,7.74181v36.17335a7.74182,7.74182,0,0,0,7.74181,7.74182h7.74208v.00073h77.41943V777.29h7.74183a7.74181,7.74181,0,0,0,7.74181-7.74182V733.37478a7.7418,7.7418,0,0,0-7.74181-7.74181h0a7.74182,7.74182,0,0,1-7.74182-7.74182v-355.783a7.74182,7.74182,0,0,1,7.74182-7.74182h0A7.74181,7.74181,0,0,0,856.2257,346.62449Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M1287.45153,346.62522V310.45187a7.74181,7.74181,0,0,0-7.74181-7.74182H922.03221a7.74182,7.74182,0,0,0-7.74181,7.74182v36.17335a7.74181,7.74181,0,0,0,7.74181,7.74181h132.38723a7.74182,7.74182,0,0,1,7.74181,7.74182v355.7823a7.74182,7.74182,0,0,1-7.74181,7.74182h0a7.74181,7.74181,0,0,0-7.74181,7.74181v36.17335a7.74182,7.74182,0,0,0,7.74181,7.74182h7.74183v.00073h77.41943V777.29h7.74183a7.74182,7.74182,0,0,0,7.74182-7.74182V733.37478a7.74181,7.74181,0,0,0-7.74182-7.74181h0a7.74182,7.74182,0,0,1-7.74182-7.74182V362.10885a7.74182,7.74182,0,0,1,7.74182-7.74182h132.38722A7.7418,7.7418,0,0,0,1287.45153,346.62522Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('rect', {x:916.4516, y:707.29068, width:70, height:70, rx:7.74181, transform:'translate(1314.6135 -511.87024) rotate(90)'}));
    svg.appendChild(getNode('rect', {x:1215.29034, y:707.29068, width:70, height:70, rx:7.74181, transform: "translate(1613.45224 -810.70898) rotate(90)"}));
    svg.appendChild(getNode('path', {d:"M558.49707,328.06954c.20268,6.053-4.2361,10.895-11.2982,10.895a10.55707,10.55707,0,0,1-10.693-10.895,10.81892,10.81892,0,0,1,11.097-11.09624C554.261,316.9733,558.49707,321.81528,558.49707,328.06954ZM538.72522,453.159V355.50864h17.75514V453.159Z", transform:"translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M585.93761,381.93866c0-10.08788-.20123-18.35957-.80639-26.43h15.737l1.00908,16.1409h.40247c4.84271-9.28076,16.1409-18.36029,32.28181-18.36029,13.51759,0,34.49974,8.07045,34.49974,41.56184V453.159H651.30762V396.86852c0-15.737-5.85179-28.85065-22.59785-28.85065-11.70067,0-20.78092,8.27169-23.80671,18.15761a25.54848,25.54848,0,0,0-1.21031,8.27242V453.159H585.93761Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M411.61182,501.39823v28.04426h25.42239v13.51759H411.61182v52.6588c0,12.10532,3.4297,18.96473,13.31635,18.96473a39.50135,39.50135,0,0,0,10.28912-1.21031l.80784,13.31635c-3.42971,1.41228-8.87757,2.42063-15.737,2.42063-8.27241,0-14.93059-2.62259-19.16669-7.46457-5.04394-5.2459-6.86086-13.92151-6.86086-25.42167v-53.264H379.12878V529.44249H394.2606V506.039Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M544.17019,577.46055c0,36.11471-25.01847,51.85169-48.624,51.85169-26.43,0-46.807-19.36865-46.807-50.23745,0-32.68428,21.38608-51.85169,48.42126-51.85169C525.20474,527.2231,544.17019,547.60082,544.17019,577.46055Zm-77.4746,1.00908c0,21.38608,12.30728,37.52626,29.65705,37.52626,16.94874,0,29.65849-15.93822,29.65849-37.93018,0-16.5441-8.271-37.52626-29.25457-37.52626C475.7744,540.53945,466.69559,559.9081,466.69559,578.46963Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M397.28783,665.37634l12.91244,49.6323c2.82454,10.895,5.44786,20.98288,7.26333,31.07076h.60516c2.21939-9.88665,5.44786-20.37772,8.67488-30.8688l15.93967-49.83426h14.92914l15.13182,48.82518c3.63239,11.70212,6.45694,21.99123,8.67633,31.87788h.60516a293.55636,293.55636,0,0,1,7.46457-31.67592l13.92151-49.02714h17.55245l-31.474,97.65036h-16.1409l-14.92914-46.60579a325.76291,325.76291,0,0,1-8.67633-32.07912h-.40248a289.2405,289.2405,0,0,1-8.87757,32.28108l-15.737,46.40383H408.586l-29.45725-97.65036Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M558.49707,637.93724c.20268,6.053-4.2361,10.895-11.2982,10.895a10.55707,10.55707,0,0,1-10.693-10.895,10.81892,10.81892,0,0,1,11.097-11.09624C554.261,626.841,558.49707,631.683,558.49707,637.93724ZM538.72522,763.0267V665.37634h17.75514V763.0267Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('path', {d:"M585.93617,691.80636c0-10.08788-.20124-18.35957-.8064-26.43h15.737l1.00908,16.1409h.40247c4.84271-9.28076,16.14091-18.36029,32.28181-18.36029,13.51759,0,34.49975,8.07045,34.49975,41.56184V763.0267H651.30617V706.73622c0-15.737-5.85179-28.85065-22.59784-28.85065-11.70067,0-20.78093,8.27169-23.80671,18.15761a25.54819,25.54819,0,0,0-1.21032,8.27242v58.7111H585.93617Z", transform: "translate(-379.12878 -302.70932)"}));
    svg.appendChild(getNode('rect', {x:305.54864, y:134.44968, width:16, height: 16, rx:7.99999}));
    svg.appendChild(getNode('rect', {x:305.54864, y:71.05581 , width:16, height: 16, rx:7.99999}));
    svg.appendChild(getNode('rect', {x:305.54864, y:444.31738, width:16, height: 16, rx:7.99999}));
    svg.appendChild(getNode('rect', {x:305.54864, y:380.92351, width:16, height: 16, rx:7.99999}));

    working.appendChild(svg);
    base.appendChild(working);

    working = document.createElement("nav");

    for (let i = 0; i < tabs.length; i++) {
        const s = tabs[i];
        working.appendChild(make("div", "split"));
        let btn = make("a", "btn");
        btn.href = "/page/" + s.replace(" ", "").toLowerCase() +"/";
        if (i==0 || i==4) btn.href+="#overview"
        btn.textContent = s;
        working.appendChild(btn);
    }
    
    working.appendChild(make("div", "split"));
    base.appendChild(working);

    working = document.createElement("a");
    working.href="javascript:void(0);";
    working.setAttribute("onclick", "toggleNavDrawer()");

    svg = getNode('svg');
    svg.setAttributeNS(null, "class", "icon");
    svg.setAttributeNS(null, "id", "navBtn");
    svg.setAttribute("viewBox", "0 0 290 224.32258");

    svg.appendChild(getNode('rect', {width:290, height:20, rx:5.55597}));
    svg.appendChild(getNode('rect', {y:102.16129, width:290, height:20, rx:5.55597}));
    svg.appendChild(getNode('rect', {y:204.32258, width:290, height:20, rx:5.55597}));

    working.appendChild(svg);
    base.appendChild(working);

    document.body.insertBefore(base, document.body.firstChild);
}

function make(type, classname, id) {
    let element = document.createElement(type);
    element.className = classname;
    element.id = id;
    return element;
}
